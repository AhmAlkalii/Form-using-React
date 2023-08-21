import React,{useState} from "react";

function App() {
  const [str,setstr] = useState("")
  const [colors,setcolors] = useState("white")
  const [name,setName] = useState("");
  const [Lname,setLname] = useState("");
  function handchange(event){
    setName(event.target.value);
  }
  function handchanges(events){
    setLname(events.target.value);
  }
  function clicks(){
    setstr(name + Lname);
  }
  
  function hovers(){
    setcolors("black");
  }

  function hover(){
    setcolors("white");
  }

 
  return (
    <div className="container">
      <h1>Hello {name} {Lname}</h1>
      <input onChange={handchange} type="text" placeholder="First name?" value={name} />
      <input onChange={handchanges} type="text" placeholder="Last name?" value={Lname}/>
      <button style={{backgroundColor : colors}} onMouseOver={hovers} onMouseOut={hover} onClick={clicks}>Submit</button>
    </div>
  );
}

export default App;
