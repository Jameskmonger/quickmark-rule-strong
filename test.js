'use strict';

const test = require('modunit');
const strong = require('./index');

test('it returns undefined for plain text', (t, input) => {

    let output = strong(input);

    t.assert.equal(undefined, output);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns undefined for tildes', (t, input) => {

    let output = strong(input);

    t.assert.equal(undefined, output);

}, [
    ['~~apples and oranges~~'],
    ['~~plain text here~~'],
    ['~~woop dee doo~~']
]);

test('it returns an object with the correct \'original\' for underscores', (t, input) => {

    let output = strong(input);

    t.assert.equal(input, output.original);

}, [
    ['__apples and oranges__'],
    ['__plain text here__'],
    ['__woop dee doo__']
]);

test('it returns an object with the correct \'original\' for asterisks', (t, input) => {

    let output = strong(input);

    t.assert.equal(input, output.original);

}, [
    ['**apples and oranges**'],
    ['**plain text here**'],
    ['**woop dee doo**']
]);

test('it returns an object with the correct \'parsed\' for underscores', (t, input) => {

    let tag = '__';

    let output = strong(tag + input + tag);

    t.assert.equal(input, output.parsed);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns an object with the correct \'parsed\' for asterisks', (t, input) => {

    let tag = '**';

    let output = strong(tag + input + tag);

    t.assert.equal(input, output.parsed);

}, [
    ['apples and oranges'],
    ['plain text here'],
    ['woop dee doo']
]);

test('it returns an object with the correct \'original\' for underscores with text after', (t, input, original) => {

    let output = strong(input);

    t.assert.equal(original, output.original);

}, [
    ['__apples and oranges__ are my favourite', '__apples and oranges__'],
    ['__plain text here__ bla bla bla', '__plain text here__'],
    ['__woop dee doo__ and a whippy woo', '__woop dee doo__']
]);

test('it returns an object with the correct \'original\' for asterisks with text after', (t, input, original) => {

    let output = strong(input);

    t.assert.equal(original, output.original);

}, [
    ['**apples and oranges** are my favourite', '**apples and oranges**'],
    ['**plain text here** bla bla bla', '**plain text here**'],
    ['**woop dee doo** and a whippy woo', '**woop dee doo**']
]);
