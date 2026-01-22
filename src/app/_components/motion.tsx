import { motion } from "framer-motion";

type TextoAnimadoProps = {
  texto: string;
  className?: string;
};

export function TextoAnimado({ texto, className }: TextoAnimadoProps) {
  return (
    <motion.div
      className={`${className} overflow-hidden inline-block`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {texto}
    </motion.div>
  );
}
