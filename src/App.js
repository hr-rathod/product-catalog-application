
import Header from './components/header/Header';
import ProductList from './components/product list/ProductList';
import ProductDetail from './components/product detail/ProductDetail';
import * as ReactDOM from 'react-dom'
import {
createBrowserRouter,
RouterProvider
} from "react-router-dom"
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children : [{
      path : "/",
      element: <ProductList/>,
    },
 
  {
    path: "product-detail",
    element: <ProductDetail/>
  }]
  }
])

function App() { 
  return (<RouterProvider router={router}/> );
}

export default App;