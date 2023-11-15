import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const { sum } = useSelector((state) => state.sumSlice);
  const navigate = useNavigate();
  return (
    <div className="bottom">
      <div className="btm-inner">
        <h4>Общая сумма</h4>
        <span>{sum} сум</span>
      </div>
      <button className="plus" onClick={() => navigate("/order")}>
        Заказать
      </button>
    </div>
  );
}
