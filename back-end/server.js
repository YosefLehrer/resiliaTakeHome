import express from 'express';
import storage from 'node-persist';


const app = express();

app.get('/notifications', async (req, res) => {

  const arr = [];
  await storage.forEach(item => {
    arr.push(item.value.message);
  });

  const stringifiedResponse = JSON.stringify(arr);
  res.set('Access-Control-Allow-Origin', '*');
  res.send(stringifiedResponse);
})

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify('This is an empty endpoint'));
})

const initializeFunction = async () => {
  await storage.init();

  // set between 5 and 15 notifications
  let num = 5 + Math.floor(Math.random() * 10);
  while (num > 0) {
    await storage.setItem(`notification-${num}`, {
      title: "Simple Title",
      message: "Super duper important notification"
    })
    num--
  }
}

const server = app.listen(8081, () => {
  initializeFunction();
})

// out of scope

// app.get('/notification', async function (req, res) {
//   // get a specific notification
// })

// app.post('/notification', async function (req, res) {
//   // mark a notification as read
// })

// app.delete('/notification', async function (req, res) {
//   // delete a notification
// })
