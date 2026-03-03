'use client';
import React, { useState } from 'react';
import { Form, Input } from 'antd';

import TextArea from 'antd/es/input/TextArea';
const FormOrder = ({ setStep, setData }: any) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const onFinish = (values: any) => {
    setData(values);
    setStep(2);
  };

  return (
    <div className="border">
      <Form {...formItemLayout} onFinish={onFinish} className="p-5">
        <Form.Item
          label="Họ và tên (*)"
          name="name"
          rules={[{ required: true, message: 'Họ và tên là bắt buộc!' }]}
        >
          <Input placeholder="Nhập tên của bạn ..." />
        </Form.Item>
        <Form.Item
          label="Địa chỉ (*)"
          name="address"
          rules={[
            { required: true, message: 'Địa chỉ nhận hàng là bắt buộc! ' },
          ]}
        >
          <Input placeholder="Nhập địa chỉ nhận hàng ..." />
        </Form.Item>
        <Form.Item
          label="Số điện thoại (*)"
          name="phone"
          rules={[{ required: true, message: 'Số điện thoại là bắt buộc!' }]}
        >
          <Input placeholder="Nhập số điện thoại ..." />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Nhập số Email ..." />
        </Form.Item>
        <Form.Item label="Ghi chú" name="note">
          <TextArea placeholder="Nhập các ghi chú cho đơn hàng ..." />
        </Form.Item>
        <div className="flex w-full justify-center">
          <button
            type="submit"
            className="py-2  px-10 duration-300 cursor-pointer text-white bg-main border-main uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
          >
            Tiếp tục
          </button>
        </div>
      </Form>
    </div>
  );
};

export default FormOrder;
