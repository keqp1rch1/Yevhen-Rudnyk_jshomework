const date = new Date();

const options = {
  weekday: "short",
  era: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const datee = date.toLocaleString("De-de", options);

const dateeу = date.toLocaleString("It-it", options);

console.log(datee);

console.log(dateeу);

