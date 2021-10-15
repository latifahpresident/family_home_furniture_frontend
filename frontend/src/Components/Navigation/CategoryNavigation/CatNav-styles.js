import { makeStyles } from "@material-ui/core/styles";
import { darkGrayAccentColor, whiteColor } from "../../../GlobalStyles/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        // border: "1px solid red",
        display: "flex",
        backgroundColor: `${darkGrayAccentColor}`,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down('md')]: {
            display: "none",
          },
    },
    linkWrapper: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // border: "1px solid green",
        width: "80%"
    },
    link: {
        textDecoration: "none",
        color: `${whiteColor}`,
        display: "flex",
        // justifyContent: "space-around",
        alignItems: "center",
    },
    linkText: {
        fontSize: "1.3rem",
    }
}));

export { useStyles };