import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '../custom.scss'
import Home from './Home/Home';
import { About } from './About/About';
import { NotFound } from './NotFound/NotFound';
import CharacterProfile from './Characters/CharacterProfile/CharacterProfile';
import Layout from '../hoc/Layout/Layout';

function App() {

  const routes = (
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Character/:id' exact component={CharacterProfile} />
        <Route path='/About' exact component={About} />
        <Route component={NotFound} />
    </Switch>);

  return (
    <Layout>
        <Suspense fallback={<p className="container">Loading...</p>}>
            {routes}
        </Suspense>
    </Layout>    
  );
}

export default App;
