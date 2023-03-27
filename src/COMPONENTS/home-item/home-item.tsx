import "./home-item.css";
type Props = {
  number: number;
};

export function HomeItem({ number }: Props) {
  return (
    <div className="table">
      <div className="table-item">
        <h2>{number}</h2>
      </div>
    </div>
  );
}
