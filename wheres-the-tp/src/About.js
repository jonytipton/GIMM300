import React from 'react';
import './App.css';
import friends from './img/friends.png';

function About() {
  return (
    <div className = "about-us">
        <div>
            <h1>About TPFrenzy</h1>
            <hr/>
            </div>
        <img className="friends-img" src={friends}></img>
            <p>
            At TP Frenzy, we understand that the best way to combat these crazy times is by working together. </p>
            
            <p>Vestibulum pharetra augue sit amet urna mattis tempor. Pellentesque efficitur dui eget laoreet luctus. Fusce id commodo purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam in rutrum nisl. Morbi et augue urna. Ut in arcu ex.</p>

            <p>
            Aliquam nec ultrices augue, eu elementum nibh. Maecenas vel ullamcorper tellus. Quisque volutpat pulvinar ligula eu dictum. Donec eget tellus nibh. Nunc accumsan mollis lacus, quis venenatis orci dignissim nec. Donec a facilisis ligula. Proin laoreet, ligula eget cursus bibendum, erat tellus ultrices velit, ac mattis risus dui quis mauris. Phasellus et blandit arcu. Aliquam mollis pulvinar mollis. Quisque facilisis nulla vel urna posuere mattis.
            </p>

            <footer> 
              <small>Thank you hatice97erol from Pixabay for their beautilful art.</small>
            </footer>

    </div>
  );
}

export default About;