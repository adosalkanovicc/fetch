
import { useEffect, useState } from 'react'

const url = "http://localhost:5000/posts"

function Fetchdata() 
{
    const [datum, setDatum] = useState([])

    const fetchTask = async() => 
    {
      const response = await fetch(url)
      const datum = await response.json()
      //console.log(datum)
      setDatum(datum)

    }
    useEffect(() => {
      fetchTask()
      }
    , [])
    
    
    return (
        
      <>
      <h3>Title</h3>
     {datum.map((data) => {
       const {id, title, body} = data 
        return <li key={id}>
         <div>
           <h4>{title}</h4>
           <p>{body}</p>
         </div>
       </li>
     })}
      </>
    )
    }

export default Fetchdata
