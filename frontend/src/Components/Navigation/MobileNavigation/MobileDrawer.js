import React, {useState} from 'react';
import {withRouter, Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getAuth,  } from "firebase/auth";
import {logOut} from '../../../Store/Actions/users';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import { AccountCircleOutlined, ExitToAppOutlined, LockOpenOutlined, HelpOutline, StorefrontOutlined, HomeOutlined, PhoneOutlined } from '@material-ui/icons';
import { categories, } from "./../../../GlobalStyles/styles";
import { useStyles } from "./MobileNavigation-styles"

 const MobileDrawer = (props) => {
  const classes = useStyles(props);
  const [state, setState] = useState(false);
  const firebase_id = useSelector(state => state.user.firebase_id);
  const loggedIn = useSelector(state => state.user.loggedIn);
  const dispatch = useDispatch();

  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  const logout = () => {
    getAuth().signOut()
      dispatch(logOut())
    props.history.push("/");
    console.log('clicked')
    
  };

  const list = [
    {
      label: 'Home',
      icon: <HomeOutlined/>,
      link: "/"
    },
    {
        label: "Shop all products",
        icon:  <StorefrontOutlined/>,
        link: '/products',
    },
    {
        label: loggedIn ? 'Account' : "Create an Account",
        icon: <AccountCircleOutlined/>,
        link: loggedIn ? `${`/profile/${firebase_id}`}/settings` : '/register'
    },
    {
        label: "Frequently Asked Questions",
        icon:  <HelpOutline/>,
        link: "/faq",
    },
    {
        label: "Contact Us",
        icon:  <PhoneOutlined/>,
        link: "/contact",
    },
   
]

  return (
    <div>
        <div>
          <Button 
            edge="start"
             aria-label="menu" 
             onClick={toggleDrawer(true)}>
               <Menu edge /></Button>
          <Drawer  open={state} onClose={toggleDrawer( false)} >
          <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List>
        {list.map((item, index) => (
          <ListItem button aria-label={item.label} key={item.label} onClick={() => props.history.push(item.link)}>
            <ListItemIcon className={classes.listItemIcon} >{item.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText}  primary={item.label} />
          </ListItem>
        ))}
        {loggedIn ? 
        <ListItem 
          button 
          aria-label= 'Logout'  
          onClick={logout}>
          <ListItemIcon className={classes.listItemIcon} ><ExitToAppOutlined/> </ListItemIcon>
            <ListItemText className={classes.listItemText}  primary='Logout'/>
        </ListItem> : 
          <ListItem button aria-label= 'Login'  onClick={() => props.history.push("/signin")}>
          <ListItemIcon className={classes.listItemIcon} ><LockOpenOutlined/></ListItemIcon>
              <ListItemText className={classes.listItemText}  primary="Login" />
            </ListItem>
          } 
      </List>
      <Divider />

      <List className={classes.sub}>
      <ListItem >
      <ListItemText className={classes.subMenuText} primary="Shop By Department"/>
      </ListItem>
        {categories.map((category, index) => (
          <ListItem className={classes.listItem} component={ Link }  key={category}  to={`/product/?col=category&filter=${category}`}>
            <ListItemText className={classes.listItemText} inset primary={category} />
          </ListItem>
        ))}
    </List>
    </div>
          </Drawer>
        </div>
     
    </div>
  );
};

export default withRouter(MobileDrawer);
