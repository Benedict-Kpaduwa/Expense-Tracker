import React from 'react'
import ReactDOM from "react-dom";
import {SpeechProvider} from "@speechly/react-client";
import {Provider} from "./context/context";

import App from "./App";
import "./index.css"

ReactDOM.render(
    <SpeechProvider appId="f70d9350-f2d4-4e13-ad65-3b36db274fe2" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
)
