import { createSignal } from 'solid-js';

export default function FormField(props) {
    const [errorMsg, setErrorMsg] = createSignal('');
    const origValue = props.value;

    const validate = (value) => {
        let errors = [];
        if (props.isrequired && value == '') {
            errors.push('Entry is required');
        }
        if (props.minlength && value.trim().length < parseInt(props.minlength)) {
            errors.push('Min length is ' + props.minlength);
        }
        if (errors.length === 0) {
            setErrorMsg('');
        } else {
            setErrorMsg(errors.join(' ... '));
        }
    };

    return (
        <div class="form-field">
            <div class="label" htmlFor={props.name}>
                {props.label}
            </div>
            <input
                class=""
                type={props.name === 'password' ? 'password' : 'text'}
                id={props.name}
                name={props.name}
                value={props.value}
                placeholder={props.label}
                class="form-field"
                isrequired={props.isRequired}
                minlength={props.minLength}
                errors={errorMsg()}
                onblur={function (ev) {
                    validate(ev.target.value);
                }}
            />
            {errorMsg() !== '' ? <div class="error-msg">{errorMsg()}</div> : null}
        </div>
    );
}
