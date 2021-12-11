import { createSignal } from 'solid-js';

export default function FormField(props) {
    const [errorMsg, setErrorMsg] = createSignal('');
    let origValue = null;

    return (
        <div style={{ 'margin-bottom': '10px', 'font-weight': 400 }}>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                name={props.name}
                value={props.value}
                placeholder={props.label}
                style={{ color: '#aaa', 'font-weight': 400 }}
                onblur={function (ev) {
                    if (props.isRequired) {
                        setErrorMsg('testing testing');
                    }
                }}
                onfocus={function (ev) {
                    if (origValue !== null) {
                        origValue = ev.target.value;
                    }
                }}
            />
            {errorMsg() !== '' ? <div class="error-msg">error: {errorMsg()}</div> : null}
        </div>
    );
}
