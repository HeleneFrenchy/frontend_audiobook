import { useEffect, useRef, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useSearchParams } from "react-router-dom";
import { useBooks } from "hooks/useBooks";

const AudioPlayer = () => {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get("b");
  const [book] = useBooks(bookId ? [bookId] : []);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!book?.audio) {
      return;
    }

    const audio = new Audio(book.audio);
    audioRef.current = audio;
  }, [book]);

  const playingButton = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="border-2 rounded-md w-80 m-auto mt-12">
      <div className="flex flex-col items-center px-12">
        <h2 className="text-center my-5">Playing Now</h2>
        <img className="rounded-md w-full" src={book?.image} />
        <div className="my-5 text-center">
          <h3 className="">{book?.title}</h3>
          <p className="">{book?.author}</p>
        </div>
        <div className="mb-5">
          {!isPlaying ? (
            <button className="" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button className="" onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
