import { motion, AnimatePresence } from "framer-motion";
import ModalBackdrop from "./ModalBackdrop";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <ModalBackdrop onClose={onClose}>
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="relative bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                  aria-label="Close"
                >
                  &times;
                </button>

                {children}
              </div>              
            </motion.div>
          </ModalBackdrop>
        </>
      )}
    </AnimatePresence>
  );
};