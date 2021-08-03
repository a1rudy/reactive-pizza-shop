import React from 'react';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages/';
import { Route } from 'react-router-dom';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        this.props.setPizzas(json.pizzas);
      });
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Route exact path="/">
              <Home items={this.props.items} />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
