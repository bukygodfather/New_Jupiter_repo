const mafNumB:number=34;
const mafNumA:number=15;
//ordinary conditional statement

if (mafNumA>45){
    console.log("Number Greater");
    
}
else{
    console.log("Lets see")
}

//else if statements

if (mafNumA>45){
    console.log("Number Greater");    
}
else if(mafNumA==mafNumB){
    console.log("Very possible");
}else if(mafNumA<=mafNumB){
    console.log("Much greater than");
}else if(mafNumA<mafNumB){
    console.log("Check again");
}else{
    console.log("Check again");
}

//nested statement

if (mafNumA>45){
    console.log("Number Greater");    
}
else if(mafNumA==mafNumB){
    console.log("Very possible");
}else if(mafNumA<=mafNumB){
    console.log("Much greater than 231");
    if(mafNumA==15){
        console.log("nested statement");
    }else if(mafNumB==34){
        console.log("Still on Nested");
    }
}else if(mafNumA<mafNumB){
    console.log("Check again");
}else{
    console.log("DEFAULT");
}

