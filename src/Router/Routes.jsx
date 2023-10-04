
import {createBrowserRouter} from "react-router-dom"

import Root from "../components/laout/Root"
import Home from "../pages/Home/Home"
import ErroMessage from "../pages/ErroPages/ErroMessage"


 const Routers=createBrowserRouter([

{
   path:'/',
element:<Root> </Root>,
errorElement:<ErroMessage> </ErroMessage>,
   children:[

{
    path:'/',
 element:<Home> </Home>
}

   ]
}

 ])
 export default Routers