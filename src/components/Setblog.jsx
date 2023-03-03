import { collection, deleteDoc, doc, getDocs, increment, limit, orderBy, query, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import dayjs from "dayjs";

function Setblog({ isAuth }) {
  const [postList, setPostList] = useState([]);

 useEffect(() => {
  const getPosts = async () => {
    const data = await getDocs(query(collection(db, "posts"),orderBy("createdAt", "desc")));
    
    // console.log(data.docs.map((doc) => ({ ...doc.data({serverTimestamp: "estimate"}).createdAt.toDate(), id: doc.id})))
    
    
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  //  console.log(postList.createdAt);
   
  }
  getPosts();
 },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/setblog";
  }

  // const handleClick = async (id) => {
  //  const postsRef = doc(db, "posts", id)  

  //  await updateDoc(postsRef, {
  //     count: increment(1)
  //   });
  //   window.location.href = "/setblog";
  // }

  const sortedLists = postList.sort((a, b) => b.createdAt - a.createdAt);

  return (
    <>
    

<div class="bg-white py-6 sm:py-8 lg:py-12 bg-h-screen w-full bg-gradient-to-br
  from-violet-300 via-pink-100 to-orange-100" >
<div class="max-w-screen-xl px-4 md:px-8 mx-auto">
  
  <div class="mb-10 md:mb-16">
    <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

    <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto"></p>
  </div>
  

  <div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8 ">
    {sortedLists.map((post) => {

          return (
            <div key={post.id}>
    <div class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden bg-white">
      <a href="#" class="group w-full md:w-150 lg:w-80 h-70 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative">
        <img src={post.imgUrl} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-contain object-center inset-0 group-hover:scale-110 transition duration-200" />
      </a>

      <div class="flex flex-col gap-2 p-4 lg:p-6">
        
              <span class="text-gray-800 text-xl font-bold">{dayjs.unix(post.createdAt).format('MM/DD HH:mm')}</span>
        

        <h2 class="text-gray-800 text-xl font-bold">
          <a href="#" class="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</a>
        </h2>

        

        <p class="text-gray-500 font-bold">{post.postsText}</p>

        
{/* <button className="relative text-2xl" onClick={() => handleClick(post.id)}>いいね！</button> */}

            {isAuth &&(
              <>
              <a href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
              <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <button class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white" onClick={() => handleDelete(post.id)}>削除</button>
              </a>
              </>
              )}
            </div>
            
            </div>
            </div>
      
          )
        })}

  </div>
</div>
</div>

</>
)
}

export default Setblog



