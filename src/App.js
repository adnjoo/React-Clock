import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./index.css";
import Footer from "./components/Footer";

let meridiem = ["AM", "PM"];
const makeminutes = (num) => {
  let x = Array.from(Array(num).keys()).map((y) =>
    y < 10 ? "0" + String(y) : String(y)
  );
  console.log(x);
  return x;
};
//array of strings of 00-59
let minutes = makeminutes(60);

function App() {
  let [time, setTime] = useState("");

  const renderHours = () => {
    let hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let myHour = "";
    if (typeof time === "object") {
      //check PM time
      if (time.toLocaleTimeString().slice(-2) === "PM") {
        myHour = String(time.getHours() - 12);
      } else {
        myHour = String(time.getHours());
      }
      myHour === 0 ? "12" : myHour
    }

    const listItems = hours.map((x) => {
      console.log("myhour", typeof myHour, myHour);
      if (x === myHour) {
        return <i className="custom">{x}&nbsp;</i>;
      } else {
        return <i>{x}&nbsp;</i>;
      }
    });
    console.log("myhour", myHour);
    return (
      <>
        <div>{listItems}</div>
      </>
    );
  };

  const renderMinutes = () => {
    let myMinute = "";
    if (typeof time === "object") {
      myMinute = String(time.getMinutes());
    }
    console.log("minutes", myMinute);
    const listItems = minutes.map((x) => {
      // console.log("myhour", myHour);
      if (x === myMinute) {
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
      mySecond = "" + time.getSeconds();
      console.log("seconds", mySecond);
    }
    // console.log('Seconds', mySecond)
    const listItems = minutes.map((x) => {
      // console.log("myhour", myHour);
      if (x === mySecond) {
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
      if (x === AMPM) {
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
      // console.log(date.getHours());
      // console.log(date.getMinutes());
      // console.log(date.getSeconds());
      // //am/pm
      // console.log(date.toLocaleTimeString().slice(-2));
      setTime(date);
    },
    // [] // uncomment for no updating
  );

  return (
    <>
      <div className="App container text-center mt-5 border text-uppercase mycontainer">
        <h3>clock</h3>
        <div id="hours">{renderHours()}</div>
        <div id="minutes">{renderMinutes()}</div>
        <div id="seconds">{renderSeconds()}</div>
        <div id="ampm">{renderAMPM()}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
