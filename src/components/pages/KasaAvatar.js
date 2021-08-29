import "../../style sheets/kasaAvatar.css";
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "kasa avatar maker/Build/Build.loader.js",
    dataUrl: "kasa avatar maker/Build/Build.data",
    frameworkUrl: "kasa avatar maker/Build/Build.framework.js",
    codeUrl: "kasa avatar maker/Build/Build.wasm",
});

const KasaAvatar = () => {
    return (
        <div className="container">
            <Unity className="unity-window" unityContext={unityContext} />
        </div>
    );
};

export default KasaAvatar;
