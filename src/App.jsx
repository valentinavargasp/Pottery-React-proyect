import './css/main.css'
import { Footer } from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './components/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Carrito } from './components/Carrito';
import { CartProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';
import { CargarProductos } from './components/CargarProductos';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cargarproductos" element={<CargarProductos />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  )
}



export default App
