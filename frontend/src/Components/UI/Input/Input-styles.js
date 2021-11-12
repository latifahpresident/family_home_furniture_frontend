import { withStyles, makeStyles, } from '@material-ui/core/styles';
import { white, } from "./../../../global-styles/global-styles";
import { TextField, } from "@material-ui/core";

const CssTextField = withStyles((theme) => ({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: `${white}`,
      },
      
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          
        },
        
        '&.Mui-focused fieldset': {
          borderColor: 'white',
            color: `${white}`,
        },
     
      },  
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&::-webkit-input-placeholder': { color: 'white' }
    },
    MuiTextFieldroot: {
      [theme.breakpoints.down('xs')]: {
        width: "85%",
        border: "1px solid pink",
        color: "white"
    },
    }
  }))(TextField);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      border: "1px solid white",
      width: "50%",
      margin: "0 auto",
      justifyContent: "space-between",
      color: `${white}`,
      [theme.breakpoints.down('xs')]: {
        width: "90%",
    },
    },
    margin: {
      margin: theme.spacing(1),
      width: "40%",
      color: `${white}`,
      '&:hover': {
        color: `${white}`
      },
      [theme.breakpoints.down('xs')]: {
        width: "90%",
    },
    },
    // label: {
    //   color: "white",
    //   fontSize: "1.2rem",
    //   opacity: 1,
    //   '&::placeholder': {
    //     color: "white",
  
    //   },
    // },
    formWrapper: {
      width: "100%",
      [theme.breakpoints.down('xs')]: {
        width: "85%",
        margin: "0 auto"
    },
    }, 
    formInput: {
      // border: "1px solid pink",
      width: 500,
      color: "white",
      [theme.breakpoints.down('xs')]: {
        width: 300
      
    },
     
    },
    
  }));
  export { useStyles, CssTextField}