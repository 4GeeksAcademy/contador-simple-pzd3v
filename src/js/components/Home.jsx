import React from "react";
import ReactDOM from "react-dom/client"; 


let cont = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));
setInterval(() => {
  cont = cont+1
  root.render(
    <Home/>
  )
}, 1000);

const Card = (props) => { 

  const six = Math.floor(props.seconds / 100000) % 10;
  const five = Math.floor(props.seconds / 10000) % 10;
  const four = Math.floor(props.seconds / 1000) % 10;
  const three = Math.floor(props.seconds / 100) % 10;
  const two = Math.floor(props.seconds / 10) % 10;
  const one = Math.floor(props.seconds / 1) % 10;

  return (
    <div
      className="d-flex bg-black text-white p-4 justify-content-center"
      style={{ fontSize: "3rem", fontWeight: "bold" }}
    >
      <div className="m-1 p-3 border rounded bg-dark">
        <i className="far fa-clock"></i>
      </div>
      <div className="m-1 p-3 border rounded bg-dark">{six}</div>
      <div className="m-1 p-3 border rounded bg-dark">{five}</div>
      <div className="m-1 p-3 border rounded bg-dark">{four}</div>
      <div className="m-1 p-3 border rounded bg-dark">{three}</div>
      <div className="m-1 p-3 border rounded bg-dark">{two}</div>
      <div className="m-1 p-3 border rounded bg-dark">{one}</div>
    </div>
  );
}

//create your first component
const Home = () => {
  return (
    <Card seconds={cont}/>
  );
};
export default Home;
