import React, { useState } from "react";
import logo from "../assets/agromind.png";
import google from "../assets/session/google.png"
import facebook from "../assets/session/facebook.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div className="flex items-center justify-center min-h-screen bg-green-100">
        <div className="absolute inset-0 flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}>
          {/* Gambar sapi dan background dapat diganti sesuai kebutuhan */}
        </div>
        <div className="relative z-10 w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <div className="text-center">
            <img src={logo} alt="Logo Agromind AI" className="mx-auto w-100 h-24 mb-4" />
            <h2 className="text-2xl font-semibold text-orange-600">AGROMIND AI</h2>
            <p className="text-sm font-medium text-gray-600">Mari Beternak Bersama Agromind</p>
          </div>
          <div className="mt-6">
            <div className="flex justify-center text-gray-600 mb-4">
              <a href="/register" className="mr-4 font-semibold text-gray-500 border-b-2 hover:border-orange-600">Daftar</a>
              <button className="border-b-2 border-orange-600 font-semibold text-orange-600">Masuk</button>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Alamat Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">Atau</p>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="p-2 bg-gray-100 rounded-full shadow-md">
                <img src={google} alt="Google" className="w-6 h-6" />
              </button>
              <button className="p-2 bg-gray-100 rounded-full shadow-md">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-between mt-6">
              <a href="/" className="w-1/2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-center">Kembali</a>
              <a href="/" className="w-1/2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg ml-2 text-center">Masuk</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;