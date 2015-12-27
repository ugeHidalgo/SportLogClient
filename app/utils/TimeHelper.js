/**
 * This class is to handle time fields which are stored into db as a bigint(20) but are used in the
 * format hhhh..h:mm:ss
 * 
 */
 
 Ext.define('SportLog.utils.TimeHelper', {
 	
 	bigIntToStringTime: function (number) {
    	var me = this, minNumber,
    		strHour = '0', hour = 0,
    		strMin = '00', min = 0,
 			strSec = '00', sec = 0;
 			
 		if (number<0){
 			return strHour + ':' + strMin + ':' + strSec;
 		}
    	
    	hour = Math.floor(number/3600);
    	minNumber = number-(hour*3600);
    	min = Math.floor(minNumber/60);
    	sec = minNumber-(min*60);
    	
    	strHour = hour.toString();
    	strMin = me.convertNumberToTwoDigitString(min);
    	strSec = me.convertNumberToTwoDigitString(sec);
    	return strHour + ':' + strMin + ':' + strSec;
    },	
    
    stringTimeToBigInt: function (stringTime) {
    	var me = this,
    		firstSeparatorPos, secondSeparatorPos, anyOtherSeparatorPos,
    		hourStr, minStr, secStr,
    		min, sec;
    	
    	firstSeparatorPos = stringTime.indexOf(':');
    	if (firstSeparatorPos==-1 || firstSeparatorPos==0) return -1;
    	secondSeparatorPos = stringTime.indexOf(':',firstSeparatorPos+1);
    	if (secondSeparatorPos==-1 || firstSeparatorPos+1==secondSeparatorPos) return -1;
    	anyOtherSeparatorPos = stringTime.indexOf(':',secondSeparatorPos+1);
    	if (anyOtherSeparatorPos>0) return -1;
    	if (secondSeparatorPos+1==stringTime.length) return -1;
    	
    	hourStr = stringTime.substr(0,firstSeparatorPos);
    	
    	minStr = stringTime.substr(firstSeparatorPos+1,secondSeparatorPos-firstSeparatorPos-1);
    	min=parseInt(minStr);
    	if (min>59) return -2;
    	
    	secStr = stringTime.substr(secondSeparatorPos+1,stringTime.length-secondSeparatorPos-1);
    	sec=parseInt(secStr);
    	if (sec>59) return -3;
    	    	
    	return parseInt(hourStr)*3600 + min*60 + sec;
    },
    
    convertNumberToTwoDigitString: function (number){
    	var aux = number.toString();
    	return (aux.length==1) ? '0'+aux : aux;
    }
 });