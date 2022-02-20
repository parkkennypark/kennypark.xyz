import "../style sheets/codeComponent.css";

import { CodeBlock, monokai } from "react-code-blocks";

const CodeComponent = ({ caption, code }) => {
    return (
        <div className="code-div">
            {caption}
            <CodeBlock
                text={code}
                language={"csharp"}
                theme={monokai}
                showLineNumbers={true}
            />
        </div>
    );
};

export default CodeComponent;
