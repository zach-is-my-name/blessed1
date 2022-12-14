/**
 * node-singlebyte
 */

// The MIT License (MIT)
//
// Copyright (c) 2013, Sergey Sokoloff (aka Mithgol the Webmaster).
// https://github.com/Mithgol/node-singlebyte
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var extend = function (target) {
  target = target || {};
  Array.prototype.slice.call(arguments, 1).forEach(function (obj) {
    Object.keys(obj || {}).forEach(function (key) {
      target[key] = obj[key];
    });
  });
  return target;
};

var singlebyte = function () {
  /* jshint indent: false */
  if (!(this instanceof singlebyte)) {
    return new singlebyte();
  }

  this.encodings = [];

  // CP437
  this.learnEncoding(
    "cp437",
    this.extendASCII([
      0xc7, 0xfc, 0xe9, 0xe2, 0xe4, 0xe0, 0xe5, 0xe7, 0xea, 0xeb, 0xe8, 0xef, 0xee, 0xec, 0xc4,
      0xc5, 0xc9, 0xe6, 0xc6, 0xf4, 0xf6, 0xf2, 0xfb, 0xf9, 0xff, 0xd6, 0xdc, 0xa2, 0xa3, 0xa5,
      0x20a7, 0x192, 0xe1, 0xed, 0xf3, 0xfa, 0xf1, 0xd1, 0xaa, 0xba, 0xbf, 0x2310, 0xac, 0xbd, 0xbc,
      0xa1, 0xab, 0xbb, 0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0x2561, 0x2562, 0x2556, 0x2555,
      0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b, 0x2510, 0x2514, 0x2534, 0x252c, 0x251c,
      0x2500, 0x253c, 0x255e, 0x255f, 0x255a, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256c,
      0x2567, 0x2568, 0x2564, 0x2565, 0x2559, 0x2558, 0x2552, 0x2553, 0x256b, 0x256a, 0x2518,
      0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580, 0x3b1, 0x3b2, 0x393, 0x3c0, 0x3a3, 0x3c3,
      0x3bc, 0x3c4, 0x3a6, 0x398, 0x3a9, 0x3b4, 0x221e, 0x3c6, 0x3b5, 0x2229, 0x2261, 0xb1, 0x2265,
      0x2264, 0x2320, 0x2321, 0xf7, 0x2248, 0xb0, 0x2219, 0xb7, 0x221a, 0x207f, 0xb2, 0x25a0, 0xa0,
    ]),
  );

  // CP850
  this.learnEncoding(
    "cp850",
    this.extendASCII([
      0xc7, 0xfc, 0xe9, 0xe2, 0xe4, 0xe0, 0xe5, 0xe7, 0xea, 0xeb, 0xe8, 0xef, 0xee, 0xec, 0xc4,
      0xc5, 0xc9, 0xe6, 0xc6, 0xf4, 0xf6, 0xf2, 0xfb, 0xf9, 0xff, 0xd6, 0xdc, 0xf8, 0xa3, 0xd8,
      0xd7, 0x192, 0xe1, 0xed, 0xf3, 0xfa, 0xf1, 0xd1, 0xaa, 0xba, 0xbf, 0xae, 0xac, 0xbd, 0xbc,
      0xa1, 0xab, 0xbb, 0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0xc1, 0xc2, 0xc0, 0xa9, 0x2563,
      0x2551, 0x2557, 0x255d, 0xa2, 0xa5, 0x2510, 0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c,
      0xe3, 0xc3, 0x255a, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0xa4, 0xf0, 0xd0, 0xca,
      0xcb, 0xc8, 0x131, 0xcd, 0xce, 0xcf, 0x2518, 0x250c, 0x2588, 0x2584, 0xa6, 0xcc, 0x2580, 0xd3,
      0xdf, 0xd4, 0xd2, 0xf5, 0xd5, 0xb5, 0xfe, 0xde, 0xda, 0xdb, 0xd9, 0xfd, 0xdd, 0xaf, 0xb4,
      0xad, 0xb1, 0x2017, 0xbe, 0xb6, 0xa7, 0xf7, 0xb8, 0xb0, 0xa8, 0xb7, 0xb9, 0xb3, 0xb2, 0x25a0,
      0xa0,
    ]),
  );

  // CP858
  this.learnEncoding(
    "cp858",
    this.extendASCII([
      0xc7, 0xfc, 0xe9, 0xe2, 0xe4, 0xe0, 0xe5, 0xe7, 0xea, 0xeb, 0xe8, 0xef, 0xee, 0xec, 0xc4,
      0xc5, 0xc9, 0xe6, 0xc6, 0xf4, 0xf6, 0xf2, 0xfb, 0xf9, 0xff, 0xd6, 0xdc, 0xf8, 0xa3, 0xd8,
      0xd7, 0x192, 0xe1, 0xed, 0xf3, 0xfa, 0xf1, 0xd1, 0xaa, 0xba, 0xbf, 0xae, 0xac, 0xbd, 0xbc,
      0xa1, 0xab, 0xbb, 0x2591, 0x2592, 0x2593, 0x2502, 0x2524, 0xc1, 0xc2, 0xc0, 0xa9, 0x2563,
      0x2551, 0x2557, 0x255d, 0xa2, 0xa5, 0x2510, 0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c,
      0xe3, 0xc3, 0x255a, 0x2554, 0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0xa4, 0xf0, 0xd0, 0xca,
      0xcb, 0xc8, 0x20ac, 0xcd, 0xce, 0xcf, 0x2518, 0x250c, 0x2588, 0x2584, 0xa6, 0xcc, 0x2580,
      0xd3, 0xdf, 0xd4, 0xd2, 0xf5, 0xd5, 0xb5, 0xfe, 0xde, 0xda, 0xdb, 0xd9, 0xfd, 0xdd, 0xaf,
      0xb4, 0xad, 0xb1, 0x2017, 0xbe, 0xb6, 0xa7, 0xf7, 0xb8, 0xb0, 0xa8, 0xb7, 0xb9, 0xb3, 0xb2,
      0x25a0, 0xa0,
    ]),
  );

  // CP808
  this.learnEncoding(
    "cp808",
    this.extendASCII([
      0x410, 0x411, 0x412, 0x413, 0x414, 0x415, 0x416, 0x417, 0x418, 0x419, 0x41a, 0x41b, 0x41c,
      0x41d, 0x41e, 0x41f, 0x420, 0x421, 0x422, 0x423, 0x424, 0x425, 0x426, 0x427, 0x428, 0x429,
      0x42a, 0x42b, 0x42c, 0x42d, 0x42e, 0x42f, 0x430, 0x431, 0x432, 0x433, 0x434, 0x435, 0x436,
      0x437, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x43e, 0x43f, 0x2591, 0x2592, 0x2593, 0x2502,
      0x2524, 0x2561, 0x2562, 0x2556, 0x2555, 0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b,
      0x2510, 0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c, 0x255e, 0x255f, 0x255a, 0x2554,
      0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0x2567, 0x2568, 0x2564, 0x2565, 0x2559, 0x2558,
      0x2552, 0x2553, 0x256b, 0x256a, 0x2518, 0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580, 0x440,
      0x441, 0x442, 0x443, 0x444, 0x445, 0x446, 0x447, 0x448, 0x449, 0x44a, 0x44b, 0x44c, 0x44d,
      0x44e, 0x44f, 0x401, 0x451, 0x404, 0x454, 0x407, 0x457, 0x40e, 0x45e, 0xb0, 0x2219, 0xb7,
      0x221a, 0x2116, 0x20ac, 0x25a0, 0xa0,
    ]),
  );

  // CP866
  this.learnEncoding(
    "cp866",
    this.extendASCII([
      0x410, 0x411, 0x412, 0x413, 0x414, 0x415, 0x416, 0x417, 0x418, 0x419, 0x41a, 0x41b, 0x41c,
      0x41d, 0x41e, 0x41f, 0x420, 0x421, 0x422, 0x423, 0x424, 0x425, 0x426, 0x427, 0x428, 0x429,
      0x42a, 0x42b, 0x42c, 0x42d, 0x42e, 0x42f, 0x430, 0x431, 0x432, 0x433, 0x434, 0x435, 0x436,
      0x437, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x43e, 0x43f, 0x2591, 0x2592, 0x2593, 0x2502,
      0x2524, 0x2561, 0x2562, 0x2556, 0x2555, 0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b,
      0x2510, 0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c, 0x255e, 0x255f, 0x255a, 0x2554,
      0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0x2567, 0x2568, 0x2564, 0x2565, 0x2559, 0x2558,
      0x2552, 0x2553, 0x256b, 0x256a, 0x2518, 0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580, 0x440,
      0x441, 0x442, 0x443, 0x444, 0x445, 0x446, 0x447, 0x448, 0x449, 0x44a, 0x44b, 0x44c, 0x44d,
      0x44e, 0x44f, 0x401, 0x451, 0x404, 0x454, 0x407, 0x457, 0x40e, 0x45e, 0xb0, 0x2219, 0xb7,
      0x221a, 0x2116, 0xa4, 0x25a0, 0xa0,
    ]),
  );

  // CP1125
  this.learnEncoding(
    "cp1125",
    this.extendASCII([
      0x410, 0x411, 0x412, 0x413, 0x414, 0x415, 0x416, 0x417, 0x418, 0x419, 0x41a, 0x41b, 0x41c,
      0x41d, 0x41e, 0x41f, 0x420, 0x421, 0x422, 0x423, 0x424, 0x425, 0x426, 0x427, 0x428, 0x429,
      0x42a, 0x42b, 0x42c, 0x42d, 0x42e, 0x42f, 0x430, 0x431, 0x432, 0x433, 0x434, 0x435, 0x436,
      0x437, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x43e, 0x43f, 0x2591, 0x2592, 0x2593, 0x2502,
      0x2524, 0x2561, 0x2562, 0x2556, 0x2555, 0x2563, 0x2551, 0x2557, 0x255d, 0x255c, 0x255b,
      0x2510, 0x2514, 0x2534, 0x252c, 0x251c, 0x2500, 0x253c, 0x255e, 0x255f, 0x255a, 0x2554,
      0x2569, 0x2566, 0x2560, 0x2550, 0x256c, 0x2567, 0x2568, 0x2564, 0x2565, 0x2559, 0x2558,
      0x2552, 0x2553, 0x256b, 0x256a, 0x2518, 0x250c, 0x2588, 0x2584, 0x258c, 0x2590, 0x2580, 0x440,
      0x441, 0x442, 0x443, 0x444, 0x445, 0x446, 0x447, 0x448, 0x449, 0x44a, 0x44b, 0x44c, 0x44d,
      0x44e, 0x44f, 0x401, 0x451, 0x490, 0x491, 0x404, 0x454, 0x406, 0x456, 0x407, 0x457, 0xb7,
      0x221a, 0x2116, 0xa4, 0x25a0, 0xa0,
    ]),
  );

  // KOI8-R
  this.learnEncoding(
    "koi8-r",
    this.extendASCII([
      0x2500, 0x2502, 0x250c, 0x2510, 0x2514, 0x2518, 0x251c, 0x2524, 0x252c, 0x2534, 0x253c,
      0x2580, 0x2584, 0x2588, 0x258c, 0x2590, 0x2591, 0x2592, 0x2593, 0x2320, 0x25a0, 0x2219,
      0x221a, 0x2248, 0x2264, 0x2265, 0xa0, 0x2321, 0xb0, 0xb2, 0xb7, 0xf7, 0x2550, 0x2551, 0x2552,
      0x451, 0x2553, 0x2554, 0x2555, 0x2556, 0x2557, 0x2558, 0x2559, 0x255a, 0x255b, 0x255c, 0x255d,
      0x255e, 0x255f, 0x2560, 0x2561, 0x401, 0x2562, 0x2563, 0x2564, 0x2565, 0x2566, 0x2567, 0x2568,
      0x2569, 0x256a, 0x256b, 0x256c, 0xa9, 0x44e, 0x430, 0x431, 0x446, 0x434, 0x435, 0x444, 0x433,
      0x445, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x043e, 0x43f, 0x44f, 0x440, 0x441, 0x442,
      0x443, 0x436, 0x432, 0x44c, 0x44b, 0x437, 0x448, 0x44d, 0x449, 0x447, 0x44a, 0x42e, 0x410,
      0x411, 0x426, 0x414, 0x415, 0x424, 0x413, 0x425, 0x418, 0x419, 0x41a, 0x41b, 0x41c, 0x41d,
      0x41e, 0x41f, 0x42f, 0x420, 0x421, 0x422, 0x423, 0x416, 0x412, 0x42c, 0x42b, 0x417, 0x428,
      0x42d, 0x429, 0x427, 0x42a,
    ]),
  );

  // KOI8-U
  this.learnEncoding(
    "koi8-u",
    this.extendASCII([
      0x2500, 0x2502, 0x250c, 0x2510, 0x2514, 0x2518, 0x251c, 0x2524, 0x252c, 0x2534, 0x253c,
      0x2580, 0x2584, 0x2588, 0x258c, 0x2590, 0x2591, 0x2592, 0x2593, 0x2320, 0x25a0, 0x2219,
      0x221a, 0x2248, 0x2264, 0x2265, 0xa0, 0x2321, 0xb0, 0xb2, 0xb7, 0xf7, 0x2550, 0x2551, 0x2552,
      0x451, 0x454, 0x2554, 0x456, 0x457, 0x2557, 0x2558, 0x2559, 0x255a, 0x255b, 0x491, 0x255d,
      0x255e, 0x255f, 0x2560, 0x2561, 0x401, 0x404, 0x2563, 0x406, 0x407, 0x2566, 0x2567, 0x2568,
      0x2569, 0x256a, 0x490, 0x256c, 0xa9, 0x44e, 0x430, 0x431, 0x446, 0x434, 0x435, 0x444, 0x433,
      0x445, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x043e, 0x43f, 0x44f, 0x440, 0x441, 0x442,
      0x443, 0x436, 0x432, 0x44c, 0x44b, 0x437, 0x448, 0x44d, 0x449, 0x447, 0x44a, 0x42e, 0x410,
      0x411, 0x426, 0x414, 0x415, 0x424, 0x413, 0x425, 0x418, 0x419, 0x41a, 0x41b, 0x41c, 0x41d,
      0x41e, 0x41f, 0x42f, 0x420, 0x421, 0x422, 0x423, 0x416, 0x412, 0x42c, 0x42b, 0x417, 0x428,
      0x42d, 0x429, 0x427, 0x42a,
    ]),
  );

  // KOI8-RU
  this.learnEncoding(
    "koi8-ru",
    this.extendASCII([
      0x2500, 0x2502, 0x250c, 0x2510, 0x2514, 0x2518, 0x251c, 0x2524, 0x252c, 0x2534, 0x253c,
      0x2580, 0x2584, 0x2588, 0x258c, 0x2590, 0x2591, 0x2592, 0x2593, 0x2320, 0x25a0, 0x2219,
      0x221a, 0x2248, 0x2264, 0x2265, 0xa0, 0x2321, 0xb0, 0xb2, 0xb7, 0xf7, 0x2550, 0x2551, 0x2552,
      0x451, 0x454, 0x2554, 0x456, 0x457, 0x2557, 0x2558, 0x2559, 0x255a, 0x255b, 0x491, 0x45e,
      0x255e, 0x255f, 0x2560, 0x2561, 0x401, 0x404, 0x2563, 0x406, 0x407, 0x2566, 0x2567, 0x2568,
      0x2569, 0x256a, 0x490, 0x40e, 0xa9, 0x44e, 0x430, 0x431, 0x446, 0x434, 0x435, 0x444, 0x433,
      0x445, 0x438, 0x439, 0x43a, 0x43b, 0x43c, 0x43d, 0x043e, 0x43f, 0x44f, 0x440, 0x441, 0x442,
      0x443, 0x436, 0x432, 0x44c, 0x44b, 0x437, 0x448, 0x44d, 0x449, 0x447, 0x44a, 0x42e, 0x410,
      0x411, 0x426, 0x414, 0x415, 0x424, 0x413, 0x425, 0x418, 0x419, 0x41a, 0x41b, 0x41c, 0x41d,
      0x41e, 0x41f, 0x42f, 0x420, 0x421, 0x422, 0x423, 0x416, 0x412, 0x42c, 0x42b, 0x417, 0x428,
      0x42d, 0x429, 0x427, 0x42a,
    ]),
  );

  // LATIN-1 aka ISO 8859-1 (Western European)
  this.learnEncoding(
    "latin-1",
    this.extendASCII([
      0x80, 0x81, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e,
      0x8f, 0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b, 0x9c, 0x9d,
      0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 0xac,
      0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb,
      0xbc, 0xbd, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca,
      0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9,
      0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8,
      0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7,
      0xf8, 0xf9, 0xfa, 0xfb, 0xfc, 0xfd, 0xfe, 0xff,
    ]),
  );

  // Windows-1252
  this.learnEncoding(
    "cp1252",
    this.extendASCII([
      0x20ac, 0x81, 0x201a, 0x192, 0x201e, 0x2026, 0x2020, 0x2021, 0x2c6, 0x2030, 0x160, 0x2039,
      0x152, 0x8d, 0x017d, 0x8f, 0x90, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014,
      0x02dc, 0x2122, 0x161, 0x203a, 0x0153, 0x9d, 0x17e, 0x178, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5,
      0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4,
      0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe, 0xbf, 0xc0, 0xc1, 0xc2, 0xc3,
      0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2,
      0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf, 0xe0, 0xe1,
      0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef, 0xf0,
      0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa, 0xfb, 0xfc, 0xfd, 0xfe, 0xff,
    ]),
  );
};

singlebyte.prototype.isEncoding = function (encodingName) {
  if (Buffer.isEncoding(encodingName)) return true;
  for (var i = 0; i < this.encodings.length; i++) {
    if (this.encodings[i].name === encodingName) return true;
  }
  return false;
};

singlebyte.prototype.learnEncoding = function (encodingName, encodingTable) {
  /*jshint bitwise: false */
  if (Buffer.isEncoding(encodingName)) {
    throw new Error(this.errors.BUFFER_ENCODING);
  }

  if (encodingTable.length !== 256) {
    throw new Error(this.errors.INVALID_TABLE_LENGTH);
  }

  var _this = this;
  encodingTable = encodingTable.map(function (item) {
    var nextCode = item | 0;
    if (0 > nextCode || nextCode > 0x10ffff) {
      throw new Error(_this.errors.OUT_OF_UNICODE);
    }
    return item;
  });

  if (this.isEncoding(encodingName)) {
    for (var i = 0; i < this.encodings.length; i++) {
      if (this.encodings[i].name === encodingName) {
        this.encodings[i].table = encodingTable;
        return;
      }
    }
  } else {
    this.encodings.push({
      name: encodingName,
      table: encodingTable,
    });
  }
};

singlebyte.prototype.getEncodingTable = function (encodingName) {
  for (var i = 0; i < this.encodings.length; i++) {
    if (this.encodings[i].name === encodingName) {
      return this.encodings[i].table;
    }
  }
  return null;
};

singlebyte.prototype.extendASCII = function (extensionTable) {
  if (extensionTable.length !== 128) {
    throw new Error(this.errors.INVALID_EXTENSION);
  }

  var output = [];
  for (var i = 0; i < 128; i++) output.push(i);
  return output.concat(extensionTable);
};

singlebyte.prototype.bufToStr = function (buf, encoding, start, end) {
  /* jshint bitwise: false */
  if (!Buffer.isBuffer(buf)) {
    throw new Error(this.errors.NOT_A_BUFFER);
  }
  if (Buffer.isEncoding(encoding)) {
    return buf.toString(encoding, start, end);
  }
  var table = this.getEncodingTable(encoding);
  if (table === null) throw new Error(this.errors.UNKNOWN_ENCODING);

  if (typeof end === "undefined") end = buf.length;
  if (typeof start === "undefined") start = 0;

  var output = "";
  var sourceValue;
  for (var i = start; i < end; i++) {
    sourceValue = table[buf[i]];
    if (sourceValue <= 0xffff) {
      output += String.fromCharCode(sourceValue);
    } else if (0x10000 <= sourceValue && sourceValue <= 0x10ffff) {
      sourceValue -= 0x10000;
      output += String.fromCharCode(0xd800 + (sourceValue >> 10));
      output += String.fromCharCode(0xdc00 + (sourceValue & 0x3ff));
    } else throw new Error(this.errors.OUT_OF_UNICODE);
  }
  return output;
};

var strToBufDefaults = {
  defaultCode: 0x3f, // '?'
};

singlebyte.prototype.strToBuf = function (str, encoding, encodingOptions) {
  if (Buffer.isEncoding(encoding)) {
    return new Buffer(str, encoding);
  }
  str = "" + str;
  var options = extend({}, strToBufDefaults, encodingOptions);
  var table = this.getEncodingTable(encoding);
  if (table === null) throw new Error(this.errors.UNKNOWN_ENCODING);
  var output = [];
  for (var i = 0; i < str.length; i++) {
    var charUnicode;
    var thisCharCode = str.charCodeAt(i);
    if (0xd800 <= thisCharCode && thisCharCode <= 0xdbff && i + 1 < str.length) {
      var nextCharCode = str.charCodeAt(i + 1);
      if (0xdc00 <= nextCharCode && nextCharCode <= 0xdfff) {
        charUnicode = 0x10000 + (thisCharCode - 0xd800) * 0x400 + (nextCharCode - 0xdc00);
        i++;
      } else {
        charUnicode = thisCharCode;
      }
    } else {
      charUnicode = thisCharCode;
    }

    var codeFoundIndex = table.indexOf(charUnicode);
    if (codeFoundIndex < 0) {
      output.push(options.defaultCode);
    } else {
      output.push(codeFoundIndex);
    }
  }
  return new Buffer(output);
};

singlebyte.prototype.errors = {
  NOT_A_BUFFER: "The given source is not a buffer!",
  UNKNOWN_ENCODING: "The given encoding is not defined!",
  INVALID_TABLE_LENGTH: "The encoding table must have 256 elements!",
  INVALID_EXTENSION: "The ASCII extension table must have 128 elements!",
  BUFFER_ENCODING: "Cannot redefine a Node's encoding!",
  OUT_OF_UNICODE: "An encoding table's element is greater than 0x10FFFF!",
};

module.exports = singlebyte();
