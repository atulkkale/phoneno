zero=[];
one=[];
two = ["a","b","c"]; //this is keypad characters associated with keypad numbers.
three = ["d","e","f"];
four = ["g","h","i"];
five = ["j","k","l"];
six = ["m","n","o"];
seven = ["p","q","r","s"];
eight = ["t","u","v"];
nine = ["w","x","y","z"];
  

numchar = [zero,one,two,three,four,five,six,seven,eight,nine]; //all keypad numbers arrays stored inside this array.
numfunctionvar = []; // storing userinupt array to this array which converted into a function arguments numone, numtwo, numthree.

num = prompt("please enter a number for possible letters" , 786);
intnum = parseInt(num); // converting it to integer to testing edge cases.
updateno = num.toString().split(""); // converting userinupt to a array.
updatenolen = updateno.length; // save the length of array.

switch (true) { 
  case (updatenolen>3): //edge case for typing more than three numbers.
    document.write("Please enter proper number between 2 to 9. Enter upto 3 numbers.");
    break;

  case (updatenolen==0): //edge case for typing nothing.
    document.write("Please enter proper number between 2 to 9. Enter upto 3 numbers.");
    break;

  case (intnum==NaN): //edge case for typing letters instade of numbers.
    document.write("Please enter proper number between 2 to 9. Enter upto 3 numbers.");
    break;

  case (intnum<=1): //edge case for typing number less than 2.
    document.write("Please enter proper number between 2 to 9. Enter upto 3 numbers.");
    break;

  case (updatenolen>=1): //this case associate userinupt to same number of array. if user type 5 it associate it with array of five.
    for(r=0;r<=updatenolen -1;r++){
      for(i=2;i<=9;i++){
        f=i;
        if(updateno[r].includes(f.toString())){
          numfunctionvar.push(numchar[i])
        } 
      } 
    }
    break;
    
  default: 
    document.write("Please enter proper number between 2 to 9. Enter upto 3 numbers.");
    break;
}

numone = numfunctionvar[0]; // converted userinupt array to function arguments.
numtwo = numfunctionvar[1];
numthree = numfunctionvar[2];

if(updatenolen==1){ //this if for cheking the length of input and calls a function with arguments according it.
  getchar(numone);
}else if(updatenolen==2){
  getchar(numone,numtwo);
}else if(updatenolen==3){
  getchar(numone,numtwo,numthree);
}

function getchar(numone,numtwo,numthree){ //this is a main function where output generates.
  if(numone==seven || numone==nine){
    numonelen = 3;
  }else{
    numonelen = 2;
  }
  if(numtwo==seven || numtwo==nine){
    numtwolen = 3;
  }else{
    numtwolen = 2;
  }
  if(numthree==seven || numthree==nine){
    numthreelen = 3;
  }else{
    numthreelen = 2;
  }
    
  if(updatenolen == 1){
    numtwolen=0;
    numthreelen=0;
  }
  else if(updatenolen==2){
    numthreelen = 0;
  }
   
  for(i=0;i<=numonelen;i++){
    for(j=0;j<=numtwolen;j++){
      for(k=0;k<=numthreelen;k++){
        if(updatenolen==1){
          key = numone[i];
        }
        else if(updatenolen==2){
          key = numone[i] + numtwo[j];
        }
        else{
          key = numone[i] + numtwo[j] + numthree[k];
        }
      document.write(key + ", ");
      }
    }
  }
}