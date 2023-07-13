import * as React from "react";
import swal from "sweetalert"
import { useState } from "react";
import { TOKEN_KEY, apiService } from "../services/api-service";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const data = { name, email, password };
    const nav = useNavigate();

    const handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        apiService("/auth/register", "POST", data)
            .then(token => {
                swal("Welcome Aboard!", "Your account is now registered.", "success");
                localStorage.setItem(TOKEN_KEY, token);
                nav('/books');
            })
            .catch(error => swal("Oops!", `${error.message}`, "error"));
    };

    return (
        <div>
            <div>
                <h1>Register Your Account!</h1>
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <input className="form-control" id="username" type="username" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input className="form-control" id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleRegistration}>Register</button>
            </div>
        </div>
    );
};

export default Register;