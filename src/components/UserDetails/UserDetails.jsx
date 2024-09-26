import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const navigate=useNavigate()
     const userStyle = {
       border: "2px solid goldenRod",
       padding: "5px",
       borderRadius: "10px",
    };
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
      <div>
        <h2>Details About user</h2>
        <div style={userStyle}>
          <p>User ID: {user.id}</p>

          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
                <p>phone: {user.website}</p>
                <button onClick={handleGoBack}>Go Back </button>
        </div>
      </div>
    );
};

export default UserDetails;