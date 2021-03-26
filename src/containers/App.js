import React from 'react';
import PropTypes from 'prop-types'; // ES6
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import Data from '../data';


import Dashboard from './DashboardPage';

import { Route } from 'react-router';
import { Switch } from 'react-router-dom';


import OrderSearchPage from './OrderSearchPage';
import FormPage from './FormPage';
import TablePage from './TablePage';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === LARGE });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
            handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />

          <LeftDrawer navDrawerOpen={navDrawerOpen}
            menus={Data.menus}
            username="和功 テスト" />

          <div style={styles.container}>
            <Switch>
            <Route path="/form" component={FormPage} />
            <Route path="/OrderSearchPage" component={OrderSearchPage} />
            <Route path="/TablePage" component={TablePage} />
            <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  width: PropTypes.number
};

export default withWidth()(App);
