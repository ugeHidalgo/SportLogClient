/**
 * This class is to handle time fields which are stored into db as a bigint(20) but are used in the
 * format hhhh..h:mm:ss
 * 
 */
 
 Ext.define('SportLog.utils.timeHelper', {
 	
 	bigIntToStringTime: function (number) {
    	var me = this, stringTime = "000:00:00";
    	
    	return stringTime;
    },	
    
    stringTimeToBigInt: function (stringTime) {
    	var me = this, bigIntTime = 0;
    	
    	return bigIntTime;
    }
 });