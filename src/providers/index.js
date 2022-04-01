import { CartProvider } from "./Cart/index.js";
import { ProductProvider } from "./Products/index.js";


const Providers = ({ children }) => {
    return (
        <ProductProvider>
            <CartProvider>{children}</CartProvider>
        </ProductProvider>
    )
}

export default Providers;