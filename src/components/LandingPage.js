import React from 'react'
import { links, events } from '../dates'
import './LandingPage.css'
import VerticalScrollProgressBar from './VerticalScrollProgressBar'

export default function LandingPage() {
    return (
        <div className='row allofit animated-cursor'>

            <div className="col-auto" style={{ paddingRight: '0' }}>
                <img src="/images/backgroud-mobile-compress.webp" alt="tour-banner" className="img-fluid" style={{ maxHeight: '100vh' }} />
            </div>
            <div className="col bg-img d-flex align-items-center justify-content-start" style={{ backgroundImage: "url('/images/backgroud-ruido-compress.webp')", paddingLeft: '5vw' }}>
                <div>
                    <div className='dates-div'>
                        {events.map((event, index) => (
                            <a key={index} href={event.link} target="_blank" rel="noopener noreferrer">
                                <div className="event">
                                    <p>{event.date}... ... ... ...{event.city}... ... ...{event.venue}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className='row footer align-items-flex-end justify-content-center'>
                        <ul className='list-unstyled d-flex' style={{paddingLeft: '10%'}}>
                            {links.map((link, index) => (
                                <li key={index} >
                                    <a href={link.href} className="footer-link">
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
