export default function Person({name, isStudent}) {
    const personStyle = {
        width: '400px',
        border: '1px solid blue',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexDirection: 'column',
        marginTop: '10px'
    };

    if (isStudent) {
        return (
            <div style={personStyle}>
                <h3>Person Name: {name}</h3>
                <p>Student: Yes</p>
            </div>
        );
    } else {
        return (
            <div style={personStyle}>
                <h3>Person Name: {name}</h3>
                <p>Student: No</p>
            </div>
        );
    };
};