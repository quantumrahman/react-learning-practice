import './App.css';
import Employ from './Employ.jsx';

export default function App() {
  const employs = [
    {id: 1, employName: 'Rakibul Rahman', status: 'Finished'},
    {id: 2, employName: 'Zainab Rahman', status: 'Pending'},
    {id: 3, employName: 'Zaima Ansary', status: 'Pending'},
    {id: 4, employName: 'John Doe', status: 'Finished'},
  ];

  return (
    <>
      <h1>React With Map</h1>
      {employs.map(employ => <Employ key={employ.id} employ={employ}></Employ>)}
    </>
  );
};