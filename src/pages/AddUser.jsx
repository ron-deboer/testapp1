import userstore from '../stores/userstore';
import FormField from '../components/FormField';
import { Link } from 'solid-app-router';
import PubSub from '../services/PubSub';

export default function AddUser(props) {
    const { users, addUser, loadUsers } = userstore;

    let user = {
        id: '',
        userid: '',
        password: '',
        name: '',
        email: '',
        address: '',
    };
    const form = [
        <FormField name="userid" value={user.userid} label="User Id" isrequired={true} minlength={7} />,
        <FormField name="password" value={user.password} label="Password" isrequired={true} minlength={7} />,
        <FormField name="name" value={user.name} label="Name" isrequired={true} minlength={7} />,
        <FormField name="email" value={user.email} label="Email" isrequired={true} minlength={7} />,
        <FormField
            name="address"
            value={user.address}
            label="User Address"
            isrequired={true}
            minlength={7}
        />,
    ];

    const onSubmit = () => {
        let errors = '';
        form.forEach((field) => {
            field().children[1].focus();
            field().children[1].blur();
            errors += field().children[1].getAttribute('errors');
        });
        if (errors !== '') {
            setTimeout(() => {
                PubSub.emit(PubSub.topic.SHOW_SNACKBAR, {
                    type: 'error',
                    text: 'Fix errors then submit again',
                });
            }, 50);
        } else {
            PubSub.emit(PubSub.topic.SHOW_SNACKBAR, { type: 'success', text: 'Add User Success' });
        }
    };

    return (
        <div class="container col-6" style="margin: 0 auto;">
            <div class="card" style={{ margin: '50px auto', padding: '50px' }}>
                <header>
                    <h4>Sign Up</h4>
                </header>
                <form id="adduserform">
                    <For each={form}>
                        {(field) => {
                            return field;
                        }}
                    </For>
                    <a class="button primary" onClick={onSubmit} style="margin-top: 20px;">
                        Submit
                    </a>
                </form>
            </div>
            <div class="container is-center">
                <Link href="/userlist" class="button btn">
                    USER LIST
                </Link>
            </div>
        </div>
    );
}
