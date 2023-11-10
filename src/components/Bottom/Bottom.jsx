import { useSelector, useDispatch } from "react-redux";
export default function Bottom() {
  const { sum } = useSelector((state) => state.sumSlice);
  return (
    <div className="bottom">
      <div className="btm-inner">
        <h4>Общая сумма</h4>
        <span>{sum} сум</span>
      </div>
      <button className="plus">Заказать</button>
    </div>
  );
}
