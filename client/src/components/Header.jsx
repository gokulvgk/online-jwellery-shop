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
        padding: "15px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.15)",
        border: "1px solid white",
        maxWidth: "60%",
        margin: "0px auto",
        marginTop: "20px",
}
    
    return (
        <div style = {div}>
            <h1 style = {h1}>{title}</h1>
        </div>
    );
}