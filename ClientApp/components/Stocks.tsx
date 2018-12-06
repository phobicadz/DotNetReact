import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { ApplicationState }  from '../store';
import * as StockPricesState from '../store/StockPrices';

// At runtime, Redux will merge together...
type StockPriceProps =
    StockPricesState.StockPricesState        // ... state we've requested from the Redux store
    & typeof StockPricesState.actionCreators      // ... plus action creators we've requested
    & RouteComponentProps<{}>; 

class Stocks extends React.Component<StockPriceProps, {}> {

    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestStockPrices()
    }

    componentWillReceiveProps(nextProps: StockPriceProps) {
        // This method runs when incoming props (e.g., route params) change
      //  let startDateIndex = parseInt(nextProps.match.params.startDateIndex) || 0;
      //  this.props.requestStockPrices()
    }

    public render() {
        return <div>
            <h1>Stock Prices</h1>
            <p>Getting Fictional Stock Prices</p>
            { this.renderStocksTable() } 
        </div>;
    }

    private renderStocksTable() {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>               
                </tr>
            </thead>
            <tbody>
            {this.props.stockPrices.map(stockPrices =>
                <tr key={ stockPrices.currentPrice }>
                    <td>{ stockPrices.currentPrice }</td>
                    <td>{ stockPrices.stockName }</td>
                </tr>
            )}
            </tbody>
        </table>;
    }

}
export default connect(
    (state: ApplicationState) => state.stockPrices, // Selects which state properties are merged into the component's props
    StockPricesState.actionCreators                 // Selects which action creators are merged into the component's props
)(Stocks) as typeof Stocks;
