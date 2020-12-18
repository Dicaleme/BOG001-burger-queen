import React, { Fragment } from "react";
import "../css/index.css";
import data from "../menu/menu.json";
import OrderSummary from "./OrderSummary";
import { db } from "../firebase"

//https://es.reactjs.org/docs/hooks-state.html
//React hooks are a new way to access the core features of react such as state without having to use classes
const Breakfast = (props) => {
  const [totalPrice, setTotalPrice] = React.useState([]);
  const [add, setAdd] = React.useState([]);
  let [sum] = React.useState();
  const [pending] = React.useState("Pending")

  //Item's price
  const ticket = (e) => {
    const cost = e.target.value;
    const itemPrice = parseInt(cost);

    //Item's price sum
    totalPrice.push(itemPrice)
    setTotalPrice([...totalPrice])

    //Item's name
    const itemName = e.target.name;

    //Grand total
    add.push(
      {
        "itemName": itemName,
        "price": itemPrice
      }
    );
    setAdd([...add]);

  };

  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date/now
  //Add exact time with method Date.now()
  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date/toLocaleTimeString
  //Add exact time with language preference with method Date().toLocaleTimeString()
  //Add to firestore
  const addFirebase = async (e) => {
    e.preventDefault()
    try {
      const newOrder = {
        client: props.clientName,
        order: add,
        total: sum,
        date: Date.now(),
        status: pending,
        time: new Date().toLocaleTimeString()


      }
      const data = await db.collection("orders").add(newOrder);
    } catch (error) {
      console.log(error)
    }
    setAdd([]);
    setTotalPrice([]);


  }

  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce
  // acc = accumulator, el = current element value
  sum = totalPrice.reduce((acc, el) => acc + el, 0);

  //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice
  //Position where the value is located
  const deleted = (e) => {

    const position = e.target.value;
    add.splice(position, 1)
    setAdd([...add])
    totalPrice.splice(position, 1)

  }

  //https://es.reactjs.org/docs/fragments.html
  //Fragments allow to add a list of children without adding extra nodes to the DOM
  let BreakfastMenu = data.BreakfastMenu;
  return (
    <Fragment>
      <div className="mainContainer">
        <div className="breakfast">
          <div className="leftContainer">
            {BreakfastMenu.map((element, i) => {
              return (
                <div key={i} className="food">
                  <p>
                    <img src={element.img} alt="" />
                  </p>
                  <p key={i}>{element.name} ${element.price} </p>
                  <button onClick={ticket} value={element.price} name={element.name} className="btn btn-success btn-lg">Add</button>
                </div>
              );
            })
            }
          </div>
          
          <div className="rigthContainer">
            <h3>Current Order</h3>
            {
              add.map((element, i) => {
                return (
                  <ul key={element.id} className="order" >
                    <button onClick={deleted} name={element} value={i} className="btn btn-danger btn-sm">x</button><OrderSummary name={element} />
                  </ul>
                )
              })
            }
            <h6>Total= ${sum}</h6>
            <div className="btnSubmit">
              <button className="btn btn-success btn-lg" type="submit" onClick={addFirebase} >
                Send
            </button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Breakfast;