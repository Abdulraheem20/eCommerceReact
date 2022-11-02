import React from 'react'
import '../components/styles/ShoppingCart.css'

const CartTotal = () => {
  return (
    <div>
        <div className="cardss">
        <h3 style={{textAlign: 'center', marginBottom: '20px'}}>Cart Totals</h3>
        <div className="subTotals">
            <h5>Subtotals:</h5>
            <p>‎€219.00</p>
        </div>
        <hr style={{color: '#E8E6F1'}}/> <br />
        <div className="totals">
            <h5>Totals:</h5>
            <p>‎€325.00</p>
        </div>
        <hr style={{color: '#E8E6F1'}}/> <br />
        <small><input type="checkbox" checked />Shipping & taxes calculated at checkout</small> <br />
        <div className="checkout">
            <button className='checkoutBtn'>Proceed To Checkout</button>
        </div>
        </div>
    </div>
  )
}

export default CartTotal