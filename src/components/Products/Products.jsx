import { useSelector, useDispatch } from "react-redux";

import React from "react";
import {
  addSum,
  descSum,
  getBanners,
  getCategory,
  getProducts,
  setSelected_pr,
} from "../../store/sumSlice";
import { BsSearch } from "react-icons/bs";
import { MdOutlineClear } from "react-icons/md";

export default function Products() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategory());
    dispatch(getProducts());
    dispatch(getBanners());
  }, []);

  const { sum, selected_pr, category, products } = useSelector(
    (state) => state.sumSlice
  );

  const tab_btn = document.querySelectorAll(".tab-btn");
  tab_btn.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (!item.classList.contains("active")) {
        const null_tab = document.querySelectorAll(`.product`);
        null_tab.forEach((null_t) => {
          null_t.style.display = "block";
        });
      }
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
  const [result, setResult] = React.useState("");
  let sorted = products;
  sorted = products.filter((item) =>
    item.name
      .toLowerCase()
      .substring(0, 7)
      .includes(result.toLowerCase().trim())
  );
  return (
    <>
      <div className="search">
        <button>
          <BsSearch color="#04451d" fontSize={22} />
        </button>
        <input
          type="text"
          value={result}
          style={{ width: "90%" }}
          onChange={(e) => setResult(e.target.value)}
        />
        {result && (
          <span className="clear" onClick={() => setResult("")}>
            <MdOutlineClear fontSize={20} color={"#04451d"} fontWeight={600} />
          </span>
        )}
      </div>
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
          {sorted.map((item, index) => {
            return (
              <div
                // data-aos={index % 2 !== 0 ? "fade-left" : "fade-right"}
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
          })}
        </div>
      </div>
    </>
  );
}
