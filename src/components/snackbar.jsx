import { createSignal, onCleanup } from 'solid-js';
import PubSub from '../services/PubSub';

export default function Snackbar() {
    const [message, setMessage] = createSignal();

    const showSnackbar = (type, msg) => {
        let x = document.getElementById('snackbar');
        if (msg.type === 'error') {
            x.classList.replace('hide', 'show-error');
        } else if (msg.type === 'success') {
            x.classList.replace('hide', 'show-success');
        } else {
            x.classList.replace('hide', 'show');
        }
        setMessage(msg.text);
        setTimeout(function () {
            x.classList.remove('show', 'show-error', 'show-success');
            x.classList.add('hide');
        }, 2000);
    };

    PubSub.on(PubSub.topic.SHOW_SNACKBAR, showSnackbar);

    onCleanup(() => PubSub.off(PubSub.topic.SHOW_SNACKBAR, showSnackbar));

    return (
        <div id="snackbar" class="is-full-width hide">
            {message}
        </div>
    );
}
