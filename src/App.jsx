import React from "react";
import Snowfall from "react-snowfall";
import photo from "./assets/snow-2.png";

const App = () => {
  const snowFlake = document.createElement("img");
  snowFlake.src = photo;

  const images = [snowFlake];
  return (
    <>
      <div className="snowfal">
        <Snowfall
          snowflakeCount={200}
          images={images}
          radius={[10, 20]}
          speed={[0.9, 3]}
          wind={[0.5, 1.5]}
        />
      </div>
    </>
  );
};
export default App;
