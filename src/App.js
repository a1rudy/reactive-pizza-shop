import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages/';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    return fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/">
            <Home items={pizzas} />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
