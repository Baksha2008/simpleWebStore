import React, { Component } from "react";
import { AdminPage } from "./components/pages/adminPage";
import { UserPage } from "./components/pages/userPage";
import { ShopingCart } from "./components/pages/shopingCart";
import { MainPage } from "./components/pages/mainPage";


class App extends Component {
  constructor() {
    super();
    this.product = [
      {
        name: "MacBook Pro 2018",
        inCart: false
      },
      {
        name: "Dell xs",
        inCart: false
      },
      {
        name: "Microsoft Surface",
        inCart: false
      },
    ]
    this.state = {
      activePage: 'mainPage',
      inputValue: '',
      orderInCart: [],

      product: this.product

    };

  }

  changeActivePageToAdminPage = () => {
    this.setState({
      activePage: 'adminPage',
    });
  };

  changeActivePageToUserPage = () => {
    this.setState({
      activePage: 'userPage',
    });
  };

  changeActivePageToShopingCart = () => {
    this.setState({
      activePage: 'shopingCart'
    })
  }

  changeActivePageToMainPage = () => {
    this.setState({
      activePage: 'mainPage'
    })
  }
  inputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }
  addItemToList = () => {
    if (!this.state.inputValue) {
      return
    }
    this.state.product.push({ name: this.state.inputValue })
    console.log(this.state)
    this.setState({
      product: this.state.product,
      inputValue: ''

    })

  }
  removeProduct = (index) => {
    console.log(this.state)
    let productArray = this.state.product
    productArray.splice(index, 1)
    this.setState({
      product: this.state.product

    })

  }
  addItemsToCart = (product) => {
    let self = this;
    let item = this.state.product.find(function (item, index) {
      if (item.name == product.name) {
        self.state.product[index].inCart = true;
        self.setState({
          product: self.state.product
        });
        return item;
      }
    });
    this.state.orderInCart.push(item)
    this.setState({
      orderInCart: this.state.orderInCart
    });
  }
  render() {
    const { activePage, product, orderInCart } = this.state;
    if (activePage === 'mainPage') {
      return (
        <MainPage
          changeActivePageToAdminPage={this.changeActivePageToAdminPage}
          changeActivePageToUserPage={this.changeActivePageToUserPage}
        />
      );
    }
    if (activePage === 'adminPage') {
      return <AdminPage
        logOut={this.changeActivePageToMainPage}
        goToOrders={this.changeActivePageToShopingCart}
        addItemToList={this.addItemToList}
        inputChange={this.inputChange}
        product={product}
        removeProduct={this.removeProduct}
      />;
    }
    if (activePage === 'userPage') {
      return <UserPage
        logOut={this.changeActivePageToMainPage}
        goToOrders={this.changeActivePageToShopingCart}
        product={product}
        addItemsToCart={this.addItemsToCart}
      />
    }
    if (activePage === 'shopingCart') {
      return <ShopingCart
        logOut={this.changeActivePageToMainPage}
        orderInCart={orderInCart}
      />
    }
  }
}
export default App;
