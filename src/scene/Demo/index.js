/**
 * 
 */
'use strict';

import React, { Component } from 'react';
import Store from './src/Store';
import Login from './src/Login';
import Index from './src/Index'

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			isLogin: false,
		};
	}

	_renderLogin() {
		return (
			<Login result={user => this._logined(uesr)} />
		);
	}

	_logined(user) {
		Store.user.add(user);
		this.setState({
			isLogin: true,
		})
	}

	_renderIndex() {
		return (
			<Index />
		);
	}

	render() {
		if (!this.state.isLogin) {
			return this._renderLogin();
		}

		return this._renderIndex();
	}
};