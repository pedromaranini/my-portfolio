import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Repositories } from './pages/Repositories';

export function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/repo" component={Repositories} />
        </BrowserRouter>
    );
}