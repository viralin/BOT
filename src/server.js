require('dotenv').config({ path: 'variables.env' });

import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import processMessage from './process-message';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/chat', (req, res) => {
  const { message } = req.body;
  processMessage(message);
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
})