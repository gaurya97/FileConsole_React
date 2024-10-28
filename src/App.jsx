import { useState } from "react";
import { Navbar } from "./component/Navbar";
import "./styles.css";
import { useEffect } from "react";
import { Home } from "./component/Home";

export default function App() {
  const [Minutes, SetMinutes] = useState(0);
  const [Second, SetSecond] = useState(0);

  const Counter = () => {
    if (Second >= 0 && Second < 59) {
      SetSecond((Osecond) => {
        return Osecond + 1;
      });
    }
    if (Second === 59) {
      SetMinutes((OMinutes) => {
        return OMinutes + 1;
      });
      SetSecond(1);
    }
    if (Minutes >= 2) {
      ClearTimer();
    }
  };

  const ClearTimer = () => {
    SetSecond(0);
    SetMinutes(0);
  };

  document.addEventListener("mousemove", () => {
    ClearTimer();
  });

  useEffect(() => {
    let Timer = setInterval((e) => {
      Counter();
    }, 1000);
    return () => {
      clearInterval(Timer);
    };
  }, [Second, Minutes]);

  return (
    <div className="App">
      <Navbar minutes={Minutes} second={Second} />
      <Home />
    </div>
  );
}
