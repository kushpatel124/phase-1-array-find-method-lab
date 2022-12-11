const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  { year: "2012", result: "L" },
  { year: "2011", result: "L" },
  { year: "2010", result: "L" },
]


function superbowlWin(array) {
  for (let item of array) {
    if (item.result === "W") {
      return item.year;
    }
  }
}