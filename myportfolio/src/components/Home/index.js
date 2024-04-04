import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import Loader from 'react-loaders';
import ProfilePic from '../../assets/images/profile-pic.png';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['h', 'y', 'b', 'r', 'e', 'a', 's', 'i', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return (
        <>
        <Layout />
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>   
                <br /> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Full-Stack Developer</h2>
                <p>Well rounded, ambitious full stack software developer, creative and a strong problem solver with great organizational skills. Articulate and professional communication skills, including formal presentations and technical
                documentation. High intellectual capacity to learn, retain and apply new concepts. Seeking a challenging position where my education and experiences could help me enhance the growth of any company that recognizes hard work,
                professionalism, and high productivity. I also would like to work for an organization that could provide a conducive environment where I could be galvanized to display my organizational skills, attentiveness to detail,
                strong critical thinking, data driven decision-making abilities, and the motivation to work hard and accomplish set goals.</p>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='profile-container'>
               <img className='profile-pic' src={ProfilePic} alt="P" />
             </div>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home