import React from 'react';
import { observer, inject } from 'mobx-react';
import CurrenciesStore from '../../stores/currenciesStore';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

type IConverterBlock = {
  classes: any;
  currenciesStore?: CurrenciesStore;
};

const ConverterBlock: React.FC<IConverterBlock> = inject('currenciesStore')(
  observer(({ classes, currenciesStore }) => {
    const coins: string[] = currenciesStore!.getItems.map((coin) => coin.name);

    return (
      <Paper className={classes.paper}>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField fullWidth label="total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel>Сurrency</InputLabel>
            <Select value={coins[0]}>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.cryptoInputBox}>
          <FormControl className={classes.currencyInput}>
            <TextField fullWidth label="total" />
          </FormControl>
          <FormControl className={classes.currencyType}>
            <InputLabel>Сurrency</InputLabel>
            <Select value={coins[0]}>
              {coins.map((name) => (
                <MenuItem value={name}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Paper>
    );
  }),
);

export default ConverterBlock;
