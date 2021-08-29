import s from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51404241-stock-illustration-female-profile-avatar-icon-white.jpg' />
      
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>

    </div>


  )
}

export default Post;