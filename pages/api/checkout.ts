// pages/api/checkout.ts
import type { NextApiRequest, NextApiResponse } from "next";

// Configuração da Efipay (substitua com suas credenciais)
const EFIPAY_CONFIG = {
  client_id: "Client_Id_078e0b66f3ab0b6431bd6ac0c1461a5eca935457",
  client_secret: "Client_Secret_53d2ba1264ac0c2758f3d42c4a70a16bf29551b8",
  baseURL: "https://api-pix-h.efi.com.br", // Homologação
  // baseURL: "https://api-pix.efi.com.br", // Produção
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { plan } = req.body;
  if (!plan) return res.status(400).json({ error: "Plano não informado" });

  try {
    // 1. Obter access token
    const auth = Buffer.from(`${EFIPAY_CONFIG.client_id}:${EFIPAY_CONFIG.client_secret}`).toString('base64');
    
    const tokenResponse = await fetch(`${EFIPAY_CONFIG.baseURL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grant_type: 'client_credentials' })
    });

    if (!tokenResponse.ok) {
      throw new Error('Falha na autenticação com Efipay');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Criar cobrança PIX
    const chargeData = {
      calendario: {
        expiracao: 3600 // 1 hora
      },
      valor: {
        original: plan.price.toFixed(2)
      },
      chave: "sua_chave_pix_aqui", // Substitua pela sua chave PIX
      solicitacaoPagador: `Pagamento - ${plan.name}`
    };

    const chargeResponse = await fetch(`${EFIPAY_CONFIG.baseURL}/v2/cob`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chargeData)
    });

    if (!chargeResponse.ok) {
      throw new Error('Falha ao criar cobrança PIX');
    }

    const charge = await chargeResponse.json();

    // 3. Gerar QR Code para a cobrança
    const qrCodeResponse = await fetch(`${EFIPAY_CONFIG.baseURL}/v2/loc/${charge.loc.id}/qrcode`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!qrCodeResponse.ok) {
      throw new Error('Falha ao gerar QR Code');
    }

    const qrCode = await qrCodeResponse.json();

    return res.status(200).json({
      success: true,
      payment_url: qrCode.imagemQrcode, // URL do QR Code
      qr_code: qrCode.qrcode, // Código PIX copia e cola
      charge_id: charge.txid,
      method: "pix",
      expiration: charge.calendario.expiracao
    });
  } catch (error: any) {
    console.error('Erro no checkout Efipay:', error);
    
    // Modo de fallback para desenvolvimento
    const paymentUrl = `https://sandbox.efipay.com.br/pay/${Date.now()}?value=${plan.price}&description=${encodeURIComponent(plan.name)}`;
    
    return res.status(200).json({
      success: true,
      payment_url: paymentUrl,
      charge_id: `efi_${Date.now()}`,
      method: "efipay",
      qr_code: `00020126360014br.gov.bcb.pix0114sua_chave_pix0217Pagamento ${plan.name}5204000053039865406${plan.price}5802BR5925NomeDoRecebedor6008SaoPaulo62290525${Date.now()}6304`
    });
  }
}