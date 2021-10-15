import React from 'react';
import {withRouter} from "react-router-dom";
import Badge from '@material-ui/core/Badge';
import {useSelector} from "react-redux";
import { WeekendOutlined, ShoppingCartOutlined, LocalShippingOutlined, } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Drawer from "./MobileDrawer";
import Button from "./../../UI/Button/Button"
import Search from "./../../Search/Search"
import { useStyles } from "./MobileNavigation-styles"

const MobileNav = (props) => {
    const classes = useStyles(props);
    const firebase_id = useSelector(state => state.user.firebase_id);
    const admin= useSelector(state => state.user.admin);
    const cart = useSelector(state => state.user.cart);
    const loggedIn = useSelector(state => state.user.loggedIn);

  return (
    <div className={classes.root}>
      <div className={classes.appBar}>
        <div className={classes.iconWrapper}>
            <Drawer/>
              <Button  
                aria-label="home" 
                onClick={() => props.history.push('/')}
                buttonStyle="iconButton"
                className="iconBtn">
                  <WeekendOutlined className={classes.icon}/>
              </Button>
              <Search/>
                <Badge badgeContent={cart.length}>
                    <IconButton  aria-label={loggedIn ? 'cart' : "create Account to view cart "} onClick={() => loggedIn ? props.history.push(`/profile/${firebase_id}/cart`) : props.history.push(`/register`)}>
                        <ShoppingCartOutlined className={classes.icon}/>
                    </IconButton>
              </Badge>
              {admin && loggedIn ? 
              <Badge badgeContent={0}>
                <Button  
                    aria-label="orders" 
                    onClick={() => props.history.push(`profile/${firebase_id}/orders`)}
                    buttonStyle="iconButton"
                    className="iconBtn">
                    <LocalShippingOutlined className={classes.icon}/>
                </Button>
              </Badge> : null
              }
          </div>
      </div>
    </div>
  );
};
export default withRouter(MobileNav);