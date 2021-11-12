import React from "react";
import {withRouter} from "react-router-dom";
import {Grid, Typography, IconButton}  from "@material-ui/core";
import { useStyles } from "./Footer-styles";
import { EmailOutlined, PhoneOutlined, Instagram, Facebook, Twitter } from "@material-ui/icons";
  
const Footer = (props) => {
    const classes = useStyles(props);
    return(
        <div className={classes.root}>
          <Grid className={classes.top}>
  
      
                      <Grid item className={classes.iconWrapper}>
                          <IconButton aria-label="facebook" className={classes.iconBtn}>
                                <Facebook className={classes.socialIcon}/>
                          </IconButton>
                       
                          <IconButton aria-label="instagram" className={classes.iconBtn}>
                                <Instagram className={classes.socialIcon}/>
                          </IconButton>
                          <IconButton aria-label="twitter" className={classes.iconBtn}>
                                <Twitter className={classes.socialIcon}/>
                          </IconButton>
                      </Grid>

                      <Grid item className={classes.iconWrapper}>
                                <PhoneOutlined className={`${classes.socialIcon}`}/>
                          <a  className={classes.anchor} href="tel:1-855-801-5576"><Typography className={classes.anchorText}>(855) 801-5576</Typography></a>
                      </Grid>

                      <Grid item className={classes.iconWrapper}>
                                <EmailOutlined className={classes.socialIcon}/>
                          <a className={classes.anchor} href="mailto:contact@latifah.pres.com"> <Typography className={classes.anchorText}>contact@familyhomefurniture.com</Typography></a>
                      </Grid>
                      </Grid>
                      <Grid className={classes.bottom}>
                        <Typography className={classes.copyRight} component="p" variant="body1">
                          &copy;{new Date().getFullYear()} MARS TECH | All rights reserved | Terms Of Service | Privacy
                        </Typography>
                      </Grid>
                      {/* </div> */}
        </div>
    )
};

export default withRouter(Footer);