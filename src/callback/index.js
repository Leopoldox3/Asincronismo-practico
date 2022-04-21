// const sum= (num1, num2) =>{
//     return num1 + num2;
// } 

// const calc= (num1,num2, callback)=> {
//   return  callback(num1,num2);
// }
// console.log(calc(6,2,sum));

////////////////////////

const date = (callback) =>{
    console.log(new Date);// se genera la primer fecha antes del settimeout
    setTimeout(()=>{ // variable que almacenara la segnda fecha en el timeout
    let date = new Date;
    callback(date);//la función que se le pasara como parametro el...
                    //valor de la la variable declarada arriba "que es una fecha"
    },3000)    
}

//y asu vez callback es en realidad printDate la función de abajo

const printDate = (dateNow) => { //esta función solo manda a imprimir la fecha que tenemos en la variable let date de arriba
   console.log(dateNow);
}

// const callback2 = (dateNow) => {
//     console.log(`soy el callback2 + ${dateNow}`)
// }

date(printDate); //callback en realidad
