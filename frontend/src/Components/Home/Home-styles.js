import { makeStyles } from "@material-ui/core/styles";
import { fontColor, greenColor } from "../../GlobalStyles/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      color: `${fontColor}`,
      marginTop: "2rem",
      // border: "10px solid purple",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    main: {
      // border: "1px solid red",
      // margin: "2rem 0",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontSize: "4rem",
      margin: "2rem",
      color: `${fontColor}`,
      textTransform: "uppercase",
      [theme.breakpoints.down('sm')]: {
        fontSize: "1.6rem",
        fontWeight: 500,
        lineHeight: 1.5
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
    howItWorks: {
      backgroundColor: "#F2CC7E",
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
    span: {
      transform: "rotate(180deg)",
      width: "15%", 
      // border: "1px solid white",
      fontSize: "1rem",
      backgroundColor: `${greenColor}`,
      height: "10px",
    },
    steps: {
      // border: "1px solid orange",
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      margin: "2rem 0",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
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
    stepNum: {
      fontSize: "6rem",
      // border: "2px solid red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "65%",
      margin: "0 auto 2rem auto",  
  },
  num: {
    fontSize: "6rem"
  },
  stepHeader: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: `${greenColor}`,
    borderBottom: "3px solid #EA4D1F",
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
  section: {
    // color: "#366E82",
    width: "100%",
    margin: "2rem 0",
    textTransform: "uppercase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingTop: "2rem",
    // border: "1px solid red"
  },
  hotItem: {
    // border: "1px solid purple",
    maxWidth: "20.25rem",
    maxHeight: "17.5rem",
    // overflow: "hidden",
    margin: "0 1rem 1rem",
    // width: "25%",
    height: "auto",
    // maxWidth: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      width: "100%"
    },
  },
  
  hotItemSection: {
    // border: "1px solid orange",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    margin: "2rem 0",
    flexWrap: "wrap",
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
  },
  title: {
    margin: "1rem 0"
  },
  link: {
    // textDecoration: "none",
    color: `${greenColor}`
  },
  hotItemTitle: {
    paddingLeft: "1rem",
    textDecoration: "none",
    [theme.breakpoints.down('sm')]: {
      alignSelf: "center"
    },
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
  imageGrid: {
    // border: "1px solid orange",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    width: "70%",
      height: 160,
      minHeight: 160,
      maxWidth: "70%"
      // backgroundColor: "#EFEFEF"
  },
  image: {
    width: "80%",
    borderRadius: "50%",
      height: 180,
      boxShadow: "0 2px 5px rgba(0,0,0,.2)",
  
    // border: "1px solid yellow",
  
  },
  }));

  export { useStyles };