exports.getHomePage = (req, res) => {
  res.render('shop', {
    pageTitle: 'Home Page'
  })
}