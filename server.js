const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const uuidv4 = require('uuid/v4');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let frenns = [
  {
    id: uuidv4(),
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com'
  },
  {
    id: uuidv4(),
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com'
  },
  {
    id: uuidv4(),
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com'
  },
  {
    id: uuidv4(),
    name: 'Dustin',
    age: 25,
    email: 'D-munny@lambdaschool.com'
  },
  {
    id: uuidv4(),
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com'
  },
  {
    id: uuidv4(),
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'Lambda School' && password === 'i<3Lambd4') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/frenns', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(frenns);
  }, 1000);
});

app.get('/api/frenns/:id', authenticator, (req, res) => {
  const frenn = frenns.find(f => f.id == req.params.id);

  if (frenn) {
    res.status(200).json(frenn);
  } else {
    res.status(404).send({ msg: 'Frenn not found' });
  }
});

app.post('/api/frenns', authenticator, (req, res) => {
  const frenn = { id: uuidv4(), ...req.body };

  frenns = [...frenns, frenn];

  res.send(frenns);
});

app.put('/api/frenns/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const frennIndex = frenns.findIndex(f => f.id == id);

  if (frennIndex > -1) {
    const frenn = { ...frenns[frennIndex], ...req.body };

    frenns = [
      ...frenns.slice(0, frennIndex),
      frenn,
      ...frenns.slice(frennIndex + 1)
    ];
    res.send(frenns);
  } else {
    res.status(404).send({ msg: 'Frenn not found' });
  }
});

app.delete('/api/frenns/:id', authenticator, (req, res) => {
  const { id } = req.params;

  frenns = frenns.filter(f => f.id !== id);

  res.send(frenns);
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
