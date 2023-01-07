let str="level"
let flag = false;
    let revStr = "";
    for(let i = str.length-1; i>=0; i--){
        revStr= revStr+str[i];
        
    }
    // console.log(revStr, revStr.length)
    for(let i = 0; i<str.length; i++){
        if(str[i] == revStr[i]){
            flag = true;
        }
        else{
            flag ;
            break;
        }
    }
    if(flag==true){
        console.log("Yes")
    }else{
        console.log("No")
    }
    // code fixed by sumit nimbalkar