"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ArrowRight, Truck, Map, Check } from "lucide-react";
import Link from "next/link";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  // Khóa cuộn trang khi popup mở
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Lớp nền đen mờ (Backdrop) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Click ra ngoài để đóng
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] pointer-events-none flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md bg-white rounded-[2rem] shadow-2xl shadow-brand-blue/20 pointer-events-auto relative overflow-hidden"
            >
              {/* Nút Đóng (Close Button) */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-brand-orange hover:bg-orange-50 transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Background Decor chìm trong popup */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/5 rounded-bl-full pointer-events-none" />
              <Map className="absolute -bottom-10 -left-10 w-48 h-48 text-slate-50 -rotate-12 pointer-events-none z-0" />

              <div className="relative z-10 p-8 pt-10">
                {/* Icon Animation */}
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto relative">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-green-600 rounded-2xl"
                  />
                  <Check className="w-8 h-8 text-brand-orange relative z-10" />
                </div>

                {/* Nội dung */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-extrabold text-brand-blue mb-3">
                    Đã thêm
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Sản phẩm bạn chọn{" "}
                    <strong className="text-brand-orange">
                      đã được thêm vào giỏ hàng
                    </strong>{" "}
                  </p>
                </div>

                {/* Nút hành động chính */}
                <div className="space-y-3">
                  <Link
                    href="/gio-hang"
                    onClick={onClose}
                    className="w-full flex items-center justify-between bg-blue-700 hover:bg-[#0d2342] text-white p-4 rounded-xl font-bold transition-all group shadow-md"
                  >
                    <span className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-brand-orange" />
                      Thanh toán ngay
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={onClose}
                    className="w-full py-4 text-sm font-bold text-slate-500 hover:text-brand-orange transition-colors"
                  >
                    tiếp tục mua sắm
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
