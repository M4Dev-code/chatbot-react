import RobotProfileImage from "../assets/robot.webp";
import UserProfileImage from "../assets/user.webp";
import "./ChatMessage.css";
function ChatMessage({ message, sender }) {
  return (
    <div className={`chat-message ${sender}`}>
      {sender === "bot" && (
        <img src={RobotProfileImage} width="50" height="50" alt="Bot" />
      )}
      <p>{message}</p>
      {sender === "user" && (
        <img src={UserProfileImage} width="50" height="50" alt="User" />
      )}
    </div>
  );
}
export default ChatMessage;
