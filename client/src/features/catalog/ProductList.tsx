import { List } from '@mui/icons-material';
import { Product } from '../../app/models/products';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <List>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;
