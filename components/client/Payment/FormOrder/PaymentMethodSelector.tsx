import React, { useState } from "react";

// 1. Tạo danh sách các phương thức thanh toán để dễ dàng quản lý và mở rộng
const paymentOptions = [
  {
    id: "cash",
    label: "Thanh toán tiền mặt",
    description: "Thanh toán khi nhận hàng (COD)",
  },
  {
    id: "bank_transfer",
    label: "Chuyển khoản ngân hàng",
    description: "Quét mã QR hoặc chuyển khoản thủ công",
  },
  {
    id: "momo",
    label: "Ví MoMo",
    description: "Thanh toán nhanh chóng qua ứng dụng MoMo",
  },
  {
    id: "credit_card",
    label: "Thẻ Tín dụng / Ghi nợ",
    description: "Hỗ trợ thẻ Visa, MasterCard, JCB",
  },
];

const PaymentMethodSelector = () => {
  // 2. State lưu trữ phương thức đang được chọn (mặc định là tiền mặt)
  const [selectedMethod, setSelectedMethod] = useState("cash");

  // Hàm xử lý khi người dùng bấm xác nhận
  const handleConfirm = () => {
    console.log("Phương thức đã chọn:", selectedMethod);
    // Xử lý logic gọi API hoặc chuyển bước tại đây
  };

  return (
    <div className="flex flex-col gap-5 w-full max-w-lg mx-auto p-4">
      <h2 className="text-[25px] font-normal text-gray-800">
        Phương thức thanh toán
      </h2>

      {/* Danh sách các lựa chọn */}
      <div className="flex flex-col gap-3">
        {paymentOptions.map((option) => (
          <label
            key={option.id}
            className={`flex items-start p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
              selectedMethod === option.id
                ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600"
                : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center h-5 mt-0.5">
              <input
                type="radio"
                name="payment_method"
                value={option.id}
                checked={selectedMethod === option.id}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 cursor-pointer"
              />
            </div>
            <div className="ml-3 flex flex-col">
              <span
                className={`text-base font-medium ${selectedMethod === option.id ? "text-blue-800" : "text-gray-900"}`}
              >
                {option.label}
              </span>
              <span className="text-sm text-gray-500 mt-0.5">
                {option.description}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
