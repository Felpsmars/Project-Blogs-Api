require('dotenv').config();
const express = require('express');
const userRouter = require('./src/router/users');
const loginRouter = require('./src/router/login');
const categoriesRouter = require('./src/router/categories');
const blogPost = require('./src/router/blogPost');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', blogPost);

app.listen(3000, () => console.log('ouvindo porta 3000!'));