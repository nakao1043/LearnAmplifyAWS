/* eslint-disable import/default */

import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import React from 'react';
import { render } from 'react-dom';
/*import { Router} from 'react-router';*/
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
require('./favicon.ico');


render(<BrowserRouter>
			<div>
				{routes}
			</div>
		</BrowserRouter>, document.getElementById('app')
);
