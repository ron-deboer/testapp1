import { useNavigate } from 'solid-app-router';
import PubSub from '../services/PubSub';

function Home(props) {
    const navigate = useNavigate();

    const signin = () => {
        PubSub.emit(PubSub.topic.SHOW_SNACKBAR, { type: 'success', text: 'Sign in Success ...' });
        setTimeout(() => {
            navigate('/userlist', { replace: true });
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
                        <footer class="is-left" style="padding-left: 10px;">
                            <a class="button primary" onClick={signin}>
                                Sign In
                            </a>
                            <a class="button outline">Sign Up</a>
                        </footer>
                    </form>
                </div>
            </div>
            <footer class="is-center">eXpress - Ron deBoer - Melbourne, Australia</footer>
        </>
    );
}
export default Home;
