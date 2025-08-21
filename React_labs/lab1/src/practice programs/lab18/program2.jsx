
export default function B(prop){
      let str ="";
  return(
    <>
    <input type="text" id="input" />
    <button onClick={() => (
      prop.name = document.getElementById("input").value
    )}>Set Name</button>
    <C name={prop.name}/>
    </>
  )

  function C(prop){
    return(
      <>
      <h1>{prop.name}</h1>
      </>)
  }
}