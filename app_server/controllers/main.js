/* get home page*/
module.exports.index=function(req, res, next) {
  res.render('index', { title: 'Rentals by HP Norton' });
};