import { motion } from "framer-motion";

type ModalBackdropProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export default function ModalBackdrop({ onClose, children }: ModalBackdropProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-[#000000e1] bg-opacity-50 z-40"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}