import { makeStyles } from '@material-ui/core/styles';
import { darkGrayAccentColor, orangeAccentColor, whiteColor, fontColor } from "./../../../GlobalStyles/styles";


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
      color: `${darkGrayAccentColor}`,
      border: "1px solid limegreen",
      // [theme.breakpoints.up('md')]: {
      //     display: "none",
      //    },

        
    }, 
    // submitBtn: {
    //   backgroundColor: `${background}`,
    //   color: `${white}`
    // },
    iconBtn: {
  // border: "1px solid orange",
  display:"flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  margin: 0,
  width: "100%",
  alignSelf: "center",
},
menuLink: {
  color: "#374F71",
  textDecoration: "none",
  padding: 0,
  // border: "1px solid green"
},
squareBtn: {
  backgroundColor: `${orangeAccentColor}`,
  border: `2px solid ${orangeAccentColor}`,
  borderRadius: 0,
  color: `${whiteColor}`,
  fontWeight: 700,
  letterSpacing: 1.5,
  height: 50,
}
  }));

  export { useStyles }