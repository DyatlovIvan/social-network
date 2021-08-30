import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    
    let postsElement = props.posts.map(p => <Post message={p.message} like={p.likeCount} />);

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