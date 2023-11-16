import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  addSum,
  descSum,
  getCategory,
  getProducts,
  setSelected_pr,
} from "../../store/sumSlice";
export default function Products() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
  }, []);

  const { sum, selected_pr, category, products } = useSelector(
    (state) => state.sumSlice
  );
  const tab_btn = document.querySelectorAll(".tab-btn");
  tab_btn.forEach((item, index) => {
    if (!item.classList.contains("active")) {
      const null_tab = document.querySelectorAll(`.product`);
      null_tab.forEach((null_t) => {
        null_t.style.display = "block";
      });
    }
    
    item.addEventListener("click", () => {
      const active_tab = document.querySelectorAll(`#a${item.id}`);
      const null_tab = document.querySelectorAll(`.product`);
      null_tab.forEach((null_t) => {
        null_t.style.display = "none";
      });
      active_tab.forEach((tab) => {
        tab.style.display = "block";
      });
      tab_btn.forEach((itemm) => {
        itemm.classList.remove("active");
      });
      item.classList.add("active");
    });
  });
  return (
    <div className="products">
      <ul>
        {category?.map((item, index) => {
          if (index < 5) {
            return (
              <li key={item.id} id={item.id} className="tab-btn">
                {item.name}
              </li>
            );
          }
        })}
      </ul>
      <div className="pr-cards">
        {products?.map((item, index) => {
          if (index > 20) {
            return (
              <div
                key={item.id}
                id={"a" + item.category_id}
                className="product"
              >
                <div className="pr-img">
                  {selected_pr.find((itemm) => itemm.id == item.id) &&
                    selected_pr.find((itemm) => itemm.id == item.id).quantity !=
                      0 && (
                      <span className="count">
                        {
                          selected_pr.find((itemm) => itemm.id == item.id)
                            .quantity
                        }
                      </span>
                    )}
                  <img src={item.img_url} loading="lazy" alt="" />
                </div>
                <div className="inner">
                  <h5 className="pr-title">{item.name}</h5>
                  <h3>
                    <span>{item.price} </span> uzs
                  </h3>
                  <div className="actions">
                    <button
                      onClick={(e) => {
                        dispatch(
                          descSum({
                            price: e.target.value,
                            title: item.name,
                            id: item.id,
                          })
                        );
                      }}
                      className="minus"
                      value={item.price}
                    >
                      -
                    </button>
                    <button
                      onClick={(e) => {
                        dispatch(
                          setSelected_pr({
                            title: item.name,
                            img: item.img_url,
                            id: item.id,
                            price: item.price,
                          })
                        );
                      }}
                      className="plus"
                      value={item.price}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
