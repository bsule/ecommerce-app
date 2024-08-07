import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./components/NavbarComponent";
import Container from 'react-bootstrap/Container';
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';
import LoginCheck from './components/user/LoginCheck';
import ItemDetailPage from './components/items/ItemsDetailPage';
import BuyNowPage from './pages/BuyNowPage';

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
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;