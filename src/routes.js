import React from 'react';
import { Route} from 'react-router';
import App from './containers/App';
/*
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FormTes from './containers/FormTest';
import OrderPage from './containers/OrderPage';
import PrintTest from './containers/PrintTest';
import Preview2 from './containers/Preview2';
import Preview from './containers/Preview';
*/

export default (
	<Route path="/" component={App}/>
	/*
	<MuiThemeProvider>
		<Route>
		      <Route path="/login" component={LoginPage}/>
		      <Route path="/" component={App}/>
		      <Route path='/dashboard' component={Dashboard}/>
		      <Route path="/form" component={FormPage}/>
		      <Route path="/TablePage" component={TablePage}/>
		      <Route path="/FormTest" component={FormTes}/>
		      <Route path="/Order" component={OrderPage}/>
		      <Route path="/PrintTest" component={PrintTest}/>
		      <Route path="/Preview" component={Preview}/>
		      <Route path="/Preview2" component={Preview2}/>
		      <Route path="*" component={NotFoundPage}/>
		</Route>
	</MuiThemeProvider>  
	*/
);
