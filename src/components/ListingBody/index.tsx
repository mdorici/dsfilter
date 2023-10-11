import { useEffect, useState } from 'react';
import Filter from '../Filter';
import './styles.css';
import * as productService from '../models/product-service';
import Listing from '../Listing';
import { ProductDTO } from '../models/product-dto';
import { ContextListCount } from '../../util/context-listing';
import Header from '../Header';

type QueryParams = {
    valueMin: number;
    valueMax: number;
};

export default function ListingBody() {
    const MIN_PRICE = 0;
    const MAX_PRICE = Number.MAX_VALUE;

    const [queryParams, setQueryParams] = useState<QueryParams>({
        valueMin: MIN_PRICE,
        valueMax: MAX_PRICE,
    });

    const [contextListCount, setContextListCount] = useState<number>(0);

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        const newFilter = productService.findByPrice(queryParams.valueMin, queryParams.valueMax);
        setProducts(newFilter);
        setContextListCount(newFilter.length);
    }, [queryParams]);

    function handleSearch(min: number, max: number) {
        const newMin = min;
        const newMax = max;
        setQueryParams({ valueMin: newMin || MIN_PRICE, valueMax: newMax || MAX_PRICE });
    }

    return (
        <>
            <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>
                <Header />
                <main className='body-section'>
                    <section className="container">
                        <Filter onSearch={handleSearch} />
                        <div className="searchResultSection">
                            {
                                products.map(product =>
                                    <Listing key={product.id}
                                        product={product} />
                                )
                            }
                        </div>
                    </section>
                </main>
            </ContextListCount.Provider>
        </>
    )
}



