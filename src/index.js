import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
//components
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Cadastro from './components/Cadastro.js';
import Header from './components/Header.js';
import Dashboard from './components/auth/Dashboard.js';
//redux
import Produtos from "./components/Produtos.js";
import { Provider } from 'react-redux/es/exports.js';
import { store, persirtor } from './reducers/login/store.js';
//rotas protegidas
import AuthMiddleware from './utils/AuthMiddleware.js';
import ProtectLoginPage from './utils/ProtectLoginPage.js';// --> Prevenir que o usuário acesse a página de login de novo depois de logado

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <PersistGate loading={null} persistor={persirtor}>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/hardware/produtos" element={<Produtos />} />
            <Route element={<ProtectLoginPage />}>
              <Route path="/login" element={<Login />} exact />
            </Route>
            <Route element={<AuthMiddleware />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  )
}

root.render(
  <App />
);