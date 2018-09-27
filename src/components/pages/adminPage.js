import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export class AdminPage extends Component {
  render() {

    let { logOut, goToOrders, inputChange, value, addItemToList, product, removeProduct } = this.props

    let newListItem = product.map((elem, index) => {
      return (
        <ListItem key={index}>
          <a href="#">
            {elem.name}
          </a>
          <IconButton aria-label="Delete" onClick={() => { removeProduct(index) }}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      );
    })
    return (
      <Grid>

        <h1>ADMIN PAGE</h1>
        <Grid container spacing={40}>
          <Grid item xs={12} sm={6} >
            <List>
              {newListItem}
            </List>
            <TextField
              label="Enter new name" onInput={inputChange} value={value}
            />
            <Button variant="contained" color="secondary" onClick={addItemToList}>
              Add
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={logOut}>
              Logout
            </Button>
            <Button variant="contained" onClick={goToOrders}>
              Orders
            </Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}