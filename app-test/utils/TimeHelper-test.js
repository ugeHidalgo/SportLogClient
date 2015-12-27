/**
 * 
 */
describe ("TimeHelper test ", function () {
	var timeHelper;
  
  	beforeEach (function () {
  		timeHelper = Ext.create ('SportLog.utils.TimeHelper');
  	}); 
  	
  	describe ("bigIntToStringTime", function (){
  		it (' should return 0:00:00 when number is less than 0', function () {
  		
  			var result = timeHelper.bigIntToStringTime(-1);
        	expect (result).toBe('0:00:00');
  		});
  		
  		it (' should return 0:00:00 when number is 0', function () {
  		
  			var result = timeHelper.bigIntToStringTime(0);
        	expect (result).toBe('0:00:00');
  		});
  		
  		it (' should return 0:00:01 when number is 1', function () {
  		
  			var result = timeHelper.bigIntToStringTime(1);
        	expect (result).toBe('0:00:01');
  		});
  		
  		it (' should return 0:01:00 when number is 60', function () {
  		
  			var result = timeHelper.bigIntToStringTime(60);
        	expect (result).toBe('0:01:00');
  		});
  	
  		it ('should return 1:00:00 when number is 3600', function () {
  		
  			var result = timeHelper.bigIntToStringTime(3600);
        	expect (result).toBe('1:00:00');
  		});
  		
  		it ('should return 1:01:01 when number is 3661', function () {
  		
  			var result = timeHelper.bigIntToStringTime(3661);
        	expect (result).toBe('1:01:01');
  		});
  		
  		it ('should return 1:01:00 when number is 3660', function () {
  		
  			var result = timeHelper.bigIntToStringTime(3660);
        	expect (result).toBe('1:01:00');
  		});
  		
  		it ('should return 10:30:30 when number is 37830', function () {
  		
  			var result = timeHelper.bigIntToStringTime(37830);
        	expect (result).toBe('10:30:30');
  		});
  		
  		it ('should return 120:59:59 when number is 435599', function () {
  		
  			var result = timeHelper.bigIntToStringTime(435599);
        	expect (result).toBe('120:59:59');
  		});
  		
  		it ('should return 121:00:00 when number is 435600', function () {
  		
  			var result = timeHelper.bigIntToStringTime(435600);
        	expect (result).toBe('121:00:00');
  		});
  	});	
  	
  	describe ("stringTimeToBigInt", function (){
  		it ('should return 0 when passing 00:00:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:00:00');
        	expect (result).toBe(0);
  		});
  		
  		it ('should return 0 when passing 0:00:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('0:00:00');
        	expect (result).toBe(0);
  		});
  		
  		it ('should return 0 when passing 00:0:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:0:00');
        	expect (result).toBe(0);
  		});
  		
  		it ('should return 0 when passing 00:00:0', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:00:0');
        	expect (result).toBe(0);
  		});
  		
  		it ('should return 1 when passing 00:00:01', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:00:01');
        	expect (result).toBe(1);
  		});
  		
  		it ('should return 60 when passing 00:01:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:01:00');
        	expect (result).toBe(60);
  		});
  		
  		it ('should return 3600 when passing 01:00:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('01:00:00');
        	expect (result).toBe(3600);
  		});
  		
  		it ('should return 3660 when passing 01:01:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('01:01:00');
        	expect (result).toBe(3660);
  		});
  		
  		it ('should return 3660 when passing 1:1:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('01:01:00');
        	expect (result).toBe(3660);
  		});
  		
  		it ('should return 3661 when passing 01:01:01', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('01:01:01');
        	expect (result).toBe(3661);
  		});
  		
  		it ('should return 36000 when passing 10:00:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('10:00:00');
        	expect (result).toBe(36000);
  		});
  		
  		it ('should return 37830 when passing 10:30:30', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('10:00:00');
        	expect (result).toBe(36000);
  		});
  		
  		it ('should return 435599 when passing 120:59:59', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('120:59:59');
        	expect (result).toBe(435599);
  		});
  		
  		it ('should return 435600 when passing 121:00:00', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('121:00:00');
        	expect (result).toBe(435600);
  		});
  		
  		it ('should return -1 when only two fields', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('123:34');
        	expect (result).toBe(-1);
  		});
  		
  		it ('should return -1 when only one field', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('123');
        	expect (result).toBe(-1);
  		});
  		
  		it ('should return -1 when missing hours', function () {
  		
  			var result = timeHelper.stringTimeToBigInt(':00:00');
        	expect (result).toBe(-1);
  		});
  		
  		it ('should return -1 when missing minutes', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00::00');
        	expect (result).toBe(-1);
  		});
  		
  		it ('should return -1 when missing seconds', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('00:00:');
        	expect (result).toBe(-1);
  		});
  		
  		it ('should return -2 when minutes are greater than 59', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('1:60:59');
        	expect (result).toBe(-2);
  		});
  		
  		it ('should return -3 when seconds are greater than 59', function () {
  		
  			var result = timeHelper.stringTimeToBigInt('1:59:60');
        	expect (result).toBe(-3);
  		});

  	});
});