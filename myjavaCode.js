// write your code here

var x = 3;
var y = 4;
var z = x + 2*y;

print(x);
print(y);
print(z);
//image methods//
var image = new SimpleImage("eastereggs.jpg");
var w = image.getWidth();
var h = image.getHeight();
var p = image.getPixel(4,4);
var r = image.getRed(4,4);
var g = image.getGreen(4,4);
var b = image.getBlue(4,4);
print(p);
print("red value ",r,"green value ",g,"blue value ",b);
print(w,h);
print(image);

//creating functions//
// square function//
function square(x){
    var ans = x*x;
    return ans;
}
// cube function//
function cube(x){
    var ans = x*x*x;
    return ans;
}
// sum of 3numbers function//
function sum3(a,b,c){
    var ans = a+b+c;
    return ans;
}
var y = square(4);
var y1 = cube(2);
var y2 = sum3(2,4,6);
print("square is",y,"cube is",y1,"sum is",y2);

//image details function//
function imgdtls(x){
    var h = x.getHeight();
    var w = x.getWidth();
    return (h),(w)
}
var image = new SimpleImage("lion.jpg");

var z = imgdtls(image);
print(image);
print(z);

// adding 2 strings//

function addstr(a,b){
    var c = a+b;
    return c;
}
var a1 = "simple";
var b1 = "string";
var c1 = addstr(a1,b1);
print(c1);

// making a phrase//
function phrase3words(value1, value2, value3) {
    var answer = value1+" "+value2+" "+value3 ;
    return answer;
}

var result1 = phrase3words("smile","at","everyone");
print(result1);
var result2 = phrase3words("everyone","wave", "back");
print(result2);
var result3 = phrase3words("coding","is", "fun");
print(result3);
print();
print();


// reformatting a name//

function reformatName(first, last) {
    var ans = last+", "+first;
    return ans;
}

var result = reformatName("Susan","Rodger");
print(result);
result = reformatName("Robert","Duvall");
print(result);
print();

//function for image dimentions//

function numberPixels(namefile) {
    var someImg = new SimpleImage(namefile);
    var width = someImg.getWidth();
    var height = someImg.getHeight();
    var ans = height*width;
    return ans;

}

var result = numberPixels("chapel.png");
print(result);
var result = numberPixels("dinos.png");
print(result);
print();


// perimeter of an image function//

function perimeter(imageName) {
    var someImg = new SimpleImage(imageName);
    var height = someImg.getHeight();
    var width = someImg.getWidth();
    var ans = (height*2)+(width*2);
    return ans;
}

print(perimeter("rodger.png"));
print();

// write your code here

// sum of RGB values//
function sumPixel(nameOfImage, xpos, ypos){
var somePxl = new SimpleImage(nameOfImage).getPixel(xpos,ypos);
    var redd = somePxl.getRed();
    var grn = somePxl.getGreen();
    var blus = somePxl.getBlue();
    var ans = redd+grn+blus;
    return ans;
}

var answer = sumPixel("drewgreen.png", 250, 500);
print(answer);
answer = sumPixel("drewgreen.png",10, 10);
print(answer);
print();

//print values of RGB of a pixel//

function printPixel(nameOfImage, xpos, ypos){
var somePxl = new SimpleImage(nameOfImage).getPixel(xpos,ypos);
    print("red is ",somePxl.getRed());
    print("green is ",somePxl.getGreen());
     print("blue is ",somePxl.getBlue());

}

printPixel("drewgreen.png",10, 10);
printPixel("drewgreen.png",250, 500);
print();
print();

// create a yellow ssquare image//


print();

//var img = new SimpleImage(200,200);

//for (var pixel of img.values());{

//    var grn = (255 - pixel.getGreen());
   // pixel.setGreen(grn);
 //   var redd = (255 - pixel.getRed());
  //  pixel.setRed(redd);

  //  print(img);
  // calling it as a function worked//
  function setYellow(pixel){
    pixel.setRed(255);
    pixel.setGreen(255);

}
for (var pixel of img.values()){
    setYellow(pixel);
}
print(img);
print();
// turn chapel red

var image = new SimpleImage("chapel.png");
print(image);
function setRedd(pixel){
    pixel.setRed(255);
}
for (var pixel of image.values()){
    setRedd(pixel);
}
// missing code

print(image);

// remove red from image//
var image = new SimpleImage("chapel.png");
print(image);

function noRedd(pixel){
    pixel.setRed(0);
}
for (var pixel of image.values()){
    noRedd(pixel);
}
// missing code

print(image);
print();

//reduce reds//

var image = new SimpleImage("eastereggs.jpg");
print(image);

function lowRedd(pixel){

       pixel.setRed(70);
 }
//}
for (var pixel of image.values()){

    lowRedd(pixel);
}
// missing code

print(image);
print();
//add bottom border
// write your code here
var image = new SimpleImage("astrachan.jpg");
print(image);

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
    for (var pixel of image.values()){
        var y = pixel.getY();
        if (y >= image.getHeight() - 10){
            setBlack(pixel);
        }
    }

print(image);
print();

//green square top left
var image = new SimpleImage("chapel.png");

print(image);

function setGreenn(pixel){
    pixel.setRed(0);
    pixel.setGreen(255);
    pixel.setBlue(0);
}
 for (var pixel of image.values()){
        var y = pixel.getY();
        var x = pixel.getX();
        if (y < 51 && x < 51){
            setGreenn(pixel);
        }
 }

 print(image);
 print();
 //top right corner function

var image = new SimpleImage("chapel.png");
print(image)


function topRightCorner(cornerWidth,cornerHeight,someImage,red,green,blue){
    for (var pixel of image.values()){
       var y = pixel.getY();
       var x = pixel.getX();
       if (y < cornerHeight && (x > someImage.getWidth() - cornerWidth)){
           pixel.setRed(red);
           pixel.setGreen(green);
           pixel.setBlue(blue);
       }
    }
}

topRightCorner(30,60,image,255,255,0);
print(image);
print();
// same function diffrent parameters
var image = new SimpleImage("smalllion.jpg");
 print(image)

 topRightCorner(125,20,image,255,0,0);
 print(image);
 print();
 //changes in red
function changeRed(width, height) {
   var picture = new SimpleImage(width, height);
   var red = 0;
   for (var pixel of picture.values()){
       var y = pixel.getY();
       if ( y <= picture.getHeight()){
            var x = pixel.getX();
            pixel.setRed(x);
            pixel.setGreen(0);
            pixel.setBlue(0);

       }
   }

   return picture;
}

var result = changeRed(256,200);
print(result);
print();
//slight variation in shade extra green and blue
 //
 function changeRedGB(width, height) {
    var picture = new SimpleImage(width, height);
    var red = 0;
    for (var pixel of picture.values()){
        var y = pixel.getY();
        if ( y <= picture.getHeight()){
             var x = pixel.getX();
             pixel.setRed(x);
             pixel.setGreen(200);
             pixel.setBlue(100);

        }
    }

    // missing code

    return picture;
 }
 var result = changeRedGB(256,200);
print(result);
print();
// adding red green blue stripes across image

  var picture = new SimpleImage("hilton.jpg");
  print(picture);

    for (var pixel of picture.values()){
        var x = pixel.getX();
        var y = picture.getWidth();
        var z = y / 3;
        if ( x <= z){

             pixel.setRed(255);

        }
        if (x > z && x < z + z){
            pixel.setGreen(255);
        }
        if (x > z + z){
            pixel.setBlue(255);
        }
    }
    print(picture);
    print();
    // swap pixels between red and green in an image

       var image = new SimpleImage("drewgreen.png");
       print(image);

       function swapRedGreen(pixel){



          var r = pixel.getRed();
           var g = pixel.getGreen();
          pixel.setRed(g);
          pixel.setGreen(r);
          }


           for (var pixel of image.values()){
       swapRedGreen(pixel);
           }
       print(image);
       //change all blue pixels to yellow

           var image = new SimpleImage("duke_blue_devil.png");
           print(image);

           function swapBlueGreen(pixel){
           var bluePixel;
           for (var pixel of image.values()){
               bluePixel = pixel.getBlue();
               if (bluePixel < 255){
                  pixel.setRed(255);
                  pixel.setGreen(255);
                  pixel.setBlue(0);
               }


              }
           }

           swapBlueGreen(image);
           print(image);
print();
//turn blue image green

var image = new SimpleImage("duke_blue_devil.png");
           print(image);

           function swapGreenBlue(pixel){
           var redPixel;
           for (var pixel of image.values()){
               redPixel = pixel.getRed();
               if (redPixel < 200){
                  pixel.setRed(0);
                  pixel.setGreen(255);
                  pixel.setBlue(100);
               }


              }
           }

            swapGreenBlue(image);
           print(image);
print();
//
var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    px.setGreen(255);
  }
}
print (img);
print();
//the fix

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if(x >= img.getWidth() /2) {
    px.setGreen(255);
  }
  if(x >=img.getWidth()/2 && y > img.getHeight()/2){
      px.setBlue(255);
      px.setRed(0);
      px.setGreen(0);
  }
}
print (img);
print();
// green screen problem

var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
bgImage.setSize(fgImage.getWidth(),fgImage.getHeight());

var output = new SimpleImage(fgImage.getWidth(),fgImage.getHeight());

print(fgImage);
for (var pixel of fgImage.values()){
    if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()){

        var x = pixel.getX();
        var y = pixel.getY();
        var bgPxl = bgImage.getPixel(x,y);
        output.setPixel(pixel.getX(),pixel.getY(),bgPxl);
    }
    else{
        output.setPixel(pixel.getX(), pixel.getY(),pixel);
    }
}

print(output);
print();
//all round black frame around an image

var image = new SimpleImage("smallpanda.png");
print(image);

function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}
    for (var pixel of image.values()){
        var y = pixel.getY();
        var x = pixel.getX();
        if (y >= image.getHeight() - 10){
            setBlack(pixel);
        }
        if (y <= 10){
            setBlack(pixel);
        }
        if (x <= 10){
            setBlack(pixel);
        }
        if (x >= image.getWidth() -10){
            setBlack(pixel);
        }
    }

print(image);
print();
//pixel count
var image = new SimpleImage("usain.jpg");
var cnt = 0;

//function moreRed(pixel){

    for (var pixel of image.values()){
       var g = pixel.getGreen();
       var r = pixel.getRed();
      // var cnt = 0;
        if (r >= 150 && r <= 200){
         cnt = cnt + 1;
        // return cnt
        }
    }
//}
//var result = moreRed(image);
print(cnt);
