import React, { useContext } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import CartPage from "./pages/Cart";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import DetailProduct from "./pages/DetailProduct";
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoadingProvider, LoadingContext } from "./context/LoadingProvider";

function App() {
  const value = useContext(LoadingContext);
  console.log(value);

  return (
    <DataProvider>
      <LoadingProvider>
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
      </LoadingProvider>
    </DataProvider>
  );
}

export default App;
