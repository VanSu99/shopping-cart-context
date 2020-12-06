import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CartPage from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <BrowserRouter>
          <Nav />

          <section style={{ padding: "10px 0" }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/products">
                <Card />
              </Route>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/products/:id" component={DetailProduct} />
              <Route exact path="/cart" component={CartPage} />
            </Switch>
          </section>
        </BrowserRouter>
      </div>
    </DataProvider>
  );
}

export default App;
