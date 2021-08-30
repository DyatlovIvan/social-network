import s from './Diatlog.module.css';
import DialogItem from './DiatlogItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

   
    
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img = {d.img}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    return (
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