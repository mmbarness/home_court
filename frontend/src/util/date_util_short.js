export const formatDate = (date) => {
  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  const daysOfWeek = {
    0: "Sun",
    1: "Mon",
    2: "Tues",
    3: "Wed",
    4: "Thurs",
    5: "Fri",
    6: "Sat",
  };
  const obj = new Date(date);
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const dayOfWeek = daysOfWeek[obj.getDay()];
  return `${dayOfWeek}, ${month} ${day}`;
};

export const formatTime = (date) => {
  const obj = new Date(date);
  const fullHours = obj.getHours();
  let hours = fullHours % 12;
  if (hours === 0) hours = 12;
  const minutes = obj.getMinutes();
  const tmp = `0${minutes}`;
  const paddedMinutes = tmp.slice(tmp.length - 2);
  const ampm = fullHours < 12 || fullHours === 0 ? "am" : "pm";
  return `${hours}:${paddedMinutes}${ampm}`;
};

export const formatDateTime = (date) =>
  `${formatDate(date)} at ${formatTime(date)}`;
