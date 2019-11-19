function formatDate(date) {
  return date
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}

function getIntFromDate(date) {
  date = date.replace("T", "");
  date = date.replace("Z", "");
  date = date.replace(".", "");
  date = date.replace(/:/g, "");
  date = date.replace(/-/g, "");
  return parseInt(date);
}

function throttle(func, delay) {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
    setTimeout(() => {
      inProgress = false;
    }, delay);
  };
}

module.exports.formatDate = formatDate;
module.exports.getIntFromDate = getIntFromDate;
module.exports.throttle = throttle;
