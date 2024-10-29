/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
const User = ({user}) => {
    const {id,name,email} = user
    const navigate = useNavigate();
    const handelNavigateBtn =()=>{
        navigate(`/user/${id}`)
    }
    return (
        <div className="border-4 py-6 border-purple-600 rounded-2xl">
            <h3 className="font-semibold text-2xl">{name}</h3>
            <p className="font-light text-lg mt-3">{email}</p>
            <button onClick={handelNavigateBtn}>show all</button>
          <Link to={`/user/${id}`}><button className="border rounded-2xl px-4 py-2 mt-4 bg-purple-200 font-semibold text-lg">show all details</button></Link>
        </div>
    );
};

export default User;