import './SidebarOption.css'
// import { useHistory } from "react-router-dom"
const SidebarOption = ({Icon, title}) => {
    return (
        // onClick={addChannelOption ? addChannel : selectChannelOption}
        <div className="sidebarOption" >
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
