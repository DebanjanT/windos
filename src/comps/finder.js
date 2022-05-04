import React, { useState } from "react";
import confetti from "canvas-confetti";

export const Welcome = () => {
  const [show, setShow] = useState(true);
  return (
    show && (
      <div className=" bg-black/50 text-white fixed inset-0 text-center backdrop-blur-[2px] flex flex-col justify-center items-center z-50">
        <div className="text-2xl">Debanjan Tewary</div>
        <div className="text-lg text-gray-400">
          Please activate your windos. This Windos is not owned by Bill Gates
        </div>
        {show && (
          <button
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-sm mt-3 w-40"
            onClick={() => setShow(false)}
          >
            Activate
          </button>
        )}
      </div>
    )
  );
};

export const Finder = ({ displayFinder1, setDisplayFinder2 }) => {
  var duration = 1 * 1000;
  var animationEnd = Date.now() + duration;
  var end = Date.now() + 2 * 1000;

  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  const [output, setOutput] = useState("");
  const [input, setInput] = useState(null);

  const handleTewarminal = (e) => {
    try {
      e.preventDefault();
      if (!input || input === "") return setOutput("");
      switch (input) {
        case null || undefined || "":
          setOutput("");
          setInput("");
          break;

        case "ls":
          setOutput("No files in curent directory");
          setInput("");
          break;

        case "clear":
          setOutput("");
          setInput("");
          break;

        case "snow":
          (function frame() {
            var timeLeft = animationEnd - Date.now();
            var ticks = Math.max(200, 500 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);

            confetti({
              particleCount: 1,
              startVelocity: 0,
              ticks: ticks,
              origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: Math.random() * skew - 0.2,
              },
              colors: ["#ffffff"],
              shapes: ["circle"],
              gravity: randomInRange(0.4, 0.6),
              scalar: randomInRange(0.4, 1),
              drift: randomInRange(-0.4, 0.4),
            });

            if (timeLeft > 0) {
              requestAnimationFrame(frame);
            }
          })();
          setInput("");
          setOutput("");
          break;

        case "pwd":
          setOutput("I think you are lost");
          setInput("");
          break;

        case "pride":
          var colors = ["#2563eb", "#ffffff"];

          (function frame() {
            confetti({
              particleCount: 2,
              angle: 60,
              spread: 55,
              origin: { x: 0 },
              colors: colors,
            });
            confetti({
              particleCount: 2,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: colors,
            });

            if (Date.now() < end) {
              requestAnimationFrame(frame);
            }
          })();
          setInput("");
          setOutput("");
          break;

        case "whoami":
          setOutput("Debanjan Tewary (Owner)");
          setInput("");
          break;

        default:
          setOutput(`${input} ?? Do you think I am a real terminal ?`);
          setInput("");
          break;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    displayFinder1 && (
      <>
        <div className="">
          <div className="  text-white fixed inset-0 text-center  flex flex-col justify-center items-center backdrop-blur-md ">
            <div className="w-5/6 h-4/5 bg-black  flex flex-col justify-start items-start opacity-80">
              <div className="w-full bg-white text-black h-8 flex justify-between items-center   ">
                <div>
                  <p className="ml-4 font-semibold text-sm">Tewarminal</p>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => setDisplayFinder2(false)}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white flex items-center justify-center"
                  >
                    <p>X</p>
                  </button>
                </div>
              </div>
              <label
                className=" h-full bg-black flex flex-col p-2 "
                for="tinput"
              >
                <form
                  onSubmit={handleTewarminal}
                  className="mb-3 flex-shrink-0"
                >
                  <code>
                    <span className="mr-2 text-green-400 font-semibold">
                      root ~$
                    </span>
                    <input
                      id="tinput"
                      className=" bg-transparent border-none focus:outline-none text-gray-100 "
                      //   placeholder="root ~ $"
                      autoFocus={true}
                      autoSave={false}
                      autoComplete={false}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </code>
                  <button className="hidden" type="submit">
                    Submit
                  </button>
                </form>
                <code
                  className="flex justify-start text-xs flex-wrap flex-shrink-0"
                  data-output={true}
                >
                  {output && <>- {output}</>}
                </code>
              </label>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export const StartMenu = () => {};
