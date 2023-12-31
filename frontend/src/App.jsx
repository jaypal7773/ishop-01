import React from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Main from './Context/Main';
import Home from './Pages/Website/Home';
import AdminMain from './Pages/Admin/Main'
import Dashboard from './Pages/Admin/Dashboard';
import CategoryAdd from './Pages/Admin/Category/Add';
import CategoryView from './Pages/Admin/Category/View';
import EditCategory from './Pages/Admin/Category/Edit';
import ViewColor from './Pages/Admin/Colour/View';
import EditColor from './Pages/Admin/Colour/Edit';
import ColorAdd from './Pages/Admin/Colour/Add';
import AddProduct from './Pages/Admin/Product/Add';


function App() {
  const routes = createBrowserRouter(
    [
      {
        path:'/',
        element:<Main/>,
        children:[
          {
            path:"/",
            element:<Home/>
          },
        ]
      },
      {
        path:"/admin",
        element:<AdminMain/>,
        children:[
          {
            path:"",
            element:<Dashboard/>
          },
          {
            path:"/admin/category/add",
            element:<CategoryAdd/>
          },
          {
            path:"/admin/category/view",
            element:<CategoryView/>
          },
          {
            path:"/admin/category/edit/:id",
            element:<EditCategory/>
          },
          {
            path:"/admin/color/coloradd",
            element:<ColorAdd/>
          },
          {
            path:"/admin/color/colorview",
            element:<ViewColor/>
          },
          {
            path:"/admin/color/edit/:id",
            element:<EditColor/>
          },
          {
            path:"/admin/product/productadd",
            element:<AddProduct/>
          }
        ]
      }
    ]
    
  )
  
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App;

