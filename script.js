// 1) Читаем материалы
// 2) Написать скрипт принимающий число и выводящий является ли оно больше нуля и четным.


let num = Number.parseInt(prompt("input a number"));
if (num === NaN){
    alert("this is not a number");
}else{
    alert("number "+num+" "+(num > 0 ? "": "not ")+"more than zero, and "+(num % 2? "not ": "")+"even");
    // 2) Одновременно или по отдельности?
    // alert((num > 0 && !(num % 2)) ? "yes, more than zero and even": "not, not more than zero and event");
}