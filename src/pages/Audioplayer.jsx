import { useEffect, useState } from "react"; 
import useSound from "use-sound"; 
import booksound from "components/sound/booksound.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(booksound);
  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  }); // current position of the audio in minutes and seconds

  const [seconds, setSeconds] = useState(); // current position of the audio in seconds

  const sec = duration / 1000;
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  const time = {
    min: min,
    sec: secRemain,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  return (
    <div className="border-2 rounded-md max-w-fit m-auto mt-12">
      <div className="flex flex-col items-center px-12">
        <h2 className="text-center my-5">Playing Now</h2>
        <img className="rounded-md" src="https://picsum.photos/200/200" />
        <div className="my-5">
          <h3 className="">Rubaiyyan</h3>
          <p className="">Qala</p>
        </div>
        <div>
          <button className="">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
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
          <button className="">
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
        <div>
          <div className="text-center mt-5">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 3000}
            default="0"
            value={seconds}
            className="my-5"
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
      </div>
    </div>
  );
};


export default AudioPlayer;
