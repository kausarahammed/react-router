import { useRouteError } from "react-router-dom";

 

const Error = () => {
    const error = useRouteError()
    return (
        <div>
            <h2>hello Error</h2>
            <p>i fuck your Error</p>
            {
                error.status === 404 ? "shanto" : <div><h1>fuck your shanto</h1></div>
            }
        </div>
    );
};

export default Error;