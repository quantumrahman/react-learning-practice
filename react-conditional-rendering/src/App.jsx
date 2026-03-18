import Developer from './Developer.jsx';
import Person from './Person.jsx';

function App() {
  return (
    <>
      <h1>React Conditional Rendering</h1>
      <Developer name='Rakibul Rahman' time='1' isDone={true}></Developer>
      <Developer name='Zainab Rahman Ansary' time='5' isDone={false}></Developer>
      <Person name='Rakibul Rahman' isStudent={true}></Person>
      <Person name='Jhankar Mahabub' isStudent={false}></Person>
    </>
  );
};

export default App;