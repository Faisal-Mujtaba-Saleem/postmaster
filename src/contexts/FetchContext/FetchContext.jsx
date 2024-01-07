import React, { createContext, useEffect, useState } from 'react'

export const FetchContext = createContext();

export const FetchContextProvider = (props) => {
    // STATES 

    // GET/POST URL 
    const [URL, setURL] = useState("");

    // GET request related states
    const [requestType, setRequestType] = useState("GET");
    const [queryFormat, setQueryFormat] = useState("string");
    const [userRawQueryString, setuserRawQueryString] = useState("");
    const [queryParams, setQueryParams] = useState([{ key: "", value: "" }]);
    const [queryString, setQueryString] = useState('');

    // POST request related states
    const [contentType, setContentType] = useState("text/plain");
    const [JSON_Format, setJSON_Format] = useState("string");
    const [textContent, setTextContent] = useState("");
    const [JSON_String, setJSON_String] = useState("");
    const [JSON_Params, setJSON_Params] = useState([{ key: "", value: "" }]);

    // Individual States 
    const [codeString, setCodeString] = useState('Your response will appear here');

    // GET request related stuff 
    const simplifiedQueryParams = queryParams.map((queryParameter, index) => {
        return {
            [queryParameter.key]: queryParameter['value']
        }
    });

    const stringifiedQueryParamsArrays = simplifiedQueryParams.map((queryParameterObj) => {
        return Object.keys(queryParameterObj).map((parameterKey) => {
            return `${encodeURIComponent(parameterKey)}=${encodeURIComponent(queryParameterObj[parameterKey])}`
        })
    })

    let userCustomParamsQueryString = stringifiedQueryParamsArrays.map((queryParameterArray) => {
        return queryParameterArray.concat();
    });
    userCustomParamsQueryString = userCustomParamsQueryString.join('&');

    useEffect(() => {
        queryFormat === "string" ? setQueryString(userRawQueryString) : setQueryString(userCustomParamsQueryString);
        // eslint-disable-next-line
    }, [queryFormat])


    const testGetUrl = async () => {
        try {
            let GET_HeadersList = {
                "Accept": "*/*"
            }

            let GET_Response;
            if (!!userRawQueryString) {
                GET_Response = await fetch(`${URL}?${queryString}`, {
                    method: requestType,
                    headers: GET_HeadersList
                });
            }
            else {
                GET_Response = await fetch(URL, {
                    method: requestType,
                    headers: GET_HeadersList
                });
            }

            let GET_Data = GET_Response.json();
            setCodeString('Please wait... Fetching Response...');
            setCodeString(
                JSON.stringify(await GET_Data, null, 1)
            );
        } catch (error) {
            console.error(error);
        }
    }

    // POST request related stuff 
    const simplifiedJSON_Params = JSON_Params.map((JSON_Parameter, index) => {
        return {
            [JSON_Parameter.key]: JSON_Parameter['value']
        }
    });

    let mergedJSON_Params = {};
    simplifiedJSON_Params.forEach(JSON_ParameterObj => {
        mergedJSON_Params = { ...mergedJSON_Params, ...JSON_ParameterObj };
    });

    const JSON_Content = JSON_Format === 'string' ? JSON_String : JSON.stringify(mergedJSON_Params);

    const testPostUrl = async () => {
        try {
            const POST_HeadersList = {
                "Accept": "*/*",
                "Content-Type": contentType
            }

            const bodyContent = contentType === "text/plain" ? textContent : JSON_Content;

            let POST_GET_Response = await fetch(URL, {
                method: requestType,
                body: bodyContent,
                headers: POST_HeadersList
            });

            let POST_Data = POST_GET_Response.json();
            setCodeString('Please wait... Fetching Response...')
            setCodeString(
                JSON.stringify(await POST_Data, null, 1)
            );
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <FetchContext.Provider value={{
            URL, setURL,
            requestType, setRequestType,
            queryFormat, setQueryFormat,
            userRawQueryString, setuserRawQueryString,
            queryParams, setQueryParams,
            contentType, setContentType,
            textContent, setTextContent,
            JSON_Format, setJSON_Format,
            JSON_String, setJSON_String,
            JSON_Params, setJSON_Params,
            testGetUrl, testPostUrl,
            codeString
        }}>
            {props.children}
        </FetchContext.Provider>
    )
}


