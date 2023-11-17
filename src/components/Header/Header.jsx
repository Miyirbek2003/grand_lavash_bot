import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="" />
        <h3>Grand Lavash</h3>
      </div>
    </header>
  );
}
