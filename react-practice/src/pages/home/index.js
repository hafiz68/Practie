import React from 'react';
import { useState } from 'react';
import Navbar from '../../shareComponents/navbar';
import Timer from '../about/Timer';
import Upper1 from './components/home2';



const Home =() =>{
    const [test, setTest] = useState('');
    return (
        <>
        {/* <Timer/> */}
        <Timer/>
        <div>{test}</div>
        <Navbar test= {test}/>
        <Upper1 test= {test}  setTest={setTest}/>
        </>
    )
};

export default Home;
