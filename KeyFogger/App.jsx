import { anticipate, motion, useScroll } from "motion/react";
import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [animKey, setAnimKey] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const getRand = (max) => {
    const array = new Uint32Array(1);
    let x;
    const limit = Math.floor(4294967296 / max) * max;
    do {
      crypto.getRandomValues(array);
      x = array[0];
    } while (x >= limit);
    return x % max;
  };

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = getRand(i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generatePassword = (length = 16) => {
    const lowers = "abcdefghijkmnopqrstuvwxyz"; // no l
    const uppers = "ABCDEFGHJKLMNPQRSTUVWXYZ"; // no I O
    const digits = "23456789"; // no 0 1
    const symbols = "!@#$%^&*()-_=+[]{};:,.?";
    const pools = [lowers, uppers, digits, symbols];

    const required = pools.map((pool) => pool[getRand(pool.length)]);
    const all = pools.join("");
    const out = [...required];
    for (let i = out.length; i < length; i++) {
      out.push(all[getRand(all.length)]);
    }
    return shuffle(out).join("");
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleGenerate = async () => {
    setAnimKey((k) => k + 1);
    setShouldAnimate(true);
    await sleep(1000);
    setPassword(generatePassword(18));
  };

  return (
    <div className="relative h-screen">
      <h1 className="stalinist-title absolute left-[35.5%] top-[13%] text-4xl text-black/80">
        KEY FORGE
      </h1>
      <div className="topCover bg-[#FFBF00] absolute left-[32%] top-[23.6%] w-[35%] h-15 z-6"></div>
      <div className="bottomCover bg-[#FFBF00] absolute left-[32%] top-[66.3%] w-[35%] h-15 z-6"></div>
      <div className="firstBorder bg-[#512609] absolute z-20 w-23 h-1 top-[32.6%] left-[33.4%]"></div>
      <div className="firstBorderBottom bg-[#512609] absolute z-20 w-23 h-1 top-[65.8%] left-[33.4%]"></div>
      <div className="secondBorder bg-[#512609] absolute z-20 w-22 h-1 top-[65.8%] left-[42.1%]"></div>
      <div className="secondBorderBottom bg-[#512609] absolute z-20 w-22 h-1 top-[32.6%] left-[42.1%]"></div>
      <div className="thirdBorder bg-[#512609] absolute z-20 w-23 h-1 top-[32.6%] left-[50.5%]"></div>
      <div className="thirdBorderBotom bg-[#512609] absolute z-20 w-23 h-1 top-[65.8%] left-[50.5%]"></div>
      <div className="fourthBorder bg-[#512609] absolute z-20 w-22 h-1 top-[65.8%] left-[59.3%]"></div>
      <div className="fourthBorderBottom bg-[#512609] absolute z-20 w-22 h-1 top-[32.6%] left-[59.3%]"></div>
      <div className="MainContainer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%]">
        <img src="scrole.png" alt="" />
      </div>
      <motion.div
        key={`plate1-${animKey}`}
        className="Plate1 absolute w-27 top-[25%] left-[32.8%]"
        initial={{ x: 0, y: 0 }}
        animate={shouldAnimate ? { y: 24 } : { y: 0 }}
        transition={
          shouldAnimate
            ? {
                duration: 0.2,
                delay: 0,
                repeat: 3,
                repeatType: "reverse",
              }
            : { duration: 0 }
        }
        onAnimationComplete={() => setShouldAnimate(false)}
      >
        <img src="plate_1.png" alt="" />
      </motion.div>
      <motion.div
        key={`plate2-${animKey}`}
        className="Plate2 absolute w-27 top-[31%] left-[41.4%]"
        initial={{ x: 0, y: 0 }}
        animate={shouldAnimate ? { y: -24 } : { y: 0 }}
        transition={
          shouldAnimate
            ? {
                duration: 0.2,
                delay: 0,
                repeat: 3,
                repeatType: "reverse",
              }
            : { duration: 0 }
        }
      >
        <img src="plate_2.png" alt="" />
      </motion.div>
      <motion.div
        key={`plate3-${animKey}`}
        className="Plate3 absolute w-27 top-[25%] left-[50%]"
        initial={{ x: 0, y: 0 }}
        animate={shouldAnimate ? { y: 24 } : { y: 0 }}
        transition={
          shouldAnimate
            ? {
                duration: 0.2,
                delay: 0,
                repeat: 3,
                repeatType: "reverse",
              }
            : { duration: 0 }
        }
      >
        <img src="plate_1.png" alt="" />
      </motion.div>
      <motion.div
        key={`plate4-${animKey}`}
        className="Plate4 absolute w-27 top-[31%] left-[58.65%]"
        initial={{ x: 0, y: 0 }}
        animate={shouldAnimate ? { y: -24 } : { y: 0 }}
        transition={
          shouldAnimate
            ? {
                duration: 0.2,
                delay: 0,
                repeat: 3,
                repeatType: "reverse",
              }
            : { duration: 0 }
        }
      >
        <img src="plate_2.png" alt="" />
      </motion.div>
      <div className="PasswordBox bg-white w-[35%] h-16 absolute top-72 left-[32.1%] rounded-2xl border-3 border-black shadow-[30px_30px_0_rgba(0,0,0,0.3)] flex items-center">
        <input
          type="text"
          value={password}
          placeholder="Pou109icecReam#2000Deb"
          readOnly
          className="px-5 text-[22px] font-semibold text-gray-700 border-none outline-none focus:outline-none focus:ring-0"
        />
        <button
          onClick={handleGenerate}
          className="bg-[#2194ff] hover:bg-red-500 font-bold py-3 px-3 w-[27.2%] absolute left-86 h-full rounded-r-[13.5px] border-l-2"
        >
          GENERATE
        </button>
      </div>
      <h5 className="stalinist-title absolute top-[86%] left-[45%] text-[20px] text-black/70 z-99">
        Mahek.
      </h5>
      <div className="w-full h-36 bg-white absolute bottom-0 rounded-t-4xl"></div>
    </div>
  );
};

export default App;
