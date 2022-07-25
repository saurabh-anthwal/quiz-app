import React from 'react'

const Error = ({children}) => {
  return (
         <div style={{textTransform:"uppercase",width:"100%",backgroundColor:"#ff6565",padding:"10px",color:"white",marginBottom:"15px",fontSize:"18px",border:"2px solid white"}}>{children}</div>
  )
}

export default Error