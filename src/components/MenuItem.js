import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <Link className='nav-item' to={props.path} onClick={props.clickHandler}>
        {props.title}
    </Link>
)