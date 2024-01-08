import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, redirect, Navigate } from "react-router-dom";
import { getSumma, orderFood } from "../../store/sumSlice";

export default function Bottom({ address, comment }) {
  const { sum, selected_pr, summa } = useSelector((state) => state.sumSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const href = window.location.pathname;
  let ordering = [];

  const unique = selected_pr.filter(
    (obj, index) =>
      selected_pr.findIndex((item) => item.id === obj.id) === index
  );
  React.useEffect(() => {
    dispatch(getSumma());
  }, []);
  if (href == "/order") {
    if (sum == 0 && href != "/") {
      return <Navigate to={"/"} />;
    }
    return (
      <div className="bottom href">
        <div className="btm-inner href">
          <h4>Общая сумма</h4>
          <span>{sum + summa} сум</span>
        </div>
        <button
          className="plus href"
          onClick={(e) => {
            if (address) {
              unique.forEach((element) => {
                ordering.push({
                  product_id: element.id,
                  quantity: element.quantity,
                  address: address,
                  comment: comment,
                });
              });
              let btn = document.querySelector(".plus.href");
              btn.disabled = "true";
              dispatch(orderFood(ordering));
            }

            if (!address) {
              let errorHand = document.querySelector(".error");
              errorHand.style.display = "block";
              errorHand.scroll({
                behavior: "smooth",
                top: 150,
                left: 0,
              });
            }
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
