import { BsSearch } from "react-icons/bs";
export default function Search() {
  return (
    <div className="search">
      <button>
        <BsSearch color="#04451d" />
      </button>
      <input type="text" />
    </div>
  );
}