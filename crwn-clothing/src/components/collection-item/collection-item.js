import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../redux/cart/cart.action'

import './collection-item.scss'

const CollectionItem = ({item ,addItem}) => {
const { name, price, imageUrl} = item
    return (
        <div className="collection-item">
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="image" />
            <div className="collection-footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
