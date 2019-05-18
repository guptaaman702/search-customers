'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('find_customers function test', () => {

    it('should return 1 record in customers_list whose distance is less than or equal to 100km', () => {
        const json = [
            { "latitude": "52.986375", "user_id": 12, "name": "Christina McArdle", "longitude": "-6.043701" },
            { "latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699" },
            { "latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951" },
            {"latitude": "54.0894797", "user_id": 8, "name": "Eoin Ahearn", "longitude": "-6.18671"}
        ];
        const dublin_latitude = 53.339428;
        const dublin_longitude = -6.257664;
        const result = index.find_customers(json, dublin_latitude, dublin_longitude);
        expect(result).to.have.lengthOf(2);
    });

    it('should return 0 record in customers_list whose distance is less than or equal to 100km', () => {
        const json = [
            { "latitude": "51.92893", "user_id": 1, "name": "Alice Cahill", "longitude": "-10.27699" },
            { "latitude": "51.8856167", "user_id": 2, "name": "Ian McArdle", "longitude": "-10.4240951" },
        ];
        const dublin_latitude = 53.339428;
        const dublin_longitude = -6.257664;
        const result = index.find_customers(json, dublin_latitude, dublin_longitude);
        expect(result).to.have.lengthOf(0);
    });
});

describe('degrees_to_radians function test', () => {

    it('convert degrees_to_radians for dublin latitude', () => {
        const dublin_latitude = 53.339428;
        const result = index.degrees_to_radians(dublin_latitude);
        expect(result).to.equal(0.9309486397304539);
    });

    it('convert degrees_to_radians for dublin longitude', () => {
        const dublin_longitude = -6.257664;
        const result = index.degrees_to_radians(dublin_longitude);
        expect(result).to.equal(-0.10921684028351844);
    });
});

describe('getDistance function test', () => {
    it('should getDistance between dublin area and one of customer area', () => {
        const dublin_latitude = 53.339428;
        const customer_latitude = 52.339428;
        const dublin_longitude = -6.257664;
        const customer_longitude = -5.257664;
        const radius_earth = 6371;
        const result = index.getDistance(dublin_latitude,customer_latitude,dublin_longitude,customer_longitude,radius_earth);
        expect(result).to.equal(7938.041920231655);
    });
});