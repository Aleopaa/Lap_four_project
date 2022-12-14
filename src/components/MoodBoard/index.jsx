import React, {useState} from 'react'
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import { NavLink, Outlet } from 'react-router-dom';
import './styles.css'
import MoodMode from '../MoodMode';
import MusicPlayer from '../MusicPlayer';



//the music player and the moodboard will render here 

function MoodBoard() {
    const [moodBar, setMoodBar] = useState(false);
  
    const showMoodbar = () => setMoodBar(!moodBar);
  
    
  
    return (
        <>
          <div className='moodbar'>
            <NavLink to='#' className='mood-bars'>
              <SiIcons.SiMusicbrainz onClick={showMoodbar} />
            </NavLink>
            </div>
          <nav className={moodBar ? 'mood-menu active' : 'mood-menu'}>
            <ul className='mood-menu-items' id='link' onClick={showMoodbar}>
              <li className='moodbar-toggle'>
                <NavLink to='#' className='mood-bars'>
                  <AiIcons.AiOutlineClose />
                </NavLink>
              </li>
                  <h1>Mood Board</h1>
                  <h3>Customise:</h3>
                  <MoodMode/>
                  <MusicPlayer/>
            </ul>
          </nav>
      </>
    );
} 

  
  export default MoodBoard;
  
  
  