import { Link } from 'solid-app-router';

function Home(props) {
    return (
        <div class="no-margin is-full-screen bg-blue text-white text-center">
            <div class="">
                <h1 class="">HOME</h1>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <Link href="/userlist" class="button  outline text-white">
                        USER LIST
                    </Link>
                </p>
            </div>
        </div>
    );
}
4;
export default Home;
