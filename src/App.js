import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./index.css";

let meridiem = ["AM", "PM"];
let minutes = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
];


function App() {
  let [time, setTime] = useState("");

  const renderHours = () => {
    let hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let myHour = "";
    if (typeof time === "object") {
      //check PM time
      if (time.toLocaleTimeString().slice(-2) === "PM") {
        myHour = time.getHours() - 12;
      } else {
        myHour = time.getHours();
      }
    }
    const listItems = hours.map((x) => {
      // console.log("myhour", myHour);
      if (x == myHour) {
        return <i className="custom">{x}&nbsp;</i>;
      } else {
        return <i>{x}&nbsp;</i>;
      }
    });
    // console.log("myhour", myHour);
    return (
      <>
        <div>{listItems}</div>
      </>
    );
  };

  const renderMinutes = () => {
    let myMinute = "";
    if (typeof time === "object") {
      myMinute = time.getMinutes();
    }
    console.log("minutes", myMinute);
    const listItems = minutes.map((x) => {
      // console.log("myhour", myHour);
      if (x == myMinute) {
        return <i className="custom">{x}&nbsp;</i>;
      } else {
        return <i>{x}&nbsp;</i>;
      }
    });
    return (
      <>
        <div style={{ wordBreak: "break-word" }}>{listItems}</div>
      </>
    );
  };

  const renderSeconds = () => {
    let mySecond = "";
    if (typeof time === "object") {
      mySecond = time.getSeconds();
      console.log("seconds", mySecond);
    }
    // console.log('Seconds', mySecond)
    const listItems = minutes.map((x) => {
      // console.log("myhour", myHour);
      if (x == mySecond) {
        return <i className="custom">{x}&nbsp;</i>;
      } else {
        return <i>{x}&nbsp;</i>;
      }
    });
    return (
      <>
        <div style={{ wordBreak: "break-word" }}>{listItems}</div>
      </>
    );
  };

  const renderAMPM = () => {
    let AMPM = "";
    if (typeof time === "object") {
      AMPM = time.toLocaleTimeString().slice(-2);
      console.log("AMPM", AMPM);
    }
    const listItems = meridiem.map((x) => {
      if (x == AMPM) {
        return <i className="custom">{x}&nbsp;</i>;
      } else {
        return <i>{x}&nbsp;</i>;
      }
    });
    return listItems;
  };

  useEffect(
    () => {
      let date = new Date();
      console.log(date.getHours());
      console.log(date.getMinutes());
      console.log(date.getSeconds());
      //am/pm
      console.log(date.toLocaleTimeString().slice(-2));
      setTime(date);
    }
    // ,[] // uncomment for no updating
  );

  return (
    <div className="App container text-center mt-5 border text-uppercase mycontainer">
      <h3>clock</h3>
      <div id="hours">{renderHours()}</div>
      <div id="minutes">{renderMinutes()}</div>
      <div id="seconds">{renderSeconds()}</div>
      <div id="ampm">{renderAMPM()}</div>
    </div>
  );
}

export default App;
