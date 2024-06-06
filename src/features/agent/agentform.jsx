import { Field, Form, Formik } from "formik";
import React from "react";
import { useAddUserMutation, useAddloanMutation, useGetAllLoanTypesQuery } from "../../services/loansApi";
import { useGetAllLoanInterestQuery } from "../../services/loaninterestApi";

function AgentForm() {
    var { isLoading: isLoantypeloading, data: loantype } = useGetAllLoanTypesQuery();
    var { isLoading: isinterestloading, data: interesttype } = useGetAllLoanInterestQuery();
    var [addLoan] = useAddloanMutation()
    var [adduser] = useAddUserMutation()
    return (
        <div className="border border-2 border-warning p-2">
            <h2 style={{ color: 'navy' }}>Create Loan Application for Customers</h2>
            <Formik
                initialValues={{
                    mobile: '',
                    email: '',
                    typeofloan: '',
                    loanitem: '',
                    productcost: 0,
                    interest: '',
                    downpayment: 0,
                    status: [
                        {
                            code: "applied",
                            timestamp: new Date().getTime(),
                        },
                    ],
                }}
                onSubmit={(values) => {
                    values.interest = JSON.parse(values.interest)
                    addLoan(values).then((res) => {
                        console.log(res)
                    })
                        .catch((err) => { console.error(err) })
                    adduser({
                        "username": values.email,
                        "password": "123",
                        "role": "customer",
                        "mobile": values.mobile
                    })
                }}

            >
                <Form>
                    <div className="d-flex justify-content-center ">
                        <div className="border border-2 p-4">
                            <h2 style={{ color: 'purple' }}>Customer details</h2>
                            <table>
                                {/* <thead>
                                <tr>
                                    <th> Details</th>
                                    <th>Customer Application form</th>
                                </tr>
                            </thead> */}
                                <tbody>
                                    <tr>
                                        <td>Mobile no</td>
                                        <td><Field type="number" name="mobile" className="m-1 col-md-12" /></td>
                                    </tr>
                                    <tr>
                                        <td>Email id</td>
                                        <td><Field type="email" name="email" className="m-1 col-md-12" /></td>
                                    </tr>
                                    <tr>
                                        <td>Select type of Loan</td>
                                        <td>
                                            <Field as="select" name="typeofloan" className="m-1 form-control">
                                                <option value="" disabled>Please select your loan</option>
                                                {!isLoantypeloading && loantype?.map((loan, i) => (
                                                    <option key={i} value={loan}>{loan}</option>
                                                ))}
                                            </Field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Loan item</td>
                                        <td><Field type="text" name="loanitem" className="m-1 col-md-12" /></td>
                                    </tr>
                                    <tr>
                                        <td>Loan Amount</td>
                                        <td><Field type="number" name="productcost" className="m-1 col-md-12" /></td>
                                    </tr>
                                    <tr>
                                        <td>Select type of interest</td>
                                        <td>
                                            <Field as="select" name="interest" className="m-1 form-control">
                                                <option value="" disabled>Please select type of interest</option>
                                                {!isinterestloading && interesttype?.map((itype, index) => (
                                                    <option key={index} value={JSON.stringify(itype)}>
                                                        {`${itype.rateofinterest}% for ${itype.tenure} ${itype.tenuretype}`}
                                                    </option>
                                                ))}
                                            </Field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Down Payment</td>
                                        <td><Field type="number" name="downpayment" className="m-1 col-md-12" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-grid gap-2 w-50 mx-auto">
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default AgentForm;


{/* <label>Mobile no : </label>
<Field type='number' name="mobile"  className='m-1'></Field>
<br />
<label>Email  id : </label>
<Field type='email' name='email'  className='m-1'></Field>
<br />
<label>Select Type of Loan...</label>
<select name='typeofloan'>
    <option value="null" disabled selected >Please select your loan</option>
    {
        isLoantypeloading ? null : loantype?.map((typeofloan, i) => {
            return <option key={i} value=''>{typeofloan}</option>
        })
    }
</select>
<br />
<label>Loan item : </label>
<Field type='text' name='loanitem' className='m-1'></Field>
<br />
<label>Loan Amount : </label>
<Field type='number' name='productcost'  className='m-1'></Field>
<br />
<label>select type of interest... </label>
<select name='interest'>
    <option value='null' disabled selected>Please select type of interest</option>
    {
        isinterestloading ? null : intersettype?.map((itype,index)=>{
            return <option key={index}>{`${itype.rateofinterest}% for ${itype.tenure} ${itype.tenuretype}`}</option>
        })
    }
</select>
<br />
<label>Down payment : </label>
<Field type='number' name='downpayment'  className='m-1'></Field>
<br />  
<button className="btn btn-success m-1">Submit</button> */}
