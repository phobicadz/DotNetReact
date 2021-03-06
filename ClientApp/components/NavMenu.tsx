import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>ReactWithNetCore</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Counter
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Fetch data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/clock' } activeClassName='active'>
                                <span className='glyphicon glyphicon-dashboard'></span> Clock
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/randomUsers' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Random Users
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/example' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Unit Testing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/stocks' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Stocks
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
