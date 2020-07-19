import React from 'react';
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'

import Home from '../../pages/Home'
import Error from '../../pages/Error'
import Account from '../../pages/Account';
import User from '../../pages/User';
import Organization from '../../pages/Organization';
import Event from '../../pages/Event';

export default function Routes() {
    return(
        <>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/auth" component={Account} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/user/:id" component={User} />
                    <Route exact path="/org" component={Organization} />
                    <Route exact path="/org/:id" component={Organization} />
                    <Route exact path="/event" component={Event} />
                    <Route exact path="/event/:id" component={Event} />
                    <Route path="*" component={Error} />
                </Switch>
            </HashRouter>
        </>
    )
}