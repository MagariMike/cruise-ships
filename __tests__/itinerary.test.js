const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinerary', () => { 
    it('Can be instantiated', () => { 
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('has a ports property', () => {
        const testItinerary = new Itinerary('test');
        expect(testItinerary.ports).toEqual('test');
    })
})

