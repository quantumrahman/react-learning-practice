import './App.css';

export default function App() {

    function handleClickBlue() {
        alert('Clicked Blue Button');
    };

    const handleClickGreen = () => {
        alert('Clicked Green Button');
    };

    const handleClickAdd = (num) => {
        alert(num + 5);
    };

    const handleClickViolet = () => alert('Clicked Violet Button');

    return (
        <>
            <h1>React Event Handling</h1>
            <div className='btn-container'>
                <button onClick={handleClickBlue} className='btn btn-blue'>Blue Button</button>
                <button onClick={handleClickGreen} className='btn btn-green'>Green Button</button>
                <button onClick={function handleClickRed() { alert('Clicked Red Button') }} className='btn btn-red'>Red Button</button>
                <button onClick={() => alert('Clicked Pink Button')} className='btn btn-pink'>Pink Button</button>
                <button onClick={() => handleClickViolet()} className='btn btn-violet'>Violet Button</button>
                <button onClick={() => handleClickAdd(5)} className='btn btn-add'>Add Button</button>
            </div>
        </>
    );
};