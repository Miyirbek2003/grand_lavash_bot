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
  const [address, setAddress] = React.useState("");
  const [comment, setComment] = React.useState("");
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
        <div className="add">
          <div className="address">
            <span>Адрес(Ориентир)</span>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                let errorHand = document.querySelector(".error");
                errorHand.style.display = "none";
              }}
              required
            />
            <span className="error">Введите адрес</span>
          </div>
          <div className="address">
            <span>Коментарий</span>
            <textarea
              name="coment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                let errorHand = document.querySelector(".error2");
                errorHand.style.display = "none";
              }}
              id="coment"
            ></textarea>
            <span className="error2">Оставьте комментарию</span>
          </div>
        </div>
        <div className="btm-inner href">
          <h4>Общая сумма</h4>
          <span>{sum} сум</span>
        </div>
        <button
          className="plus href"
          onClick={(e) => {
            if (address && comment) {
              unique.forEach((element) => {
                ordering.push({
                  product_id: element.id,
                  quantity: element.quantity,
                  address: address,
                  comment: comment,
                });
              });

              console.log(ordering);
              let btn = document.querySelector(".plus.href");
              btn.disabled = "true";
              dispatch(orderFood(ordering));
            }
            if (!address) {
              let errorHand = document.querySelector(".error");
              errorHand.style.display = "block";
            }
            if (!comment) {
              let errorHand2 = document.querySelector(".error2");
              errorHand2.style.display = "block";
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
