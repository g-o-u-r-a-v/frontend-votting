import React, { Children } from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Component/Login.jsx'
import Registration from './Component/Registration.jsx'
import Home from './Component/Home.jsx'
import store  from './Store/Store.jsx'
import { Provider } from 'react-redux'
import Updateprofile from './Component/UpdateProfile.jsx'
import UpdatePassword from './Component/UpdatePassword.jsx'
import Vote from './Vote/Vote.jsx'
import AddCandidate from './Component/AddCandidate.jsx'


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/register",
        element: <Registration/>
      },
      {
        path: "/updateprofile",
        element: <Updateprofile/>
      },
      {
        path: "/changepassword",
        element: <UpdatePassword/>
      },
      {
        path: "/vote",
        element: <Vote/>
      },
      {
        path: "/profile",
        element: <Home/>
      },
      {
        path: "/addcandidate",
        element: <AddCandidate/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap RouterProvider with Provider and provide the Redux store */}
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>,
)
