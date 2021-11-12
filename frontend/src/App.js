import './App.css';
import { Route, Switch, withRouter} from 'react-router-dom';
import Layout from './Util/Layout/Layout';
import Home from "./Components/Home/Home";
import Products from "./Components/Products/ProductsList";

function App() {
  let routes = (
    <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />

    </Switch>
  )
  return (
    <div className="App">
       <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
