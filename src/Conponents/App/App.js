import { Link, Routes, Route } from 'react-router-dom';
import style from './App.module.scss';
import Shop from '../Shop/Shop';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className={style.App}>
      <header>
        <Link to='/'>Shop</Link>
        <Link to='/shoppingCart'>Shopping Cart</Link>
      </header>
      <Routes>
        <Route path='/*' element={<Shop />} />
        <Route path='/shoppingCart' element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
