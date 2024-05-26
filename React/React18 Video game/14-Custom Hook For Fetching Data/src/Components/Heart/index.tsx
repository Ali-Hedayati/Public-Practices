import { FaHeart } from "react-icons/fa";
interface HeartProps {
  liked: boolean;
  onClick: () => void;
}


const Heart = ({ liked, onClick }: HeartProps) => {

    
  return (
    <>
      {liked ? (
        <FaHeart color="#ff6b81" onClick={onClick} size={20} />
      ) : (
        <FaHeart onClick={onClick} size={20} />
      )}
    </>
  );
};

export default Heart;

// another approach:
// import { FaHeart } from "react-icons/fa";
// interface HeartProps {
//   liked: boolean;
//   setLike: (liked: boolean) => void;
// }

// const Heart = ({ liked, setLike }: HeartProps) => {
//   function toggle() {
//     setLike(!liked);
//   }

//   return (
//     <>
//       {liked ? (
//         <FaHeart color="#ff6b81" onClick={toggle} size={20} />
//       ) : (
//         <FaHeart onClick={toggle} size={20} />
//       )}
//     </>
//   );
// };