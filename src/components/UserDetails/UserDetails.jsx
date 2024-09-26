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
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.website}</p>
        </div>
      </div>
    );
};

export default UserDetails;