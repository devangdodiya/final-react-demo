import React from 'react'
import Dashboard from './Dashboard'
import SignInSide from './SignInSide'
import { Redirect, Route, Switch,useHistory } from "react-router-dom";
function Logout()
{
    const history = useHistory();
    
    
    return(
       
        <div>
 

            <switch>{ window.localStorage.clear()}
            <Redirect from="/"  to="/auth/Login" />
                <Route path="/auth/Login" component={SignInSide} />
            </switch>
        </div>        
       
       
    )
}
export default Logout;