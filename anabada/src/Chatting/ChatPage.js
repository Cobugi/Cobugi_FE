import Channel from "./channel";
// import { useRouter } from 'react-router-dom';

const ChatPage = () => {
    // const router = useRouter();
    const id = "user2@gmail.com";
    const currentUser = localStorage.getItem("currentUser");
    console.log(currentUser);
    return <>{currentUser && <Channel id={id} />}</>;
};

export default ChatPage;
