//https://es.reactjs.org/docs/components-and-props.html
//https://www.w3schools.com/react/react_props.asp
//React Props are like function arguments in JavaScript and attributes in HTML.
import React, { Fragment } from 'react'

const OrderSummary = (props) => {

    return (

        < Fragment >
                <li>{props.name.itemName} $ {props.name.price}</li>
        </Fragment >


    )
}

export default OrderSummary;
