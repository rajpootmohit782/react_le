import React ,{useState, useEffect} from 'react';
import Header from './Header';
import Contactcard from './contactcard';
import Contactlist from './contactlist';
import Addcontact from './addcontact';


import './App.css';

function App() 
 

  return (
<div>
<Header/>
  <Contactcard/>
  <Contactlist/>
  <Addcontact/>

</div>
   

  
  )

export default App;
