/*
    T-diagram
    ______________________________
    j   |   1,2,4,5,6,8,9,10,11,12,14,15,16

    output: 1,4,5,8,10,11,14,16
*/

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}