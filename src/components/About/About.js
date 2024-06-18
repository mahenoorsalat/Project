

import React from 'react'
import webImage from '../../assets/webdev.png'
import design from '../../assets/design.png'
import editor from '../../assets/edit.png'
import './About.css'

const About = () => {
    
  return (
    <section id='about'>
        <h3 className='about-head'>Overview</h3>
        <div className="flex-container">
            <div>
                <h3 className='head-about'>Web Development</h3>
            Web Development,Proficient in HTML, CSS ,  JavaScript , CSS Tailwind , React js , Next js to build responsive and dynamic websites. Skilled in both designing and developing that are user-friendly and aesthetically pleasing. As a Front-end Developer, I thrive on the creative process of turning ideas into visually stunning and interactive digital experiences. With a strong foundation in we development technologies and a passion for clean, efficient code, I am dedicated to crafting engaging user interfaces that seamlessly blend form and function. Constantly seeking to stay updated with the latest industry trends and best practices, I am committed to delivering high-quality solutions that exceed expectations and drive user satisfaction.
            </div>
            <div>
            <img src={webImage} alt="Development" />
            </div>
        </div>

        <div className="flex-container">
            <div>
                <h3 className='head-about'>Designer</h3>
                Logo Design, I can boost your company’s brand identity by designing a unique and memorable logo. I can also make application design that are able to eye catch the customer as I have the experience of it. as a UI / UX Designer I can create a user - centered design approach , I craft visually stunning and intuitively functional interfaces that enhance user experience and drive engagement,ensuring your digital product not only looks amazing but also perform seamlessly
            </div>
            <div>
            <img src={design} alt="Development" />
            </div>
        </div>

        <div className="flex-container">
            <div>
                <h3 className='head-about'>Vedio Editor</h3>
                Video Editing,Expertise in creating visually appealing video content that captures attention. I have the capacity to increase your views by making mesmerizing vedios. As a meticulous editor with a keen eye for detail, I will transform your manuscript into a polished , compelling masterpiece that resonates with your audience and stands out in the marketplace
            </div>
            <div>
            <img src={editor} alt="Development" />
            </div>
        </div>
    </section>
  )
}

export default About


