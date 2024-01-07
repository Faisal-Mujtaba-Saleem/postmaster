import React from 'react'

const About = () => {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">About Get/Post Requests Testing App</h1>
            <p>
                Welcome to the Get/Post Requests Testing App! This application allows you to test and explore different aspects of GET and POST requests.
            </p>
            <p>
                Here's how you can use the app:
            </p>
            <ul>
                <li>Start by entering the URL you want to test.</li>
                <li>Choose the request type (GET or POST).</li>
                <li>
                    If it's a GET request:
                    <ul>
                        <li>Decide whether you want to provide the query separately or include it in the URL.</li>
                        <li>Choose the query format (raw query string or custom query parameters) if you wantto provide the query separately.</li>
                        <li>Enter the query accordingly.</li>
                    </ul>
                </li>
                <li>
                    If it's a POST request:
                    <ul>
                        <li>Choose the content type (Text or JSON).</li>
                        <li>
                            If Text:
                            <ul>
                                <li>Enter the text content.</li>
                            </ul>
                        </li>
                        <li>
                            If JSON:
                            <ul>
                                <li>Choose between raw JSON or JSON parameters.</li>
                                <li>Enter the JSON content accordingly.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Click "Send Request" to see the results!</li>
            </ul>
            <p>
                This app is designed to help you understand and test various aspects of making HTTP requests. Have fun exploring!
            </p>
        </div>
    )
}

export default About
