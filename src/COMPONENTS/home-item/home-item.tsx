import { useNavigate } from "react-router-dom";
import "./home-item.css";
type Props = {
  number: number;
};

export function HomeItem({ number }: Props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/categorys`);
  };
  return (
    <div className="table">
      <div onClick={handleClick} className="table-item">
        <h2>{number}</h2>
      </div>
    </div>
  );
}
