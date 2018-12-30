import test from 'ava';
import supportsImgix, {supportedTypes} from '.';

test('Should correctly determine if supports', t => {
	t.true(supportsImgix('image/png'));
	t.false(supportsImgix('image/webp'));
});

test('Should export list', t => {
	t.true(supportedTypes.length > 10);
});
