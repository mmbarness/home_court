import React from 'react';
import '../style/css/footer.css';

export const Footer = ()=> {
return(
<footer className="footer">
    <div className="">
        <p>About the Team:</p>
        <section className="">
        <ul role="list">
        <li>
        <h2>Team Lead: Matthew Barnes</h2>
        <ul role="list">
        <li><a href="https://github.com/matt2yu" src='https://i.imgur.com/42DWuG0.png' target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a></li>
        </ul>
        </li>
        <li>
        <h2>Frontend Lead: William Ku</h2>
        <ul role="list">
        <li><a href="https://github.com/matt2yu" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a></li>
        </ul>
        </li>
        <li>
        <h2>Backend Lead: Matthew Yu</h2>
        <ul role="list">
        <li><a href="https://github.com/matt2yu" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a></li>
        </ul>
        </li>
        <li>
        <h2>Google Maps Flex: Moustafa Garcia</h2>
        <ul role="list">
        <li><a href="https://github.com/chrisj1225" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/matthewyu1/" target="_blank">LinkedIn</a></li>
        </ul>
        </li>
        </ul>
        </section>
    </div>
    Copyright &copy; 2021 matty & the boyz
</footer>
    )
}

export default Footer;