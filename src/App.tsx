import Board from "./CMP/Board";
import Menu from "./CMP/Menu";

function App() {
  return (
    <div className="grid overflow-y-hidden h-[100vh] bg-[#7945ff] justify-center items-center">
<Board></Board>

   <div className="absolute z-0 bottom-[0%] w-full overflow-hidden h-[100px] ">
   <div className="w-full rounded-[50px] bg-[#5c2dd5] h-[400px] ">
   <Menu></Menu>

   </div> 

   </div>
    </div>
    
  );
}

export default App;