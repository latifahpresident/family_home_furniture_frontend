import { makeStyles } from '@material-ui/core/styles';
import { darkGrayAccentColor, orangeAccentColor, redAccentColor, whiteColor } from '../../GlobalStyles/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      // flexGrow: 1,
    //   position: "relative",
      bottom: 0,
      width: "100%",
      // zIndex: 1250,
      // border: "1px solid orange",
      // height: 42,
      backgroundColor: `${darkGrayAccentColor}`,
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      color: "white",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        height: "auto",
        alignItems: "center",
        // position: "fixed",
      },
     
    },
    icons: {
      // border: "1px solid red",    
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    icon: {
      color: `${orangeAccentColor}`,
      fontSize: "1.8rem"
    }, 
 
  iconBtn: {
    // border: "1px solid orange",
    display:"flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 0,
    // margin: 0,
    // width: "90%"
  },
  iconText: {
    fontSize: ".8rem",
    textDecoration: "none",
    color: "#374F71"
  },
  iconWrapper: {
    // border: "1px solid white",
    display: "flex",
    // alignSelf: "center",
    justifyContent: "center",
    width: "75%",
    [theme.breakpoints.down('xs')]: { 
      marginBottom: ".5rem"
    },
  },
//   socialMedia: {
//     [theme.breakpoints.down('sm')]: { 
//       display: "none",
//     },
//   },
  socialIcon: {
    color: `${whiteColor}`,
    fontSize: "2rem",
    alignSelf: "center",
    marginRight: "1rem",
    [theme.breakpoints.down('sm')]: { 
      fontSize: "1.5rem",
      // marginBottom: "1rem",
    },
  },
  anchor: {
    textDecoration: "none",
    color: "white",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem"
    }
    // border: "1px solid gray"
  },
  bottom: {
    borderTop: "1px solid white",
    textAlign: "center",
    width: "70%",
    margin: "1.5rem auto 1rem auto",
    // padding: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".1rem",
      margin: "1rem  auto",
      width: "90%",
    }
  },
  top: {
    display: "flex",
    [theme.breakpoints.down('xs')]: { 
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      // border: "1px solid white",
      // padding: "1rem"
    },
  },
  copyRight: {
    textTransform: "capitalize",
    marginTop: "1rem",
    letterSpacing: 3,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
    }
  },

//   desktop: {
//     [theme.breakpoints.down("xs")]: {
//       display: "none"
//     }
//   }
  }));

  export { useStyles }