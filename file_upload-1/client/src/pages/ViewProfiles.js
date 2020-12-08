import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'


function ViewProfiles() {
    useEffect(() => {   
       axios.get('http://localhost:4000/api/profile/viewAll')
       .then((data)=>{
           const result = data.data.result
           setTabledata(result)
           console.log(result)
       }).catch((err)=>{
           console.log(err)
       })
    }, [])
    
    const [tabledata, setTabledata] = useState([])
    const host = 'http://localhost:4000/'
    // const img_path = require('../image/')
    return (
        <div>
            <h3>View all Records</h3>            
            <hr/>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>photo</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody> 
                   
                {tabledata.map((item) => 
                    <tr>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.gender}</td>
                    <td>{item.address}</td>
                    <td><img src={`${host}${item.photo}`} alt = {`Profile pic of ${item.firstName}`} width="25px" height="25px"/></td>
                    <td><button >Edit</button></td>
                    <td><button >Delete</button></td>
                </tr>
                )}
                    
                </tbody>

            </Table>
        </div>
    )
}

export default ViewProfiles
