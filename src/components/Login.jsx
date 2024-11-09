import React from 'react';

const LoginForm = () => {
  // Inline styles
  const containerStyle = {
    backgroundImage: 'url("src/assets/background.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const formContainerStyle = {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '200px',
    height: 'auto',
    objectFit: 'cover',
    marginBottom: '0px',
  };

  const inputStyle = {
    width: '95%',
    height: '40px',
    padding: '10px',
    marginBottom: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#dddada',
  };

  const buttonStyle = {
    width: '150px',
    padding: '10px',
    backgroundColor: '#E9861B',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#4cae4c', // Hover color
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <img src="src/assets/agromind.png" alt="Logo Agromind AI" style={logoStyle} />
        <h2 className="text-center text-[#E9861B]">Mari Bertenak Bersama Agromind AI</h2>
        <form action="#" method="POST">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Alamat E-mail"
            required
            style={inputStyle}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            style={inputStyle}
          />
          <div className="flex justify-between">
          <div class="flex justify-center">
              <a href="/hasil" class="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]">
                  Buat Akun
              </a>
          </div>
            <div class="flex justify-center">
              <a href="/src/index.html" class="bg-[#362B0E] text-white py-2 px-4 rounded hover:bg-[#1f1808]">
                  Login
              </a>
          </div>
          </div>
          <p className="text-center">
            <a href="#">Lupa kata sandi Anda?</a>
          </p>
          <p className="text-center">
            <a href="#">Daftar untuk Pengguna Baru</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;