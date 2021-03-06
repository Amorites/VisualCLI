import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import App from "./containers/App";
import "./app.global.css";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
const store = configureStore();

render(
    <Provider store={store}>
        <App></App>
        {/*<Router history={history} routes={routes} />*/}
    </Provider>,
    document.getElementById('root')
);
