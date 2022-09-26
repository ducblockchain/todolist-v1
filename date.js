exports.getDate=getDate;
exports.getDay=getDay;


function getDate() {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  var day = today.toLocaleDateString("en-US", options);
  return day;
}
function getDay() {
  const today = new Date();
  const options = {
    weekday: "long",

  };
  var day = today.toLocaleDateString("en-US", options);
  return day;
}
