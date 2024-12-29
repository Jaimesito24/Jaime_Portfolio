import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (<>
    <div className="mt-5 laptop:mt-20 p-0">
      <div>
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            LET&apos;S MAKE SOMETHING
          </h1>
          <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
            TOGETHER.
          </h1>
          
          <div className="mt-5">
            <Socials />
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-sm text-bold mt-2 laptop:mt-5 p-0">
      Made With Care by Jaime Nieves
    </h1>
  </>);
};

export default Footer;
