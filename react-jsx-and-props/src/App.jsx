import './App.css';

function App() {
  return (
    <>
      <h1>React core concepts</h1>
      <Developer></Developer>
      <Person></Person>
      <Device></Device>
      <PcComponent name="Keyboard" deviceType="Input device"></PcComponent>
      <PcComponent name="Monitor" deviceType="Output device"></PcComponent>
    </>
  );
};

function Developer() {
  return (
    <div className='developer'>
      <h3>Developer Name: Rakibul Rahman</h3>
      <p>Technology: JavaScript</p>
    </div>
  );
};

function Person() {
  return (
    <div style={{
        width: '400px', 
        border: '1px solid yellow', 
        padding: '20px',
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column',
        borderRadius: '10px',
        gap: '10px',
        marginTop: '10px'
      }}>
      <h3>Person Name: Zainab Rahman Ansary</h3>
      <p>Age: 17 year's old</p>
    </div>
  );
};

function Device() {
  const deviceStyle = {
    width: '400px', 
    border: '1px solid green', 
    padding: '20px',
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column',
    borderRadius: '10px',
    gap: '10px',
    marginTop: '10px'
  };

  return (
    <div style={deviceStyle}>
      <h3>Device Name: iPhone 8</h3>
      <p>Price: 35,000 BDT</p>
    </div>  
  );
};

function PcComponent(props) {
  const componentStyle = {
    width: '400px', 
    border: '1px solid blueviolet', 
    padding: '20px',
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column',
    borderRadius: '10px',
    gap: '10px',
    marginTop: '10px'
  };

  return (
    <div style={componentStyle}>
      <h3>Component Name: {props.name}</h3>
      <p>Device type: {props.deviceType}</p>
    </div> 
  );
};

export default App;