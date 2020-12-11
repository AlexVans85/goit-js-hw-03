// Напиши функцию getAllPropValues(arr, prop), 
// которая получает массив объектов и имя свойства. 
// Возвращает массив значений определенного свойства prop из каждого объекта в массиве.



const products = [
    { name: 'Радар', price: 1300, quantity: 4, },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];

  
  let getAllPropValues = function(arr, prop) {
    const names = [];
    for (let item of products){
        names.push(item.name);
    }
return names
  };
  
  
  console.log(getAllPropValues(products, 'name')); 
  // ['Радар', 'Сканер', 'Дроид', 'Захват']


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


   getAllPropValues = function(arr, prop) {
    const quantity = [];
    for (let item of products){
    //    console.log(item);
    quantity.push(item.quantity);
    }
return quantity
  };
  
   console.log(getAllPropValues(products, 'quantity')); 
//   // [4, 3, 7, 2]


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


getAllPropValues = function(arr, prop) {
    const category = [];
    for (let item of products){
    
    category.push(item.category);
    }
return category
  };
  
   console.log(getAllPropValues(products, 'category')); 
//   // []