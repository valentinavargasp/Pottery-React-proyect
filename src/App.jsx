import './css/main.css'
import { Footer } from './components/Footer'
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from './components/header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from './components/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {


  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:categoryId" element={<ItemListContainer />}/>
    <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
    <Route path="/*" element={NotFound} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}



export default App
