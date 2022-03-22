import {useState, useEffect} from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from "./firebase";
import { collection, getDocs, addDoc } from 'firebase/firestore';
const Sidebar = () => {
    const [channels, setChannels] = useState([]);
    const roomCollectionRef = collection(db, "rooms")
    const getCities = async (db) => {
        const roomSnapshot = await getDocs(roomCollectionRef);
        const cityList = roomSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        setChannels(cityList) ;
    }
    const addChannels = async()=>{
        const channelName = prompt('please enter thechannel name')
        if(channelName){
            await addDoc(roomCollectionRef, {name: channelName})
        }
    }
    useEffect(()=>{
        getCities()
    }, [])
    

    console.log(db)
    console.log(channels)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Tomiwa Frontend</h2>
                    <h3><FiberManualRecordIcon/>Victor Gbaye</h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOption Icon={DraftsIcon} title ="Saved items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser"/>
            <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
            
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption addChannels={addChannels} title="Add Channel"/>
            {channels.map((channel)=>{
                return(
                    <SidebarOption title={channel.name} id={channel.id}/>
                )
            })}
        </div>
    )
}

export default Sidebar
