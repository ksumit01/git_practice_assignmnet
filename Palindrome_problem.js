let flag = false;
    let revStr = "";
    for(let i = N-1; i>=0; i--){
        revStr= revStr+str[i];
        
    }
    // console.log(revStr, revStr.length)
    for(let i = 0; i<N; i++){
        if(str[i] == revStr[i]){
            flag = true;
        }
        else{
            flag ;
            break;
        }
    }
    if(){
        console.log("Yes")
    }else{
        console.log("No")
    }