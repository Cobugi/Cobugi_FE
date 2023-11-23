import Channel from "./channel";

const ChatPage = (props) => {
    const currentUser = localStorage.getItem("currentUser");
    return <>{currentUser && <Channel id={props.room} />}</>;
};

export default ChatPage;
