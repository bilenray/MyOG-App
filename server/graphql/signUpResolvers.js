const garageData = require('../mongoDB/garage')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { userValidationError } = require('../errorHandler')
const mongoose = require('mongoose');
require('dotenv').config()
const MONGO_DB = process.env.MONGO_URI;
module.exports = {
  createUser: async (args, req) => {
    
  },
  createGarage: async (args, req) => {
    console.log(args.garageData,args.garageData.Name,"args in create garage")
    try{
      args.Password = await bcrypt.hash(args.garageData.Password, 12)
      console.log(args.Password, "hashed_password")
      const user = new garageData(args.garageData)
      //
      mongoose.connect(MONGO_DB)
      user.save((err, user)=>{
        if (err){
          throw userValidationError(err);
        }else{
          console.log("user is saved")
          return user;
        }
      })
      return user;
    } catch (err){
      console.log(err)
    }

    // return await (async ()=> await mongoose.connect(MONGO_DB).then(()=>user.save((err, user)=>{
    //   if (err){
    //     throw userValidationError(err);
    //   }else{
    //     console.log("user is saved")
    //     return user;
    //   }
    // })))()
    //
    // await mongoose.connect(MONGO_DB).then(()=>{user.save((err, user)=>{
    //   if (err){
    //     throw userValidationError(err)
    //   }else{
    //     console.log("user is returned")
    //     return user;
    //   }
    //   }
    // )
    // }).catch((err)=>{return `${err} catchh err while connecting to save garage`})
},
}