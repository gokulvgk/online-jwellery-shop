import ReactDOM from 'react-dom';
const overlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    zIndex: 999, 
  };
const div = {
    position: 'fixed',
    backgroundColor: 'white',
    padding: '15px 15px 35px 15px',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #f0e9e9ff',
    width: "20%",
    height:"20%",
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',    
    
};
export default function Modal({children}) {

    return ReactDOM.createPortal(
        <div style = {overlay}>
            <div style = {div}>{children}</div>
        </div>,document.getElementById('modal')
    );
}
