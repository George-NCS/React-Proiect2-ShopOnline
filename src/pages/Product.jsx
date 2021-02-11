import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import './Product.css'


class Product extends React.Component{
    constructor(){
        super();
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    render() {
        const { product } = this.state;
        return(
            <Layout>
                <div className="product-page container-fluid container-min-max-width">
                    <h1 className="my-3 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5 mb-5">
                            <img src={product.image} alt="Prezentation-Image"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button className="btn btn-dark">Adauga in Cos</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Product;