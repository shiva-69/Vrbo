const express = require("express");
const city = require("../Database/City");

async function getCity(req,res){
    console.log('in getcity')
    let {name} = req.params;
    let newName = name.charAt(0).toUpperCase() 

    for(let i = 1; i<name.length; i++){
        newName+=name[i];
    }
  
    console.log(newName,'Name')
    let reqCity = []
    let cityies = await city.find().limit(1000); 
    console.log(cityies.length)
    for(let i = 0; i<cityies.length; i++){
        let flag = false;
        console.log(newName, cityies[i].city)
        for(j in newName){
            if(newName[j] == cityies[i].city[j]){
            flag = true;
            }
            else{
                flag = false
                break;
            }
        }
        if(flag){
            reqCity.push({"city" : cityies[i].city, "country" : cityies[i].country})
            // console.log(cityies[i])
        }
    }
console.log(reqCity)
res.send(reqCity)
    // return res.status(300).json(reqCity)
}

module.exports = getCity;