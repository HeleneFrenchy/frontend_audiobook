import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Library = () => {
  return (
    <div>
      <h1 className="text-2xl text-center mt-12 mb-12">Your Library</h1>

      <div className="flex justify-center">
        <div className="pr-3  bg-green-300 rounded-l-md py-2 px-3">
          <PlusCircleIcon className="h-6 w-6 dark:text-black " />
        </div>
        <button className="bg-green-300 rounded-r-md py-2 pr-3 dark:text-black">
          Add Book
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-end ">
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/catstronauts.jpeg"
            alt="Audiobook Catstronauts "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">CatStronauts: Mission Moon</p>
          <p className="text-xs">by Drew Brockington</p>
        </Link>

        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/hat_back.jpeg"
            alt="Audiobook I want my hat back "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold"> I Want My Hat Back</p>
          <p className="text-xs">by Jon Klassen</p>
        </Link>

        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/little_red.jpeg"
            alt="Audiobook Little red "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">
            Little Red and the Very Hungry Lion
          </p>
          <p className="text-xs">by Alex T. Smith</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/my_quiet_imagination.jpeg"
            alt="Audiobook My quiet imagination "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">My Quiet Imagination</p>
          <p className="text-xs">by Udayana Lugo</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/sam_and_pam.jpeg"
            alt="Audiobook Sam and Pam "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">Sam and Pam</p>
          <p className="text-xs">by Iris Grade</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/waiting_is_not_easy.jpeg"
            alt="Audiobook Waiting is not easy "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">Waiting Is Not Easy</p>
          <p className="text-xs">by Mo Willems</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/koala.jpeg"
            alt="Audiobook The koala who could"
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Koala Who Could</p>
          <p className="text-xs">by Rachel Bright</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/little_moon.jpeg"
            alt="Audiobook Hello Little Moon "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">Hello Little Moon</p>
          <p className="text-xs">by Ann Hamilton </p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/rainbowfish.jpeg"
            alt="Audiobook The Rainbow Fish "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Rainbow Fish</p>
          <p className="text-xs">by Marcus Pfister</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/whale.jpeg"
            alt="Audiobook The Whale Who Wanted More  "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Whale Who Wanted More </p>
          <p className="text-xs">by Rachel Bright </p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/grumpy_monkey.jpeg"
            alt="Audiobook Grumpy Monkey "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">Grumpy Monkey</p>
          <p className="text-xs">by Suzanne Lang</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/leaf.jpeg"
            alt="Audiobook The Leaf Thief"
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Leaf Thief</p>
          <p className="text-xs">by Alice Hemming</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/unicorn.jpeg"
            alt="Audiobook The Unicorn That Said No "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Unicorn That Said No</p>
          <p className="text-xs">by Marc-Uwe Kling</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/witch_cat.jpeg"
            alt="The Witch's Cat and The Cooking Catastrophe "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">
            The Witch's Cat and The Cooking Catastrophe
          </p>
          <p className="text-xs">by Kirstie Watson</p>
        </Link>
        <Link href="/" className="mx-3 my-10">
          <img
            className="mb-3"
            src="/images/book/caterpillar.jpeg"
            alt="Audiobook The Very Hungry Caterpillar "
            width={150}
            height={150}
          />
          <p className="text-xs font-bold">The Very Hungry Caterpillar</p>
          <p className="text-xs">by Eric Carle</p>
        </Link>
      </div>
    </div>
  );
};

export default Library;
