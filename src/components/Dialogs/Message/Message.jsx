import s from './../Diatlog.module.css';



const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


export default Message;