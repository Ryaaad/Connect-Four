interface props{
C:number,
Row:number,
e:number
}
const Case:React.FC<props> = (props) => {
    return ( 
              <div id={`a${props.C}${props.Row}`}  className="bg-white rounded-full shadow-inner ">
{/* {props.C} ,{props.Row} */}
              </div>
      
     );
}
 
export default Case;