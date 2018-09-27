import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



export class MainPage extends Component {
  render() {
    let { changeActivePageToAdminPage } = this.props
    let { changeActivePageToUserPage } = this.props
    return (
      <Grid> 
        <Grid container direction='column' alignItems='center' >
        <Typography variant="headline" component="h1">
          Main Page
        </Typography>
          <Grid container direction="row" justify='center'>
            <Button variant="contained" color="primary" onClick={changeActivePageToAdminPage}>
              Login as Admin
            </Button>
            <Button variant="contained" color="primary" onClick={changeActivePageToUserPage}>
              Login asUser
            </Button>
          </Grid>
        </Grid>
      </Grid>)
  }
}