import { useState } from "react";
function App() {

  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}} // syntax hi aisa hai, two curly braces are needed
      // since there are already 2 curly braces, while injecting a variable, no need to apply curly braces again
      >
        <div className="fixed justify-center flex flex-wrap bottom-12 inset-x-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="rounded-full outline-none px-4 py-1 text-white shadow-lg "
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}>
              Red
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-white shadow-lg "
            style={{backgroundColor: "green"}}
            onClick={() => setColor("green")}>
              Green
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-white shadow-lg "
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-white shadow-lg "
            style={{backgroundColor: "purple"}}
            onClick={() => setColor("purple")}>
              Purple
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-black shadow-lg "
            style={{backgroundColor: "lavender"}}
            onClick={() => setColor("lavender")}>
              lavender
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-black shadow-lg "
            style={{backgroundColor: "white"}}
            onClick={() => setColor("white")}>
              White
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-white shadow-lg "
            style={{backgroundColor: "black"}}
            onClick={() => setColor("black")}>
              Black
            </button>
            <button className="rounded-full outline-none px-4 py-1 text-black shadow-lg "
            style={{backgroundColor: "yellow"}}
            onClick={() => setColor("yellow")}>
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
