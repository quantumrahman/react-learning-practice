import { use } from "react";

export default function Users({fetchUsers}) {
    const styles = {
        width: '550px',
        padding: '20px 15px',
        border: '1px solid yellow',
        borderRadius: '10px',
    };

    const fetchUser = use(fetchUsers);

    return (
        <div style={styles}>
            <h3>Total Users: {fetchUser.length}</h3>
        </div>
    );
};