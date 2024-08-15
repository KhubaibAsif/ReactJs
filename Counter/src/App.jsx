// import Button from "./components/Button"



// Class :1
// function App() {
  

//   return (
    
//      <div >
//      <h1> Hello React!</h1>
//      <Button text="1st Btn" />
//      <Button text="2nd Btn" />
//      <Button text="3rd Btn" />
//      <Button text="4th Btn" />
    
//      </div>
//   )
// } 

// export default App

function App(){

  const profile = {
    name:"Khubaib Asif",
    age: 20,
    skills:[
      {skill:"Web Developer",key:1},
      {skill:"UI/UX Designer",key:1},
      {skill:"E-commerce Expert",key:1},
    ],
  }


return(
<div>
  <h1>Full name:{profile.name}</h1>
  <h1>age:{profile.age}</h1>
  <h1>skills:-</h1>
  <ul>
    {profile.skills.map((data) => (
      <li key={data.key}>{data.skill}</li>
    ))}
  </ul>
</div>
)
}
export default App