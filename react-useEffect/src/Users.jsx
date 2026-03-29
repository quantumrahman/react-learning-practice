export default function Users({user}) {
    console.log(user);
    return (
        <>
            <h3>Total Users: {user.length}</h3>
        </>
    );
};