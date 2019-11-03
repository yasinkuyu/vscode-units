"use strict";
// @yasinkuyu

Object.defineProperty(exports, "__esModule", { value: true });

/**
 * Round Function
 * @param number int
 * @param decimals decimal
 */
var round = function (number, decimals) {
    return Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
};

// Test it
// 18.75em
// 200pc
// .10em
// 602.25rem
// 720px

/**
 * Convert function
 * @param value int
 * @param from unit string
 * @param to unit string
 */
var convert = function (value, from, to) {
    var units = from + '-' + to,
        base = 16, dpi = 72, decimals = 2,
        result,
        formulas = {

            'px-cm': value * 2.54 / dpi,
            'px-em': value / base,
            'px-rem': value / 100, // ok
            'px-in': value / dpi,
            'px-mm': value * 2.54 / dpi * 10,
            'px-pc': value / base,
            'px-pt': value * 72 / 96,
            'px-%': value / base * 100,

            'em-cm': value * 0.42175176,
            'em-rem': value,
            'em-in': value * 0.166044,
            'em-mm': value / 0.237106301584,
            'em-pc': value,
            'em-pt': value * 11.955168,
            'em-%': value * 100,
            'em-px': value * base,

            '%-cm': value * base / 100 * 2.54 / dpi,
            '%-em': value / 100,
            '%-rem': value / 100,                
            '%-in': value * base / 100 / dpi,
            '%-mm': value * base / 100 * 2.54 / dpi * 10,
            '%-pc': value / 100,
            '%-pt': value * (base - 4) / 100,
            '%-px': value * base / 100,                

            'in-cm': value * 2.54,
            'in-em': value / 0.166044,
            'in-rem': value / 0.166044,
            'in-mm': value * 2.54 * 10,
            'in-pc': value / 0.166044,
            'in-pt': value / 0.014842519685,
            'in-%': value / base * 100 * dpi,
            'in-px': value * dpi,
            
            'cm-em': value / 0.42175176,
            'cm-in': value * 0.39,
            'cm-mm': value * 10,
            'cm-pc': value / 0.42175176,
            'cm-pt': value * 28.3464566929,
            'cm-%': value / base * 100 / 2.54 * dpi,
            'cm-px': value / 2.54 * dpi,

            'mm-cm': value / 10,
            'mm-em': value * 0.237106301584,
            'mm-rem': value * 0.237106301584,
            'mm-in': value * 0.39 / 10,
            'mm-pc': value / 4.42175176,
            'mm-pt': value / 0.352777777778,
            'mm-%': value / base * 100 / 2.54 * dpi / 10,
            'mm-px': value / 2.54 * dpi / 10,
            'mm-ex': value / 2.54 * dpi / 10,

            'pt-cm': value / 28.3464566929,
            'pt-em': value / 11.955168,
            'pt-rem': value * 96 / 72,
            'pt-in': value * 0.014842519685,
            'pt-mm': value * 0.352777777778,
            'pt-pc': value * 0.0836458341698,
            'pt-%': value / (base - 4) * 100,
            'pt-px': value * 96 / 72,

            'pc-cm': value * 0.42175176,
            'pc-em': value,
            'pc-rem': value,
            'pc-in': value * 0.166044,
            'pc-mm': value * 4.42175176,
            'pc-pt': value / 0.0836458341698,
            'pc-%': value * 100,
            'pc-px': value * base,
            
            'rem-cm': value * 0.42175176,
            'rem-em': value,
            'rem-in': value * 0.166044,
            'rem-mm': value * 4.42175176,
            'rem-pt': value / 0.0836458341698,
            'rem-%': value * 100,
            'rem-px': value * 100

        };

    result = formulas[units];

    return (isNaN(result) ? 'N/A ' + to : round(result, decimals) + to);
};

exports.convert = convert;

// //# sourceMappingURL=converters.js.map