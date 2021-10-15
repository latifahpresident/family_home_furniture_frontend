import { makeStyles } from '@material-ui/core/styles';
import { orangeAccentColor, darkGrayAccentColor } from '../../../GlobalStyles/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        zIndex: 3,
        position: "relative",
        // border: "1px solid green",
        [theme.breakpoints.up("lg")]: {
            display: "none",
        }
      },
      appBar: {
        minHeight: 70,
        maxHeight: 70,
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative"
      },
      iconWrapper: {
          // border: "1px solid blue",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          height: "100%",
      },
      icon: {
        color: `${orangeAccentColor}`,
        marginRight: "1rem",
        fontSize: "2.3rem",
    },
    list: {
        width: 250,
      },
      fullList: {
        width: '100%',
        // border: "1px solid red"
      },
      listItemText: {
        // border: "1px solid green",
        textTransform: "capitalize",
        color: `${darkGrayAccentColor}`
    },
    listItemIcon: {
      color: `${darkGrayAccentColor}`
    }
}));

  export { useStyles }