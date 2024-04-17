let btn=document.querySelectorAll(".box");
console.log(btn);
let Xturn=true;
let count=0;
let arr2=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
let para=document.querySelector(".winner");
let resetbtn=document.querySelector("#resett");
btn.forEach( (box)=>
{
     box.addEventListener("click",
     ()=>
      {
            if(Xturn==true)
            {
                box.innerText="x";
                box.style.backgroundColor="darkgray";
                Xturn=false;
                count++;
            }
            else
            {
                box.innerText="o";
                box.style.backgroundColor="darkgray";
                Xturn=true;
                count++;
            } 
          box.disabled=true;  
      }
      
    )
}
)

function checkwin()
{
    for (let val of arr2) 
    {
       let a1= btn[val[0]].innerText;
       let a2= btn[val[1]].innerText;
       let a3= btn[val[2]].innerText;
       if(a1==a2&&a2==a3&& a1!=""&&a2!=""&&a3!="")
       {
        para.innerText="Winner is "+a1;
        para.style.display="block";
        para.classList.add("show");
        btn.forEach((box)=>{box.disabled=true;});
        btn[val[0]].style.backgroundColor="lightgreen";
        btn[val[1]].style.backgroundColor="lightgreen";
        btn[val[2]].style.backgroundColor="lightgreen";
        break;
       }
       else if(count==9)
       {
        para.innerText="Draw";
        para.style.display="block";
        para.classList.add("show");
        btn.forEach((box)=>{box.disabled=true;});
        break;
       }
    }
    
    
}

btn.forEach((box1)=>{box1.addEventListener("click",checkwin)})


function reset()
{
    btn.forEach((box)=>{
        box.innerText="";
        box.style.backgroundColor="grey";
        box.disabled=false;
        para.style.display="none";
        // para.classList.remove("show");
        count=0;
    })
}

resetbtn.addEventListener("click",reset);