import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      <div>My Posts</div>
      <textarea></textarea>
      <button>Add post</button>




      <div className={s.posts}>

      <Post/>

      </div>
    </div>

  )
}

export default MyPosts;