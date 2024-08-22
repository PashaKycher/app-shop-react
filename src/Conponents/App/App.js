import { Link, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Shop from '../Shop/Shop';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Link to='/app-shop-lesson/'>Shop</Link>
        <Link to='/app-shop-lesson/shoppingCart'>Shopping Cart</Link>
      </header>
      <Routes>
        <Route path='/app-shop-lesson/*' element={<Shop />} />
        <Route path='app-shop-lesson/shoppingCart' element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
