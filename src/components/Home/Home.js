import React from 'react';
import './Home.css';
import profile from '../../assets/profile.png';

const Home = () => {
    return (
        <section id='home'>
            <div className="home-text">
                <strong>Hello! its me</strong>
                <h1>Mahenoor Salat</h1>
                <p>In this portfolio, you'll discover the creative world of Development, where Coding and Designing come together. So, join me on a journey! Reach out to me now!</p>
                <p className='btn-link'> Scroll For Me</p>
               
                <div>
                    <a href="https://github.com/mahenoorsalat" target="_blank" rel="noopener noreferrer" className='btn-link'>
                        My Upwork <i className="fa-brands fa-upwork"></i>
                    </a>
                </div>
                <br />
                <div>
                    <a href="https://www.linkedin.com/in/mahenoor-salat-381a23304/" target="_blank" rel="noopener noreferrer" className='btn-link'>
                        My LinkedIn <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div><br />
                <div>
                    <a href="https://github.com/mahenoorsalat" target="_blank" rel="noopener noreferrer" className='btn-link' >
                        My GitHub <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <div className="home-img">
                <div className="img-box">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </section>
    );
};

export default Home;
