import React from 'react';
import { TwitterIcon, GithubIcon, CodepenIcon, InstagramIcon } from './icons';
import SRT from './srt';
import './footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="Footer__text">
        © {new Date().getFullYear()}. Absolutely zero rights reserved.
      </p>
      <ul className="Footer__socialMenu">
        <li className="Footer__item">
          <a
            href="https://twitter.com/chancethedev"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer__link"
          >
            <SRT>Chance's Twitter</SRT>
            <TwitterIcon className="Footer__icon" aria-hidden />
          </a>
        </li>
        <li className="Footer__item">
          <a
            href="https://github.com/chancestrickland"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer__link"
          >
            <SRT>Chance's GitHub</SRT>
            <GithubIcon className="Footer__icon" aria-hidden />
          </a>
        </li>
        <li className="Footer__item">
          <a
            href="https://codepen.io/chancethedev"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer__link"
          >
            <SRT>Chance's CodePen</SRT>
            <CodepenIcon className="Footer__icon" aria-hidden />
          </a>
        </li>
        <li className="Footer__item">
          <a
            href="https://www.instagram.com/chancethedev"
            target="_blank"
            rel="noopener noreferrer"
            className="Footer__link"
          >
            <SRT>Chance's Instagram</SRT>
            <InstagramIcon className="Footer__icon" aria-hidden />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
