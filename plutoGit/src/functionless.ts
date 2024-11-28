 //another method declaring function is below


//normal function

function action(playerNum:number,playerStat:number):number{
    return playerNum + playerStat;

}

console.log(action(5,2));



//functionless declaration:new way of declaring function


let watch=(firstName:string,surname:string)=>{
  return (`My name is ${firstName} and ${surname} is my other name`);
}


console.log(watch("Ebuka","Frank"));  