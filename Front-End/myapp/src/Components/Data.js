import React from 'react'
import Table from 'react-bootstrap/Table'
function Data () {
    const rawData= [
        { y: 20, label: "Airfare" },
        { y: 24, label: "Food & Drinks" },
        { y: 20, label: "Accomodation" },
        { y: 14, label: "Transportation" },
        { y: 12, label: "Activities" },
        { y: 10, label: "Misc" }	
    ]
  return (
    <div style={{margin:20}}>
      <p style={{fontWeight:500,fontSize:18}}>Trip Expenses data</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Expenses</th>
            <th>Activities</th>
          </tr>
        </thead>
        <tbody>
        {
            rawData.map((item,index)=>{
               return(
                <tr>
                <td>{index+1}</td>
                <td>{item.y} %</td>
                <td>{item.label}</td>
              </tr>
               )
            })
        }
          
         
        </tbody>
      </Table>
    </div>
  )
}

export default Data
