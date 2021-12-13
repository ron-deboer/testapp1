import { Routes, Route } from 'solid-app-router';

import Header from './components/header';
import Userlist from './pages/userlist';
import Error404 from './pages/error404';
import Home from './pages/home';
import AddUser from './pages/AddUser';
import Snackbar from './components/snackbar';

function App() {
    return (
        <div>
            <Header name="diamond" />
            <Snackbar />
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/userlist" element={Userlist} />
                <Route path="/adduser" element={AddUser} />
                <Route path="/*all" element={Error404} />
            </Routes>
        </div>
    );
}

export default App;
