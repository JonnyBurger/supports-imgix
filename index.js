'use strict';

/*
	Supported input formats
	Source: https://support.imgix.com/hc/en-us/articles/204280985-Supported-image-formats for formats
	Wikipedia for the according mime types
*/

const list = [
	// Adobe illustrator
	'application/illustrator',
	'application/vnd.adobe.illustrator',
	// BMP
	'image/bmp',
	// GIF
	'image/gif',
	// ICO
	'image/vnd.microsoft.icon',
	'image/x-icon',
	// ICNS
	'image/icns',
	// JPEG
	'image/jpeg',
	'image/pjpeg',
	// JPEG2000
	'image/jp2',
	'image/jpx',
	'image/jpm',
	// PCT
	'image/x-pict',
	// HEIC
	'image/heif',
	'image/heic',
	'image/heif-sequence',
	'image/heic-sequence',
	// PDF
	'application/pdf',
	'application/pdf',
	'application/x-pdf',
	'application/x-bzpdf',
	'application/x-gzpdf',
	// PNG
	'image/png',
	// PSD
	'image/vnd.adobe.photoshop',
	// TIFF
	'image/tiff',
	'image/tiff-fx'
];

module.exports = function (mimeType) {
	return list.indexOf(mimeType) > -1;
};

module.exports.supportedTypes = list;
