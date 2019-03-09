import expect from 'chai';
import { Baseball } from '../src/player';
import {} from 'jasmine';

describe('Player', () => {
    it('propogates public fields from the constructor', () => {
        const player : Baseball.Batter = new Baseball.Batter('John Smith', 45, 22);
        expect(player.hr).to.equal(45);
        expect(player.sb).to.equal(22);
    })
});
