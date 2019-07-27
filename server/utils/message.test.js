var expect=require('expect');

var {generateMessage,generateLocationMessage}=require('./message');
describe('generateMessage',()=>{
it('should generate correct message object',()=>{
var from ='pulkit';
var text= 'some msg';
var message=generateMessage(from,text);

expect(message.createdAt).toBeA('number');
expect(message).toInclude({from,text});
});

});

describe('generateLocationMessage',()=>{
	it('should generate currect location object',()=>{
		var from='DEB';
		var latitude = 14;
		var longitude =19;
		var url='https://www.google.com/maps?=14,19';
		var message =generateLocationMessage(from,latitude,longitude); 
	
	expect(message.createdAt).toBeA('number');
expect(message).toInclude({from,url});
	});
});