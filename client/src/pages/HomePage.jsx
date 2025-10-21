import { useEffect } from "react";
import ItemList from "../components/ItemList";
import Header from "../components/Header";
import ToCartButton from "../components/ToCartButton";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    const isLoggedIn = Boolean(sessionStorage.getItem("loggedInUser"));

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login",{replace: true});
        }
    }, [isLoggedIn, navigate]);

    if (!isLoggedIn) return null; 

    return (
        <div>
            <Header title="Gokul's glitters" />
            <ToCartButton />
            <ItemList />
        </div>
    );
}