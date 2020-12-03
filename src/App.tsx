import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    currencyInput: {
      minWidth: 'calc(70% - 10px)',
      marginRight: 10,
    },
    currencyType: {
      minWidth: '30%',
      textAlign: 'left',
    },
    cryptoInputBox: {
      marginTop: '20px',
      marginBottom: '20px',
    },
    table: {
      minWidth: 650,
    },
    coinImage: {
      maxWidth: 40,
    },
  }),
);

type TCoin = {
  name: string;
  fullName: string;
  ImageUrl: string;
  price: number;
  valume24hour: number;
};

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  console.log(allCoins);

  React.useEffect(() => {
    axios
      .get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            ImageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE,
            valume24hour: coin.RAW.USD.VOLUME24HOUR,
          };
          return obj;
        });
        setAllCoins(coins);
      });
  }, []);

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">#</TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Volume24hour</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins.map((coin) => (
                  <TableRow key={coin.name}>
                    <TableCell align="center">
                      <img className={classes.coinImage} src={coin.ImageUrl} alt="coin-img" />
                    </TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.price}</TableCell>
                    <TableCell align="left">{coin.valume24hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoInputBox}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="total" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="currencySelect">Сurrency</InputLabel>
                <Select id="currencySelect" value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputBox}>
              <FormControl className={classes.currencyInput}>
                <TextField fullWidth label="total" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="currencySelect">Сurrency</InputLabel>
                <Select id="currencySelect" value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h5">
              0.271598 USD
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
