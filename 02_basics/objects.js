//Object literals

const JsUser = {
    name: "jash",
    age: 20,
    location: "mumbai",
    email: "jash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//console.log(JsUser.email);
//console.log(JsUser)

const course = {
    coursename: "Js in hindi",
    price:"999",
    courseInstructor: "Hitesh",
}
//Destructuring 
const {courseInstructor} = course 
console.log(courseInstructor);

/*
const navbar = ({company}) => {

}

navbar(company = "Jash")
*/