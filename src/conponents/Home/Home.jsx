import { Outlet,useNavigation } from "react-router-dom";
import Header from "../Header/Header";

 

const Home = () => {
    const navigation = useNavigation();
    return (
        <div className="mb-9">
            <Header></Header>
            <h3 className="text-3xl font-bold text-purple-500">This is a Home components</h3>
            {
                navigation.state === "loading" ? <p>Loading...</p>: <Outlet></Outlet>
            }
           
           
        </div>
    );
};

export default Home;