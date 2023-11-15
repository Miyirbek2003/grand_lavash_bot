import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, redirect, Navigate } from "react-router-dom";

export default function Bottom() {
  const { sum } = useSelector((state) => state.sumSlice);
  const navigate = useNavigate();
  const href = window.location.pathname;
  if (href != "/") {
    if (sum == 0 && href != "/") {
      return <Navigate to={"/"} />;
    }
    return (
      <div className="bottom href">
        <div className="btm-inner href">
          <h4>Общая сумма</h4>
          <span>{sum} сум</span>
        </div>
        <button className="plus href" onClick={() => navigate("/order")}>
          Оформить заказ
        </button>
      </div>
    );
  }

  return (
    <div className="bottom">
      <div className="btm-inner">
        <h4>Общая сумма</h4>
        <span>{sum} сум</span>
      </div>
      <button
        disabled={!sum && true}
        className="plus"
        onClick={() => navigate("/order")}
      >
        Заказать
      </button>
    </div>
  );
}
