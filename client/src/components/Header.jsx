export default function Header({title}) {
const h1 = {
  fontSize: "4rem",
  display: "inline-block",
  color: "rgba(250, 204, 21, 1)",
  textShadow: "0 0 2px rgba(250, 204, 21, 1)",
};

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
        position: "sticky",
        top: "0",
}

    const container = title === "Your Cart" ? {...div, maxWidth: '70%'} : div;
    
    return (
        <div style = {container}>
            <h1 style = {h1}>{title}</h1>
        </div>
    );
}