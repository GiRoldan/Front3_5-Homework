import './Product.css'

const Product = ({ p }) => {
  return (
    <div key={p.id} className='productCard' >
        <h2 className='productName'>{p.nombre}</h2>
        <img src={p.imagen} alt="" className='productImg'/>
        <h3 className='productPrice'>{p.precio}</h3>
    </div>
  );
};

export default Product;
