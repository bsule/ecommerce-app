import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./components/NavbarComponent";
import LoginCheck from './components/user/LoginCheck';
import ItemDetailPage from './components/items/ItemsDetailPage';
import Container from 'react-bootstrap/Container';
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import BuyNowPage from './pages/BuyNowPage';
import NotFoundPage from './pages/NotFoundPage';
import Savings from './pages/Savings';
import NewTrendingPage from './pages/NewTrendingPage';
import BestSellerPage from './pages/BestSellerPage';
import PhonesPage from './pages/PhonesPage';

function App() {
    return (
        <Router>
            <div>
                <NavbarComponent/>
                <LoginCheck/>
                <Container>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/signup' element={<SignupPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/items/:id' element={<ItemDetailPage/>}/>
                        <Route path='/cart' element={<CartPage/>}/>
                        <Route path='/buy-now' element={<BuyNowPage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                        <Route path='/savings' element={<Savings/>}/>
                        <Route path='/new-trending' element={<NewTrendingPage/>}/>
                        <Route path='/best-sellers' element={<BestSellerPage/>}/>
                        <Route path='/phones' element={<PhonesPage/>}/>
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;