import React, { useState } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import { Button } from './Button';
import Popup from './Popup';
import Popup1 from './Popup1';

function Cards() {

  const [isOpen, setIsOpen] = useState(false);
 

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  return (
    <div className='cards'>
        <h1 id="involvements">Invovlements </h1>
       <div className='popup_buttons'>
        <input 
      type="button"
      value="Involvement Descriptions"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={<>
        <b>Dream Team Engineering </b>
        <p>Dream Team Engineering is a group of engineering and non-engineering students alike that 
          are dedicated to making novel technologies to enhance the lives of the Children at UF Health Shands. 
          My role in the organization as Director of Public Relations is to lead all social communications and 
          run all DTE platforms inluding instagram, linkedIn and the website. 
        
          As a developer on the Epic Interface App team, I work with 7 peers to create an app that integrates remote 
          patient data into the hospital database connecting patients with doctors and limiting readmission rates</p>
        <b>Rewriting the Code </b>
        <p>Women of Rewriting the code has provided me more then a community of supportive
          women striving to achieve success in the field of computing.  It has taught me leadership
          skills, shown me that people are there to help and even has enabled me to learn
          more in the area of Data Structures and Algorithms through a summer intensive. As a 
          Peer Leader I represent the first and second year studnets apart of RTC and represent
          thousands of students across the country. 
        </p>
        <b>Alpha Epsilon Phi </b>
        <p>As part of a sisterhood of over 200 girls, I lead as co-Service Director to get
          sisters involved around the community by finding and hosting two community Service
          related events per month.  I also serve as the apparel chair to help design and
          coordinate apparel orders for different events.  
        </p>
        <b>WICSE </b>
        <p>WICSE is the Women section of ACM, Women in Computer Science Engineering at The 
          University of Florida is a place where I feel that I can connect with other peers and
          truly learn, create and support.  As a chair on the outreach committee, I was in charge of
          organizing a community hackathon for middle and high school students. 
        </p>
      </>}
      handleClose={togglePopup}
    />}
    </div>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem 
                src="imgs/DTE_EXEC.jpg"
                text="Dream Team Engineering"
                label='CS'
                path='/Popup'
                />
                
                <CardItem 
                src="imgs/RTC.jpeg"
                text="Rewriting the Code"
                label='CS'
                path='/services'
                />
                <CardItem 
                src="imgs/WICSE.jpeg"
                text="WICSE"
                label='CS'
                path='/services'
                />
                <CardItem 
                src="imgs/AEPHI.png"
                text="Alpha Epsilon Phi Sorority"
                label='invovlement'
                path='/services'
                />
                </ul>
            </div>
        </div>
        <h1 id="projects">Projects </h1>
        <h2> Your Oasis To Unwind</h2>
        <p1> By collaborating with two peers from across the country after participating in a 
          two week coding camp for Kode with Klossy, we came together to develop a web page
          that encourages users to implement healthy practices into their lifesyles including
          a meditation guide, an online journal, yoga tips and more!
        </p1>
        <h2> Minesweeper</h2>
        <p1>For a final project in school, I developed a minseweeper game using C++ and The
          SFML library in order to match the graphics of the original game and provide all the
          elements of minesweeper
        </p1>
        <h2> Image Proccessor</h2>
        <p1> Another project that resingnated with me was an image processor program developed
          in C++.  This project in particular sparked my interest due to my love for photography and design
          graphics.  The program specifically could superimpose multiple images ontop of each other,
          it can edit RGB values altering the hue of images and it resizes images 
        </p1>
        <h2> Flutter Matching App</h2>
        <p1>  Built an app to process user authentication and have user log personal information in a survey format in order to match friends and facilitate peer connection based on input provided</p1>
    </div>
   
  );
}

export default Cards
