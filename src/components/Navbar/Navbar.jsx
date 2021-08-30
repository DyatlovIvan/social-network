import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../Friends/friends";

const Navbar = (props) => {
    // debugger
  let friendsElement = props.state.friends.map(el =><Friends id = {el.id} name = {el.name}  img = {el.img} />)
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' activeClassName = {s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' activeClassName = {s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' activeClassName = {s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' activeClassName = {s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' activeClassName = {s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.friends}>
          Friends
          {friendsElement}
      </div>

    </nav>
  )
}

export default Navbar;