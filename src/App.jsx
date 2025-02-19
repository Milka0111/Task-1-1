import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

export const App = () => {
	const year = new Date().getFullYear();
	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(
				'p',
				null,
				React.createElement('span', null, 'Edit'),
				React.createElement('code', null, 'src/App.jsx'),
				React.createElement('span', null, 'and save to reload.'),
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('p', null, year),
		),
	);
};
