import { Typography } from '@mui/material';
import { ErrorMessage, useField } from 'formik';
import React from 'react';


const InputField = ({label, ...props}:any) =>{
    const [field, meta, helpers] = useField(props);
 return(
    <React.Fragment>
        <Typography variant="h4" >
       <label className="label">
            {label}&nbsp;&nbsp;
        </label>
        <input style={{width:'100%', height:'25px', fontSize:'16px'}}
        className={`input ${meta.touched && meta.error && 'is-danger'}`}
        autoComplete="off"
        {...field}
        {...props}
        />
        <ErrorMessage component="div" name={field.name} className="help is-danger"/>
        </Typography>
    </React.Fragment>
 );
};

export default InputField;
