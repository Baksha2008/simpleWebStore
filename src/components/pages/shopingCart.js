import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export class ShopingCart extends Component {
  render() {
    let { logOut } = this.props
    console.log(this.props.orderInCart)
    let newListItem = this.props.orderInCart.map((elem, index) => {
      return (

        <ListItem key={index}>
          <a href="#">
            {elem.name}
          </a>
          <h2>✓</h2>
        </ListItem>

      )
    })
    return (
      <Grid>
        <h1>Shopping Cart</h1>
        <Grid container direction='row' justify='center'>
          <Grid item xs={12} sm={8}>
            <List>
              {newListItem}
            </List>
            <Button variant="contained" color="primary">
              Ship it
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" onClick={logOut}>
              Logout
          </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}