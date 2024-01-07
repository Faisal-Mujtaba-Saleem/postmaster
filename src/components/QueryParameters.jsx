import React, { useContext } from 'react'
import { FetchContext } from '../contexts/FetchContext/FetchContext';

const JSONParameters = (props) => {
    // Props De-Structuring 
    const { currentQueryParameter, index } = props;

    // Contexts 
    const { queryParams, setQueryParams } = useContext(FetchContext);

    // Clonnings 
    const currentQueryParameterClone = { ...currentQueryParameter };
    const queryParamsClone = [...queryParams];

    // Event Handelers
    const handleKeyChange = (e) => {
        currentQueryParameterClone.key = e.target.value;

        queryParamsClone[index] = currentQueryParameterClone;
        setQueryParams(queryParamsClone)
    }
    const handleValueChange = (e) => {
        currentQueryParameterClone.value = e.target.value;

        queryParamsClone[index] = currentQueryParameterClone;
        setQueryParams(queryParamsClone)
    }

    const handleClickQueryParameter = (e) => {
        if (e.target.innerText === '+') {
            e.target.innerText = '-';
            setQueryParams(
                [
                    ...queryParams,
                    { key: "", value: "" }
                ]
            )
        } else {
            e.target.innerText = '+';
            setQueryParams(
                queryParams.filter(QueryParameter => QueryParameter !== currentQueryParameter)
            );
        }
    }
    return (
        <>
            <div className="col-md-6">
                <div className="d-flex">
                    <label htmlFor='inputKey' className="input-group-text btn">Parameter. {index + 1}</label>
                    <input type="text" className="form-control" id="inputKey" aria-labelledby="label1 label2" value={currentQueryParameter?.key} onChange={handleKeyChange} />
                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex">
                    <input type="text" className="form-control" id="inputValue" aria-labelledby="label1 label2" style={{
                        width: `80%`
                    }} value={currentQueryParameter?.value} onChange={handleValueChange} />
                    <span className="input-group-text bg-primary text-white btn" onClick={handleClickQueryParameter}>+</span>
                </div>
            </div>
        </>
    )
}

export default JSONParameters;
