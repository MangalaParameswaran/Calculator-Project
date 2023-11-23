function calCulator(tagname,content,attrname,attrvalue,classvalue){
    let Container=document.createElement(tagname);
    Container.innerText=content;
    Container.setAttribute(attrname,attrvalue,attrname,attrvalue)
    Container.classList.add(classvalue);
    return Container;
};
let div1=calCulator("div","","id","div1","container");
let div2=calCulator("div","","id","div1","calculator");
let input1=calCulator("input","","placeholder","0","display");
let button1=calCulator("button","C","type","button","button2");
let button2=calCulator("button","Del","type","button","button3");
let button3=calCulator("button",".","type","button","button");
let button4=calCulator("button","*","type","button","button");
let button5=calCulator("button","7","type","button","button");
let button6=calCulator("button","8","type","button","button");
let button7=calCulator("button","9","type","button","button");
let button8=calCulator("button","/","type","button","button");
let button9=calCulator("button","4","type","button","button");
let button10=calCulator("button","5","type","button","button");
let button11=calCulator("button","6","type","button","button");
let button12=calCulator("button","-","type","button","button");
let button13=calCulator("button","1","type","button","button");
let button14=calCulator("button","2","type","button","button");
let button15=calCulator("button","3","type","button","button");
let button16=calCulator("button","+","type","button","button");
let button17=calCulator("button","0","type","button","button");
let button18=calCulator("button","00","type","button","button");
let button19=calCulator("button","=","type","button","button1");

div1.append(div2);
div2.append(input1,button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11, button12,button13,button14,button15,button16,button17,button18,button19);
document.body.append(div1);

const buttons= document.querySelectorAll(".button,");
buttons.forEach(button=>button.addEventListener("click",()=>fun(button.textContent)));
function fun(num){
    input1.value += num;
}
let data=["C","Del",".","*","7","8","9","/","4","5","6","-","1","2","3","+","0","00","="];
fun(data);
const eql=document.querySelector(".button1");
eql.addEventListener("click",foo);
function foo(){
    try{
        input1.value = eval(input1.value);
    }
    catch(err){
        alert("only numbers are allowed");
    }
}
const clr=document.getElementsByClassName("button2");
clr.addEventListener("click",clr());
function clr(){
    input1.value = "";
}
const del=document.getElementsByClassName("button3");
del.addEventListener("click",del)
function del(){
    input1.value = input1.value.slice(0,-1)
}


















