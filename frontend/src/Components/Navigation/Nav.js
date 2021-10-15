import React, {useState} from "react";
import {useStyles } from "./Nav-styles";
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import { getAuth,  } from "firebase/auth";
import {useSelector, useDispatch, RootStateOrAny} from "react-redux";
import { withRouter, NavLink, } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import {ExitToApp, LockOpen, LocalShipping, ShoppingCartOutlined,  CreditCard, WeekendOutlined, AccountCircleOutlined, } from '@material-ui/icons';
import Grid  from "@material-ui/core/Grid";
import {logOut} from '../../Store/Actions/users';
import { fontColor, iconColor, } from "./../../GlobalStyles/styles";
import Search from "./../Search/Search";
import ButtonComp from "./../UI/Button/Button"
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import CategoryNav from "./CategoryNavigation/CategoryNav";

const theme = createTheme({
  typography: {
    fontFamily: [ 'Chilanka',
    'cursive',].join(','),
    h2: {
      fontFamily: ['Chilanka',].join(','),
    },
    h1: {
      fontFamily: ['Roboto',].join(','),
      color: `${fontColor}`
    },
    span: {
      fontFamily: ['Chilanka',].join(','),
      color: `${fontColor}`
    }
  },});

const NavBar = (props) => {
  const classes = useStyles(props);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const admin = useSelector(state => state.user.admin);
  const agent = useSelector(state => state.user.agent);
  const cart = useSelector(state => state.user.cart)
  const orders = useSelector(state => state.order.order)
  const firebase_id = useSelector(state => state.user.firebase_id);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("a button was clicked")
      setOpen((prev) => !prev);
    };
 
  const logout = () => {
    getAuth().signOut().then(() => {
      dispatch(logOut(msg))
      localStorage.clear()
    props.history.push("/");
    }).catch(err => {
      console.log("user was not signed out", err)
    })
      const msg = "User Signed Out Successfully"
  };
 
  const profileSignUp = () => {
    props.history.push(loggedIn ? `/profile/${firebase_id}/settings` : `/register`)
  };

  return (
    <React.Fragment>
      <nav className={classes.root}>
      <div className={classes.deliveryWrapper}>
        <Grid className={classes.delivery}>
            <Typography className={classes.deliveryCaption} variant="caption">WE DELIVER TO THE GREATER AUSTIN AREA, KILLEEN, WACO, AND HOUSTON</Typography>
            <LocalShipping className={classes.deliveryIcon}/>
          </Grid>
      </div>
            <MobileNavigation 
                admin={admin} 
                agent={agent} 
                loggedIn={loggedIn} 
                firebase_id={firebase_id} 
                logout={logout}
                handleClick={handleClick}
                open={open}/>
      <Grid className={classes.wrapper}>
        <ThemeProvider theme={theme}>
            {/*MOBILE NAVIGATION */}
            <NavLink to='/'className={classes.link}>
                <div className={classes.headerLogo}>
                    <WeekendOutlined fontSize="large" className={classes.homeLogoIcon}/>
                    <div className={classes.homeLogoText}>
                      <Typography className={classes.home} component="h2" variant="h2"> Family Furniture </Typography>
                      <Typography className={classes.smallPara} variant="body1"> Home Store </Typography>
                    </div>
                </div>
            </NavLink>
          </ThemeProvider>
        {/*THIS IS THE SEARCH SECTION */}
        <Grid item className={classes.searchWrapper}>
          <Search/>

            <Grid item  className={classes.iconWrapper}>
                <NavLink onClick={profileSignUp} className={classes.link} activeClassName={classes.active}  to={loggedIn ? `/profile/${firebase_id}/settings` : `/register`}>
                  <ButtonComp 
                    aria-label={loggedIn ? "ACCOUNT" : "SIGN UP"} 
                    className="iconBtn" 
                    buttonStyle="iconButton"> 
                    <AccountCircleOutlined  className={classes.icon}/> 
                  </ButtonComp>
                  <Typography variant="button" className={classes.link} >
                    {loggedIn ? "ACCOUNT" : "SIGNUP"}
                  </Typography>
                </NavLink> 
                <NavLink 
                  className={classes.link} 
                  exact={true} 
                  to={loggedIn ? `/profile/${firebase_id}/cart` : `/signin` }>
                  <ButtonComp 
                      aria-label="cart"
                      className="iconBtn"
                      buttonStyle="iconButton"
                  >
                    <Badge badgeContent={cart.length} color="secondary">
                      <ShoppingCartOutlined className={classes.icon}/>
                    </Badge> 
                  </ButtonComp>
                <Typography variant="button" className={classes.link}>Cart</Typography>
                </NavLink>
                  {admin || loggedIn? 
                <NavLink 
                  className={classes.iconText} 
                  exact to={`/profile/${firebase_id}/orders`}>
                  <ButtonComp
                      aria-label="orders"
                      className="iconBtn"
                      buttonStyle="iconButton"
                  >
                    <Badge badgeContent={orders.length} color="secondary">
                      <LocalShipping className={classes.icon}/> 
                    </Badge> 
                  </ButtonComp>
                  <Typography className={classes.link} variant="button"> Orders</Typography>
                </NavLink> : null
                  }
                  {loggedIn ? 
                <div onClick={logout}>
                  <ButtonComp  
                    aria-label= "LOGOUT" 
                    className="iconBtn" 
                    buttonStyle="iconButton" >
                    <ExitToApp className={classes.icon}/> 
                  </ButtonComp> 
                  <Typography className={classes.link}  variant="button">LOGOUT</Typography>
                </div> 
                :
                <div className={classes.portal} >
                  <div>
                    <NavLink className={classes.link} to="/signin">
                      <ButtonComp  
                        aria-label= "LOGOUT"  
                        className="iconBtn" 
                        buttonStyle="iconButton">
                        <LockOpen  className={classes.icon}/> 
                      </ButtonComp> 
                      <Typography className={classes.link} variant="button">LOGIN</Typography>
                    </NavLink>
                  </div>
                </div>
              }
              <NavLink className={classes.link} to="/signin">
                <ButtonComp  
                  aria-label= "FINANCING"  
                  className="iconBtn" 
                  buttonStyle="iconButton">
                  <CreditCard className={classes.icon}/> 
                </ButtonComp> 
                <Typography style={{color: `${iconColor}`}} variant="button">FINANCING</Typography>
              </NavLink>
              </Grid> 
            </Grid>
      </Grid>
        </nav>
        <CategoryNav/>
    </React.Fragment>
  )
};

export default withRouter(NavBar);