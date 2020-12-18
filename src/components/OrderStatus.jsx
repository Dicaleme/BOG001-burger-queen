import React, { Fragment } from 'react'
import { db } from "../firebase";
import { Link } from "react-router-dom";
import '../css/kitchen.css';
import Swal from 'sweetalert2'

//https://es.reactjs.org/docs/hooks-state.html
//React hooks are a new way to access the core features of react such as state without having to use classes
const Kitchen = () => {
  const [tasks, setTasks] = React.useState([])
  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await db.collection('orders').orderBy("date", "asc").get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        let filterData = arrayData.filter(arrayData => arrayData.status === "ready")
        setTasks(filterData)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])



  const editStatus = async (id) => {

    try {
      await db.collection('orders').doc(id).update({
        status: "Delivered",
        deliveryTime: new Date().toLocaleTimeString()
      })
    } catch (error) {
      console.log(error)
    }
    //https://www.youtube.com/watch?v=NDASIexWyhU&t=2s
    //https://sweetalert2.github.io/#download
    //npm install sweetalert2
    Swal.fire({
      title: 'Delivered!',
      text: 'Bill send to the counter  ', icon: 'success', confirmButtonText: 'Ok'
    })
  }

  //https://es.reactjs.org/docs/fragments.html
  //Fragments allow to add a list of children without adding extra nodes to the DOM
  return (
    <Fragment>
      <div className="btn-group">
        <Link to="/menu" className="btn btn-danger">Menu</Link>
        <Link to="/kitchen" className="btn btn-warning">Kitchen</Link>
        <Link to="/orderstatus" className="btn btn-success">Orders Status</Link>
      </div>
      <div className="statusBox">
        <h3>To Deliver</h3>
        {
          tasks.map(item => (            
              <div className="orderInfo">
                <p>Entry : {item.time}</p>
                <p>Delivery : {item.deliveryTime}</p>
                <p>Client : {item.client}</p>
                <span  >
                  <h5>Delivered Order</h5>
                  {item.order.map(elemento => (
                    <li key={item.id}> {elemento.itemName} ${elemento.price}  </li>

                  ))
                  }
                </span>
                <p>Total : $ {item.total}</p>
                <button value={item.id} onClick={() => editStatus(item.id)} className="btn btn-success">
                  Finish</button>
              </div>
          ))
        }
      </div>
    </Fragment >
  )
}
export default Kitchen;

