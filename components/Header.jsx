import logo from "../src/assets/investment-calculator-logo.png";
import "../components/Header.css";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
export default Header;
