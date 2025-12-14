import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const inntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () =>{
      clearInterval(intervalId);
      console.log("Cancelled");
    };
  }, []);
  return (
    <p className="lead">
      This is the Current Time :{time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
