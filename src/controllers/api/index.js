function handleTest(req, res, next) {
  res.json({ message: 'Testing' });
}

module.exports = Object.freeze({
  handleTest
});
