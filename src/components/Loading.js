import React from 'react'
import load from '../slike/load.gif'

const Loading = () => {
  return (
    <img src={load} style={{width:"400px", margin:"auto", display:"block", alt:'Site is loading'}}/>
  )
}

export default Loading