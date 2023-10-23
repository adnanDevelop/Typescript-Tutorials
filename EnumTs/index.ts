// What is enum in typescript
// Enum are commonly used when you want to represent a set of related values and choose one value from multiple options. Enum provide a convanient way to define a set of named value and associate them with specific meaningns

// CREATING ENUM
enum Roles {
  user = "user",
  admin = "Admin",
}

type Login = {
  name: string;
  password: string;
  role: Roles;
};

const user1: Login = {
  name: "Adnan",
  password: "adnan",
  role: Roles.user,
};
const user2: Login = {
  name: "Wajid",
  password: "wajid123",
  role: Roles.admin,
};

const isAdmin = (value: Login) => {
  const { name, role } = value;
  if (role === "Admin") {
    return `${name} you are allow`;
  }
};
const isUser = (value: Login) => {
  const { name, role } = value;
  if (role === "user") {
    return `${name} you are not allow`;
  }
};

// console.log(isAdmin(user2), isUser(user1));
// console.log(user1, user2);


// TUPLES
// Tuples are data structure that allow you to store a fixed size collection of elements of different types. They are similar to array but with a key difference.The type of element in a tuples are fixed and declared at the time of creation, Whereas arrays can hold element of the sae type, and their size can vary.

// CREATING TUPLES Ager hum chahty h k jo bhi hum ny tuple create kia h usmain koi element add na ho jb hum push method ka use kery toh us sy bachnay k lye tuples ka jo array h uske start main readonly add kerna h 
type ArrCollection = readonly [string , number , boolean];

const driverOne:ArrCollection = ['Adnan' , 26 , true];
const drivertwo:ArrCollection = ['Hanan' , 28 ,false];

// driverOne.push('adnan')    readonly laganay sy ab compilor error dega k is tarah hum array main new  elements add nai ker sakty.

const haveLicense = (value:ArrCollection) => {
    const [name , age , license] = value;
    console.log(`Name : ${name} his/her age is : ${age} and have license ${license ? 'true' : 'false'}`)
}

console.log(haveLicense(driverOne ));
console.log(haveLicense(drivertwo));

console.log(driverOne);






