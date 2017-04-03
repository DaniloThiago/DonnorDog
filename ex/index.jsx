import './estilo'
import React from 'react'
import ReactDOM from 'react-dom'
import Component from './component'

import ComponentDefault, { Component1, Component2 } from './component' // caso tenha mais de um componente dentro do arquivo e tenha definido um como default

ReactDOM.render(
	<div>
		<ComponentDefault value="Default" />
		<Component1 value="Component1" />
		<Component2 value="Component2" />
	</div>, document.getElementById('app'))