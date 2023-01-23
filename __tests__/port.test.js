const Port = require('../src/port');
const Itinerary = require('../src/itinerary');
const Ship = require('../src/ship');

describe('Port', () => {
    describe('name, add & remove ship', () => {
        let port;
        let ship;
        beforeEach(() => {
            ship = {};
            port = new Port('Dover',[ship]);
        });
        
        it('returns name', () => { 
            
            expect(port.name).toEqual('Dover');
        })
    
        it('Can add a ship', () => {
            
            port.addShip(ship);
            expect(port.ships).toEqual([ship])
        
        })
    
        it('Can remove a ship', () => {
            
            port.removeShip(ship);
            expect(port.ships).toEqual([]);
        })
    });

    it('Can be instantiated', () => { 
        expect(new Port()).toBeInstanceOf(Object);
    })

    
})