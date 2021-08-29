import s from './Diatlog.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}

const  Message = (props) =>{
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () =>{

    let dialogs = [
        {id:1, name: 'Dima'},
        {id:2, name: 'Valera'},
        {id:3, name: 'Sveta'},
        {id:4, name: 'Tanya'},
        {id:5, name: 'Anton'},
        {id:6, name: 'Alexandr'}
    ]
    let messages = [
        {id:1, message: 'hi'},
        {id:2, message: 'how a u?'},
        {id:3, message: 'yo'},
    ]

    let dialogsElements = dialogs.map (d => <DialogItem name = {d.name} id = {d.id} /> );
    let messagesElements = messages.map (m => <Message message = {m.message} id = {m.id}/>);

    return(
        <div className={s.dialoges}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;