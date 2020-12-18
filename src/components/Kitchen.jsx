import React, { Fragment } from 'react'
import { db } from "../firebase";
import { Link } from "react-router-dom";
import '../css/kitchen.css';
import Swal from 'sweetalert2'


const Kitchen = () => {

    const [tasks, setTasks] = React.useState([]);
    const [ready, setReady] = React.useState(true);

    React.useEffect(() => {

        const getData = async () => {

            try {
                const data = await db.collection('orders').orderBy("date", "asc").get()

                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                let filterData = arrayData.filter(arrayData => arrayData.status === "Pending")
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
                status: "ready",
                deliveryTime: new Date().toLocaleTimeString()
            })
        } catch (error) {
            console.log(error)
        }
        //https://www.youtube.com/watch?v=NDASIexWyhU&t=2s
        //https://sweetalert2.github.io/#download
        //npm install sweetalert2
        Swal.fire({
            title: 'Order Complete!',
            text: 'Ready to deliver', icon: 'warning', confirmButtonText: 'Ok'
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
            <div className="kitchenBox">
                <h3>Current Order</h3>
                {
                    tasks.map(item => (
                        <li className="orderInfo" key={item.id}>
                            <p>Entry : {item.time} </p>
                            <p>Client : {item.client}</p>
                            <span  >
                                <h5>Order :</h5>
                                {item.order.map(elemento => (
                                    <li> {elemento.itemName} </li>
                                ))}</span>
                            <p>Total : $ {item.total}</p>
                            <button className="btn btn-primary" onClick={() => editStatus(item.id)} value={item.id}>{ready ? "Ready" : "Send"}</button>
                        </li>
                    ))

                }
            </div>
        </Fragment>
    )
}

export default Kitchen;