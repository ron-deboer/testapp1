import { createSignal, createRoot, onMount } from 'solid-js';
import UserRepository from '../repositories/UserRepository';

function userStore() {
    const [users, setUsers] = createSignal([]);

    onMount(() => {
        loadUsers();
    });

    const loadUsers = (users) => {
        if (!users) {
            UserRepository.fetchAllUsers().then((data) => {
                setUsers(data);
            });
        }
    };

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    return { users, addUser, loadUsers };
}

export default createRoot(userStore);
