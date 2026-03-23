import './Employ.css';

export default function Employ({employ}) {
    return (
        <div className="employ">
            <h3>Employ Name: {employ.employName}</h3>
            <p>Project Status: employ.status</p>
        </div>
    );
};