export default function Header({title}) {
    const h1={
        fontSize: "4rem",
        display: "inline",
        color: "gold",}
    const div={
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "10px",
        boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddceceff",
        maxWidth: "100%",
}
    
    return (
        <div style = {div}>
            <h1 style = {h1}>{title}</h1>
        </div>
    );
}