/**
 * @file mofron-effect-size/index.js
 * @brief 
 * @license MIT
 */
const Size = require("mofron-effect-size");
const Move = require("mofron-effect-move");

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("ArrowSize");
	    this.shortForm("toSize");
            
	    this.transition(["width","height"]);
            
            /* init config */
	    this.confmng().add("toSize", { type: "size" });
            
            this.speed(1000);
	    
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    component (prm) {
        try {
	    let ret = super.component(prm);
	    if (undefined === prm) {
                return ret;
	    }
	    
	    prm.child()[0].effect(new Size({
	        speed: 1000,
                toWidth: this.toSize()
	    }));
            
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    toSize (prm) {
        try {
            return this.confmng("toSize", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
