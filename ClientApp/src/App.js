import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout, OPSFooter, OPSHeader } from './components/Layout';
import './custom.css';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <OPSHeader></OPSHeader>
                <Layout>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                    </Routes>
                </Layout>
                <OPSFooter></OPSFooter>
            </div>
        );
    }
}
