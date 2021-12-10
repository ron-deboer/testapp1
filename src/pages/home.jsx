import { useNavigate } from 'solid-app-router';
import PubSub from '../services/PubSub';
import Snackbar from '../components/snackbar';

function Home(props) {
    const navigate = useNavigate();

    const signin = () => {
        PubSub.emit(PubSub.topic.SHOW_SNACKBAR, 'Sign In Success ...');
        setTimeout(() => {
            // navigate('/userlist', { replace: true });
        }, 3000);
    };
    return (
        <>
            <div class="no-margin is-full-screen bg-blue text-center">
                <h1 class=" text-white">HOME</h1>
                <div class="flex-container">
                    <form class="card col-6" style="padding: 40px; margin-top: 120px;">
                        <header class="is-left" style="padding-left: 10px;">
                            <h4>Login</h4>
                        </header>
                        <input class="col-12" placeholder="email" />
                        <input class="col-12" placeholder="password" type="password" />
                        <footer class="is-right" style="padding-right: 10px;">
                            <a class="button clear">Sign Up</a>
                            <a class="button primary" onClick={signin}>
                                Sign In
                            </a>
                        </footer>
                    </form>
                </div>
            </div>
            <footer class="is-center">eXpress - Ron deBoer - Melbourne, Australia</footer>
            <Snackbar />
        </>
    );
}
export default Home;
