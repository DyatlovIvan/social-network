import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    let posts = [
        {id:1, message: 'Hi, how a u?', likeCount: 12},
        {id:2, message: "It\'s my first post", likeCount: 10}
    ]

    let postsElement = posts.map( p => <Post message= {p.message} like={p.likeCount}/>);


  return (
      <div className={s.postsBlock}>
          <h3>My Posts</h3>
          <div>
              <textarea></textarea>
          </div>
          <div>
              <button>Add post</button>
          </div>


          <div className={s.posts}>
              {postsElement}
          </div>
      </div>
  )
}

export default MyPosts;