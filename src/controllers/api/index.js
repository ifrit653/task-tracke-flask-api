function handleTest(req, res, next) {
  const number = parseInt(req.params.number, 10);

  res.json({ result: number * number });
}

module.exports = Object.freeze({
  handleTest
});
