import { useParams } from "react-router-dom";

const PostDetails = () => {
    let { category} = useParams()
   
    return (<>
      
        <h1>{ category } PostDetails Page </h1>
       
    </>
    )
  }
  
  export default PostDetails; 
  