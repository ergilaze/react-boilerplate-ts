import React, { ElementType } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './scenes/App/App';
import * as serviceWorker from './serviceWorker';

function render(Component: ElementType) {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
