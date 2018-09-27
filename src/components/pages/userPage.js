import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

export class UserPage extends Component {
  render() {
    let { logOut, goToOrders } = this.props
    let newListItems = this.props.product.map((elem, index) => {
      let inCart = elem.inCart ? (
        <div>
          <Button size="small" color="primary">
            Buy
        </Button>
          <h3 >✓✓✓✓✓</h3>
        </div>
      ) : (
          <Button variant="contained" color="secondary" onClick={() => this.props.addItemsToCart(elem)}>
            Buy
      </Button>
        );
      return (
        <Card key={index}>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title={"Contemplative Reptile"}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {elem.name}
              </Typography>
              <Typography component="p">
                Adipisicing culpa dolor elit et dolore labore nostrud excepteur. Officia reprehenderit culpa quis ea consectetur. Labore adipisicing labore sit adipisicing eu officia consequat deserunt aliqua enim exercitation sint. Ad dolor nulla officia proident dolor nisi occaecat dolor sit fugiat elit. Eu exercitation incididunt fugiat excepteur est tempor pariatur pariatur. Elit fugiat minim Lorem exercitation sunt non labore. Magna pariatur tempor laborum sunt.
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {inCart}
          </CardActions>
        </Card>
      )
    })
    return (
      <Grid >
        <h1>USER PAGE</h1>
        <Grid container direction='row' >
          <Grid item xs={12} sm={8} >
            <Grid container>
              {newListItems}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} >
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