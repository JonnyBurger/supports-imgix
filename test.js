import test from 'ava';
import supportedImgixMimeTypes from '.';

test('title', t => {
	const err = t.throws(() => {
		supportedImgixMimeTypes(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(supportedImgixMimeTypes('unicorns'), 'unicorns & rainbows');
});
