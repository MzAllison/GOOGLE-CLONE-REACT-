import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search'


function Home() {
    const [keyword, setKeyword] = useState("");
    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    return (
        <div className='home'>
            
        <div className='home__header'>
               <div className='home__headerLeft'>
                    <Link to ='/about'>About </Link>
                    <Link to ='/store'>Store </Link>
                   
               </div>

               <div className='home__headerRight'>
               <Link to ='/gmail'>Gmail </Link>
               <Link to ='/images'>Images</Link>
               <AppsIcon />
               <Avatar />

                   
               </div>

           </div>
           <div className='home__body'>

                { !keyword ? <img
                src="https://internship.sidehustle.ng/img/logo-dark.64d45129.png"
                alt=""
                /> : <div class="home__display__keyword"> { keyword } </div>}
                <div className="home__inputContainer">
                    <Search  onChange = { handleChange } keyword = {keyword} />
                </div>
           </div>

        </div>
    )
}

export default Home
