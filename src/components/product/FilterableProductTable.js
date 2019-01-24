import React, { Component } from 'react';
import SearchBar from '../filters/SearchFilter';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
}
export default FilterableProductTable;