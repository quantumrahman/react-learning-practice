import { use } from "react";

export default function Friends({fetchPromisse}) {
    const friends = use(fetchPromisse);
    return (
        <>
            <h3>Total Friends: {friends.length}</h3>
        </>
    );
};