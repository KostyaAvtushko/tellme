import { InputProps } from "./Input.props";


function Input (props: InputProps) {
    const { value, label, onInput, placeholder, className, type, maxLength, onFocus, onBlur } = props;

    return ( 
        <div className="input__wrapper">
            <p>{label}</p>
            <input 
                placeholder={placeholder}
                className={(className || "")}
                type={type}
                value={value}
                onInput={onInput}
                maxLength={maxLength}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </div>
    )
}

export default Input;