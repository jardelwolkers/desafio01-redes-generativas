import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <Link to="/esqueci-minha-senha" className="forgot-password-link">
        Esqueci minha senha
      </Link>
      {redirectToProducts && <Navigate to="/products" />}
    </div>
  );
};

// Product page component
const ProductPage = () => {
  const products = [
    { image: 'image1.webp', description: 'ImgCreator.ai batman car with shrek', price: '$10' },
    { image: 'image2.webp', description: 'ImgCreator.ai bmw car in front of the 66 route', price: '$15' },
    { image: 'image3.webp', description: 'ImgCreator.ai ferrari car in front of the beach', price: '$20' },
    { image: 'image4.webp', description: 'ImgCreator.ai fusca car in front of the pao de acucar', price: '$30' },
    { image: 'image5.webp', description: 'ImgCreator.ai pink truck with woman driving a little bit angry', price: '$100' },
    { image: 'image6.webp', description: 'ImgCreator.ai manufacturing car industry', price: '$40' },
    // Add more products with image, description, and price here
  ];

  return (
    <div className="container products">
      <h2>Products</h2>
      <div className="image-list">
        {products.map((product, index) => (
          <div className="product" key={index}>
            <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={`Product ${index + 1}`} />
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
// Forgot password page component
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Add this line

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    toast.success('O link para redefinição foi enviado para o endereço informado');

    setEmail('');
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="container">
      <h2>Esqueci minha senha</h2>
      <input type="email" placeholder="E-mail" value={email} onChange={handleEmailChange} required />
      <button onClick={handleResetPassword}>Redefinir a senha</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/esqueci-minha-senha" element={<ForgotPasswordPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};


export default App;
