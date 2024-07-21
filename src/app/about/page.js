"use client";

import React from "react";

import DOMPurify from "isomorphic-dompurify";

const About = () => {
  //   const sanitizedContent = DOMPurify.sanitize(navLinks.about.content);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-7xl font-bold mb-4 text-center">About</h1>
      <div className="mb-4 w-full border border-yellow-300 bg-yellow-300 rounded p-4">
        {/* <p dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> */}
        <div className="py-2">
          I came up with the idea for{" "}
          <span className="font-bold">Female Mileage Calculator</span> when I
          was scrolling through some memes and I came across this one post. This
          guy was dating this college girl and the topic of body count came up.
          The girl he was dating told him a ridiculously high number.
        </div>
        <div className="py-2">
          Somewhere around 300 bodies. He was shocked to hear such a high
          number, but then decided to see how long that was in terms of
          distance. He did some calculations and found out that it was around 30
          miles of dick end to end. So he decided to drive 30 miles to see how
          long that really was.
        </div>
        <div className="py-2">
          I created this simple calculator as something for fun and to get an
          idea on why body count matters. With this information hopefully it
          will help woman see in one way how their sexual decisions have
          consequences.
        </div>
      </div>
    </div>
  );
};

export default About;
