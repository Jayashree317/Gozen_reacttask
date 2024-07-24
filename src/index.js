import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import ErrorFallback from "./first_5task/task11/main1";
import File from "./first_5task/task14/mainfile";
import { BrowserRouter } from "react-router-dom";
import Task from "./first_5task/task13/main";
import MainRoot from "./first_5task/task12/file3";
import { AuthProvider } from "./first_5task/task12/file1";
// import TodoList from './first_5task/task2/todo';
// import ResponsiveTabs from './first_5task/task1/button';
// import Main from './first_5task/task4/main';
// import InteractiveContent from './first_5task/task3/content';
// import Final from './first_5task/task5/table3';
// import QuizGame from "./first_5task/task6/quizapp";
// import Router_main from "./first_5task/task7/router";
// import ShoppingCart from "./first_5task/task8/shoppingcart";
// import { Provider } from "react-redux";
// import { Store } from "./first_5task/task9/store";
// import App from "./first_5task/task9/main";
// import ErrorBoundary from "./first_5task/task10/error";
// import MainRecipe from "./first_5task/task10/mainrecipe";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       {/* <App/> */}
    {/* <ResponsiveTabs/> */}
    {/* <TodoList/> */}
    {/* <Main/> */}
    {/* <InteractiveContent/> */}
    {/* <Final/> */}
    {/* <QuizGame/> */}
    {/* <Router_main/> */}
    {/* <ShoppingCart/> */}
    {/* <Provider store={Store}>
      <App/>
    </Provider> */}
    {/* <MainRecipe/> */}
    {/* <ErrorFallback/> */}
    {/* <BrowserRouter><File/></BrowserRouter>   */}
    {/* <Task/> */}
    <AuthProvider><MainRoot/></AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
