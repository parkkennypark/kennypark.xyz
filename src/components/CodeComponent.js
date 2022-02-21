import "../style sheets/codeComponent.css";

// import { CodeBlock, monokai } from "react-code-blocks";
import SyntaxHighligher from "react-syntax-highlighter";
import {
    srcery,
    gruvboxDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeComponent = ({ caption, code }) => {
    return (
        <div className="code-div">
            {caption}
            {/* <CodeBlock
                text={code}
                language={"csharp"}
                theme={monokai}
                showLineNumbers={true}
            /> */}
            <SyntaxHighligher
                language="csharp"
                style={gruvboxDark}
                showLineNumbers="true"
            >
                {code}
            </SyntaxHighligher>
        </div>
    );
};

export default CodeComponent;
