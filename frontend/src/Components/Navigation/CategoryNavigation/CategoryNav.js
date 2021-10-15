import React from "react";
import { withRouter, NavLink, } from "react-router-dom";
import {Typography, }  from "@material-ui/core";
import { useStyles } from "./CatNav-styles";
import { categories } from "../../../GlobalStyles/styles";
const CatNav = (props) => {
    const classes = useStyles(props);

    return (
        <nav className={classes.root}>
            <div className={classes.linkWrapper}>
                {categories.map((category, key) => (
                    <NavLink key={key} to={`/product/?col=category&filter=${category}`} className={classes.link}>
                        <Typography className={classes.linkText}>{category}</Typography>
                    </NavLink>
                ))}
            </div>
        </nav>
    )
};

export default withRouter(CatNav);