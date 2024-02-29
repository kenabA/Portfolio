const dateData = document.querySelector(".fetch-date");

const date = new Date();

const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};

dateToday = date.toLocaleString("en-IN", options);

dateData.textContent = dateToday;
