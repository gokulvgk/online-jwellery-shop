import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/LoginPage.module.css";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        if (!username.trim() || !password) {
            setError("Please enter username and password.");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/login", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!res.status == 302) {
                const data = await res.json().catch(() => ({}));
                setError(data.message || "Login failed.");
                return;
            }

            const data = await res.json().catch(() => ({}));
            sessionStorage.setItem("loggedInUser", username); 
            window.location.href = "/"; 
        } catch (err) {
            setError("Network error. Please try again.");
        }
    };

    const handleRegister = () => navigate("/register", { replace: false });

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        autoComplete="username"
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        autoComplete="current-password"
                    />

                    {error && <div className={styles.error}>{error}</div>}

                    <button type="submit" className={styles.button}>
                        Login
                    </button>
                    <br />
                    <br />
                    <button
                        type="button"
                        onClick={handleRegister}
                        className={`${styles.button} ${styles.secondaryBtn}`}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
