import DashBoard from "./Dashboard"


function App() {
  const username = "ozil"
  return (
    <>
      <h1>This is a component returning {username}</h1> //       
      <DashBoard/>
    </>
  )
}
// "{var_name}" is an evaluated expression, its not the variable itself, so we cannot write if-else, for, etc inside jsx
export default App
