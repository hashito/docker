import React from 'react'
//import document, { Html, Head, Main, NextScript } from 'next/document'
const bodyPix = require('@tensorflow-models/body-pix');


async function loadAndPredict() {
    const img = document.getElementById('image');
    const net = await bodyPix.load(/** optional arguments, see below **/);

  /**
   * One of (see documentation below):
   *   - net.segmentPerson
   *   - net.segmentPersonParts
   *   - net.segmentMultiPerson
   *   - net.segmentMultiPersonParts
   * See documentation below for details on each method.
    */
  const segmentation = await net.segmentPerson(img);
  console.log(segmentation);
}
loadAndPredict();


export default () => {
return <html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.2"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.0"></script>
</head>

<body>
  <img id='image' src='images/person.jpg' crossOrigin='anonymous'/>
</body>
<script>
</script>
</html>

}