import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import CartIcon from '../cart-icon/cart-icon'
import CardDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Header = ({currentUser,hidden}) => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/shop" className="option">
                    Contact
                </Link>
                {
                    currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
                }
                <CartIcon/>
            </div>
            {
                hidden ? null :
                <CardDropdown/>
            }
        </div>
    )
}

const mapStateToProps = state => createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
