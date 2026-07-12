import { useState, useEffect } from 'react'
export default function Posts() {

    const [post,setPost] = useState({})//counter 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20...
    const [posts, setPosts] = useState([])
    const [counter,setCounter] = useState(1)
    const [error,setError] = useState(null)
    async function fetchPost(id) {
        // if(id%7==0)
        //     return
        const response = await fetch(`https://jsonplaceholder.typicode.com/post/${id}`)
        const data = await response.json()
        console.log(data)
        setPost(data)
    }
    async  function fetchPosts() {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/post')
        if(!response.ok){
            throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        console.log(data)
        // const data = await response.json()
        // console.log(data)
        setPosts(data)
        }
        catch(error){
            alert('Failed to fetch posts')//show error to user
            setError(error)//store error in state
            console.log(error)
        }
        finally{
            console.log('finally')
        }
        //no return data
    }
    //let f = ()=>{} empty function 
    useEffect(()=>{
        fetchPosts()
    },[])


    useEffect(()=>{
        fetchPost(counter)
        console.log('post',post)
    },[counter])
    return (
        <div>
            {error && <div style={{color: 'red'}}>Error: {error.message}</div>}
            <button onClick={()=>setCounter(counter+1)}>Next Post</button>
            {counter%7==0 && <div>
                <h1 style={{color: 'red'}}>Post {counter}</h1>
                <h2 style={{color: 'blue'}}>{post.title}</h2>
                <p style={{color: 'green'}}>{post.body}</p>
            </div>}
            <h1>Posts</h1>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}