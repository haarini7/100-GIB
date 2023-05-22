str=""
for(i=0;i<5;i++){
    for(j=0;j<5;j++){
        if(i==0 || i==4){
            str+="*";
        }
        else{
            if(j==0 || j==4){
                str+="*"
            }
            else{
                str+=" "
            }
        }
        
    }
    str+='\n';
}
console.log(str);
