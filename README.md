# Personal Order (FireBae Clone)

A tool for keeping track of those nagging repetative purchases... with a
little bit of machine learning for good measure.

Get online on the 15th of every month and see what you need to buy.

- Postpone items (and the orderform will update purchasing frequency)

- Set Due items (and the orderform will update purchasing frequency)

- Bought something early and on sale? No worries, just mark it as
  purchased and the order for will start reminding you based on the date
  you purchased

No more using toilet paper to clean something up cause you forgot to buy
a roll of papertowels.

### Setup

To get started with a local copy of the project, fork the repo

```bash
  cp config/application.example.yml config/application.yml
  
  npm install

  npm start
```

and visit localhost:8080

### Tests

The project uses jest, mocha and enzyme for testing.

For more about Jest, visit [jest w webpack](https://facebook.github.io/jest/docs/tutorial-webpack.html#content)

To run the tests, run `npm test`

### Deploy

To deploy, run `npm run build`
