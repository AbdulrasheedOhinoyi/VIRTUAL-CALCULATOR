function display(val){
    if(document.getElementById('result').value==='0'){
        document.getElementById('result').value= val
    }
    else{
    document.getElementById('result').value += val;}
}

function solve(){
    let x = document.getElementById('result').value
    let y = eval(x);
    document.getElementById('result').value =y;
}

function clearScreen(){
    document.getElementById('result').value=0
}


//using querySelector to achieve the down button
let singleFunction = document.querySelectorAll('button');

// console.log(singleFunction)
singleFunction.forEach((btn) => 
    // console.log(btn.textContent));
    btn.addEventListener('click', () => {
        answer = Number(document.getElementById('result').value)
       

        if(btn.textContent==="SQRT"){
            document.getElementById('result').value= Math.sqrt(answer);
        }

        else if(btn.textContent==="SQR"){
            document.getElementById('result').value=eval(answer * answer)
        }

        else if(btn.textContent==="CUBE"){
            document.getElementById('result').value=eval(answer*answer*answer)
        }

        else if(btn.textContent==="CUBRT"){
            document.getElementById('result').value=Math.cbrt(answer)
        }

        else if(btn.textContent==="%"){
            document.getElementById('result').value=(answer/100 + '%')
        }
        
    })
)


//using function to achieve the same part as querySelector
//the singleFunction class division
// function SQR(){
// let answer = Number(document.getElementById('result').value)

//     result = eval(answer * answer)
//     document.getElementById('result').value = result
// }



// function SQRT(){
//     let answer = Number(document.getElementById('result').value)
    
//         result = Math.sqrt(answer)
//         document.getElementById('result').value = result
//     }

// function CUBE(){
//     let answer = Number(document.getElementById('result').value)
        
//         result = eval(answer * answer * answer)
//         document.getElementById('result').value = result
//         }


// function CUBRT(){
//     let answer = Number(document.getElementById('result').value)
        
//         result = Math.cbrt(answer)
//         document.getElementById('result').value = result
//         }

// function percentage(){
//     let answer = Number(document.getElementById('result').value)
//         result = eval(answer/100)
//         document.getElementById('result').value = (result + '%')
//         }
