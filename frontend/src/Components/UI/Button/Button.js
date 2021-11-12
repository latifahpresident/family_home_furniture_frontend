import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { Button, } from "@material-ui/core";
import { useStyles } from './Button-styles';
import { Link } from 'react-router-dom';

const UIButton = (props) => {
    let buttonElement = null;
    const classes = useStyles(props);
    const {className, ariaLabel, onClick, } = props;
    switch (props.buttonStyle) { 
        case('iconButton'):
            buttonElement = 
            <IconButton 
                className={classes[className]} 
                aria-label={ariaLabel} 
            >
                {props.children}
            </IconButton>
            break;
        case('submitButton'):
        buttonElement = 
        <Button 
            // edge="start" 
            className={classes[className]} 
            aria-label={ariaLabel} 
            onClick={onClick}
            // variant="contained"
            type={props.type}
        >
            {props.children}
        </Button>
            break;
            case('linkButton'):
            buttonElement = 
            <Button 
                component={Link} 
                className={classes[className]} 
                aria-label={ariaLabel} 
                to={`${onClick}`}
                // variant="contained"
                type={props.type}
            >
                {props.children}
            </Button>
                break;
        default: buttonElement = 
        <button>click</button>
    }

   
    return (
        <div>
            {buttonElement}
        </div>
    )
};

export default UIButton;