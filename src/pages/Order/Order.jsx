import { useSelector, useDispatch } from "react-redux";
import { addSum, descSum, setSelected_pr } from "../../store/sumSlice";

export default function Order() {
  const { sum, selected_pr, category, products } = useSelector(
    (state) => state.sumSlice
  );
  const unique = selected_pr.filter(
    (obj, index) =>
      selected_pr.findIndex((item) => item.id === obj.id) === index
  );
  const dispatch = useDispatch();
  function countD(item) {
    return selected_pr.filter((value) => value.id == item.id).length;
  }
  console.log(selected_pr);
  return (
    <main>
      <h1 align="center">Страница заказа</h1>
      <div className="orders">
        {unique?.map((item) => (
          <div className="order" key={item.id}>
            <img src={item.img} alt="" />
            <div className="content">
              {item.title}
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
                {item.quantity}
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
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
