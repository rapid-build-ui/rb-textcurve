/***************
 * RB-TEXTCURVE
 ***************/
import { RbBase, props, html } from '../../rb-base/scripts/rb-base.js';
import template                from '../views/rb-textcurve.html';

export class RbTextcurve extends RbBase() {
	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string
		};
	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-textcurve', RbTextcurve);
