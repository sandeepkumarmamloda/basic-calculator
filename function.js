function calculator(){
    let buttons=document.querySelectorAll(".button");
    let input=document.querySelector("input");
    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",function(){
        if(`${input.value}`===``){
            input.value="0";
        }
        if(`${buttons[i].innerText}`===`-`){
            if((input.value.length===1)&&(input.value==="0")){
                input.value=buttons[i].innerText;
            }
        }
        if(`${buttons[i].innerText}`===`${document.querySelectorAll(".number")["10"].innerText}`){
            if(input.value==="0"){
                input.value+=``;
            }else{
                input.value+=buttons[i].innerText;
            }
        }
        else if(`${parseInt(buttons[i].innerText)}`!==`${NaN}`){
            if((input.value.length===1)&&(input.value[0]==="0")){
                input.value=buttons[i].innerText;
            }
            else{
            input.value+=buttons[i].innerText;
            }
        }
        else if(`${parseInt(buttons[i].innerText)}`===`${NaN}`){
                if(`${parseInt(input.value[input.value.length-1])}`===`${NaN}`){
                    let array1=[...input.value];
                    let newArray1=array1.reverse();
                    let ni1="";
                    for(let i=0;i<newArray1.length;i++){
                        ni1+=newArray1[i];
                    }
                    let ni2=ni1.replace(input.value[input.value.length-1],buttons[i].innerText);
                    let array2=[...ni2];
                    let newArray2=array2.reverse();
                    let ni3="";
                    for(let i=0;i<newArray2.length;i++){
                        if(newArray2[i]==="C"){
                            ni3+="";
                        }
                        else if(newArray2[i]==="="){
                            ni3+="";
                        }else{
                            ni3+=newArray2[i];
                        }
                    }
                    input.value=ni3;
                }
                else if((buttons[i].innerText!=="=")&&(buttons[i].innerText!=="C")){
                    input.value+=buttons[i].innerText;
                }
                else if(buttons[i].innerText==="="){
                    let string=input.value.replaceAll(document.querySelector(".division").innerText,"/").replaceAll(document.querySelector(".multiplication").innerText,"*").replaceAll(document.querySelector(".minus").innerText,"-");
                    if((input.value[0]===0)&&(input.value[1]!==".")){
                        input.value=input.value.replace(0," ");
                    }
                    input.value=eval(string);
                }
                else if(buttons[i].innerText==='C'){
                    let array=[...input.value];
                    let string="";
                    for(let i=0;i<array.length;i++){
                        if(i===array.length-1){
                            string+="";
                        }else{
                        string+=array[i];
                        }
                    }
                    if(string.length!==0){
                        input.value=string;
                    }
                    else{
                        input.value="0";
                    }
                }
        }
    });}
}
let on=document["all"][9];
let ac=document["all"][8];
on.addEventListener("click",function(){
        document.querySelector("input").value="0";
        on.style.backgroundColor="rgba(255,255,255,0.3)";
        on.innerText="...";
        document.querySelector("input").style.backgroundColor="rgba(255,255,255,0.9)";
        calculator();
},{once:true});
ac.addEventListener("click",function(){
    if(on.innerText==="..."){
        document.querySelector("input").value="0";
    }
});