'use strict';

var createStrongRegExpTag = function (character) {
    return '(?:\\' + character + '\\' + character + ')';
}

var createStrongRegExp = function (tagCharacter) {
    return new RegExp('^' + createStrongRegExpTag(tagCharacter)
                        + '([\\s\\S]+?)'
                        + createStrongRegExpTag(tagCharacter)
                        + '$');
};

var UNDERSCORES_REGEXP = createStrongRegExp('_');
var ASTERISKS_REGEXP = createStrongRegExp('*');

module.exports = function (input) {
    var underscoreParsed = UNDERSCORES_REGEXP.exec(input);

    if (underscoreParsed) {
        return {
            original: underscoreParsed[0],
            parsed: underscoreParsed[1]
        };
    }

    var asteriskParsed = ASTERISKS_REGEXP.exec(input);

    if (asteriskParsed) {
        return {
            original: asteriskParsed[0],
            parsed: asteriskParsed[1]
        };
    }

    return undefined;

};
