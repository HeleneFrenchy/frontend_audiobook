import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Library() {
  function Book({ title, author, imgSrc, imgAlt }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
      setExpanded(!expanded);
    };

    return (
      <div className="mx-3 my-10 flex flex-col items-start">
        <Link to="/">
          <img
            className="mb-3"
            src={imgSrc}
            alt={imgAlt}
            width={150}
            height={150}
          />
        </Link>
        <div className="flex flex-col w-36">
          <p
            className={`text-xs font-bold ${
              expanded ? "" : "truncate"
            }`}
            onClick={toggleExpanded}
          >
            {title}
          </p>
          
            <p className="text-xs" onClick={toggleExpanded}>
              {author}
            </p>
          
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl text-center mt-12 mb-12">Your Library</h1>
      <div className="flex flex-wrap justify-center items-end">
        <Book
          title="CatStronauts: Mission Moon"
          author="by Drew Brockington"
          imgSrc="/images/book/catstronauts.jpeg"
          imgAlt="Audiobook Catstronauts"
        />
        <Book
          title="I Want My Hat Back"
          author="by Jon Klassen"
          imgSrc="/images/book/hat_back.jpeg"
          imgAlt="Audiobook I Want My Hat Back"
        />
        <Book
          title="Little Red and the Very Hungry Lion"
          author="by Alex T. Smith"
          imgSrc="/images/book/little_red.jpeg"
          imgAlt="Audiobook Little red"
        />
        <Book
          title="My Quiet Imagination"
          author="by Udayana Lugo"
          imgSrc="/images/book/my_quiet_imagination.jpeg"
          imgAlt="Audiobook My quiet imagination"
        />
        <Book
          title="Sam and Pam"
          author="by Iris Grade"
          imgSrc="/images/book/sam_and_pam.jpeg"
          imgAlt="Audiobook Sam and Pam"
        />
        <Book
          title="Waiting Is Not Easy"
          author="by Mo Willems"
          imgSrc="/images/book/waiting_is_not_easy.jpeg"
          imgAlt="Audiobook Waiting is not easy"
        />
        <Book
          title="The Koala Who Could"
          author="by Rachel Bright"
          imgSrc="/images/book/koala.jpeg"
          imgAlt="Audiobook The koala who could"
        />
        <Book
          title="Hello Little Moon"
          author="by Ann Hamilton"
          imgSrc="/images/book/little_moon.jpeg"
          imgAlt="Audiobook Hello Little Moon"
        />
        <Book
          title="The Rainbow Fish"
          author="by Marcus Pfister"
          imgSrc="/images/book/rainbowfish.jpeg"
          imgAlt="Audiobook The Rainbow Fish"
        />
        <Book
          title="The Whale Who Wanted More"
          author="by Rachel Bright"
          imgSrc="/images/book/whale.jpeg"
          imgAlt="Audiobook The Whale Who Wanted More"
        />
        <Book
          title="Grumpy Monkey"
          author="by Suzanne Lang"
          imgSrc="/images/book/grumpy_monkey.jpeg"
          imgAlt="Audiobook Grumpy Monkey"
        />
        <Book
          title="The Leaf Thief"
          author="by Alice Hemming"
          imgSrc="/images/book/leaf.jpeg"
          imgAlt="Audiobook The Leaf Thief"
        />
        <Book
          title="The Unicorn That Said No"
          author="by Marc-Uwe Kling"
          imgSrc="/images/book/unicorn.jpeg"
          imgAlt="Audiobook The Unicorn That Said No"
        />
        <Book
          title="The Witch's Cat and The Cooking Catastrophe"
          author="by Kirstie Watson"
          imgSrc="/images/book/witch_cat.jpeg"
          imgAlt="Audiobook The Witch's Cat and The Cooking Catastrophe"
        />
        <Book
          title="Grandad's Island"
          author="by Benji Davies"
          imgSrc="/images/book/grandad.jpeg"
          imgAlt="Audiobook Grandad's Island"
        />
      </div>
    </div>
  );
}



export default Library;
