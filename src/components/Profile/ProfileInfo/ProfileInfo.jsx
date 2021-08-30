import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.headLayer}>
                <img src='https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://klike.net/uploads/posts/2020-04/1587719791_1.jpg'/>
            </div>
        </div>
    )
}

export default ProfileInfo;