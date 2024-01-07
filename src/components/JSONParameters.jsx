import React, { useContext } from 'react'
import { FetchContext } from '../contexts/FetchContext/FetchContext';

const JSONParameters = (props) => {
    // Props De-Structuring 
    const { currentJSON_Parameter, index } = props;

    // Contexts 
    const { JSON_Params, setJSON_Params } = useContext(FetchContext);

    // Clonnings 
    const currentJSON_ParameterClone = { ...currentJSON_Parameter };
    const JSON_ParamsClone = [...JSON_Params];

    // Event Handelers
    const handleKeyChange = (e) => {
        currentJSON_ParameterClone.key = e.target.value;

        JSON_ParamsClone[index] = currentJSON_ParameterClone;
        setJSON_Params(JSON_ParamsClone)
    }
    const handleValueChange = (e) => {
        currentJSON_ParameterClone.value = e.target.value;

        JSON_ParamsClone[index] = currentJSON_ParameterClone;
        setJSON_Params(JSON_ParamsClone)
    }

    const handleClickJSON_Parameter = (e) => {
        if (e.target.innerText === '+') {
            e.target.innerText = '-';
            setJSON_Params(
                [
                    ...JSON_Params,
                    { key: "", value: "" }
                ]
            )
        } else {
            e.target.innerText = '+';
            setJSON_Params(
                JSON_Params.filter(JSON_Parameter => JSON_Parameter !== currentJSON_Parameter)
            );
        }
    }
    return (
        <>
            <div className="col-md-6">
                <div className="d-flex">
                    <label htmlFor='inputKey' className="input-group-text btn">Parameter. {index + 1}</label>
                    <input type="text" className="form-control" id="inputKey" aria-labelledby="label1 label2" value={currentJSON_Parameter?.key} onChange={handleKeyChange} />
                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex">
                    <input type="text" className="form-control" id="inputValue" aria-labelledby="label1 label2" style={{
                        width: `80%`
                    }} value={currentJSON_Parameter?.value} onChange={handleValueChange} />
                    <span className="input-group-text bg-primary text-white btn" onClick={handleClickJSON_Parameter}>+</span>
                </div>
            </div>
        </>
    )
}

export default JSONParameters;
