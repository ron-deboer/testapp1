import userstore from '../stores/userstore';
import FormField from '../components/FormField';
import { Link } from 'solid-app-router';

export default function AddUser(props) {
    const { users, addUser, loadUsers } = userstore;

    let user = {
        id: 0,
        name: 'Ron deBoer',
        email: 'deboer@rmail.com',
        address: '123 New Street, Brighton, 3134',
    };
    const onSubmit = async (values) => {};

    return (
        <div class="container">
            <h1>Sign Up</h1>
            <form class="col-4">
                <FormField name="name" value={user.email} label="User Name" isRequired={true} minLength={2} />
                <FormField
                    name="email"
                    value={user.email}
                    label="User Email"
                    isRequired={false}
                    minLength={2}
                />

                <FormField
                    name="address"
                    value={user.address}
                    label="User Address"
                    isRequired={true}
                    minLength={2}
                />
                <button type="submit" onClick={onSubmit} style="margin-top: 20px;">
                    Submit
                </button>
            </form>
            <div class="text-center" style={{ 'margin-top': '50px' }}>
                <Link href="/userlist" class="button btn">
                    USER LIST
                </Link>
            </div>
        </div>
    );
}
