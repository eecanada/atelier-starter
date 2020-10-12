import React from 'react';
import config from '../../config';

console.log('eder')

// Assign handler to message event
if ( window.addEventListener ) {
  window.addEventListener('message', handleMessage, false);
} else if ( window.attachEvent ) { // ie8
  window.attachEvent('onmessage', handleMessage);
}

// message event handler (e is event object) 
function handleMessage(e) {
  // Reference to element for data display
  var el = document.getElementById('footer');
  // Check origin
  if ( e.origin === 'https://www.archertravel.com/evo-supplier-archer-go-eder-draft/' ) {
      // Retrieve data sent in postMessage
      el.innerHTML = e.data;
      // Send reply to source of message
      e.source.postMessage('Message received', e.origin);
  }
}


export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`icon ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; The Atelier </li>
        <li>
          <p> Let's make it happen</p>
          <p>  {console.log('ederr')} </p>
          {/* Credits: <a href="http://unsplash.com/">Unsplash</a> +
          <a href="http://html5up.net">HTML5 UP</a> */}
        </li>
      </ul>
    </footer>
  );
}
