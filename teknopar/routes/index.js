var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);


let images = getImagesFromDir('./public/wdimages'); //get imgs from the specific folder
for (var i = 0; i < images.length; i++) {   //for testing purposes xd
  console.log(images[i]);
};

function getImagesFromDir(dirPath){
  let allImages = [];
  //iterate over the dir
  let files = fs.readdirSync(dirPath);
  //push img to array
  for(file of files){
    let fileLocation = path.join(dirPath, file);
    var stat = fs.statSync(fileLocation);
    if(stat && stat.isDirectory()){
      getImagesFromDir(fileLocation); //sub directory
    } else if(stat && stat.isFile() && ['.jpg', '.png', '.tif'].indexOf(path.extname(fileLocation)) != -1){
      allImages.push('wdimages/'+ file);
    }
  }
  return allImages;
}



// get main page, ensure user is logged
router.get('/', ensureAuthenticated, function(req, res){
  //images are given to p tag to let javascript use them
	res.render('kappa.ejs',{images:images,username:req.user.username});
});


function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
