import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Home';

const AppRouter = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
    </BrowserRouter>
);

export default AppRouter;