import React from 'react';
import './Carrer.css'; // Import your CSS file for styling

const Carrer = () => {
    return (
        <>
    <h3 className='edu-heading'>Education</h3>
        <section id="Education" >
            
            <div className="flex-container">

                <div className="flex-container">
                    <ul>
                        <li>Year: 2022</li>
                        <li>Std: 10th</li>
                        <li>At Saint Mary's High School</li>
                        <li>Percentage: 97.5%</li>
                    </ul>
                </div>

                <div className="flex-container">
                    <ul>
                        <li>Year: 2024</li>
                        <li>Std: 12th</li>
                        <li>At Royal Higher Secondary School</li>
                        <li>Percentage: 98.02%</li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
};

export default Carrer;

