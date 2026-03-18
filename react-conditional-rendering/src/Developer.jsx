export default function Developer({name, time, isDone}) {
    const developerStyle = {
        width: '400px',
        border: '1px solid blueviolet',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexDirection: 'column',
        marginTop: '10px' 
    };

    return (
        <>
            <div style={developerStyle}>
                <h3>Engineer Name: {name}</h3>
                <p>Project Status: {isDone ? 'Done' : 'Not Done'}</p>
                <p>Time Need: {time} Hours</p>
            </div>
        </>
    );
};