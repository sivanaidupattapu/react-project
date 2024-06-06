import React from "react";
import { useGetAllLoansQuery, useUpdatedisburseMutation, useUpdateloanMutation } from "../../services/loansApi";
function ManagerHome() {
    var { isLoading: isloansloading, data: loansdata } = useGetAllLoansQuery()
    // console.log(isloansloading);
    console.log(loansdata);
    var [updatedisburse] = useUpdatedisburseMutation()
    var [updateloan] = useUpdateloanMutation()

    // updating loan status to server as approved
    function updateapprovel(loan) {
        var temp = JSON.parse(JSON.stringify(loan))
        temp.status.push({
            code: "approved",
            timestamp: Date.now()
        })
        updateloan(temp).then((res) => { console.log(res) })
    }

    // updating loan status to server as disbursed
    function updatedisbure(loan) {
        var temp = JSON.parse(JSON.stringify(loan))
        temp.status.push({
            code: "disbursed",
            timestamp: Date.now()
        })
        updatedisburse(temp).then((res) => { console.log(res) })
        var emis = [];
        var totalinterest = ((temp.productcost - temp.downpayment) * (temp.interest.rateofinterest) / 100)
        var totalloanamount = ((temp.productcost - temp.downpayment) + totalinterest)
        var emi = (totalloanamount / temp.interest.tenure)
        // console.log('interest',temp.interest.tenure)
        // console.log('interest',temp.interest.rateofinterest)
        // console.log('total emi per month',emi)
        for (var i = 1; i <= temp.interest.tenure; i++) {
            emis.push({
                "emiAmount": emi,
                "emiDate": Date.now() + (30 * 24 * 60 * 60 * 1000) * i
            })
        }
        temp.emis = [...emis]
        // console.log('temp',temp);
    }
    return <div>
        <h4  style={{color:'#000080'}}>Here loans Approvel and Disburse List...</h4>
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ color: 'purple' }}>Mobile</th>
                        <th style={{ color: 'purple' }}>Email</th>
                        <th style={{ color: 'purple' }}>Type of loan</th>
                        <th style={{ color: 'purple' }}>Loan item</th>
                        <th style={{ color: 'purple' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isloansloading && loansdata?.map((loan, i) => {
                            return <tr key={i}>
                                <td>{loan.mobile}</td>
                                <td>{loan.email}</td>
                                <td>{loan.typeofloan}</td>
                                <td>{loan.loanitem}</td>
                                <td>
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === "applied" && (
                                            <>
                                                <button className="btn btn-success btn-sm m-1"
                                                    onClick={() => { updateapprovel(loan) }}>Approve</button>
                                                <button className="btn btn-danger btn-sm m-1">Reject</button>
                                            </>
                                        )
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === "approved" && (
                                            <>
                                                <i className="text-success">Waiting for downpayment...</i>
                                            </>
                                        )
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === "downpayment received" && (
                                            <>
                                                <button className="btn btn-warning btn-sm m-1"
                                                    onClick={() => { updatedisbure(loan) }} >disburse</button>
                                                <button className="btn btn-danger btn-sm m-1">Reject</button>
                                            </>
                                        )
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === "disbursed" && (
                                            <>
                                                <i className="text-info">Emis pending....</i>
                                            </>
                                        )
                                    }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}
export default ManagerHome