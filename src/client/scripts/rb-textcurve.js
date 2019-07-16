/***************
 * RB-TEXTCURVE
 ***************/
import { RbBase, props, html } from '../../base/scripts/base.js';
import template                from '../views/rb-textcurve.html';

export class RbTextcurve extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.version = '0.0.4';
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: Object.assign({}, props.string, {
				default: 'default'
			})
		};
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-textcurve', RbTextcurve);
