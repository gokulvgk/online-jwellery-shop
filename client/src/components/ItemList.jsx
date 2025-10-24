import Item from "../components/Item"
export default function ItemList() {
    const items = ["Gold","Silver","Diamond","Platinum","Sapphire","Brass"];
    const div ={
        maxWidth: "100vw",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",   
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
        margin: "0px 40px",
    }
    return (
        <div style = {div}>
            {items.map(item =><Item key={item} name={item} />)}
         </div>
    );
}