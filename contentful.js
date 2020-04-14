const contentfulExport = require('contentful-export');
const contentfulImport = require('contentful-import');
require('dotenv').config({
  path: '.env'
});

const options = {
  spaceId: process.env.CONTENTFUL_SPACE,
  managementToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  queryEntries: ['content_type=post']
};

const validArgs = {
  '--import': 'importContentful',
  '--export': 'exportContentful'
};
const $args = process.argv.slice(2);

const validateArgs = args => {
  const validatedArgs = args.filter(arg => {
    return Object.keys(validArgs).find(va => va == arg);
  });
  if (validatedArgs.length == 0) {
    console.error('Invalid args', args);
  }
};

const exportContentful = () => {
  contentfulExport(options)
    .then(result => {
      console.log('Your space data:', result);
    })
    .catch(err => {
      console.log('Oh no! Some errors occurred!', err);
    });
};

const importContentful = () => {
  options.content = require('./contentful-export-master.json');
  contentfulImport(options)
    .then(() => {
      console.log('Data imported successfully');
    })
    .catch(err => {
      console.log('Oh no! Some errors occurred!', err);
    });
};

const run = args => {
  args.map(arg => {
    eval(validArgs[arg] + '()');
  });
};

validateArgs($args);
run($args);
