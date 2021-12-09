import { Link } from 'solid-app-router';

export default function Header(props) {
    return (
        <nav class="nav bg-header no-margin">
            <div class="nav-left">
                <Link href="/" class="logo text-white text-uppercase">
                    {props.name}
                </Link>
            </div>
            <div class="nav-right">
                <Link href="/" class="text-white">
                    Home
                </Link>
                <Link href="/userlist" class="text-white">
                    User List
                </Link>
                <Link href="/signup" class="text-white">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}
