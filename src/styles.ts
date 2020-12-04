import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


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
      width: 30,
      height: 30,
    },
  }),
);

export default useStyles;