'use strict';

/**
 * Module dependencies.
 */

const { ESLint } = require('eslint');
const path = require('path');

/**
 * Tests for `eslint-config-untile`.
 */

describe('eslint-config-untile', () => {
  const linter = new ESLint({
    overrideConfigFile: path.join(__dirname, '..', 'src', 'index.js')
  });

  it('should not generate any violation for correct code', async () => {
    const source = path.join(__dirname, 'fixtures', 'correct.js');
    const results = await linter.lintFiles([source]);

    results[0].messages.should.be.empty();
  });

  it('should generate violations for incorrect code', async () => {
    const source = path.join(__dirname, 'fixtures', 'incorrect.js');
    const results = await linter.lintFiles([source]);
    const rules = results[0].messages.map(violation => violation.ruleId);

    Array.from(rules).should.eql([
      'consistent-this',
      'id-match',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-disabled-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'mocha/no-exclusive-tests',
      'jest/no-focused-tests',
      'jest/no-focused-tests',
      'jest/no-identical-title',
      'max-len',
      'max-len',
      'max-len',
      'no-new',
      'new-cap',
      'new-with-error/new-with-error',
      'no-class-assign',
      'no-console',
      'no-const-assign',
      'no-constant-condition',
      'no-dupe-class-members',
      'no-empty',
      'no-labels',
      'no-labels',
      'no-multi-str',
      'no-this-before-super',
      'no-undef',
      'no-underscore-dangle',
      'no-unused-vars',
      'padding-line-between-statements',
      'no-restricted-imports',
      'sort-imports-es6/sort-imports-es6',
      'sort-keys',
      'sql-template/no-unsafe-query'
    ]);
  });
});
