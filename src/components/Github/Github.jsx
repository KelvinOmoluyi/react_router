// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
    const data = useLoaderData();

    return (
        <div className='text-center m-4 text-white text-3xl p-4 bg-gray-600'>
            Github followers count {data.followers}
            <img src={data.avatar_url} width={300} alt="" />
        </div>
    );
}
 
export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/KelvinOmoluyi')
    return response.json()
}