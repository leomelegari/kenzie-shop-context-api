import { BsBag } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { Container } from "./style";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/Cart";

const Header = ({ setAuth }) => {
  const history = useHistory();
  const cart = useCart();
  const count = Object.keys(cart.cart).length;

  return (
    <Container>
      <ul>
        <li>
          <HiOutlineMenuAlt4 />
        </li>
        <li>
          <BsApple
            onClick={() => {
              setAuth(true);
              history.push("/");
            }}
          />
        </li>
        <li style={{ display: "none" }}>Inflationated Apple Store BR</li>
        <li>
          <BsBag onClick={() => history.push("/cart")} />
          <div onClick={() => history.push("/cart")}>{count}</div>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
