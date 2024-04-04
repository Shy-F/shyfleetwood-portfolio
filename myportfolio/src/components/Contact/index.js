import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Layout from '../Layout'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
    <>
    <Layout />
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I can be contacted via email at fleetwoodshybreasia@gmail.com

                    I can also be reached via phone at (513)259-5196
                </p>
            </div>
        </div>
        <Loader type='pacman' />
    </>
    )
}

export default Contact