
// modules 

// 1- core modules 
 
  const fs = require("fs")

  fs.writeFileSync( "data1.txt" , "islam mohamed" )

//   console.log(fs.readFileSync("data1.txt").toString())

  fs.appendFileSync("data1.txt" , " , kero khairy")

//   console.log(fs.readFileSync("data1.txt").toString())

  fs.appendFileSync("data1.txt" , " , islam shaker")


///////////////////////////////////////////////////////////////////////////////////////////////

  const x = require("./allData")

  // console.log(x.fName)
  // console.log(x.lName)
  // console.log(x.city)
  // console.log(x.age)
  // console.log(x.fun1(7,6))


  ////////////////////////////////////////////////////////////////////////////////////////////

  // 2  npm :

  const validator = require("validator")
// const yargs = require("yargs")

  //  console.log(validator.isEmail("drahmed@gmail.com"))

/////////////////////////////////////////////////////////////////////////////////////////////

  //  console.log(process.argv)

  // const command = process.argv[2]

  // if(command === "add"){
  //   console.log("you have added an item ")
  // } else if (command === "delete"){
  //   console.log("you have deleted an item ")
  // }else {
  //   console.log("ERROR")
  // }

////////////////////////////////////////////////////////////////////////////////////////////

// npm 

    //  const yargs = require("yargs")

    //  console.log(yargs.argv)
  
  //////////////////////////////////////////////////////////////////////////////////////////

  // const yargs = require("yargs")

  // yargs.command ({
  //     command : "add",
  //     describe : "to add an item",
  //     handler:()=> {
  //       console.log("you have already added an item")
  //     }
  // })

  // console.log(yargs.argv)


// /////////////////////////////////////////////////////////////////

// builder : options that command deal with 


// const yargs = require("yargs")

// yargs.command ({
//     command : "add",
//     describe : "to add an item",
//     builder: {
//       fname : {
//          describe: "this is the first name description in add command",
//          demandOption: true,
//          type : "string"
//       },
//       lname : {
//         describe: "this is the last name description in add command",
//         demandOption: true,
//         type : "string"
//      }
//     },
//     handler:()=> {
//       console.log("you have already added an item")
//     }
// })


// yargs.command({
//   command : "delete",
//   describe : "to delete an item",
//   handler:()=> {
//     console.log("you have already deleted an item")
//   }

// })

// console.log(yargs.argv)

///////////////////////////////////////////////////////////////////////////////////////////

// const person1 = {
//   fname : "islam",
//   lname: "mohamed"
// }

// console.log(person1)
// console.log(person1.lname)

//    const person1Json = JSON.stringify(person1)
//    console.log(person1Json)

//    const person1Obj = JSON.parse(person1Json)
//    console.log(person1Obj)


//    fs.writeFileSync("data10.json" , person1Json )

////////////////////////////////////////////////////////////////////////////////////////////////////////

const data101 = require("./data10")
const yargs = require("yargs")
const { log } = require("console")

yargs.command ({
    command : "add",
    describe : "to add an item",
    builder: {
      fname : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lname : {
        describe: "this is the last name description in add command",
        demandOption: true,
        type : "string"
     }
    },
    handler:(x)=> {
      data101.add(x.id,x.fname , x.lname , x.age,x.city)
    }
})

yargs.command({
  command : "delete",
  describe : "to delete an item",
  handler : (x)=>{
     data101.deleted(x.id);
  }
})

yargs.command({
  command : "read" , 
  describe : "to read data",
  builder : {
    id : {
      demandOption : true , 
      type : "string", 
      describe : "id os item"
    }
  },
  handler : (x)=>{
     data101.search(x.id)
  }
})

yargs.command({
  command : "list",
  describe : "list elements",
  handler : ()=>{
    data101.list();
  }
})

yargs.parse()




  








 