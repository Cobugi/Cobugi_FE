import VerticalTabs from "./ChatList";
import Channel from "./channel";
// import { useRouter } from 'react-router-dom';

const ChatPage = (props) => {
    // const router = useRouter();
    const currentUser = localStorage.getItem("currentUser");
    console.log(currentUser);
    return <>{currentUser && <Channel id={props.email} />}</>;
};

export default ChatPage;
