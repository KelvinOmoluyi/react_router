import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams()

    return (
        <div className='bg-orange-500 text-3xl text-center text-black py-5'>
            <h1>User: {userid}</h1>
        </div>
    );
}
 
export default User;