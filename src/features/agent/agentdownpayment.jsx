import React from "react";
import { useLocation } from "react-router-dom";
import { useUpdatedownpaymentMutation } from "../../services/loansApi";
function DownPayment(){
   var {state:loan}= useLocation();
   console.log(loan);
   var [updatedownpayment]=  useUpdatedownpaymentMutation()
   function receiveddownpay(loan) {
       var temp=JSON.parse(JSON.stringify(loan))
       temp.status.push({
           code:"downpayment received",
           timestamp:Date.now()
       })
       updatedownpayment(temp).then((res)=>{console.log(res)})
    //    loan.status.code='downpayment received'
   }
    return <div>
        <h4  style={{color:'#000080'}}>Take downpayment...</h4>
        <div className="">
        <h6>Customer : {loan.email}</h6>
        <h6>Contact no : +91-{loan.mobile}</h6>
        <h6>Type of loan : {loan.typeofloan}</h6>
        <h6>Loan Amount : {loan.productcost}/-</h6>
        <h6>Downpayment : {loan.downpayment}/-</h6>
       <div>
       <button onClick={()=>{receiveddownpay(loan)}}
        className="btn btn-sm btn-success">Recived</button>
       </div>
        </div>    
    </div>
}
export default DownPayment