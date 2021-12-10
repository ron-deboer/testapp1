import { createSignal, onCleanup } from 'solid-js';
import PubSub from '../services/PubSub';

export default function Snackbar() {
    const [message, setMessage] = createSignal();

    const showSnackbar = (type, text) => {
        setMessage(text);
        let x = document.getElementById('snackbar');
        x.className = 'show';
        setTimeout(function () {
            x.className = x.className.replace('show', 'hide');
        }, 2000);
    };

    PubSub.on(PubSub.topic.SHOW_SNACKBAR, showSnackbar);

    onCleanup(() => PubSub.off(PubSub.topic.SHOW_SNACKBAR, showSnackbar));

    return <div id="snackbar">{message}</div>;
}
