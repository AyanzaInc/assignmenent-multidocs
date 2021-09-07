import mongoose from 'mongoose';

import Doc from './models/Doc';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/ayanzalnc';
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

const MainDoc = {
  maker: {
    firstName: 'Jane',
    lastName: 'Doe',
    avatarUrl: '',
  },
  expDate: new Date(2021, 8, 13, 15, 59),
  title: 'Untitled',
  text: 'Start writing, drag files, or choose template',
  textLinks: [],
  dialogs: [],
  visitors: [],
};

const Doc1 = {
  maker: {
    firstName: 'Jane',
    lastName: 'Doe',
    avatarUrl: '',
  },
  expDate: new Date(2021, 8, 13, 15, 59),
  title: 'Document A',
  text: 'Chislic filet mingon bresaola doner meatball. Other document rump pork jerky prosciutto flank pancetta chislic turkey chuck.',
  textLinks: [],
  dialogs: [],
  visitors: [],
};

const Doc2 = {
  maker: {
    firstName: 'Justin',
    lastName: 'Case',
    avatarUrl: '',
  },
  expDate: new Date(2021, 8, 13, 15, 59),
  title: 'Other document',
  text: 'Kevin tail leberkas biltong cupim meatloaf hamburger prosciutto cow frankfurter porchetta strip steak venison jerky swing. Chislic bresaola chicken cow hamburger pork loin short ribs leberkas turkey jerky ham hock chuck corned beef. \n\nCapicola chuck beef beef ribs. Metaball bacon hamburger ball tip, leberkas cupim landjaeger pork chop porchetta.',
  textLinks: [],
  dialogs: [{
    sender: {
      firstName: 'Justin',
      lastName: 'Case',
      avatarUrl: '',
    },
    time: new Date(2021, 8, 13, 15, 54),
    message: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sum',
  }],
  visitors: [
    {firstName: 'John', lastName: 'Doe', avatarUrl: ''},
    {firstName: 'John', lastName: 'Doe', avatarUrl: ''},
    {firstName: 'John', lastName: 'Doe', avatarUrl: ''},
  ],
};

const Doc3 = {
  maker: {
    firstName: 'Justin',
    lastName: 'Case',
    avatarUrl: '',
  },
  expDate: new Date(2021, 8, 13, 15, 59),
  title: 'Meatball bacon hamburger',
  text: 'Kevin tail leberkas biltong cupim meatloaf hamburger prosciutto cow frankfurter porchetta strip steak venison jerky swing. Chislic bresaola chicken cow hamburger pork loin short ribs leberkas turkey jerky ham hock chuck corned beef. \n\nCapicola chuck beef beef ribs. Bacon cow alcatra rump, tenderloin bitong jerky shoulder kielbasa swing venison filet mignon porchetta picanha meatloaf.',
  textLinks: [],
  dialogs: [],
  visitors: [],
};

(async () => {
  const doc3 = new Doc(Doc3);

  doc3.save().then(dc3 => {
    console.log('Doc3 is imported');
    const doc2 = new Doc({...Doc2, textLinks: [{linkText: dc3.title, docId: dc3._id}]});

    doc2.save().then(dc2 => {
      console.log('Doc2 is imported');
      const doc1 = new Doc({...Doc1, textLinks: [{linkText: dc2.title, docId: dc2._id}]});

      doc1.save().then(dc1 => {
        console.log('Doc1 is imported');
        const mainDoc = new Doc({...MainDoc, textLinks: [{linkText: 'template', docId: dc1._id}]});

        mainDoc.save().then(() => {
          console.log('Main doc is imported');
        });
      });
    });
  });
})();
