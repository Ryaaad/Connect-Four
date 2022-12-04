
import { useEffect, useState } from "react";
import Case from "./Case";
import Player from "./Player";
const Board = () => {
    const [NoOne, setNoOne] = useState(false)
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
   const Restart=()=>{
    window.location.reload()
   }
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
        setNoOne(true); console.log("no oneee");
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
    {  !NoOne && 
      <div style={{boxShadow: "0px 17px 3px -4px rgba(0,0,0,8)"}}
    className="p-3 top-[8%] pb-4 border-[3px] border-[black] border-solid rounded-[30px] bg-white z-10  relative "
     onMouseMove={(event)=>{
        const cursor=document.getElementById("select")
        let X=event.pageX - 490
        if(X<-10) X=-10
        if(X>370) X=370
        if(cursor != null) cursor.style.left= X+"px"; }}>
            <Player Type={0} Name="Ramy" Wins={10}></Player>
            <Player Type={1}  Name="Rayan" Wins={5}></Player>
            <div id="select" className={`w-[40px] h-4 absolute top-[-5%] translate-x-[50%] bg-black`}  ></div>
            <div  className=" bg-[#5c2dd5] font-semibold text-white text-center text-lg rounded-full p-1
             px-5 fixed top-[3%] right-[38%] cursor-pointer  " onClick={()=>{Restart()}} > Restart </div>
   
       <div  className="grid rounded-md justify-center grid-cols-[repeat(7,50px)] grid-rows-[repeat(6,50px)] 
       gap-3 w-[420px] cursor-pointer h-[380px]">
      <div className="absolute top-0 right-0 h-[435px] w-[70px]"  
       onClick={()=>{Clicked(7)}}> </div>  
      <div className="absolute top-0 right-[70px]  h-[435px] w-[60px]"
       onClick={()=>{Clicked(6)}}> </div>  
      <div className="absolute top-0 right-[130px]  h-[435px] w-[60px]"
       onClick={()=>{Clicked(5)}}> </div>  
      <div className="absolute top-0 right-[195px]  h-[435px] w-[60px]"
       onClick={()=>{Clicked(4)}}> </div>  
      <div className="absolute top-0 right-[255px]  h-[435px] w-[60px]" 
       onClick={()=>{Clicked(3)}}> </div>  
      <div className="absolute top-0 right-[315px]  h-[435px] w-[60px]"
       onClick={()=>{Clicked(2)}} > </div>  
      <div className="absolute top-0 right-[375px]  h-[435px] w-[70px]"
       onClick={()=>{Clicked(1)}}
      > </div>  
  {Cord.map(Cor=>{
    return <Case {...Cor} key={`${Cor.C}${Cor.Row}`} ></Case>
  })}  
  
        </div>
        </div>}
        {NoOne && <div>NULL</div>  }
        </>);
}
 
export default Board;