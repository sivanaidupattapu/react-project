import React from "react";
import { useGetAllLoansQuery } from "../../services/loansApi";
import { Link, Outlet, useNavigate } from "react-router-dom";
function Agenthome() {
    var { isLoading: isloansloading, data: allloansdata } = useGetAllLoansQuery()
    var navigate = useNavigate();
    function downpay(loan) {
        navigate('/agent/downpayment',{state:loan})
    }
    return <div>
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th style={{color:'#000080'}}>Mobile</th>
                        <th  style={{color:'#000080'}}>Email</th>
                        <th  style={{color:'#000080'}}>Type of loan</th>
                        <th  style={{color:'#000080'}}>Loan item</th>
                        {/* <th>Customer loan Status</th> */}
                        <th  style={{color:'#000080'}}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        !isloansloading && allloansdata?.map((loan, i) => {
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
                                                <i className="text-info">Waiting for manager approvel...</i>
                                                {/* <Link to='/agent/downpayment' state={JSON.stringify(loan)}>Waiting for manager approvel...</Link> */}
                                            </>
                                        )
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === 'approved' && <>
                                            <button className="btn btn-success btn-sm m-1"
                                              onClick={() => { downpay(loan) }} >Take Downpayment</button>
                                        </>
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === 'downpayment received' && <>
                                            <i className="text-warning"
                                             >Waiting for manager disburse...</i>
                                        </>
                                    }
                                    {
                                        [...loan.status].sort((a, b) => {
                                            return a.timestamp > b.timestamp ? -1 : 1
                                        })[0].code === 'disbursed' && <>
                                            <i className="text-danger"
                                             >Emis pending...</i>
                                        </>
                                    }
                                     
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        <Outlet></Outlet>
    </div>
}
export default Agenthome