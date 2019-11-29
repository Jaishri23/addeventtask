//Iterate thorugh an object in Javascript
var employee={
    name: "jaishri",
    city: "hydeerabad",
    state:"Telanagana"
};
for(let key in employee){
    console.log(key + ":" + employee[key]);
}