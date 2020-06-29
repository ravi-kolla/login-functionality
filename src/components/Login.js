import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Card, CardActions, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth:500,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
    marginTop: 20,
    marginBottom:20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  inputs: {
    margin: 20
  }
});

export default function Login() {

  const classes = useStyles();

  return (
    <div>
    <Container>
    <h2>Login</h2>
    <Card className={classes.root}>
      <div>
      <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
          className={classes.inputs}
      />
      </div>
      <div>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.inputs}
      />
      </div>
      <CardActions>
      <Button variant="contained" color="primary">
        Submit
      </Button>
      </CardActions>
      </Card>
      </Container>
    </div>
  );
}
