import * as React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { ApplicationState }  from '../store';
import * as StockPricesState from '../store/StockPrices';

// At runtime, Redux will merge together...
type StockPriceProps =
    StockPricesState.StockPricesState        // ... state we've requested from the Redux store
    & typeof StockPricesState.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{index: number}>; 

class Stocks extends React.Component<StockPriceProps, {}> {

    componentWillMount() {
        // This method runs when the component is first added to the page
        let index = this.props.match.params.index || 0;
        this.props.requestStockPrices(index);
    }

    componentWillReceiveProps(nextProps: StockPriceProps) {
        // This method runs when incoming props (e.g., route params) change
        let index = nextProps.match.params.index || 0;
        this.props.requestStockPrices(index);
    }

    public render() {
        return <div>
            <h1>Stock Prices</h1>
            <p>Getting Fictional Stock Prices</p>
            { this.renderStocksTable() } 
            { this.renderPagination() }
        </div>;
    }

    private renderStocksTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Name</th>
                    <th>Price</th>               
                </tr>
            </thead>
            <tbody>
            {this.props.stockPrices.map(stockPrices =>
                <tr key={ stockPrices.index }>
                    <td>{ stockPrices.index }</td>
                    <td>{ stockPrices.currentPrice }</td>
                    <td>{ stockPrices.stockName }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }

    private renderPagination() {
        let prevIndex = (this.props.index || 0) - 6;
        let nextIndex = (this.props.index || 0) + 6;

        return <p className='clearfix text-center'>
            <Link className='btn btn-default pull-left' to={ `/stocks/${ prevIndex }` }>Previous</Link>
            <Link className='btn btn-default pull-right' to={ `/stocks/${ nextIndex }` }>Next</Link>
            { this.props.isLoading ? <span>Loading...</span> : [] }
        </p>;
    }

}
export default connect(
    (state: ApplicationState) => state.stockPrices, // Selects which state properties are merged into the component's props
    StockPricesState.actionCreators                 // Selects which action creators are merged into the component's props
)(Stocks) as typeof Stocks;
