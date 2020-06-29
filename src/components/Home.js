import React from 'react';
import  {useHistory } from 'react-router-dom';

import {Container, Card, CardActions, TextField, Button } from '@material-ui/core';

export default function Home() {
  const history = useHistory();

  const register = () => history.push('/register');
  const login = () => history.push('/login');

  return(
    <div>
    <Container>
    <h2>Home</h2>
    <Card>
      <CardActions>
      <Button onClick={register} variant="contained" color="primary">
        Register
      </Button>
      </CardActions>
      <CardActions>
      <Button onClick={login} variant="contained" color="primary">
        Login
      </Button>
      </CardActions>
      </Card>
      </Container>
    </div>
  )
}
