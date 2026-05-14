import { motion } from "framer-motion";

export const LoadingSpinner = () => (
  <motion.div
    style={{
      width: 50,
      height: 50,
      border: "5px solid #f3f3f3",
      borderTop: "5px solid #3498db",
      borderRadius: "50%",
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);
