// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of


const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

//1
user.mood = 'happy';
console.log(user);

//2
user.hobby = 'skydiving';
console.log(user);

//3


user['premium']=false
console.log(user)

//4

const enteries = Object.entries(user)
console.log(enteries)

for (const entry of enteries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`)
}

