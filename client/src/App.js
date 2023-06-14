import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer, DetailsCard, CartCard } from "./component";
import { Home, Books, BookDetails, Cart, Contact, Login, SignUp, ShippingDetails, NotMatch, PaymentOption } from "./pages";
import { Dashboard, ProductTable, ProductForm, CustomerTable, PaymentTable, OrderTable } from './admin/Component';
import AdminPanel from './admin/AdminPanel';

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path='/book/:isbn' element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ShippingDetails" element={<ShippingDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/payment-options" element={<PaymentOption/>} />
            <Route path="/admin/*" element={<AdminPanel />}>
            </Route>
            <Route path='*' element={<NotMatch />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App;
