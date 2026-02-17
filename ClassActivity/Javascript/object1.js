//Singleton literals

const singleton = new Object;
console.log(singleton);//it creates empty object => {}
const user = {};//non-singleton object
user.id = "1234";
user.name = "sakshi";
user.isLogin = true;

console.log(user);//{ id: '1234', name: 'sakshi', isLogin: true }

//object inside the object
const user1 = {
    email : "magdumsakshi4578@gmail.com",
    userName : 
    {
        fullName : {fname : "sakshi", surname : "magdum"}

    }
}
console.log(user1);