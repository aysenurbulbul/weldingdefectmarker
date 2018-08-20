### Defect Marker App

This app allows user to mark the welding defects and then create a file that contains the defects properties. File is formatted for AI usage. Also user login/register system is included.

### Usage

Put the images, that you want to work on, in "wdimages" folder which is under the "public" folder.
Login to be able to use the app. Choose defect types from the dropdown menu. It will put a box that is draggable and resizable on the image.
You can select the box and click on delete button to delete it. "Make File" button only appears when the user gets the last image of the folder.
Created file in under the app's folder. You can change the file's name on "app.js" file (line 34).

### Usage Problems

Since the nature of fabric.js objects, while resizing the boxes their sides' width can increase or decrease.
To minimize this issue while using the app, user can create the box, resize it, get to next/previous image and then turn back to image that he/she is working on. This way box gets proper width size.
Avoiding this with a function which changes storeWidth while resizing caused some other problems for me. All suggestions are welcomed to find solution for this problem.
Sorry for the inconvenience. :(


### Possible Improvements

1) Unfortunately users work on images is not saved (since I don't have enough time to do it). If the user log out or refresh the app without making the file, all the work is lost.
However I put all the boxes on an array (rectsOnCanvas, check "vohiyo.js") which can be stored in database along with the user. So when the user log in the boxes in the array can be rendered on images.

2) I disabled the group selection for boxes. If you want to make group selection viable delete line 2 in "vohiyo.js".
In addition, to be able to delete the group selection uncomment the lines 417-425 in "vohiyo.js".

### Installation

Requires [Node.js](https://nodejs.org/) to run.

```sh
$ npm install
```

```sh
$ npm start
```

or

```sh
$ npm install
```

```sh
$ node app.js
```
