import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
     const userStyle = {
       border: "2px solid goldenRod",
       padding: "5px",
       borderRadius: "10px",
     };
    return (
      <div>
        <h2>Details About user</h2>
        <div style={userStyle}>
          <p>User ID: {user.id}</p>

          <h1>Name: {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>phone: {user.website}</p>
        </div>
      </div>
    );
};

export default UserDetails;