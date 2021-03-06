import React from 'react'
import MenuItem from './MenuItem'
import './menu.scss'

export default props => (
    <div className='nav-menu'>
        {props.menuitems.map(item => <MenuItem
            key={item.path}
            title={item.title}
            path={item.path}
            clickHandler={props.clickHandler}
        />)}
    </div>
)