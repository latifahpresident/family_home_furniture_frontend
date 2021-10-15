import {  makeStyles, } from '@material-ui/core/styles';
import { lightGrayColor } from '../../GlobalStyles/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        border: `1px solid ${lightGrayColor}`,
        borderRadius: "1rem",
        [theme.breakpoints.down('xs')]: {
            // display: "none",
            width: 193,

          }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        // display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ".5rem",
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(0, 8),        
        },
        [theme.breakpoints.down('md')]: {
          padding: theme.spacing(0, 2),        
        },
      },
      inputRoot: {
        color: 'inherit',

      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 10),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: 350,
        [theme.breakpoints.down('md')]: {
          width: 250,

        },
        [theme.breakpoints.down('xs')]: {
          width: 100,
        },
      },
}));

export { useStyles }