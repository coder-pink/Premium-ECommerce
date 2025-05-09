'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleConfirmOrder = () => {
    clearCart();
    setSuccess(true);
    setStep(1);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg min-h-[500px]">
      <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">Checkout</h1>

      {success ? (
        <div className="text-center space-y-6">
          <p className="text-2xl font-bold text-green-600">✅ Order placed successfully!</p>
          <p className="text-gray-700">Thank you for shopping with us. Your items will be shipped soon.</p>
          <button
            onClick={() => router.push('/products')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Continue Shopping
          </button>

        </div>
      ) : (
        <>
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">Shipping Info</h2>
              <div className="space-y-4">
                <input placeholder="Full Name" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Address" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input placeholder="Phone" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button onClick={next} className="w-full py-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Next</button>
            </div>
          )}

          {/* Step 2: Payment */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">Payment Info</h2>
              <div className="space-y-4">
                <input placeholder="Card Number" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="flex gap-4">
                  <input placeholder="Expiry" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input placeholder="CVV" className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prev} className="w-full py-3 mt-6 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300">Back</button>
                <button onClick={next} className="w-full py-3 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-700">Review & Confirm</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <div>
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center mb-4 text-gray-700">
                      <span>{item.title} x {item.qty}</span>
                      <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-gray-900">Total: ${total.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <button onClick={prev} className="w-full py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-300">Back</button>
                    <button
                      onClick={handleConfirmOrder}
                      className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
