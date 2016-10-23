import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @article{sample1,title={sample title},keywords={keyword1},keywords={keyword2}}
`;

const output = [{citationKey:"sample1",entryType:"article",entryTags: {title:"sample title",keywords:["keyword1", "keyword2"]}}]

test('Multiple tags should be object', t => t.deepEqual(output, bibtexParse.toJSON(input)));