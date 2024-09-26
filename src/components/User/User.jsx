import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
    const navigate=useNavigate()
    const userStyle = {
        border: "2px solid goldenRod",
        padding: '5px',
        borderRadius:"10px"
    }
    const handleShowDetails = () => {
        navigate(`/user/${user.id}`)
    }
    return (
      <div style={userStyle}>
        <h1>{user.name}</h1>

        <p>{user.email}</p>
        <Link to={`/user/${user.id}`}>User Details</Link>
        <button onClick={handleShowDetails}>Show details about user</button>
      </div>
    );
};

export default User;