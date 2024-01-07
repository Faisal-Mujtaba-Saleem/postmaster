import React, { useContext } from 'react';
import JSONParameters from './JSONParameters';
import QueryParameters from './QueryParameters';
import { FetchContext } from '../contexts/FetchContext/FetchContext';

const Form = (props) => {
    // Contexts 
    const { URL, setURL } = useContext(FetchContext);
    const { requestType, setRequestType } = useContext(FetchContext);

    // Get requests related contexts
    const { userRawQueryString, setuserRawQueryString } = useContext(FetchContext);
    const { queryParams } = useContext(FetchContext);

    // POST requests related contexts
    const { contentType, setContentType } = useContext(FetchContext);
    const { queryFormat, setQueryFormat } = useContext(FetchContext);
    const { JSON_Format, setJSON_Format } = useContext(FetchContext);
    const { textContent, setTextContent } = useContext(FetchContext);
    const { JSON_String, setJSON_String } = useContext(FetchContext);
    const { JSON_Params } = useContext(FetchContext);
    const { testGetUrl, testPostUrl } = useContext(FetchContext);

    // Event Handlers
    const handleReqTypeChange = (e) => {
        if (e.target.checked) {
            setRequestType(e.target.value);
        }
    }
    const handleQueryFormatChange = (e) => {
        if (e.target.checked) {
            setQueryFormat(e.target.value);
        }
    }
    const handleContentTypeChange = (e) => {
        if (e.target.checked) {
            setContentType(e.target.value);
        }
    }
    const handleJSON_FormatChange = (e) => {
        if (e.target.checked) {
            setJSON_Format(e.target.value);
        }
    }

    const handleSendRequest = (e) => {
        if (requestType === 'GET') {
            testGetUrl();
        } else if (requestType === 'POST') {
            testPostUrl();
        }
    }

    return (
        <>
            <h1>Welcome to postmaster</h1>
            <form className='my-4'>
                <div className="row mb-3">
                    <label htmlFor="inputUrl" className="col-sm-2 col-form-label">URL</label>
                    <div className="col-sm-10">
                        <input type="Url" className="form-control" id="inputUrl" value={URL} onChange={e => setURL(e.target.value)} />
                    </div>
                </div>

                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Request-Type</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" style={props.buttonStyles} type="radio" name="requestType" id="requestType1" value="GET" checked={requestType === 'GET'} onChange={handleReqTypeChange} />
                            <label className="form-check-label" htmlFor="requestType1">
                                GET
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" style={props.buttonStyles} type="radio" name="requestType" id="requestType2" value="POST" onChange={handleReqTypeChange} />
                            <label className="form-check-label" htmlFor="requestType2">
                                POST
                            </label>
                        </div>
                    </div>
                </fieldset>

                <div id='GET-Container' hidden={requestType !== 'GET'}>
                    <fieldset className="row mb-3" >
                        <legend className="col-form-label col-sm-2 pt-0">Query-Format</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="QueryFormat" id="QueryFormat1" value="string"
                                    checked={queryFormat === `string`} onChange={handleQueryFormatChange} />
                                <label className="form-check-label" htmlFor="QueryFormat1">
                                    Raw Query String
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="QueryFormat" id="QueryFormat2" value="Custom Query Params"
                                    onChange={handleQueryFormatChange} />
                                <label className="form-check-label" htmlFor="QueryFormat2">
                                    Custom Query Parameters
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="row mb-3" hidden={requestType !== 'GET' || queryFormat !== `string`}>
                        <label htmlFor="inputQuery" className="col-sm-2 col-form-label" >Raw Query String</label>
                        <div className="col-sm-10">
                            <input type="Url" className="form-control" id="inputQuery" value={userRawQueryString} onChange={e => setuserRawQueryString(e.target.value)} />
                        </div>
                    </div>

                    <div className="row g-3 my-4 mb-5" hidden={requestType !== 'GET' || queryFormat !== `Custom Query Params`}>
                        <div className="input-group mb-3" style={{
                            width: `85%`,
                            margin: `auto`
                        }}>
                            <input type="text" className="form-control border-0 text-center mb-min3%" placeholder="Key" aria-label="Key" />
                            <span className="input-group-text visually-hidden mb-min3%">@</span>
                            <input type="text" className="form-control border-0 text-center mb-min3%" placeholder="Value" aria-label="Value" />
                        </div>
                        {
                            Array.isArray(queryParams) && queryParams.map((queryParameter, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <QueryParameters currentQueryParameter={queryParameter} index={index} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>

                <div id='POST-Container' hidden={requestType !== 'POST'}>
                    <fieldset className="row mb-3">
                        <legend className="col-form-label col-sm-2 pt-0">Content-Type</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="contentType" id="contentType1" value="text/plain" checked={contentType === `text/plain`} onChange={handleContentTypeChange} />
                                <label className="form-check-label" htmlFor="contentType1">
                                    Text
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="contentType" id="contentType2" value="application/json" onChange={handleContentTypeChange} />
                                <label className="form-check-label" htmlFor="contentType2">
                                    JSON
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="row mb-3" hidden={contentType !== 'application/json'}>
                        <legend className="col-form-label col-sm-2 pt-0">JSON-Format</legend>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="JSON_Format" id="JSON_Format1" value="string"
                                    checked={JSON_Format === `string`} onChange={handleJSON_FormatChange} />
                                <label className="form-check-label" htmlFor="JSON_Format1">
                                    Raw JSON String
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" style={props.buttonStyles} type="radio" name="JSON_Format" id="JSON_Format2" value="Custom JSON Params"
                                    onChange={handleJSON_FormatChange} />
                                <label className="form-check-label" htmlFor="JSON_Format2">
                                    Custom JSON Parameters
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <div className="row mb-3" hidden={contentType !== 'text/plain'}>
                        <label htmlFor="inputText" className="col-sm-2 col-form-label">Enter Your Text</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" aria-label="Enter Your Text" id="inputText" value={textContent} onChange={e => setTextContent(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row mb-3" hidden={contentType !== 'application/json' || JSON_Format !== `string`}>
                        <label htmlFor="inputJson" className="col-sm-2 col-form-label">Enter Your JSON</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" aria-label="Enter Your JSON" id="inputJson" value={JSON_String} onChange={e => setJSON_String(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="row g-3 my-4 mb-5" hidden={contentType !== 'application/json' || JSON_Format !== `Custom JSON Params`}>
                        <div className="input-group mb-3" style={{
                            width: `85%`,
                            margin: `auto`
                        }}>
                            <input type="text" className="form-control border-0 text-center mb-min3%" placeholder="Key" aria-label="Key" />
                            <span className="input-group-text visually-hidden mb-min3%">@</span>
                            <input type="text" className="form-control border-0 text-center mb-min3%" placeholder="Value" aria-label="Value" />
                        </div>
                        {
                            Array.isArray(JSON_Params) && JSON_Params.map((JSON_Parameter, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <JSONParameters currentJSON_Parameter={JSON_Parameter} index={index} />
                                    </React.Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <button type="button" className="btn btn-primary mt-4" style={props.buttonStyles} onClick={handleSendRequest}>Send Request</button>
            </form >
        </ >
    )
}

export default Form
