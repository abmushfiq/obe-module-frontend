import { FormControl, FormControlLabel, FormLabel, Radio,RadioGroup as MuiRadioGroup } from '@material-ui/core';
import React from 'react';

export default function RadioGroup(props) {

    const {name, lable, value, onChange, items} = props;
    return (
       
            <FormControl>
                <FormLabel>{lable}</FormLabel>
                <MuiRadioGroup row 
                name={name}
                value={value}
                onChange={onChange}>
                 {
                     items.map(
                        (item,index) => (
                            <FormControlLabel value={item.id} control={<Radio /> }lable={item.title} />
                        )
                    )
                }
                </MuiRadioGroup>
            </FormControl>
       
    )
}
