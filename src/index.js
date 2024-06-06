import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Posts from './features/posts/posts';
import Products from './features/products/products';
import Manager from './features/manager/manager';
import Customer from './features/customer/customer';
import Agent from './features/agent/agent';
import ManagerHome from './features/manager/managerhome';
import Agenthome from './features/agent/agentHome';
import AgentForm from './features/agent/agentform';
import DownPayment from './features/agent/agentdownpayment';
import CustomerHome from './features/customer/customerhome';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/posts",
        element: <Posts></Posts>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/manager",
        element: <Manager></Manager>,
        children:[
          {
            path:"/manager/",
            element:<ManagerHome></ManagerHome>
          }
        ]
      },
      {
        path:"/customer",
        element:<Customer></Customer>,
        children:[
          {
            path:"/customer/",
            element:<CustomerHome></CustomerHome>
          }
        ]
      },
      {
        path:"/agent",
        element:<Agent></Agent>,
        children:[
          {
            path:"/agent/",
            element:<Agenthome></Agenthome>
          },
          {
            path:"/agent/addloan",
            element:<AgentForm></AgentForm>
          },
          {
            path:"/agent/downpayment",
            element:<DownPayment></DownPayment>
          }
        ]
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
