// eslint-disable-next-line no-unused-vars
import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/harsh774')}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT by Harsh</span>
      </h1>
      <h2 className="desc">
        Simplify your Articles with Summize, an open-source paragraph summarizer
        that transforms lengthy articles, blogs into clear and concise
        summaries.
      </h2>
    </header>
  );
};

export default Hero;
