import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Person></Person>
      <Pet></Pet>
    </>
  )
}

function Person() {
  const name = 'Rakibul Rahman';
  const country = 'Bangladesh';

  return (
    <p>Hey {name}, I am from {country}</p>
  )
}

function Pet() {
  const petName = 'Maow';
  const petNationality = 'Bangladeshi';

  return (
    <p>My pet name {petName}, Pet nationality is {petNationality}</p>
  )
}

export default App;