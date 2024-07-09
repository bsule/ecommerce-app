import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from "./components/NavbarComponent";
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home';
import SignupPage from './pages/SignupPage';

import Container from 'react-bootstrap/Container';
import LoginCheck from './components/LoginCheck';
import ItemDetailPage from './components/ItemsDetailPage';

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
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;