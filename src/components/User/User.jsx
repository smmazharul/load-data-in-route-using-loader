import { Link } from "react-router-dom";

const User = ({ user }) => {
    const userStyle = {
        border: "2px solid goldenRod",
        padding: '5px',
        borderRadius:"10px"
    }
    return (
      <div style={userStyle}>
        <h1>{user.name}</h1>
            <p>{user.email}</p>
            <Link to={`/user/${user.id}`}>User Details</Link>
      </div>
    );
};

export default User;