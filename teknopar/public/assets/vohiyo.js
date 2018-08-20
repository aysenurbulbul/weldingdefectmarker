var canvas = this.__canvas = new fabric.Canvas('c');
canvas.selection = false; //no group selection


//defect typelara tıklayınca sayfa yukarı çıkmaması için
$('a').click(function(e)
{
    e.preventDefault();
});


//ejs te p'ye koyduğum img isimleri
var imgs = document.getElementById("imgs").innerText.split(",");


var st = 0; //imgs
var rectsOnCanvas = [];
//var ancient = canvas.getObjects();
for(var q=0; q<imgs.length;q++){
  rectsOnCanvas.push([]); //her bir img için bir array ekle
};


//put the first img
$('#img').attr('src',imgs[st]);

//get rid of folder names
var tame = imgs[st].split("/");
var impala = tame[tame.length-1];

//put img's name
$('#imgName').text(impala);


$('#next').on('click',function(){

  $("#prev").fadeIn();

  if(st+1 !== imgs.length){
    pushRect(); //bir resim öncekileri arraye ekledik
    canvas.clear();
    rectsOnCanvas[st+1].forEach(function(ree) { //şimdiki resme çiziyoruz

        var rr = new fabric.Rect(ree);
        //console.log(ree);
        canvas.add(rr);
      });


  rectsOnCanvas[st+1]=[]; //şimdiki resmin tuttuklarını sildik
  if(st<imgs.length-1){
    st++;

    //activate make file button
    if(st===imgs.length-1){
      $('#file').fadeIn();
    }
    $('#img').attr('src',imgs[st]);

    var tame1 = imgs[st].split("/");
    var impala1 = tame1[tame1.length-1];
    $('#imgName').text(impala1);

    if(st===imgs.length-1){
      $('#next').fadeOut();
    }
    }
  }
});


$('#prev').on('click',function(){
  $('#next').fadeIn();

  if(st-1 !== -1){
    pushRect();//rectleri yükledik
    canvas.clear();
    rectsOnCanvas[st-1].forEach(function(ree) { //şimdiki resme çiziyoruz

        var rr = new fabric.Rect(ree);
        //console.log(ree);
        canvas.add(rr);
      });

  rectsOnCanvas[st-1]=[];

  if(st>0){
    st--;
    $('#img').attr('src',imgs[st]);

    var tame2 = imgs[st].split("/");
    var impala2 = tame2[tame2.length-1];
    $('#imgName').text(impala2);

    if(st===0){
      $('#prev').fadeOut();
    }
   }
  }
});

function pushRect(){
  var bo = canvas.getObjects(); //tüm rect aldık
  for(var r=0; r<bo.length ; r++){
    rectsOnCanvas[st].push({}); //her rect için obj ekledik
  }
  for(var p=0;p<bo.length;p++){
    rectsOnCanvas[st][p].width = bo[p].width*bo[p].scaleX;
    rectsOnCanvas[st][p].height = bo[p].height*bo[p].scaleY;
    rectsOnCanvas[st][p].left = bo[p].left;
    rectsOnCanvas[st][p].top = bo[p].top;
    rectsOnCanvas[st][p].angle = bo[p].angle;
    rectsOnCanvas[st][p].stroke = bo[p].stroke;
    rectsOnCanvas[st][p].strokeWidth = bo[p].strokeWidth;
    rectsOnCanvas[st][p].lockRotation = bo[p].lockRotation;
    rectsOnCanvas[st][p].borderColor = bo[p].borderColor;
    rectsOnCanvas[st][p].cornerColor = bo[p].cornerColor;
    rectsOnCanvas[st][p].transparentCorners = bo[p].transparentCorners;
    rectsOnCanvas[st][p].cornerSize = bo[p].cornerSize;
    rectsOnCanvas[st][p].fill = bo[p].fill;
    rectsOnCanvas[st][p].hnam = bo[p].hnam;
  }

  //console.log(rectsOnCanvas);

}

//defect types rects

var btn1 = document.getElementById("cold");
function bgChange1() {
  var rect1 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#ea0000', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'ColdLap'
   });
   canvas.add(rect1);
}
btn1.addEventListener('click',bgChange1);

var btn2 = document.getElementById("poro");
function bgChange2() {
  var rect2 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#ea7c00', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'Porosity'
      });
	 			canvas.add(rect2);

}
btn2.addEventListener('click',bgChange2);


var btn3 = document.getElementById("cporo");
function bgChange3() {
  var rect3 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#eae600', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'ClusterPorosity'
   });
	 			canvas.add(rect3);
}
btn3.addEventListener('click',bgChange3);

var btn4 = document.getElementById("slag");
function bgChange4() {
  var rect4 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#2eea00', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'SlagInclusions'
   });
	 			canvas.add(rect4);
}
btn4.addEventListener('click',bgChange4);

var btn5 = document.getElementById("incpen");
function bgChange5() {
  var rect5 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#00eabf', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'IncompletePenetration'
   });
	 			canvas.add(rect5);
}
btn5.addEventListener('click',bgChange5);

var btn6 = document.getElementById("incfus");
function bgChange6() {
  var rect6 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#014f99', strokeWidth: 1.5,
     lockRotation:false,
     fill: 'transparent',
     borderColor: 'red',
     cornerColor: 'red',
     cornerSize: 7,
     transparentCorners: false,
     hnam: 'IncompleteFusion'
   });
	 			canvas.add(rect6);
}
btn6.addEventListener('click',bgChange6);


var btn7 = document.getElementById("intcon");
function bgChange7() {
  var rect7 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#6f10ce', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'InternalConcavity'
   });
	 			canvas.add(rect7);
}
btn7.addEventListener('click',bgChange7);


var btn8 = document.getElementById("intund");
function bgChange8() {
  var rect8 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#e011dc', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'InternalUndercut'
   });
   canvas.add(rect8);
}
btn8.addEventListener('click',bgChange8);


var btn9 = document.getElementById("exund");
function bgChange9() {
  var rect9 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#e01067', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'ExternalUndercut'
   });
   canvas.add(rect9);
}
btn9.addEventListener('click',bgChange9);


var btn10 = document.getElementById("offset");
function bgChange10() {
  var rect10 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#00A6ED', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'Offset'
   });
   canvas.add(rect10);
}
btn10.addEventListener('click',bgChange10);

var btn11 = document.getElementById("inweld");
function bgChange11() {
  var rect11 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#7cf9a6', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'InadequateWeldReinforcement'
   });
   canvas.add(rect11);
}
btn11.addEventListener('click',bgChange11);

var btn12 = document.getElementById("exweld");
function bgChange12() {
  var rect12 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#f27d7d', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'ExcessWeldReinforcement'
   });
   canvas.add(rect12);
}
btn12.addEventListener('click',bgChange12);

var btn13 = document.getElementById("crack");
function bgChange13() {
  var rect13 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#d64161', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'Cracking'
   });
   canvas.add(rect13);
}
btn13.addEventListener('click',bgChange13);

var btn14 = document.getElementById("tungs");
function bgChange14() {
  var rect14 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#941B0C', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'TungstenInclusions'
   });
   canvas.add(rect14);
}
btn14.addEventListener('click',bgChange14);

var btn15 = document.getElementById("oxi");
function bgChange15() {
  var rect15 = new fabric.Rect({
     width: 30, height: 30, left: 50, top: 50, angle: 0,
     stroke: '#b21850', strokeWidth: 1.5,
     lockRotation:false,
     borderColor: 'red',
     cornerColor: 'red',
     transparentCorners: false,
     cornerSize: 7,
     fill: 'transparent',
     hnam: 'OxideInclusions'
   });
   canvas.add(rect15);
}
btn15.addEventListener('click',bgChange15);

//end of rects properties

canvas.renderAll();

//clear page
$('#clear').click(function () {
  if (confirm("All boxes will be cleared. Are you sure?")) {
    canvas.clear();
  }
});


$("#del").click(function(){
    //canvas.isDrawingMode = false;
    deleteObjects();
});

//delete selected box
function deleteObjects(){
	var activeObject = canvas.getActiveObject();
  //if group selection is viable
  //var activeGroup = canvas.getActiveGroup();
    if (activeObject) {
      canvas.remove(activeObject);
    }
    //delete group selection
    // else if (activeGroup) {
    //     if (confirm('Are you sure?')) {
    //         var objectsInGroup = activeGroup.getObjects();
    //         canvas.discardActiveGroup();
    //         objectsInGroup.forEach(function(object) {
    //         canvas.remove(object);
    //         });
    //     }
    // }
};



//hinder boxes from going out of canvas boundary
canvas.on('object:moving', function (e) {
        var obj = e.target;
         // if object is too big ignore
        if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width){
            return;
        }
        obj.setCoords();
        // top-left  corner
        if(obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0){
            obj.top = Math.max(obj.top, obj.top-obj.getBoundingRect().top);
            obj.left = Math.max(obj.left, obj.left-obj.getBoundingRect().left);
        }
        // bot-right corner
        if(obj.getBoundingRect().top+obj.getBoundingRect().height  > obj.canvas.height || obj.getBoundingRect().left+obj.getBoundingRect().width  > obj.canvas.width){
            obj.top = Math.min(obj.top, obj.canvas.height-obj.getBoundingRect().height+obj.top-obj.getBoundingRect().top);
            obj.left = Math.min(obj.left, obj.canvas.width-obj.getBoundingRect().width+obj.left-obj.getBoundingRect().left);
        }
});



var xxd= document.getElementById("userName").innerHTML;

var previewFile = document.getElementById("img");

//make file button
var makeF = document.getElementById("file");
makeF.addEventListener('click',parseBoxes);
function parseBoxes(){
  //butona basıldığında son kalan boxları al
  pushRect();

  //write into hidden text area
  document.getElementById("nane").value += "operator,filename,centerX,centerY,width,height,angle,type\n";
  for(var p=0; p<imgs.length; p++){
    for(var k=0; k<rectsOnCanvas[p].length; k++){
      var aim = imgs[p].split("/");
      var im = aim[aim.length-1];
      var kutu = new fabric.Rect(rectsOnCanvas[p][k]);
      document.getElementById("nane").value += xxd + ",";
      document.getElementById("nane").value += im + ",";
      var gcx = kutu.getCenterPoint().x;
      gcx = gcx / canvas.width;
      gcx = gcx.toFixed(6);
      document.getElementById("nane").value += gcx + ",";
      var gcy = kutu.getCenterPoint().y;
      gcy = gcy / canvas.height;
      gcy = gcy.toFixed(6);
      document.getElementById("nane").value += gcy + ",";
      var wii = kutu.width;
      wii = wii.toFixed(6);
      document.getElementById("nane").value += wii + ",";
      var hee = kutu.height;
      hee = hee.toFixed(6);
      document.getElementById("nane").value += hee + ",";
      var angl = kutu.angle;
      angl = angl.toFixed(6);
      document.getElementById("nane").value += angl + ",";
      var typ = kutu.hnam;
      document.getElementById("nane").value += typ + "\n";
    }
  }

  setTimeout(function(){$('.modal').modal('show');},600);
  $(this).attr('disabled','disabled');

};
