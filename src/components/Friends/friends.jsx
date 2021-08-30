import s from './friends.module.css'
const Friends = (props) =>{

    return(
        <div className={s.listFriends}>
            <span className={s.friends}>
                {<img src={props.img}/>}
            </span>
            <div className={s.nameFriends}>
                <span>{props.name} </span>
            </div>
        </div>


    )
}

export default Friends