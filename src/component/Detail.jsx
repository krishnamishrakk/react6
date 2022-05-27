
import React, { createContext, useState } from 'react'

export const store=createContext()

const Detail = (props) => {

    const [students,setStudents]=useState([

{

"Name":"Joe",
"Age":"25",
"Course":"HTML",
"Batch":"August",
"id":"1"

},

{

    "Name":"Biden",
    "Age":"26",
    "Course":"Css",
    "Batch":"september",
    "id":"2"
    
    },
    {

        "Name":"Martin",
        "Age":"27",
        "Course":"React",
        "Batch":"December",
        "id":"3"
        
        },
        
        {
        
            "Name":"Mary",
            "Age":"28",
            "Course":"Nodejs",
            "Batch":"januauary",
            "id":"4"
            
            },
            {
        
                "Name":"Rosie",
                "Age":"29",
                "Course":"Database",
                "Batch":"April",
                "id":"5"
                
                },


    ])
  return (
    <div className=' kk2'>



<store.Provider  value={[students,setStudents]}>


    {props.children}


</store.Provider>




        
    </div>
  )
}

export default Detail