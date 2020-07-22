import React from "react";
import {Field} from "redux-form";
import './FormsControl.scss';

const FormControl = ({input, meta:{touched}, children}) => { //таким способом мы достаем из пропсов всё, кроме мета и инпута


    return (
            <div>
                {children}
            </div>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}
export const createField = (placeholder, name, component, props = {}, text = '') =>(
    <div><Field placeholder={placeholder} component={component} name={name}
        {...props}/>{text}</div>
)