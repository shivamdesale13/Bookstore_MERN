import React from "react";

function Checkout() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Checkout</h1>
        <p className="text-gray-600 text-center mb-6">
          Complete your purchase by providing the necessary details below.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="text-gray-700 font-medium">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="card" className="text-gray-700 font-medium">UPI / PayPal ID</label>
            <input
              type="text"
              id="card"
              name="card"
              className="mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
