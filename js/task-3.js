// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает 
// имя самого продуктивного (который выполнил больше всех задач). 
// Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате "имя":"кол-во задач"




const findBestEmployee = function(employees) {
const arrEmployeesE = Object.entries(employees); 
 
let maxNum = 0;
let name;

// console.log(arrEmployeesE.length);
  for (let i = 0; i < arrEmployeesE.length; i += 1) {
    
    if (maxNum < arrEmployeesE[i][1]) {
          maxNum = arrEmployeesE[i][1];
          name = arrEmployeesE[i][0];
      
        };
    
  }
  return `${name} - ${maxNum}`
  };

console.log(
  findBestEmployee({
      ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
     }),
); 

// lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

// // mango

console.log(
  findBestEmployee({   
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); 

// lux