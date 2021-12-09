import { Routes, Route } from 'solid-app-router';

import Header from './components/header';
import Userlist from './pages/userlist';
import Error404 from './pages/error404';
import Home from './pages/home';

function App() {
    return (
        <div>
            <Header name="hardanger" />
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/userlist" element={Userlist} />
                <Route path="/*all" element={Error404} />
            </Routes>
        </div>
    );
}

export default App;
