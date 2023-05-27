import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Display() {


  return (
    <div className='container'>
     <ul className="list-group">
    <li className="list-group-item list-group-item-light"> No Search Results! Please submit 
    a search above!</li>
    </ul>

    </div>
  )
}

export default Display