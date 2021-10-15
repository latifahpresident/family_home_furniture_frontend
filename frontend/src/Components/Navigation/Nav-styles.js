import { makeStyles } from "@material-ui/core/styles";
import { fontColor, lightGrayColor, orangeAccentColor, redAccentColor, whiteColor } from "./../../GlobalStyles/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      borderBottom: `1.5px solid ${lightGrayColor}`,
      width: "100%",
    },
    deliveryWrapper: {
        backgroundColor: `${lightGrayColor}`, 
        height: 40,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: { 
            // border: "3px solid blue",
            height: 50,
            backgroundColor: `${redAccentColor}`, 

          },
    },


    "@keyframes drive": {
        from: {
          transform: "translate(0em,0)"
        },
        to: {
          transform: "translate(100em,0)"
        }
      },

    delivery: {
        // border: "1px solid white",
        color: `${orangeAccentColor}`,
        width: "38%",
        display: "flex",
        alignItems: "center",
        animationName: '$drive',
        animationDuration: '12s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',
        [theme.breakpoints.down('md')]: { 
          // border: "1px solid red",
          width: "50%",
        },
        [theme.breakpoints.down('sm')]: { 
            color: `${whiteColor}`,
            width: "100%",
            animationDuration: '8s',

        //   marginRight: "10rem"
        },
      },
      deliveryCaption: {
        textAlign: "left",
        width: "100%",
        color: `${whiteColor}`,
        // border: "1px solid red"
        [theme.breakpoints.down('xs')]: { 
          fontSize: ".7rem",
         },
      },

      wrapper: {
          display: "flex",
          justifyContent: "space-around",
        //   border: "1px solid limegreen",
          alignItems: "center",
          padding: "0 5rem",
          [theme.breakpoints.down('md')]: { 
              display: "none",
           },
      },
      homeLogoIcon: {
        color: `${orangeAccentColor}`,
        marginRight: "1rem",
        fontSize: "8rem",
        [theme.breakpoints.down('sm')]: { 
            fontSize: "1.8rem",
            margin: 0,
        },
    },
    link: {
        alignItems: "center",
        textDecoration: "none",
        //   border: " 3px solid black",
        width: "60%",
        marginRight: "1rem",
        "&:visited": {
            color: `${fontColor}`,
        },
        [theme.breakpoints.down('sm')]: { 
            "&:visited": {
                color: `${fontColor}`,
            } , 
            width: "10%"       
        },
    },
   
    headerLogo : {
        display: "flex",
    },
    homeLogoText: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        // border: "1px solid red",
        [theme.breakpoints.down('sm')]: { 
            display: "none",
        },
    },
    home: {
        fontSize: "3rem",
        [theme.breakpoints.down('sm')]: { 
            fontSize: ".6rem", 
            '&.MuiTypography-h2': {
                fontSize: ".8rem"
            }
        },
    },
    smallPara: {
        fontSize: "1.5rem",
        [theme.breakpoints.down('xs')]: { 
            fontSize: ".5rem"       
        },
    },

    searchWrapper: {
        color: `${fontColor}`,
        // border: "4px solid red",
        display: "flex",
        alignItems: "center",
        paddingLeft: "1rem",
        height: 100,
        width: "100%",
        justifyContent: "space-between",
},

iconWrapper: {
//   border: "1px solid green",
  display: "flex",
  alignSelf: "center",
  justifyContent: "space-around",
  width: "50%",
  [theme.breakpoints.down('sm')]: { 
    display: 'none',
  },
},
icon: {
    color: `${orangeAccentColor}`,
    marginRight: "1rem",
    fontSize: "2.3rem",
},
  }));

  export { useStyles };
