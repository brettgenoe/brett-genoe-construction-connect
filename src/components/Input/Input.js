import "./Input.scss";
import { useAuth } from "../AuthContext/AuthContext";

function Input({ label, id, placeholder, name, type, value, className, onChange }) {
    return (
        <div className="field">
            <label id={id} className="field__label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                className={`field__input  ${className} `}
                value={value}
                onChange={onChange} />
        </div>
    );
}

export default Input;
