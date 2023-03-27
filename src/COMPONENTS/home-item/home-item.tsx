import "./home-item.css";
type Props = {
  number: number;
};

export function HomeItem({ number }: Props) {
  return (
    <div className="table">
      <h2>{number}</h2>
    </div>
  );
}
