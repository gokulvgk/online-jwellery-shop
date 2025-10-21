import Item from "../components/Item"
export default function ItemList() {
    const items = ["Gold","Silver","Diamond","Platinum","Sapphire","Brass"];
    const div ={
        maxWidth: "100vw",
        maxHeight: "90vh",
        margin : "20px 0px 0px 0px",
        display: "flex",
        flexDirection: "column",   
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
    }
    return (
        <div style = {div}>
            {items.map(item =><Item key={item} name={item} />)}
         </div>
    );
}