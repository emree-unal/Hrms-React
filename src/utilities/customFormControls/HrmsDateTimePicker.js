import { useField } from 'formik'
import React from 'react'
import { FormField,Label } from "semantic-ui-react";
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import { date } from 'yup/lib/locale';
export default function HrmsDateTimePicker({...props}) {

    const [field,meta]=useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
            <label>{props.placeholder}</label> 
               
                <input type="date" {...field} {...props}></input> 
                { meta.touched && !!meta.error?(
                     <Label pointing basic color="red" content={meta.error}></Label>
                ):null}
            </FormField>
        </div>
    )
}
