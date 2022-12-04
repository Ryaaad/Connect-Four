interface props{
    Type:number,
    Name:string,
    Wins:number
}
const Player:React.FC<props> = (props) => {
    return ( 
        <div style={{boxShadow: "0px 17px 3px -4px rgba(0,0,0,8)"}}
  className={`fixed top-[50%] grid justify-center items-center font-bold ${props.Type ? "left-[20%]" : "right-[20%]"}  border-[3px] border-[black]
  border-solid rounded-[25px] bg-white z-10 h-[120px] w-[100px] text-center`}>
    <div className="rounded-full left-[50%] translate-x-[-50%] bg-black w-[55px] h-[55px] absolute top-[-22%]">  </div>

      <div className=" grid grid-rows-[repeat(2,30px)] mt-2" >
      <h1 className="text-xl ">  {props.Name} </h1>
      
       <h1 className="text-4xl " > {props.Wins} </h1>
      </div>
    
        </div>
     );
}
 
export default Player;