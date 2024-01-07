import React from 'react'
import Display from '../components/Display'
import Form from '../components/Form'

const Home = (props) => {

    return (
        <div className="container">
            <div className='my-form my-5 '>
                <Form buttonStyles={props.buttonStyles} />
            </div>
            <div className="display">
                <Display />
            </div>
        </div>
    )
}

export default Home
