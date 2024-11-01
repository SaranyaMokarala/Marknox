import React from 'react';
import Github from './static/github.svg';
import Youtube from './static/youtube.svg';
import Gmail from './static/gmail.svg';
import Linkedin from './static/linkedin.svg';
import X from './static/x.svg';
import './Footer.css';


export function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <a className="icon-link" href="mslv.saranya@gmail.com"><img className="icon" alt="Gmail" src={Gmail} /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/saranya-mokarala/"><img className="icon" alt="Linkedin" src={Linkedin} /></a>
                <a className="icon-link" href="https://github.com/SaranyaMokarala"><img className="icon" alt="Github" src={Github} /></a>
                <a className="icon-link" href="https://x.com/SaranyaMokaralas"><img className="icon" alt="X" src={X} /></a>
                <a className="icon-link" href="/"><img className="icon" alt="Youtube" src={Youtube} /></a>
            </div>
        </footer>
    );
}