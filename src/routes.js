import React from 'react'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

const history = createBrowserHistory()

const Routes = () => {

    const routesList = [
        {
            name: "login",
            path: "/login",
            component: <Login />,
        },
        {
            name: "home",
            path: "/",
            component: <Home />,
        },
    ]
    
    console.log(routesList);

    return (
        <>
        <Router history={history}>
            <Header />
            <Switch>
                {
                    routesList.map((route, x) => {
                        return (
                            <>
                                {
                                    route.name !== "login" ??
                                    <Header key={route.name + 'header' + x} />
                                }
                                <Route 
                                    key={route.name} 
                                    path={route.path}
                                    element={route.component}
                                />
                                {
                                    route.name !== "home" ??
                                    <Footer key={route.name + 'footer' + x} />
                                }
                            </>
                        )
                    })
                }
            </Switch>
		</Router>
        </>
    )
}

export default Routes
