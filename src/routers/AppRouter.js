import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from '../components/Footer';
import FormSubmitterApp from '../components/FormSubmitterApp';
import Header from '../components/Header';
import Page404 from '../components/Page404';
import PageSubmitted from '../components/PageSubmitted';

// This is the projects titles, change to fit needs
const headerTitle = 'Form Submitter';
const footerTitle = 'Created by Adam Miller-Kirk';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header title={headerTitle} />
            <Switch>
                <Route path="/" component={FormSubmitterApp} exact={true} />
                <Route path="/postedForms" component={PageSubmitted} />
                <Route component={Page404} />
            </Switch>
            <Footer title={footerTitle} />
        </div>
    </BrowserRouter>
);


export default AppRouter;