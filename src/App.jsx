import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Homepage from './assets/pages/Homepage';

export default function App() {
  return (
    <>

      <Homepage>
        <Navbar />
      </Homepage>
    </>

  );
}
