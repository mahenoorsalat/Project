import React from 'react';
import './Projects.css';
import Project1 from '../../assets/Project1.png';
import Project2 from '../../assets/Project1.png';

const Projects = () => {
    const data = [
        {
            src: Project1,
            url: "https://mahenoorsalat.github.io/Project-1/"
        }
        
      
    ];
    const data1 = [
            {
                src1: Project2,
                url1: "https://mahenoorsalat.github.io/Project-1/"
            }
        ]
    return (
     <>
        <section id="Projects">
            <div  >
                <h3 className='Project-heading'><b>Recent Project</b></h3>
            </div>
           <div className="project-recent">
           {data.map(project => (
                <a href={project.url} key={project.url}> {/* Add key for each item in map */}
                    <img className='image' src={project.src} alt="project" />
                    <p className='white'><a href="https://mahenoorsalat.github.io/Project-1/" className='white'>Click me , <br /> I am project 1</a></p>
                    <div className="p-overlayer">
                        <strong>Outserved Reports</strong>
                    </div>
                </a>
                
            ))}
            {data1.map(project => (
                <a href={project.url1} key={project.url1}> {/* Add key for each item in map */}
                    <img className='image' src={project.src1} alt="project" />
                    <p className='white'><a href="https://mahenoorsalat.github.io/Project-1/" className='white'>Click me , <br /> I am project 2</a></p>
                    <div className="p-overlayer">
                        <strong>Outserved Reports</strong>
                    </div>
                </a>
                
            ))}
           </div>
          
            
        </section>
         <div className='github'>
                <a href="file:///C:/Users/salat/Downloads/Mahenoor's%20Resume%20(1).pdf" className='github-button' target='_blank'>
                    Download My CV Now!<i class="fa-solid fa-download"></i></a> 
      
            </div>
            </>
    );
};

export default Projects;
