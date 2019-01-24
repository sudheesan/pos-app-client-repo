import React, { Component } from 'react';

class SearchFilter extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    {' '}
                    Only show products in stock
            </p>
            </form>
        );
    }
}

export default SearchFilter;