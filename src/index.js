import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import postReducer from "./store/reducers/postReducer";
import albumReducer from "./store/reducers/albumReducer";
import todoReducer from "./store/reducers/todoReducer";
import userReducer from "./store/reducers/userReducer";
import thunk from "redux-thunk";

const mailReducer = combineReducers({
  postState: postReducer,
  albumState: albumReducer,
  todoState: todoReducer,
  userState: userReducer,
});

const store = createStore(mailReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
