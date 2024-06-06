import React from "react";
import { useSelector } from "react-redux";
import { useGetLoanByMobileQuery } from "../../services/loansApi";
function CustomerHome() {
    var { user } = useSelector(state => state.loginReducer)
    var {isLoading,data}=useGetLoanByMobileQuery(user.mobile)
    console.log(user)
    return <div>
        <div className="d-flex justify-content-around p-2">
            <div>
                <h3 className="text-success">Customer Details</h3>
                <p>Username : {data[0].email} </p>
                <p>Mobile no: {user.mobile}</p>
                <p>Type of loan : {data[0].typeofloan} </p>
                <p>Total loan : ₹{data[0].productcost}/-</p>
                <p>Down payment : ₹{data[0].downpayment}/-</p>
                <p>Tenure : {data[0].interest.tenure} months</p>
                <p>Rate of interest :{data[0].interest.rateofinterest}%</p>
            </div>
            <div> <h3 className="text-success">Status</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-danger">Emi Amount</th>
                        <th className="text-danger">Due date</th>
                    </tr>
                </thead>
                <tbody>
            {
                !isLoading && data[0].emis.map((d,i)=>{
                    return <tr key={i}>
                        <td>₹ {Math.floor(d.emiAmount)}/-</td>
                        <td>{(new Date(d.emiDate)).toDateString()}</td>
                    </tr>
                })
            }
            </tbody>
            </table>
            </div>
        </div>
    </div>
}
export default CustomerHome