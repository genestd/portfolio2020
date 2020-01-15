import React from 'react'
import Header from '../components/Header'
import './blog.scss'
import data from './blogdata'

export default () => {

    return (
        <>
            <div className='blog-container' id='blog-container'>
                <Header containerId='blog-body'>
                    My Blog
                </Header>
                <div className='blog-body' id='blog-body'>
                    {data.map(entry => {
                        return <div key={entry.created}>
                            <div className='blog-titleblock'>
                                <span className='blog-title'>{entry.title}&nbsp;</span>
                                <span className='blog-author'>by {entry.author}&nbsp;</span>
                                <span className='blog-date'>{entry.created}</span>
                            </div>
                            <div className='blog-teaser'>
                                {entry.intro}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}