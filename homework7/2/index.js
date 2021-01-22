  
const countProps = function (object) {
    const values = Object.values(object);
    return values.length;
};
  
console.log(countProps({})); // 0
  
console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3