let string="";
for(let rows=1;rows<=5;rows++){
    for(let spaces=1;spaces<=5-rows;spaces++){
        string+=" ";
    }
    for(let stars=1;stars<=2*rows-1;stars++){
        string+="*";
    }
    string+="\n";
    
}
console.log(string)