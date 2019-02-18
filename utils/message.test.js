const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
         var from = 'Sid';
         var text = 'Message';
         var message = generateMessage(from, text);

         expect(typeof message.createdAt).toBe('number');
         expect(message).toMatchObject({
             from, text
         });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = "Baba";
        let latitude = 1;
        let longitude = 1;
        let createdAt = new Date().getTime();
        let url = 'https://www.google.com/maps/?q=10,10';

        let locationMessage = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
         expect(locationMessage).toMatchObject({
            createdAt, from, url
         });
    });
});