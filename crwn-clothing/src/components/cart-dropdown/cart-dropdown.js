import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import './cart-dropdown.scss'

const cartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className="cart-tiems">
            {
                cartItems.length ?(
                cartItems.map(item => <CartItem key={item.id} item={item} />))
                :(
                <span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default withRouter(connect(mapStateToProps)(cartDropdown));
