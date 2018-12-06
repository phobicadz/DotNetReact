import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Clock from './components/Clock';
import RandomUsers from './components/RandomUsers';
import Example from './components/Example';
import Stocks from './components/Stocks';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
    <Route path='/clock' component={ Clock } />
    <Route path='/randomUsers' component={ RandomUsers } />
    <Route path='/example' component={ Example } />
    <Route path='/stocks' component={ Stocks }/>
</Layout>;
