import { fetch, addTask } from 'domain-task';
import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// State
export interface StockPricesState {
    isLoading: boolean;
    index?: number;
    stockPrices: StockPrice[];
}
export interface StockPrice {
    index: number;
    currentPrice: number;
    stockName: string;
}

// Actions
interface RequestStockPricesAction {
    type: 'REQUEST_STOCK_PRICES';
    index: number;
}

interface ReceiveStockPricesAction {
    type: 'RECEIVE_STOCK_PRICES';
    index: number;
    stockPrices: StockPrice[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestStockPricesAction | ReceiveStockPricesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).
export const actionCreators = {
    requestStockPrices: (index: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        if (index !== getState().stockPrices.index) {
            let fetchTask = fetch(`api/MyData/StockPrices?index=${index}`)
                .then(response => response.json() as Promise<StockPrice[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_STOCK_PRICES', index: index, stockPrices: data });
                });
            addTask(fetchTask); // Ensure server-side prerendering waits for this to complete
            dispatch({ type: 'REQUEST_STOCK_PRICES', index: index });
        }
    }
};


// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.
const unloadedState: StockPricesState = { stockPrices: [], isLoading: false };

export const reducer: Reducer<StockPricesState> = (state: StockPricesState, incomingAction: Action) => {
    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_STOCK_PRICES':
            return {
                index: action.index,
                stockPrices: state.stockPrices,
                isLoading: true
            };
        case 'RECEIVE_STOCK_PRICES':
            if (action.index === state.index) {
                return {
                    index: action.index,
                    stockPrices: action.stockPrices,
                    isLoading: false
                };
            }
            break;
        default:
            // The following line guarantees that every action in the KnownAction union has been covered by a case above
            const exhaustiveCheck: never = action;
    }

    return state || unloadedState;
};