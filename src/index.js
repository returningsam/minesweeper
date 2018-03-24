import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import AppContainer from "./containers/AppContainer";
import {INITIAL_STATE} from "./constants";
import "./index.css";

const store = createStore(rootReducer,INITIAL_STATE);
 
render (
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById("root")
);
