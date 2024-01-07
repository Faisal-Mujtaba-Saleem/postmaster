import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useContext } from 'react';
import { FetchContext } from '../contexts/FetchContext/FetchContext';

const Display = () => {
    // Contexts 
    const { codeString } = useContext(FetchContext);

    return (
        <>
            <div className="code-container">
                <CopyToClipboard text={codeString} >
                    <i className="fa-regular fa-copy fa-1x copy-button"></i>
                </CopyToClipboard>
                <SyntaxHighlighter language="javascript" style={dark} showLineNumbers={true}>
                    {codeString}
                </SyntaxHighlighter>
            </div >
        </>
    );
};
export default Display
