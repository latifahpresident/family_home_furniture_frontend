import React from 'react';
import {CssTextField} from './Input-styles';
import { useStyles
 } from './Input-styles';
const Input = (props) => {
    const classes = useStyles(props);

    console.log("input props", props)
    let inputElement = null;
    switch (props.elementType) { // text, email, selector
        case('textfield'):
            inputElement = <CssTextField 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed}
                invalid={props.invalid}
                shouldValidate={props.shouldValidate}
                touched={props.touched}
                className={props.className}
                id={props.id}
                InputProps={{
                    classes: {
                        // root: classes.label,
                        root: classes.formInput
                    }
               }}
            />
            break;
        case ('textarea'):
            inputElement = <textarea 
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            invalid={props.invalid}
            shouldValidate={props.shouldValidate}
            touched={props.touched}
            />
            break;
        default: inputElement = <CssTextField
            {...props.elementConfig} 
            value={props.value}
            onChange={props.changed}
            invalid={props.invalid}
            shouldValidate={props.shouldValidate}
            touched={props.touched}
        />
    }
    let validationError = null;
    if (props.invalid && props.touched) {
        validationError = <p>Please enter a valid value!</p>;
    }
    return (
        <div  className={classes.formWrapper}>
            {inputElement}
            {validationError}
        </div>
    )
};

export default Input;