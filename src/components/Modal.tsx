import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white shadow-lg w-11/12 md:w-1/2 p-6">
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        &times;
                    </button>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            {/* Column 1 */}
                            <div>
                                <h2 className="text-xl font-bold mb-1">Invoice</h2>
                                <p className='text-xs'>
                                    No: #MMYYYY0001-01A
                                </p>
                                <div className='mt-4'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-xs text-gray-500'>Order No.</span>
                                        <span className='text-xs text-left'>#MMYYYY0001</span>
                                    </div>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-xs text-gray-500'>Custom (PO)</span>
                                        <span className='text-xs text-left'>PO0000001</span>
                                    </div>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-xs text-gray-500'>Invoice Date</span>
                                        <span className='text-xs text-left'>DD/MM/YYYY</span>
                                    </div>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-xs text-gray-500'>Due Date</span>
                                        <span className='text-xs text-left'>DD/MM/YYYY</span>
                                    </div>
                                </div>

                            </div>

                            {/* Column 2 */}
                            <div>
                                <h2 className="text-xl font-bold mb-1 text-[#e84c3d]">Coso Trip</h2>
                                <p className='text-xs'>
                                    TAX - 33AAGFT9099N2AM
                                </p>
                                <div className='mt-3'>
                                    <p className='text-xs  text-gray-500 mb-2'>
                                        Address line, Street Adress, City Name, State Name, Country -- Pin Code
                                    </p>
                                    <p className='text-xs  text-gray-500'>
                                        username@gmail.com
                                    </p>
                                    <p className='text-xs  text-gray-500'>
                                        +91 9738483748
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div className='mt-5'>
                                <h2 className="text-xs font-bold mb-1">Customer Details</h2>
                                <p className='text-xs  text-gray-500'>
                                    Customer/Business name
                                </p>
                                <p className='text-xs  text-gray-500'>
                                    username@gmail.com
                                </p>
                                <p className='text-xs  text-gray-500'>
                                    +91 9738483748
                                </p>
                            </div>
                            <div className='mt-5'>
                                <h2 className="text-xs font-bold mb-1">Billing Address</h2>
                                <p className='text-xs  text-gray-500 mb-2'>
                                    Address line, Street Adress, City Name, State Name, Country -- Pin Code
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto my-5 border-b border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#fffff9]">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 tracking-wider">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 tracking-wider">
                                        Item Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 tracking-wider">
                                        Tax
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 tracking-wider">
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                                        1
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                                        <div className="flex flex-col">
                                            <span>Himachal Pradesh</span>
                                            <span className="text-gray-500">FSN: AKSFFSDS242SD</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                                        <div className="flex flex-col">
                                            <span>₹250.00</span>
                                            <span className="text-gray-500">18%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                                        ₹250.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='flex justify-end mb-20'>
                        <div className='w-1/2'>
                            <div className='flex justify-between items-center mb-2'>
                                <span className='text-xs text-gray-500'>Custom [Charge]</span>
                                <span className='text-xs text-left'>₹ 100.00</span>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <span className='text-xs text-gray-500'>Subtotal</span>
                                <span className='text-xs text-left'>₹ 28,016.00</span>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <span className='text-xs text-gray-500'>Discount</span>
                                <span className='text-xs text-left'>-₹ 500.00</span>
                            </div>
                            <div className='flex justify-between items-center mb-2'>
                                <span className='text-lg font-bold'>Grand Total</span>
                                <span className='text-lg text-left font-bold'>₹ 27,516.00</span>
                            </div>
                        </div>
                    </div>
                    <div className='mb-2 border-b border-gray-300 py-5'>
                        <span className='text-sm font-medium text-gray-500'>Thank you for doing business with us. Have a good day!</span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xs font-medium text-gray-500'>Proudly crafted in kerala, IN.</span>
                        <span className='text-xs font-medium text-gray-500'>Page 1 of 1</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
