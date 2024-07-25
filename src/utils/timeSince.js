export const timeSince = (date) => {
  console.log(date);
  const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  // let interval = second/31536000;
  // if(interval>1){
  //     return Math.floor(interval) = "years";
  // }

  // interval = second/259200;
  // if(interval>1){
  //     return Math.floor(interval) = "months";
  // }

  // interval = second/86400;
  // if(interval>1){
  //    return Math.floor(interval) = "days";
  // }

  // interval = second/3600;
  // if(interval>1){
  //     return Math.floor(interval) = "hours";
  //  }

  //  interval = second/60;
  //  if(interval>1){
  //     return Math.floor(interval) = "minutes";
  //  }

  // return Math.floor(second) = "seconds"

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
