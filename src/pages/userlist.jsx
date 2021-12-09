import { For } from 'solid-js';
import { Link } from 'solid-app-router';
import userStore from '../stores/userstore';

function Userlist(props) {
    const { users, addUser, loadUsers } = userStore;

    return (
        <div class="is-full-screen bg-teal text-white text-center">
            <h1 class="">USER LIST</h1>
            <div class="grid-container">
                <For each={users()}>
                    {(user) => {
                        return <div class="grid-cell">{user.name}</div>;
                    }}
                </For>
            </div>
            <p>
                <button
                    class="button outline text-white"
                    onClick={() => {
                        userStore.loadUsers();
                    }}
                >
                    RELOAD USERS
                </button>
                <Link href="/" class="button  outline text-white">
                    HOME
                </Link>
            </p>
        </div>
    );
}

export default Userlist;
