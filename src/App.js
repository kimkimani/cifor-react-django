import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { isAuthenticated } from './apis/apis';
import { Nav } from './component/Nav';
import {  Unauthorized } from './component/Unauthorized';
import routes from "./routes";
import { useNavigate } from "react-router-dom";
import { Home } from './component/Home';
export const App = () => {
   
// console.log()
    return(
        <BrowserRouter>
           <Nav/>
         
   
   <Routes>
{
    routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.component/>}
        />
    ))
}

   </Routes>


            
        </BrowserRouter>
    )
    
}

export default App