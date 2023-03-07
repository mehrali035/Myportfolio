import React from 'react'
import Typewriter from "typewriter-effect"
const Typewriters = () => {
  return (
    <div className='box'>
      <h1>
        <Typewriter
        
        options={{
          autoStart:true,
          loop:true,
          delay:50,
          strings:["Frontend","Developer","HTML5","CSS3","JavaScript","React","Git","Git Hub","Sass","Bootstrap"]
        }}
        />
      </h1>
    </div>
  )
}

export default Typewriters
