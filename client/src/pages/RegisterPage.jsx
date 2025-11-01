import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/LoginPage.module.css"; 

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setError(data.message || "Registration failed.");
                return;
            }
            setSuccess("Account created successfully! Redirecting to login...");
            
            setTimeout(() => navigate("/login", { replace: true }), 1500);

        } catch (err) {
            console.error(err);
            setError("Network error. Please try again.");
        }
    };

    const handleLogin = () => navigate("/login", { replace: false });

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Register</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        autoComplete="username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        autoComplete="new-password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={styles.input}
                        autoComplete="new-password"
                    />

                    {error && <div className={styles.error}>{error}</div>}
                    {success && (
                        <div
                            className={styles.error}
                            style={{ background: "#e6ffe6", color: "#2b9348" }}
                        >
                            {success}
                        </div>
                    )}

                    <button type="submit" className={styles.button}>
                        Register
                    </button>

                    <br />
                    <br />

                    <button
                        type="button"
                        onClick={handleLogin}
                        className={`${styles.button} ${styles.secondaryBtn}`}
                    >
                        Back to Login
                    </button>
                </form>
            </div>
        </div>
    );
}
