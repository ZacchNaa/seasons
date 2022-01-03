import React from "react";
import "./SeasonDisplay.css";

/**
 * useful pattern to use
 */
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun", //name of icon from the semantic-ui.com
  },
  winter: {
    text: "Burr, it is chiily",
    iconName: "snowflake", //name of icon from the semantic-ui.com
  },
};
/**
 * Note that months are zero index [0=Jan and 11=Dec]
 * function to return season
 */
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

// SeasonDisplay Component
const SeasonDisplay = (props) => {
  // props destructuring
  const { lat, time } = props;

  const season = getSeason(lat, new Date().getMonth());
  console.log(seasonConfig[season]);
  // text to show
  const text =
    season === "summer" ? "Burr, it is chilly" : "Let's hit the beach";
  // icon to display
  const icon = season === "summer" ? "sun" : "snowflake";

  return (
    <div className={`seasonDisplay ${season}`}>
      <i className={`iconLeft massive ${icon} icon`} />
      <h1>{text}</h1>
      <h4>{time}</h4>
      <i className={`iconRight massive ${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
