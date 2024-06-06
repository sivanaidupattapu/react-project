import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateLogin } from './loginslice';

function Login() {
    var dispatch = useDispatch()
    return (
        <div id='main'>
            <div id='d2'>
                <div id='glass'>
                <h2>Login Page</h2>
                    <Formik
                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        onSubmit={(values) => {
                            fetch('http://localhost:3001/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(values)
                            })
                                .then((res) => {
                                    return res.json();
                                })
                                .then(data => {
                                    console.log('data::', data);
                                    if (data.msg === 'loginsuccess') {
                                        window.localStorage.setItem('user', JSON.stringify(data));
                                        dispatch(updateLogin({status:true,user:data}))
                                    }
                                })
                        }}
                    >
                        <Form>
                            <i class="bi bi-person-fill i1"></i>
                            <Field type="text" name="username" placeholder='username' className='m-1' />
                            <br />
                            <i class="bi bi-key-fill i1"></i>
                            <Field type="password" name="password" placeholder='Password' className='m-1' />
                            <br />
                            <div class="d-grid gap-2">
                                <button type="submit" className='btn  btn-success active m-1'>Login</button>
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;
