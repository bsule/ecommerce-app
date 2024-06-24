import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import LoginCheck from "./components/LoginCheck";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import RefreshToken from "./components/RefreshToken";
import NavbarComponent from "./components/NavbarComponent";

function App() {
    return (
        <Router>
            <div>
                <NavbarComponent/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;