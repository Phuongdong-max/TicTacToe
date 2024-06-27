import React, { useRef, useState } from "react";
import "./tictactoe.css";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data: string[] = ["", "", "", "", "", "", "", "", ""];

const Tictactoe = () => {
  const [count, setCount] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const box1 = useRef<HTMLDivElement>(null);
  const box2 = useRef<HTMLDivElement>(null);
  const box3 = useRef<HTMLDivElement>(null);
  const box4 = useRef<HTMLDivElement>(null);
  const box5 = useRef<HTMLDivElement>(null);
  const box6 = useRef<HTMLDivElement>(null);
  const box7 = useRef<HTMLDivElement>(null);
  const box8 = useRef<HTMLDivElement>(null);
  const box9 = useRef<HTMLDivElement>(null);

  const box_array: React.RefObject<HTMLDivElement>[] = [
    box1,
    box2,
    box3,
    box4,
    box5,
    box6,
    box7,
    box8,
    box9,
  ];

  const toggle = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    num: number
  ) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      (e.target as HTMLDivElement).innerHTML = `<img src='${cross_icon}'>`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      (e.target as HTMLDivElement).innerHTML = `<img src='${circle_icon}'>`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner: string) => {
    setLock(true);
    if (winner === "x") {
      (
        titleRef.current as HTMLHeadingElement
      ).innerHTML = `Congratulation : <img src=${cross_icon}> Win`;
    } else {
      (
        titleRef.current as HTMLHeadingElement
      ).innerHTML = `Congratulation : <img src=${circle_icon}> Win`;
    }
  };

  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    (
      titleRef.current as HTMLHeadingElement
    ).innerHTML = `Tic Tac Toe Game In <span>React</span>`;
    box_array.map((e) => {
      (e.current as HTMLDivElement).innerHTML = "";
    });
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        {" "}
        Tic Tac Toe Game In <span>React</span>{" "}
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            ref={box1}
            onClick={(e) => {
              toggle(e, 0);
            }}></div>
          <div
            className="boxes"
            ref={box2}
            onClick={(e) => {
              toggle(e, 1);
            }}></div>
          <div
            className="boxes"
            ref={box3}
            onClick={(e) => {
              toggle(e, 2);
            }}></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            ref={box4}
            onClick={(e) => {
              toggle(e, 3);
            }}></div>
          <div
            className="boxes"
            ref={box5}
            onClick={(e) => {
              toggle(e, 4);
            }}></div>
          <div
            className="boxes"
            ref={box6}
            onClick={(e) => {
              toggle(e, 5);
            }}></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            ref={box7}
            onClick={(e) => {
              toggle(e, 6);
            }}></div>
          <div
            className="boxes"
            ref={box8}
            onClick={(e) => {
              toggle(e, 7);
            }}></div>
          <div
            className="boxes"
            ref={box9}
            onClick={(e) => {
              toggle(e, 8);
            }}></div>
        </div>
      </div>
      <button
        className="reset"
        onClick={() => {
          reset();
        }}>
        Reset
      </button>
    </div>
  );
};

export default Tictactoe;
