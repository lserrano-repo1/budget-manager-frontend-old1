import React from 'react';
import { Form, Formik, FormikProps,  } from 'formik';
import { Button, Grid, Link, Typography, Input, Box } from '@mui/material';
import './userLogin.scss';
import InputField from '../../components/InputField/InputField';
import { UserLoginProps } from './UserLogin.d';
import Base from '../../components/Layout/Base';

const UserLogin = () => {
 
    return (

     <Base>
            <Formik  initialValues={{
                email: '',
                pswrd: '', 
                token:'',
            }} 
            onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 100);
              }}
           
            >
            { (props:FormikProps<UserLoginProps>) => (
                <Grid container id="login-form-container-grid" className='login-form-container'>
                    <Typography variant="h2">User Login peludilla</Typography>
                    <Form>
                        <div id='email-input-div' className='field-item'>
                            <InputField name="email" type="email" label="Email" />
                        </div>
                        <div id='pswrd-input-div' className='field-item'>
                            <InputField name="pswrd" type="password" label="Password" />
                        </div>

                    
                        <div id='submit-button-div' className='field-item'>
                            <Button type="submit" className="login-button">
                            <Typography variant="h4">Submit</Typography>
                            </Button>
                        </div>

                        <div className='field-item'>
                            <Link>
                                <Typography variant="h4">
                                    Not registered yet? click here.
                                </Typography>
                            </Link>
                        </div>


                    </Form> 
                </Grid>   
            )}



            </Formik>








            </Base>
    );
};

export default UserLogin;
