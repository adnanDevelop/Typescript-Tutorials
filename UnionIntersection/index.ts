// UNION IN TYPESCRIPT
// Union are used when a value can be more than  a single type. And union symbol is represented by (|)
// Exmple

const UnionType = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    let newValue = value.charAt(0).toUpperCase() + value.slice(1);
    return newValue;
  } else if (typeof value === "boolean") {
     return (value ? 'Yes' : 'False');
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("Passed value is false");
  }
};

// console.log(UnionType("adnan"));
// console.log(UnionType(20));
// console.log(UnionType(true));


// INTERSECTION
// It allows us to combine multiple types into single types. And its symbol is (&)  to define intersection.
// Iska matlb ye h jb hum object k 2 anums bana dain aur hum chahty h k teesra na banana pary toh wahan py hum intersection ka use kerty h jo dono ki keys ko combine ker deta h aur phir unko fill kerna mendatory ho jata h sari fileds ko.

// EXAMPLE
type anumOne = {
    name : string;
    age : number
}

type departmentInfo = {
    depart : string,
    id : number;
}

type finalInfo = anumOne & departmentInfo;
//Ab in dono ko combine kerny k liye hum intersection ka use kerain gy

const firstStudent:finalInfo = {
    name   : 'Adnan',
    age : 20,
    depart : 'IT',
    id : 20,
}

// console.log(firstStudent);

// PRACTICE QUESTION
// create user and myLocation type. The user type contain basic information.While mylocation contain details. Create a function called userDetailFunction.
type userProfile = {name : string ; age : number};
type userDetail = {city : string ; phone : string};
type allDetail = userDetail & userProfile;

const userData:allDetail = {name : 'Wajid' , age : 26 , city : 'Pindigheb' , phone : '03230838837'};

const userDetailFunction = (value:allDetail):string => {
    return `Username is : ${value.name} and he is from  ${value.city}`
}

console.log(userDetailFunction(userData));




