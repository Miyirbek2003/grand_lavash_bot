import React from "react";
import lavash from "../../assets/lavash.jpg";
import gamburger from "../../assets/gamburger.jpg";
import sauce from "../../assets/sauce.jpg";
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
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="lavash" className="product">
          <div className="pr-img">
            <img src={lavash} alt="" />
          </div>
          <h5 className="pr-title">Lavash</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="gamburger" className="product">
          <div className="pr-img">
            <img src={gamburger} alt="" />
          </div>
          <h5 className="pr-title">gamburger</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>

        <div id="sauce" className="product">
          <div className="pr-img">
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
        <div id="sauce" className="product">
          <div className="pr-img">
            <img src={sauce} alt="" />
          </div>
          <h5 className="pr-title">sauce</h5>
          <h3>19 000 uzs</h3>
          <div className="actions">
            <button className="minus">-</button>
            <button className="plus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
