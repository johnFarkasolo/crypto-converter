import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { CryptoTable, ConverterBlock } from './components';
import useStyles from './styles';

function App() {
  const classes: any = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CryptoTable classes={classes} />
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
