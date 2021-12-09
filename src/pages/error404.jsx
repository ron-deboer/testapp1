import { Link } from 'solid-app-router';

function Error404(props) {
    return (
        <div class="no-margin is-full-screen bg-error text-white text-center">
            <div class="">
                <h1 class="">ERROR 404</h1>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>
                    <Link href="/" class="button  outline text-white">
                        HOME
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Error404;
