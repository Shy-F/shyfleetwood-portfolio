import './index.scss'
import { useEffect, useState } from 'react';
import Layout from '../Layout';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return ( 
        <>
        <Layout />
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                </h1>
                <div className='text-para'>
                    <p>
                        I am a bootcamp graduate earning my Full-Stack flex coding certificate from The Ohio State University College of Engineering. 
                     </p>
                    <p>
                        I've worked on many projects using modern development tools and practices such as HTML5, CSS3, Sass, JavaScript, Web APIs, Node, Express, SQL/NoSQL, ORM, MVC, my personal favorite React, software development life cycle, GitHub, and Heroku. I also have an understanding and ability to demonstrate core agile principles of collaboration, prioritization, and team accountability.
                     </p>
                    <p>
                         My confidence and ambition to continuously learn and become an expert in many languages and processes makes me a great addition to any forward progressing team and/or company. 
                    </p>
                    <p>
                        If asked to described myself in one sentence it would be well-organized mom of two beautiful daughters, space enthusiast, art/design fanatic and tech lover.
                    </p>
                </div>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#2e170e" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#2e170e" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#2e170e" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#2e170e" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#2e170e" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNodeJs} color="#2e170e" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About