import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Logout from './Logout'
import Header from '../Pages/Header'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../Refresh'
let val = "";

const Home = () => {
  const logData = useSelector((state) => state.logData);
  const [val, setVal] = useState();
  const naviagte = useNavigate();
  const token = logData.accessToken

  const callWords = async () => {

    try {
      // const res = await axios.get('http://localhost:3000/words', {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   }
      // });

      const res = await axiosInstance.get('/words');
      console.log(res.data);

      setVal(res.data);
      console.log("Status:", res.status);
      console.log("Data:", res.data);
    }
    catch (e) {
      if (e.response && e.response.status === 401) {
        alert("Please login to continue");
        naviagte('/login');
      } else {
        console.error("Error fetching words:", e);
        alert("Something went wrong");
        naviagte('/Home')
      }
    }


  }

  return (
    <>
      <Header />
      <button onClick={callWords}>Fetch Data</button>
      {JSON.stringify(val)}
    </>
  )
}

export default Home