import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, RouteComponentProps, Switch, useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '../custom.scss'
import { Navigation } from './UI/Navigation/Navigation';
import { Home } from './Home/Home';
import { About } from './About/About';
import { NotFound } from './NotFound/NotFound';
import { CharacterProfile } from './Characters/CharacterProfile/CharacterProfile';
import { Footer } from './Footer/Footer';
import Layout from '../hoc/Layout/Layout';
import * as commonActions from '../store/actions/commonActions';

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => { 
    // dispatch(commonActions.resetLoader());
  }, [location])

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
