import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
    const [isShwonHoverContent, setIsShownHoverContent] = useState(false);

  return (
    <div className='hero-container'>
        
            <headshot> </headshot>
          
        <group
         onMouseEnter={()=> setIsShownHoverContent(true)}
           // onMouseLeave={()=> setIsShownHoverContent(true)}
            onClick={() => setIsShownHoverContent(false)}>
                About me!
            </group>
            
        {/* <image src='imgs/video-2.mp4' autoPlay loop muted /> */}

        {isShwonHoverContent &&(
            <div className= 'hero-btns'>
        <Button className= 'btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'> 
        <p1>Hi, My name is Amanda Smith. I am a student studying computer science
            at the University of Florida and I want to take my passion for Coding and
            make a positive impact in the world.  My goal is to learn as much as I can and 
            then take my knowledge and experience into working on a team to create something truly amazing.
        </p1>
        </Button>
       </div>
         )}
 <section>
        <div className='hero-btns'>
        <Button className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        >
            RESUME
        </Button>
        <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        >
            CONTACT <i className='fa-solid fa-angles-right' />
        </Button>
        
        </div> 
         </section>     
       
    </div>
   
  )
}
export default HeroSection
