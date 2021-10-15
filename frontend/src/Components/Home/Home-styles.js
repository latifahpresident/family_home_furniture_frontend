import { makeStyles } from "@material-ui/core/styles";
import { fontColor, greenColor, lightGrayColor, redAccentColor, whiteColor, orangeAccentColor, darkGrayAccentColor } from "../../GlobalStyles/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      color: `${fontColor}`,
      width: "80%",
      margin: "0 auto",
      // border: "10px solid purple",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    financing: {
      backgroundColor: `${lightGrayColor}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 93,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        padding: "1rem .5rem",
      },
    },
    financingText: {
      fontSize: "1.5rem",
      letterSpacing: 4,
      marginRight: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
        letterSpacing: 1,
        marginBottom: "1rem"
      },
    },
    main: {
      // border: "1px solid red",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    section: {
      width: "100%",
      margin: "2rem 0",
      textTransform: "uppercase",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "2rem",
      // border: "1px solid red"
    },
    heading: {
      fontSize: "1.875rem",
      margin: "2rem",
      color: `${fontColor}`,
      textTransform: "uppercase",
      alignSelf: "center",
      fontWeight: 500,
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.6rem",
        fontWeight: 500,
        lineHeight: 1.5
      },
    },
    departmentsWrapper: {
      // border: "1px solid orange",
      display: "flex",
      width: "98%",
      justifyContent: "space-around",
      margin: "2rem 0",
      flexWrap: "wrap",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
    },
    department: {
      // border: "1px solid purple",
      maxWidth: "20.25rem",
      maxHeight: "17.5rem",
      margin: "0 1rem 1rem",
      height: 300,
      width: 300,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: `${redAccentColor}`,
      boxShadow: "0 8px 6px rgb(0 0 0 / 20%)",
      marginBottom: "3rem",
      [theme.breakpoints.down('sm')]: {
        width: "100%"
      },
    },
    departmentImageWrapper: {
      // border: "1px solid orange",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: 250,
      maxHeight: 250,

    },
    image: {
      width: "100%",
      height: 230,
      boxShadow: "0 2px 5px rgba(0,0,0,.2)",
    },
    link: {
      color: `${whiteColor}`,
      textDecoration: "none",
      
    },
    title: {
      margin: "1rem 0",
      fontWeight: 700,
    },
    //========HOW IT WORKS SECTION===========
    howItWorks: {
      color: `${greenColor}`,
      width: "100%",
      margin: "2rem 0",
      textTransform: "uppercase",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      paddingTop: "2rem",
    },
    steps: {
      // border: "1px solid orange",
      display: "flex",
      backgroundColor: `${lightGrayColor}`,
      width: "100%",
      justifyContent: "space-around",
      margin: "2rem 0",
      padding: "2rem 0",
      color: `${fontColor}`,
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
    },
    icon: {
      color: `${orangeAccentColor}`,
      marginRight: "1rem",
      fontSize: "8rem",
  },
    step: {
      // border: "1px solid purple",
      width: "25%",
      // maxWidth: "25%",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down('sm')]: {
        width: "100%"
      },
    },
 
    paragraph: {
      // border: "1px solid green",
      textAlign: "justify",
      width: "70%",
      lineHeight: 2,
      [theme.breakpoints.down('sm')]: {
        width: "90%",
      },
    },
   
   
  stepHeader: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    // color: `${greenColor}`,
    borderBottom: `3px solid ${darkGrayAccentColor}`,
    width: "80%",
    margin: "0 auto",
    minHeight: 60
  },
  stepText: {
    textTransform: "none",
    margin: "2rem auto",
    textAlign: "justify",
    width: "80%"
  },
  listItem: {
    width: "100%",
    // border: "1px solid red",
    padding: 0
  },
  listItemText: {
    width: "100%",
    // border: "1px solid green",
    listStyle: "none"
  },
  divider: {
    width: "100%", 
    color: "#EA4D1F",
    // marginTop: "1rem", 
  },
 

  

 
 
 
  centerSection: {
    // color: "#366E82",
    width: "100%",
    margin: "2rem 0",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "2rem",
    // border: "1px solid red"
  },
 
 

  //==========CAROUSEL STYLES==========

  carousel: {
    // margin: 'auto',
    width: '100%',
    //  border: "1px solid green",
           
},
  slide: {
      // border: "1px solid red",
    width: "100%",
    height: "450px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down('sm')]: {
        height: "270px",
      },
  },
  }));

  export { useStyles };