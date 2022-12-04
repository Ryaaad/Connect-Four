interface props{
C:number,
Row:number,
e:number
}
const Case:React.FC<props> = (props) => {
    return ( 
              <div id={`a${props.C}${props.Row}`} style={{boxShadow: "inset 0px 12px 2px -4px rgba(0,0,0,8)"}}
               className="bg-[#7a45ffc6] rounded-full border-[3px] border-[black] border-solid ">
{/* {props.C} ,{props.Row} */}
              </div>
      
     );
}
 
export default Case;