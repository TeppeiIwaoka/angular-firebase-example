import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

<<<<<<< HEAD
admin.initializeApp();

const db = admin.firestore();

export const gitHook = functions.https.onRequest(async (request, response) => {
    const pets = await db.collection('pets').where('ownerGitHubId', '==', request.body.sender.id)
    .get();

    const increment = admin.firestore.FieldValue.increment(10);
    pets.docs.forEach(doc => doc.ref.update({
      exp: increment
    }));
    response.send('success!!');
=======
export const gitHook = functions.region('asia-northeast1').https.onRequest((request, response) => {
    // console.log('test');
    response.send('success!!TEST');
>>>>>>> ba0934a33f649ecc07d052b8200e0a140ae06ad2
});
