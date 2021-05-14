import React from 'react'
import Dashboard from './Dashboard'
import { Redirect, Route, Switch,useHistory } from "react-router-dom";
function Logout()
{
    const history = useHistory();
    
    
    return(
       
        <div>
       {history.push("./SignInSide")}

            {/* <switch>{ window.localStorage.clear()}
            <Redirect from="/"  to="/admin/dashboard" />
                <Route path="/admin/dashboard" component={Dashboard} />
            </switch> */}
        </div>        
       
       
    )
}
export default Logout;