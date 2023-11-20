import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts , {loader as postsLoader}from "./routes/posts";
import "./index.css";
import NewPost,{action as NewPostAction} from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Table from "./components/Table/table";
import PostDetails,{loader as postDetailsLoader } from "./routes/PostDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: "/",element: <Posts /> ,loader: postsLoader,children:[
        {path: "/create-post",element: <NewPost/>,action: NewPostAction},
        {path: "/:id", element: < PostDetails/>,loader: postDetailsLoader}
      ]},
      
    ]
  },
  {
    path: 'table',
    element : <Table/>
  }
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
