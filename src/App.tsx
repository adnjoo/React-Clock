import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./index.css";
import Footer from "./components/Footer";

const makeminutes = (num: any) => Array.from(Array(60).keys()).map((y) => "" + y); // no zeros in front of # 0 to 9

//array of strings from 00-59
let minutes = makeminutes(60);
// console.log(minutes);
let meridiem = ["AM", "PM"];

const App = () => {
  let [time, setTime] = useState<any>("");

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
      if(myHour === "0") {
        myHour = "12"
      }
    }

    const listItems = hours.map((x) => {
      // console.log("myhour", typeof myHour, myHour);
      if (x === myHour) {
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
      myMinute = String(time.getMinutes());
    }
    // console.log("minutes", myMinute);
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
      // console.log("seconds", mySecond);
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
      // console.log("AMPM", AMPM);
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

  useEffect(() => {
    setInterval(() => {
      let date = new Date();
      setTime(date);
    }, 1000);
    },[]);
    // uncomment for no updating

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
};

export default App;
