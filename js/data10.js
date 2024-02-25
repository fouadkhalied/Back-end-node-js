

 const fs = require("fs")
const allData = require("./allData");
const { log } = require("console");



const loadData =()=>{
  try
  {
    const cs = fs.readFileSync("data10.json").toString();
    return JSON.parse(cs);
  }
  catch
  {
    return []
  }
}
////////////////////////////////////////////////////////////////////////////////
const add =(id , fname , lname , age , city)=>{
  const allData = loadData();
  const dublicate = allData.filter((obj)=>{return obj.id === id})
  if(dublicate.length == 0)
  {
    allData.push({
      id : id ,
      fname : fname,
      lname : lname,
      age : age , 
      city : city 
    }) 
    save(allData);
  }
  else
  {
    console.log("id already exists");
  }
}
/////////////////////////////////////////////////////////////////////////////////
const save = (allData)=>{
  const cs = JSON.stringify(allData);
  fs.writeFileSync("data10.json" , cs);
}
///////////////////////////////////////////////////////////////////////////////////
const deleted = (id)=>{
  const cs = loadData();
  const index = cs.filter((obj)=>{return obj.id !== id})
  save(index);
}
//////////////////////////////////////////////////////////////////////////////////
const search = (id)=>{
  const cs = loadData();
  const index = cs.find((obj) => {return obj.id == id});
  if (index == undefined) {
    console.log("item not found");
  }  
  else
  {
    console.log(index.fname);
  }
}
////////////////////////////////////////////////////////////////////////////////////
const list = ()=>{
  const cs = loadData();
  if (cs.length == 0) {
    console.log("no items to display");
  }
  else
  {
     cs.forEach((element) => {
        console.log(element.fname + " " + element.lname);
     });
  }
}
module.exports = {
  add,deleted,search,list
}

