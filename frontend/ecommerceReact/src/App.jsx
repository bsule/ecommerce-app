import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginCheck from "./components/LoginCheck";
import Logout from "./components/Logout";
import RefreshToken from "./components/RefreshToken";
import NavbarComponent from "./components/NavbarComponent";
import LoginPage from "./pages/LoginPage";
import SignupPage from './pages/SignupPage';

import Container from 'react-bootstrap/Container';

function App() {
    return (
        <Router>
            <div>
                <NavbarComponent/>
                <Container>
                    <Routes>
                        <Route path='/' element={<SignupPage/>}/>
                        <Route path='/signup' element={<SignupPage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;