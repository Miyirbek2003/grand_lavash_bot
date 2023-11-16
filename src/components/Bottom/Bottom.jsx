import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, redirect, Navigate } from "react-router-dom";
import { orderFood } from "../../store/sumSlice";

export default function Bottom() {
  const { sum, selected_pr } = useSelector((state) => state.sumSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const href = window.location.pathname;
  let ordering = [];
  const unique = selected_pr.filter(
    (obj, index) =>
      selected_pr.findIndex((item) => item.id === obj.id) === index
  );
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
        <button
          className="plus href"
          onClick={() => {
            unique.forEach((element) => {
              ordering.push({
                product_id: element.id,
                quantity: element.quantity,
              });
            });
            console.log(ordering);
            dispatch(orderFood(ordering));
          }}
        >
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
