import React from 'react'
import Display from '../components/Display'
import Form from '../components/Form'

const Home = () => {

    return (
        <div className="container">
            <div className='my-form my-5 '>
                <Form />
            </div>
            <div className="display">
                <Display />
            </div>
        </div>
    )
}

export default Home
