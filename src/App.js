import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Products from './components/products/Products';
import Contact from './components/contact/Contact';
import milkbar from './milkbar.png';

class App extends React.Component{
  render(){
    return(
      <div>
      <div>
        <div className="header row">
          <div className="col-lg-3">
            <a className="navbar-brand">
            <img src={milkbar} alt="milkbar" width="70" height="70" />
            </a>
          </div>

          <div className="col-lg-9">
            <div className="buttons float-right">
            <Nav/>
            </div>
          </div>

        </div>
      </div>
        <Home/>
        <About/>
        <Products/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}
export default App;
