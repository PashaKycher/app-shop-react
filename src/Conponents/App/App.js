import { Link, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Shop from '../Shop/Shop';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Link to='/app-shop-react/'>Shop</Link>
        <Link to='/app-shop-react/shoppingCart'>Shopping Cart</Link>
      </header>
      <Routes>
        <Route path='app-shop-react/*' element={<Shop />} />
        <Route path='app-shop-react/shoppingCart' element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
