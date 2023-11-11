import { useSelector, useDispatch } from "react-redux";

import React from "react";
import lavash from "../../assets/lavash.jpg";
import gamburger from "../../assets/gamburger.jpg";
import sauce from "../../assets/sauce.jpg";
import { addSum, descSum, setSelected_pr } from "../../store/sumSlice";
export default function Products() {
  React.useEffect(() => {
    const tab_btn = document.querySelectorAll(".tab-btn");
    tab_btn.forEach((item) => {
      if (!item.classList.contains("active")) {
        const null_tab = document.querySelectorAll(`.product`);
        null_tab.forEach((null_t) => {
          null_t.style.display = "block";
        });
      }
      item.addEventListener("click", () => {
        const active_tab = document.querySelectorAll(`#${item.innerHTML}`);
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
  }, []);
  const { sum, selected_pr } = useSelector((state) => state.sumSlice);
  const dispatch = useDispatch();
  console.log(selected_pr);
  return (
    <div className="products">
      <ul>
        <li className="tab-btn">lavash</li>
        <li className="tab-btn">sauce</li>
        <li className="tab-btn">gamburger</li>
      </ul>
      <div className="pr-cards">
        <div id="lavash" className="product">
          <div className="pr-img">
            {selected_pr.includes("lavash") && (
              <span className="count">
                {selected_pr.filter((item) => item == "lavash").length}
              </span>
            )}
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "lavash" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("lavash"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            {selected_pr.includes("lavash-miyaso") && (
              <span className="count">
                {selected_pr.filter((item) => item == "lavash-miyaso").length}
              </span>
            )}
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash-miyaso</h5>
          <h3>
            <span>25 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "lavash-miyaso" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("lavash-miyaso"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            {selected_pr.includes("lavash") && (
              <span className="count">
                {selected_pr.filter((item) => item == "lavash").length}
              </span>
            )}
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "lavash" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("lavash"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            {selected_pr.includes("lavash") && (
              <span className="count">
                {selected_pr.filter((item) => item == "lavash").length}
              </span>
            )}
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "lavash" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("lavash"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            {selected_pr.includes("gamburger") && (
              <span className="count">
                {selected_pr.filter((item) => item == "gamburger").length}
              </span>
            )}
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>19000 uzs</h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(
                  descSum({ price: e.target.value, title: "gamburger" })
                );
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("gamburger"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            {selected_pr.includes("gamburger") && (
              <span className="count">
                {selected_pr.filter((item) => item == "gamburger").length}
              </span>
            )}
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(
                  descSum({ price: e.target.value, title: "gamburger" })
                );
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("gamburger"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            {selected_pr.includes("gamburger") && (
              <span className="count">
                {selected_pr.filter((item) => item == "gamburger").length}
              </span>
            )}
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(
                  descSum({ price: e.target.value, title: "gamburger" })
                );
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("gamburger"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            {selected_pr.includes("gamburger") && (
              <span className="count">
                {selected_pr.filter((item) => item == "gamburger").length}
              </span>
            )}
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(
                  descSum({ price: e.target.value, title: "gamburger" })
                );
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("gamburger"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>

        <div id="sauce" className="product">
          <div className="pr-img">
            {selected_pr.includes("sauce") && (
              <span className="count">
                {selected_pr.filter((item) => item == "sauce").length}
              </span>
            )}
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "sauce" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("sauce"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="sauce" className="product">
          <div className="pr-img">
            {selected_pr.includes("sauce") && (
              <span className="count">
                {selected_pr.filter((item) => item == "sauce").length}
              </span>
            )}
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "sauce" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("sauce"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="sauce" className="product">
          <div className="pr-img">
            {selected_pr.includes("sauce") && (
              <span className="count">
                {selected_pr.filter((item) => item == "sauce").length}
              </span>
            )}
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "sauce" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => {
                dispatch(addSum(e.target.value)),
                  dispatch(setSelected_pr("sauce"));
              }}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
        <div id="sauce" className="product">
          <div className="pr-img">
            {selected_pr.includes("sauce") && (
              <span className="count">
                {selected_pr.filter((item) => item == "sauce").length}
              </span>
            )}
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>
            <span>19 000 </span> uzs
          </h3>
          <div className="actions">
            <button
              onClick={(e) => {
                dispatch(descSum({ price: e.target.value, title: "sauce" }));
              }}
              className="minus"
              value={19000}
            >
              -
            </button>
            <button
              onClick={(e) => dispatch(addSum(e.target.value))}
              className="plus"
              value={19000}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
