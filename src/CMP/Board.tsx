
import { useEffect, useState } from "react";
import Case from "./Case";
const Board = () => {
    let NoOne=false
    let Turn=false
    const [first, setfirst] = useState(false)
    let max=[6,6,6,6,6,6,6];
    let full=[0,0,0,0,0,0,0]
  
    
    const Cord=[
{C:1,Row:1,e:0,u:''},{C:2,Row:1,e:0,u:''},{C:3,Row:1,e:0,u:''},{C:4,Row:1,e:0,u:''},{C:5,Row:1,e:0,u:''},{C:6,Row:1,e:0,u:''},{C:7,Row:1,e:0,u:''},
{C:1,Row:2,e:0,u:''},{C:2,Row:2,e:0,u:''},{C:3,Row:2,e:0,u:''},{C:4,Row:2,e:0,u:''},{C:5,Row:2,e:0,u:''},{C:6,Row:2,e:0,u:''},{C:7,Row:2,e:0,u:''},
{C:1,Row:3,e:0,u:''},{C:2,Row:3,e:0,u:''},{C:3,Row:3,e:0,u:''},{C:4,Row:3,e:0,u:''},{C:5,Row:3,e:0,u:''},{C:6,Row:3,e:0,u:''},{C:7,Row:3,e:0,u:''},
{C:1,Row:4,e:0,u:''},{C:2,Row:4,e:0,u:''},{C:3,Row:4,e:0,u:''},{C:4,Row:4,e:0,u:''},{C:5,Row:4,e:0,u:''},{C:6,Row:4,e:0,u:''},{C:7,Row:4,e:0,u:''},
{C:1,Row:5,e:0,u:''},{C:2,Row:5,e:0,u:''},{C:3,Row:5,e:0,u:''},{C:4,Row:5,e:0,u:''},{C:5,Row:5,e:0,u:''},{C:6,Row:5,e:0,u:''},{C:7,Row:5,e:0,u:''},
{C:1,Row:6,e:0,u:''},{C:2,Row:6,e:0,u:''},{C:3,Row:6,e:0,u:''},{C:4,Row:6,e:0,u:''},{C:5,Row:6,e:0,u:''},{C:6,Row:6,e:0,u:''},{C:7,Row:6,e:0,u:''},
    ]
  const check=(element: {C:number;Row:number;e:number;u:string;})=>{

  }
   const ClickedCol=(key:number)=>{
    if(full[key-1]!=1)
    Cord.forEach(element => {
        
        if(element.C==key){
            // setfirst(Turn); ndiro ynik lhala 9a3e
            if(element.Row==max[key-1] && element.e==1) {max[key-1]=max[key-1]-1;}
           else if(element.Row==max[key-1]  && element.e!=1 ){
           element.e=1;
            const Element=document.getElementById(`a${key}${max[key-1]}`) 
            if(Element!= null ) { 
              if(Turn) {  Element.style.background='red'; element.u='a';  check(element)} 
              else {Element.style.background='green'; element.u='b' } }
           Turn=!Turn
        }
          if(max[key-1]==0) full[key-1]=1;
        }
      });  
    else{ console.log(key,":full"); 
    let test=true;
    for (let i =0; i < full.length; i++) { if(full[i]!=1) test=false }
    if(test){
        NoOne=true; console.log("no oneee");
        setfirst(true)
    }
     }
      
   }

    const Clicked=(key:number)=>{
   switch (key) {
    case 1:
   ClickedCol(1); 
        break;
    case 2:
        ClickedCol(2); 
        break;
    case 3:
        ClickedCol(3);  
        break;
    case 4:
        ClickedCol(4);   
        break; 
    case 5:
        ClickedCol(5);   
        break;
    case 6:
        ClickedCol(6);
        break;      
    case 7:
        ClickedCol(7);  
        break;     
   }
    }
    return ( 
        
        <>
    {  !NoOne &&  <div  >
    <div className="p-5 mt-5 bg-black relative "
     onMouseMove={(event)=>{
        const cursor=document.getElementById("select")
        let X=event.pageX - 420
        if(X<0) X=0
        if(X>520) X=520
        if(cursor != null) cursor.style.left= X+"px"; 

    }}
    >
            <div id="select" className={`w-[60px] h-5 absolute top-[-5%] translate-x-[50%] bg-black`}  >

            </div>
       <div  className="grid rounded-md grid-cols-7 grid-rows-6 gap-5 w-[600px] h-[500px]">
      <div className="absolute top-0 right-0 h-[540px] w-[95px]"  
       onClick={()=>{Clicked(7)}}> </div>  
      <div className="absolute top-0 right-[95px] h-[540px] w-[90px]"
       onClick={()=>{Clicked(6)}}> </div>  
      <div className="absolute top-0 right-[185px] h-[540px] w-[90px]"
       onClick={()=>{Clicked(5)}}> </div>  
      <div className="absolute top-0 right-[275px] h-[540px] w-[90px]"
       onClick={()=>{Clicked(4)}}> </div>  
      <div className="absolute top-0 right-[365px] h-[540px] w-[90px]" 
       onClick={()=>{Clicked(3)}}> </div>  
      <div className="absolute top-0 right-[455px] h-[540px] w-[90px]"
       onClick={()=>{Clicked(2)}} > </div>  
      <div className="absolute top-0 right-[545px] h-[540px] w-[90px]"
       onClick={()=>{Clicked(1)}}
      > </div>  
  {Cord.map(Cor=>{
    return <Case {...Cor} key={`${Cor.C}${Cor.Row}`} ></Case>
  })}  
  
        </div>
        </div>
        </div> }
        {NoOne && <div>NULL</div>  }
        </>);
}
 
export default Board;