import React from 'react'
import './Languages.css'

const Languages = () => {
    const data = [
        {
            title:"Languages",
            content:["JavaScript    " , "    HTML   " , "   CSS    ",  "   CSS Tailwind" ,  <br/>  , "      React JavaScript " , " Next JavaScript"]
        },
        
        {
            title:"Skills",
            content:["Designing" , " Web Development" , " Web Designing" , <br /> , " Logo Designing" , " UI / UX Designer" , " Application Designer"]
        }
    ]
  return (
   <section id='languages'>
    {
        data.map(item => (
            <div className="language-box" key={item.title}>
                <h3 className='heading3'>{item.title}</h3>
                <ul className='ul'>
                    {
                        item.content.map(content =>(
                            <li className='li' key={content} >{content}</li>
                        ))
                    }
                </ul>

            </div>
        ))
    }

   </section>
  )
}

export default Languages


