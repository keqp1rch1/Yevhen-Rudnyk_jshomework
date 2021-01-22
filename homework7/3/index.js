const findBestEmployee = function (employees) {
  let total = 0;
  let productive = "";
  for (const key in employees) {
      if (employees[key] > total) {
          total = employees[key];
          productive = key;
      }
  }
  return productive;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

