import React from 'react'
import { useParams,useSearchParams } from 'react-router-dom';
const Post = () => {
    let {category, id} = useParams()
    let [serachParams, setSearchParams] = useSearchParams()
    console.log(serachParams);
    console.log(serachParams.get('price'));
    console.log(serachParams.get('sort'));

  return (<>
    
      <h1>Post Page - {category}</h1>
      <h1>Post Page - {id}</h1>
    
  </>
  )
}

export default Post
