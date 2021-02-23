import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({isLoggedIn}) => {
    
    //return의 switch case 문으로
    //useState true > Home
    //useState false > Auth
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                <>
                    <Route exact path ="/">
                        <Home />
                    </Route>
                </>
                 ) : (
                <Route exact path ="/">
                     <Auth />
                </Route>)}
            </Switch>
        </Router>
    );
};

export default AppRouter;