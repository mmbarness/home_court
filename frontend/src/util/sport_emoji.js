export const displaySportWithEmoji = (sport) => {
  switch (sport) {
    case "Basketball":
      return "Basketball π";
    case "Volleyball":
      return "Volleyball π";
    case "Football":
      return "Football π";
    case "Soccer":
      return "Soccer β½οΈ";
    case "Spikeball":
      return "Spikeball π€ΎββοΈ";
    case "Tennis":
      return "Tennis πΎ";
    case "Badminton":
      return "Badminton πΈ";
    case "Baseball":
      return "Baseball βΎοΈ";
    case "Ping Pong":
      return "Ping Pong π";
    default:
      return "oops";
  }
};
