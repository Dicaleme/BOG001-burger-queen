// https://www.youtube.com/watch?v=06myVn41OTY&t=3810s //  Laboratoria Developers 
// https://soumak77.github.io/firebase-mock/tutorials/functions/firestore.html
// https://github.com/soumak77/firebase-mock
// npm install firebase-mock --save-dev

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mocksdk = new firebasemock.MockFirebaseSdk(
    () => null,
    () => mockauth.autoFlush(),
);
export { mocksdk };

