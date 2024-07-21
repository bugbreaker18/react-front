import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect( () => {
    //     fetch("https://api.github.com/users/bugbreaker18")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data.followers} 
        <img 
            className=''
            src={data.avatar_url} 
            alt="Git Picture"
            width={300} 
        />
    </div>
  )
}

export default Github

export const userGithubInfo = async () => {
    const response = await fetch("https://api.github.com/users/bugbreaker18")
    return response.json() // response.json() is actually a Promise, thus we needed an extra "then" step to configure it 
    // But here we can directly send it, Loader takes care of that Promise
}