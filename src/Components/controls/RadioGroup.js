import { FormControl, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {

    const {name, lable, value, onChange, items} = props;
    return (
       
            <FormControl>
                <FormLabel>{lable}</FormLabel>
                <RadioGroup row 
                name={name}
                value={value}
                onChange={onChange}
                items = {
                     items.map(
                        (item,index) => (
                            <FormControlLabel value={item.id} control={<Radio /> }lable={item.title} />
                        )
                    )
                }
                ></RadioGroup>
            </FormControl>
       
    )
}