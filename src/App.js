import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  let [time, setTime] = useState("");
  let [hours, setHours] = useState('')

  useEffect(() => {
    let date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    //am/pm
    console.log(date.toLocaleTimeString().slice(-2)); 
    setTime(date);
  }, []);
  return (
    <div className="App container text-center mt-5 border text-uppercase">
      <div id="hours">1 2 3 4 5 6 7 8 9 10 11 12</div>
      <div id="minutes">
        01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 18 19 20 21 22 23
        24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47
        48 49 50 51 52 53 54 55 56 57 58 59
      </div>
      <div id="seconds">
        01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 18 19 20 21 22 23
        24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47
        48 49 50 51 52 53 54 55 56 57 58 59
        48 49 50 51 52 53 54 55 56 57 58 59
      </div>
      <div id="ampm">AMPM</div>
    </div>
  );
}

export default App;
