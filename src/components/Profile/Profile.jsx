import s from'./Profile.module.css';
import MyPosts from './MyPosts/MyPosts'; 
const Profile = () => {
    return ( <div className={s.content}>
    <div>
      <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg' />
    </div>

    <div>
      <img src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg' />
    </div>
    <MyPosts/> 
  </div>)
}

export default Profile;