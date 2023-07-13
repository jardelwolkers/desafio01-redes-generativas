import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css'; // Import the CSS file for styling

// Login page component
const LoginPage = () => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [redirectToProducts, setRedirectToProducts] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleEntrarClick = () => {
    if (nome !== '' && senha !== '') {
      setRedirectToProducts(true);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={handleNomeChange} required />
      <input type="password" placeholder="Senha" value={senha} onChange={handleSenhaChange} required />
      <button onClick={handleEntrarClick}>Entrar</button>
      <Link to="/esqueci-minha-senha" className="forgot-password-link">Esqueci minha senha</Link>
      {redirectToProducts && <Navigate to="/products" />}
    </div>
  );
};

// Product page component
// Product page component
const ProductPage = () => {
  const products = [
    { image: 'image1.webp', description: 'ImgCreator.ai  batman car with sherek ', price: '$10' },
    { image: 'image2.webp', description: 'ImgCreator.ai  bmw car in front of the 66 route', price: '$15' },
    { image: 'image3.webp', description: 'ImgCreator.ai  ferrari car in front of the beach', price: '$20' },
    { image: 'image4.webp', description: 'ImgCreator.ai  fusca car in front of the pao de acucar', price: '$30' },
    { image: 'image5.webp', description: 'ImgCreator.ai  pink truck with woman driving a little bit angry', price: '$100' },
    { image: 'image6.webp', description: 'ImgCreator.ai  manufacturing car industry', price: '$40' },
    // Add more products with image, description, and price here
  ];

  return (
    <div className="container products">
      <h2>Products</h2>
      <div className="image-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={`/images/${product.image}`} alt={`Product ${index + 1}`} />
            <div className="product-details">
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// Forgot password page component
const ForgotPasswordPage = () => {
  return (
    <div className="container">
      <h2>Esqueci minha senha</h2>
      {/* Forgot password form and other components */}
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/esqueci-minha-senha" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
};

export default App;
