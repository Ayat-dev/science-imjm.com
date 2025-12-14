import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Article from './pages/Article';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import OrderConfirmation from './pages/OrderConfirmation';

function App() {
  return (
    <Router basename="Ayat-dev/science-imjm.com">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/:type" element={<Legal />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
