import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import { Circles } from "react-loader-spinner";



const Home = () => {
    const navigation=useNavigation()
    return (
      <div>
        <Header></Header>
        <h1>this is home page</h1>
        {navigation.state === "loading" ? (
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{ textAlign: "center" }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    );
};

export default Home;