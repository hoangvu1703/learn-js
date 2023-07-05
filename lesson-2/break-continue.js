// break & Continue in loop


// for(var i = 0; i < 10; i++){
//     console.log(i);
// }
for(var i = 0; i < 10; i++){
    //muốn in ra chẵn or lẻ dùng từ khoá Continue
    if(i%2 !==0){
        continue;
    }//in ra số chẵn
    console.log(i);
}