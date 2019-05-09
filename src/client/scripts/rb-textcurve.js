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
