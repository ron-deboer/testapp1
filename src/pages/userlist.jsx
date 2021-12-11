import { For } from 'solid-js';
import { Link } from 'solid-app-router';
import userStore from '../stores/userstore';
import DataTable from '../components/datatable';

function Userlist(props) {
    const { users, addUser, loadUsers } = userStore;

    return (
        <div class="is-full-screen text-center">
            <h1 class="">USER LIST</h1>
            <DataTable data={users()} />
            <p>
                <button
                    class="button btn"
                    onClick={() => {
                        userStore.loadUsers();
                    }}
                >
                    RELOAD USERS
                </button>
                <Link href="/" class="button btn">
                    HOME
                </Link>
            </p>
        </div>
    );
}

export default Userlist;
