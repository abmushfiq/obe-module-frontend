import { Grid } from '@material-ui/core';
import React from 'react';
import {useForm,Form} from '../../Components/useForm';
import Controls from '../../Components/controls/Control';
// import  moduleService  from "../../services/moduleService";

const typeofCourseItems = [
    {id:'gpa',titles:'GPA'},
    {id:'nongpa',titles:'NONGPA'}
]

const typeofCourseModule = [
    {id:'general',titles:'General Elective'},
    {id:'technical',titles:'Technical Elective'}
]


const getDepartmentCollection = [
    { id:'1',title: 'Electrical & Information'},
    { id:'2',title: 'Mechanial'},
    { id:'3',title: 'Civil'},
]



const initialFValues = {
    id : 0,
    module:'',
    moduleCode:'',
    semester:'',
    batch:'',
    typeOfCourse:'gpa',
    typeOfModule:'general',
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
                   label="Module Title"
                   value={values.module}
                   onChange={handleInputChange}
                   />
                     <Controls.Input   
                    label="Module Code"
                    value={values.moduleCode}
                    name='moduleCode'
                    onChange={handleInputChange}
                    />
                    <Controls.Input   
                    label="Semester"
                    value={values.semester}
                    name='semester'
                    onChange={handleInputChange}
                    />
                     <Controls.Input  
                    label="Credit"
                    value={values.credit}
                    name='credit'
                    onChange={handleInputChange}
                    />

                    <Controls.Input  
                    label="Batch"
                    value={values.batch}
                    name='Batch'
                    onChange={handleInputChange}
                    />
               </Grid>
               <Grid item xs ={6}>

               
                    <Controls.RadioGroup 
                    name='typeOfCourse'
                    label= 'Type of Course'
                    value={values.typeOfCourse}
                    onChange={handleInputChange}
                    items={typeofCourseItems}
                    />

                    <Controls.RadioGroup 
                    name='typeOfModule'
                    label= 'Type of Module'
                    value={values.typeOfModule}
                    onChange={handleInputChange}
                    items={typeofCourseModule}
                    />

                    <Controls.Select 
                    name='department'
                    label='Department'
                    value={values.department}
                    onChange={handleInputChange}
                    options={getDepartmentCollection}
                    />

                    <Controls.DatePicker 
                    name="date"
                    label="Date"
                    value={values.date}
                    onChange={handleInputChange}
                    />

                    <div>
                        <Controls.Button
                        variant = 'contained'
                        color='primary'
                        size='large'
                        text='submit'
                        type='submit'
                        />
                    </div>
               </Grid>
           </Grid>
       </Form>
    )
}

export default EmpolyeeForm
