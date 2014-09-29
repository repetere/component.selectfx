/*
 * component.selectfx
 * https://github.com/typesettin/component.selectfx
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */

'use strict';

var should = require('chai').should();
var SelectFX = require('../lib/component.selectfx');

describe('component.selectfx', function () {
	describe('#indexOf()', function () {
		it('should return -1 when the value is not present', function () {
			should.equal(-1, [1, 2, 3].indexOf(5));
			should.equal(-1, [1, 2, 3].indexOf(0));
		});
	});
});
