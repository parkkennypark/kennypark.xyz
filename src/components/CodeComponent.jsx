import "../style sheets/codeComponent.css";

// import { CodeBlock, monokai } from "react-code-blocks";
import SyntaxHighligher from "react-syntax-highlighter";
import {
    srcery,
    gruvboxDark,
    defaultStyle,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeComponent = ({
    plain = false,
    language = "csharp",
    caption,
    code,
}) => {
    return (
        <div className="code-div">
            {caption}
            <SyntaxHighligher
                language={language}
                style={plain ? defaultStyle : gruvboxDark}
                showLineNumbers="true"
            >
                {code}
            </SyntaxHighligher>
        </div>
    );
};

export default CodeComponent;
