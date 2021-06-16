const db = require('../config/keys_dev').mongoURI;
import seeder from 'mongoose-seed';

seeder.connect(db, function () {
  seeder.loadModels( modelPaths: [
    './event'
  ]);
  seeder.clearModels(models: ['event']);
  seeder.populateModles(data, cb: function (err, done) {
    if (err) {
      return console.log('seed err', err)
    }
    if (done) {
      return console.log('seed done', done);
    }
    seeder.disconnect()
  })
});

const data = [

  {
    'model': 'event',
    'documents': [
      {

      },
      {

      },

    ]
  }
];