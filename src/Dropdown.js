import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Dropdown1 = () => {
    const [input,setInput]=useState('')
    const [data,setData]=useState()
    const [filteredData,setFilteredData]=useState([])


 useEffect(()=>{
    setData([{
        name:"Siddharth",
        
    },{
        name:"ajay"
    }])
 },[])
 useEffect(()=>{
details2()
 },[input])

 const details2=()=>{
    let filteredData1=data.filter((item)=>{
        return(item.name.toLowerCase().includes(input.toLowerCase()))})
        
    setFilteredData(filteredData1)
     
 }
  return (
    <>
   
    <div>
       {filteredData.length > 0 ? filteredData?.map((item)=>{
        return(
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <input type='text' onChange={(e)=>setInput(e.target.value)} />
        <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
        
        <Dropdown.Item href="#/action-3">{item.name}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        )
    }):<div>{data?.map((item)=>{
        return(
            <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <input type='text' onChange={(e)=>setInput(e.target.value)} /> */}
        <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{item.age}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{item.name}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        )
    })}</div> }
    </div>
    </>
  )
}

export default Dropdown1

// import React, { useEffect, useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';

// const Dropdown1 = () => {
//   const [input, setInput] = useState('');
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     // Simulating fetching data from an API
//     setData([
//       {
//         name: "Siddharth",
        
//       },{
//         name:"ajay"
//       }
//     ]);
//   }, []);
// useEffect(() => {
//     // Filter data based on input
//     setFilteredData(data.filter(item => item.name.toLowerCase().includes(input.toLowerCase())));
//     console.log(filteredData)
//   }, [input, data]);


//   return (
//     <div>
//       <Dropdown>
//         <Dropdown.Toggle variant="success" id="dropdown-basic">
//           Dropdown Button
//         </Dropdown.Toggle>

//         <Dropdown.Menu>
//           <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
//           {filteredData.length > 0 ? (
//             filteredData.map(item => (
//               <React.Fragment key={item.name}>
//                 <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">{item.age}</Dropdown.Item>
//               </React.Fragment>
//             ))
//           ) : (
//             data.map(item => (
//               <React.Fragment key={item.name}>
//                 <Dropdown.Item href="#/action-1">{item.name}</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">{item.age}</Dropdown.Item>
//               </React.Fragment>
//             ))
//           )}
//         </Dropdown.Menu>
//       </Dropdown>
//     </div>
//   );
// }

// export default Dropdown1;
