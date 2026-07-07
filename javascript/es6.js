// var a;

// let b = "";

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);
// const name = "Jhon";
// const address
// const str = `My name ${name}.`

// console.log(a, b, c, d, e);

// const obj = {
//   name: "jhon",
//   phone: "981223432",
//   email: "jhon@gmail.com",
//   password: "1234567890",
// };

// const userName = obj.name
// const {name, password, phone, email} = obj

// const fun = ({name, phone}) =>{
// console.log(a);

// }
// fun(obj)

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8,9,0]

// let arr3 = [...arr1, ...arr2]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const [a, b, c, d, e, ...res] = arr;
// console.log(others);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr3);

// let obj = {
//   name: "jhon",
//   phone: "981223432",
//   email: "jhon@gmail.com",
//   password: "1234567890",
// };

// let {password, ...others} = obj;
// console.log(others);
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.map((item, index) => {
  console.log(`Index ${index} : Value ${item}`);
});

const api = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];



// api.map((item, index) => {
//   console.log(`UserId: ${item.userId}`);
//   console.log(`Title: ${item.title}`);
//   console.log(`Body: ${item.body}`);
//   console.log("===========================================");
// });
