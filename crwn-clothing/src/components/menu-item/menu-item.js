import React from 'react'
import { withRouter } from 'react-router-dom'

import './menu-item.scss'

const MenuItem = ({title,imageUrl,id,size,history,match,linkUrl}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        className="background-image"></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Show Now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);