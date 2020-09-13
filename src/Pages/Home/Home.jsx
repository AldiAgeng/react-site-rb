import React from 'react';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import JumbotronComponent from '../../Components/JumbotronComponent/JumbotronComponent';
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <JumbotronComponent />
        <ProductComponent />
        <footer><p>&copy; AldiAgeng2020</p></footer>
      </>
    )
  }
}

export default Home;