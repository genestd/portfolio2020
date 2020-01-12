import React, { useEffect } from 'react'
import data from './resumedata'
import './resume.scss'

export default () => {
    useEffect(() => {
        console.log('resume')
    }, [])

    return (
        <>
            <div className="resume">
                <section class='section'>
                    <div className='resume-name'>{data.name}</div>
                    <div className='resume-details'>
                        <span className='resume-detail'>{data.address}</span>
                        <span className='resume-detail-full'> | </span>
                        <span className='resume-detail'>{data.phone_number}</span>
                        <span className='resume-detail-full'> | </span>
                        <span className='resume-detail'>{data.email}</span>
                    </div>
                    <div className='divider' />
                </section>
                <section className='section'>
                    <div className='section-title'>Summary</div>
                    <div className='section-data'>
                        {data.summary}
                    </div>
                </section>
                <section className='section'>
                    <div className='section-title'>Key Skills</div>
                    <div className='section-data'>
                        <ul>
                        {data.skills.map(skill => {
                            return <li key={skill}>
                                <span className='list-title'>{skill.skill_name}: </span>
                                <span className='list-value'>{skill.skill_value}</span>
                            </li>
                        })}
                        </ul>
                    </div>
                </section>
                <section className='section'>
                    <div className='section-title'>Experience</div>
                    <div className='section-data'>
                        {data.experience.map(job => {
                            return <div>
                                <div className='section-subtitle'>
                                    {job.job_title} - {job.company}, {job.start_date} - {job.end_date}
                                </div>
                                <ul>
                                    {job.job_details.map(detail => <li className='job-detail' key={detail}>{detail}</li>)}
                                </ul>
                            </div>
                        })}
                    </div>
                </section>
                <section className='section'>
                    <div className='section-title'>Education</div>
                    <div className='section-data'>
                        {data.education.map(degree => {
                            return <div key={degree}>
                                <div className='section-subtitle'>
                                    <span className=''>{degree.institution} </span>
                                    <span className=''>{degree.start_year}-</span>
                                    <span className=''>{degree.end_year}</span>
                                </div>
                                <div className='section-detail'>
                                    {degree.degree_name}
                                </div>
                                <div className='section-detail'>
                                    {degree.degree_description}
                                </div>
                            </div>
                        })}
                    </div>
                </section>
                <section className='section'>
                    <div className='section-title'>Profiles</div>
                    <div className='section-data'>
                        <ul>
                            {data.profiles.map(profile => {
                                return (
                                    <li>
                                        <span className='list-title'>{profile.profile_name}: </span>
                                        <span className='list-value'>{profile.profile_url}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}
