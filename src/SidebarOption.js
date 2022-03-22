import './SidebarOption.css';
import { useNavigate } from "react-router-dom";
import db from "./firebase";
import {addDoc} from "firebase/firestore"
const SidebarOption = ({Icon, title, id, addChannelOption, addChannels}) => {
    const navigator = useNavigate()
    const selectChannel =() =>{
        if(id){
            navigator(`/room/${id}`)
        }
        else{
            navigator(title);
        }
    }
  
    return (
         
        <div className="sidebarOption" onClick={ addChannelOption? addChannels  : selectChannel}>
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ?
             <h3>{title}</h3> 
             :
              <h3 className=".sidebarOption__channel">
                  <span className="sidebarOption__hash">#</span> {title}
                </h3>}
        </div>
    )
}

export default SidebarOption
