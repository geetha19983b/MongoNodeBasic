const mongoose= require('mongoose');

//mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true,useMongoClient: true});
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useMongoClient: true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"Please check your data entry,no name specified"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

// const fruit = new Fruit({
//   name:"Idiot",
//   rating:7,
//   review:"Pretty solid as a fruit"
// });
// var validResult = fruit.validateSync();
// if(validResult)
// {
// console.log('validResult is ', validResult);
// }
// else
// {
//
// fruit.save();
// }
//update the fruit name to IdiotGeetha whose id is as mentioned
// Fruit.updateOne({_id:"5dcea6a9c3cfca20889cbbbe"},{name:"IdiotGeetha"},function(err){
//   if(err){
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully updated");
//   }
//
// });
//delete the fruit with the name
//Fruit.deleteOne({ name: 'IdiotGeetha' }, function (err) {});
//const kiwi = new Fruit({
//   name:"Kiwi",
//   rating:10,
//   review:"The best fruit"
// });
// const orange = new Fruit({
//   name:"Orange",
//   score:4,
//   review:"Too sour for me"
// });
// const banana= new Fruit({
//   name:"Banana",
//   score:3,
//   review:"Weird texture"
// });

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("Successfully saved all the fruits to fruitsdB");
//   }
// })

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else
  {
  //  console.log(fruits);
   mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favoriteFruit:fruitSchema
});

const Person = mongoose.model("Person",personSchema);
// const pineapple = new Fruit({
//   name:"Pineapple",
//   score:9,
//   review:"Great fruit"
// });
// pineapple.save();
// const person = new Person({
//   name:"Amy",
//   age:12,
//   favoriteFruit:pineapple
// });
// const person = new Person({
//   name:"John",
//   age:37
// });
// person.save();
//Person.deleteMany({ name: /John/ }, function (err) {})

const stupid = new Fruit({
  name:"Stupid Fruit",
  score:10,
  review:"Greates stupid fruit"
});
stupid.save();

//update john's favorite fruit to stupid fruit
Person.updateOne({name:"John"},{favoriteFruit:stupid},function(err)
{
  if(err){
    console.log(err);
  }
  else
  {
    console.log("Successfully updated");
  }
});
