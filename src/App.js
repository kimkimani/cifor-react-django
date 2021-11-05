import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Nav } from './component/Nav';
import routes from "./routes";
export const App = () => {

    return(
        <BrowserRouter>
           <Nav/>
            <Routes >
             
    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
              </Routes>
        </BrowserRouter>
    )
    
}

export default App