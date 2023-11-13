import Channel from "./channel";
import { useRouter } from 'react-router-dom';

const ChatPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { currentUser } = localStorage.getItem("currentUser");

  return <>{currentUser && <Channel id={id} />}</>;
};

export default ChatPage;