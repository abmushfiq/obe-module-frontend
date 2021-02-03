import { Grid } from '@material-ui/core';
import React from 'react';
import {useForm,Form} from '../../Components/useForm';
import Controls from '../../Components/controls/Control';




const typeOfCourse = [
    {id:'gpa',title:'GPA'},
    {id:'nongpa',title:'NONGPA'},
    {id:'other',title:'Other'}
]


const initialFValues = {
    id : 0,
    module:'',
    moduleCode:'',
    title:'',
    typeOfCourse:'GPA',
    credit:'',
    department:'',
    semister:'',
    date:new Date(),
}

function EmpolyeeForm() {

    
    

    const { values, setValues, handleInputChange}=useForm(initialFValues);


   
    return (
       <Form>
           <Grid container>
               <Grid item xs= {6}>
                   <Controls.Input 
                   name="module"
                   label="Module"
                   value={values.module}
                   onChange={handleInputChange}
                   />
                     <Controls.Input   
                    label="ModuleCode"
                    value={values.moduleCode}
                    name='moduleCode'
                    onChange={handleInputChange}
                    />
                    <Controls.Input   
                    label="Title"
                    value={values.title}
                    name='title'
                    onChange={handleInputChange}
                    />
                     <Controls.Input  
                    label="Credit"
                    value={values.credit}
                    name='credit'
                    onChange={handleInputChange}
                    />
               </Grid>
               <Grid item xs ={6}>
                    <Controls.RadioGroup 
                    name='typeOfCourse'
                    label= 'Type of Course'
                    value={values.typeOfCourse}
                    onChange={handleInputChange}
                    items={typeOfCourse}
                    />

               </Grid>
           </Grid>
       </Form>
    )
}

export default EmpolyeeForm
