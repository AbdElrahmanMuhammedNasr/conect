import React, { useState } from "react";

export const Listing = () => {

    const [sections, setSections] = useState([1, 1, 1, 1])

    const [users, setUsers] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    //  toggle tables
    let [toggle, setToggle] = useState([true, true, true, true, true, true]);


    const ToggleTable = (event, tableNum) => {
        toggle[tableNum] = !toggle[tableNum]
        // console.log(toggle)
        setToggle([...toggle])
    }

    return (
        <div style={{ width: '90%', margin: 'auto' }}>
            {
                sections.map((s, i) => {
                    return (
                        <div key={i}>
                            <span className="d-flex justify-content-between">
                                <h3>Users Sction {i}  <span style={{ fontSize: '1.2rem' }}> ( 120 users )</span></h3>

                                <div style={{ cursor: 'pointer' }} onClick={(event) => ToggleTable(event, i)} > <button className="btn btn-primary">Toggle</button> </div>
                            </span>

                            {
                                (toggle[i] === false)
                                    ? null
                                    : <>

                                        <table className="table table-striped">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">id</th>
                                                    <th scope="col">First</th>
                                                    <th scope="col">Last</th>
                                                    <th scope="col">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((u, i) => {
                                                        return (
                                                            <tr key={i}>
                                                                <th scope="row">{i}</th>
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                            </tbody>
                                        </table>
                                    </>
                            }


                            <hr style={{ backgroundColor: 'black' }} />
                        </div>

                    )
                })
            }


        </div>

    )
}
