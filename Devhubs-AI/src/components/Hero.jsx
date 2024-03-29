// eslint-disable-next-line no-unused-vars
import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open(
              "https://twitter.com/Devhubhq",
              "_blank"
            )
          }
          className="black_btn"
        >
          Follow us on Twitter
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">DevHubs AI</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Devhubs AI, an article, news summarizer that
        transforms lengthy articles into clear and concise summaries!
      </h2>
    </header>
  );
};

export default Hero;
