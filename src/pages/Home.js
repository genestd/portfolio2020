import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => (
    <div className='home-container'>
        <section className='section-outer'>
            <span className='pointer'><Link className='nav-item-plain' to='/resume'>WHY?</Link></span>
        </section>
        <section className='section-center'>
            <div>
                <span className='title-cap'>D</span><span className='title'>AVID</span>
                &nbsp;
                <span className='title-cap'>G</span><span className='title'>ENEST</span>
            </div>
            <span className='title-spaced'>FULL STACK DEVELOPER</span>
        </section>
        <section className='section-outer'>
            <span className='pointer'><Link className='nav-item-plain' to='/projects'>WHAT?</Link></span>
        </section>
    </div>
)

export default Home