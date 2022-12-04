import Board from "./CMP/Board";

function App() {
  return (
    <div className="grid overflow-hidden h-[100vh] bg-[#7945ff] justify-center items-center">
<Board></Board>

   <div className="absolute z-0 bottom-[-20%] w-full rounded-[50px] bg-[#5c2dd5] h-[200px] ">

   </div>
    </div>
    
  );
}

export default App;