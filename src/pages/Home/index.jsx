import { useEffect, useState } from "react";
import formatValue from "../../utils/formatValue";
import { Container, ProductList, ContainerProduct } from "./styles";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";
import { useCart } from "../../providers/Cart";
import { useProduct } from "../../providers/Products";

const Home = ({ auth, setAuth }) => {
  const { productListDatabase } = useProduct();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  const loadProducts = () => {
    const data = productListDatabase.map((product) => ({
      ...product,
      priceFormatted: formatValue(product.price),
    }));
    setTimeout(() => {
      setLoading(false);
      setAuth(true);
    }, 2500);
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Container>
        {loading && auth === false ? (
          <Modal />
        ) : (
          <ProductList>
            {products.map((product, index) => (
              <ContainerProduct key={index}>
                <div className="image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="info">
                  <span>{product.name}</span>
                  <span>{product.priceFormatted}</span>

                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product);
                      toast.success("Item adicionado à sacola!", {
                        style: { background: "#646464", color: "#ededef" },
                      });
                    }}
                  >
                    <span>Adicionar ao carrinho</span>
                  </button>
                </div>
              </ContainerProduct>
            ))}
          </ProductList>
        )}
      </Container>
    </>
  );
};

export default Home;
