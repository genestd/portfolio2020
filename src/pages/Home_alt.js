import React from 'react'
import { Link } from 'react-router-dom'
import { faAws, faNode, faReact } from "@fortawesome/free-brands-svg-icons"
import { faRobot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Home.scss'

export default () => (
    <div className='full-screen'>
        <div class="center-div">
            <FontAwesomeIcon className='home-avatar' icon={faRobot} />
        </div>
        <div className='full-screen home-top-cover'>WHO</div>
        <div className='full-screen home-left-cover'>WHY</div>
        <div className='full-screen home-bottom-cover' />
        <div className='full-screen home-right-cover'>HOW</div>
        
        <div className='full-screen home-top'>
            <div className='primary-text'>Dave Genest</div>
            <div className='secondary-text'>Full Stack Developer</div>
            <div className='secondary-text'>Lake Oswego, OR</div>
        </div>
        <div className='full-screen home-left'>
            <Link className='nav-item' to='/resume'>
                My resume
            </Link>
        </div>
        <div className='full-screen home-bottom'>
            <div className='left-shape'></div>
            <div className='right-shape'></div>
            <span className='shaped-text'>
            </span>
        </div>
        <div className='full-screen home-right'>
            <FontAwesomeIcon className='home-icon' icon={faReact} />
            <FontAwesomeIcon className='home-icon' icon={faNode} />
            <FontAwesomeIcon className='home-icon' icon={faAws} />
        </div>
    </div>
)