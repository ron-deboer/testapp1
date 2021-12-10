import PubSub from '../services/PubSub';
import Snackbar from '../components/snackbar';

function Home(props) {
    const signin = () => {
        PubSub.emit(PubSub.topic.SHOW_SNACKBAR, 'Sign In Success ...');
    };
    return (
        <>
            <div class="no-margin is-full-screen bg-blue text-center">
                <h1 class=" text-white">HOME</h1>
                <div class="flex-container">
                    <form class="card col-6" style="padding: 40px; margin-top: 120px;">
                        <header class="is-left">
                            <h4>Login</h4>
                        </header>
                        <input class="col-12" placeholder="username" />
                        <input class="col-12" placeholder="password" type="password" />
                        <footer class="is-right">
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
