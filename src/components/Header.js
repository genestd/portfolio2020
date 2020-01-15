import React, { useState, useEffect } from 'react'
import './Header.scss'

export default props => {
    const [scrolled, setScrolled] = useState(false)
    const scrollDetector = () => {
        const el = document.getElementById(props.containerId)
        if (el.scrollTop === 0) {
            setScrolled(false)
        } else if (el.scrollTop > 0) {
            setScrolled(true)
        }
    }

    useEffect(() => {
        const el = document.getElementById(props.containerId)
        if (el) {
            el.addEventListener('scroll', scrollDetector)
            return () => el.removeEventListener('scroll', scrollDetector)
        }
    }, [])

    return (
        <div className={`header${scrolled ? '-scrolled' : ''}`}>
            {props.children}
        </div>
    )
}