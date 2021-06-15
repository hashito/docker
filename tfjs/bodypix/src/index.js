const bodyPix = require('@tensorflow-models/body-pix');

window.onload = function() {
  console.log("v1.3");
  const img = document.getElementById('image');
  const fileselect = document.getElementById('fileselect');
  const canvas1 = document.getElementById('canvas1');
  const canvas3 = document.getElementById('canvas3');
  const downloadbutton = document.getElementById('downloadbutton');

  fileselect.onchange = function(e){
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById('image').src=e.target.result;
      WatermelonHave();
    }
    reader.readAsDataURL(e.target.files[0]);
  };

//   downloadbutton.onclick = function(e){
//     var c = document.getElementById("canvas3");
//     downloadbutton.href=c.toDataURL("image/png");
// //    var d=c.toDataURL("image/png");
// //    var w=window.open('about:blank','image from canvas');
// //    w.document.write("<img src='"+d+"' alt='from canvas'/>");
//   }

  async function WatermelonHave(front_left=true) {
    const net = await bodyPix.load(/** optional arguments, see below **/);

    const segmentation = await net.segmentMultiPersonParts(img, {
      flipHorizontal: false,
//      internalResolution: 'medium',
      internalResolution: 'high',
      segmentationThreshold: 0.7,
      maxDetections: 10,
      scoreThreshold: 0.2,
      nmsRadius: 20,
      minKeypointScore: 0.3,
      refineSteps: 10
    });


    console.log(segmentation);

//    0	left_face	12	torso_front
//    1	right_face	13	torso_back
//    2	left_upper_arm_front	14	left_upper_leg_front
//    3	left_upper_arm_back	15	left_upper_leg_back
//    4	right_upper_arm_front	16	right_upper_leg_front
//    5	right_upper_arm_back	17	right_upper_leg_back
//    6	left_lower_arm_front	18	left_lower_leg_front
//    7	left_lower_arm_back	19	left_lower_leg_back
//    8	right_lower_arm_front	20	right_lower_leg_front
//    9	right_lower_arm_back	21	right_lower_leg_back
//    10	left_hand	22	left_foot
//    11	right_hand	23	right_foot

// 2,4,6,8,10,11
    const fronts_left= {pose:9 ,pose2:7,dot:[2,3,    6,7,    10   ]};
    const fronts_right={pose:10,pose2:8,dot:[    4,5,    8,9,   11]};
    fronts= front_left?fronts_left:fronts_right;

    if (canvas1.getContext && canvas3.getContext) {
      seg=segmentation[0];
      canvas1.width  =canvas3.width  =seg.width;
      canvas1.height =canvas3.height =seg.height;
      const chara = new Image();
      chara.src = img.src;

      chara.onload = () => {
        const ctx  = canvas1.getContext('2d');
        const ctx3 = canvas3.getContext('2d');
        ctx.globalAlpha = 0.5;
        ctx3.globalAlpha = 1.0;
        ctx.drawImage(chara,0,0);
        ctx3.drawImage(chara,0,0);

        // スイカの表示
        const p      = seg.pose.keypoints[fronts.pose].position;
        const p2     = seg.pose.keypoints[fronts.pose2].position;
        const plen   = Math.sqrt(Math.pow(p.x-p2.x,2)+Math.pow(p.y-p2.y,2));
        const chara2 = new Image();
        chara2.src   = "watermelon.png";
        chara2.onload= () => {
          let k=plen/(chara2.width-300);
          const w=chara2.width*k;
          const h=chara2.height*k;
          console.log(h,w,p,plen)
          ctx3.drawImage(chara2,p.x-w/2-plen*0.7,p.y-h,w,h);          

          // 手の表示
          for(var y=0;seg.height>y;y++){
            for(var x=0;seg.width>x;x++){
                var d=seg.data[x+y*seg.width];
                if(d!=-1){
                  if(fronts.dot.indexOf(d)>=0){
                    let dt=ctx.getImageData(x,y,1,1).data;
                    ctx3.fillStyle = '#'+
                      ('0'+dt[0].toString(16)).substr(-2) +
                      ('0'+dt[1].toString(16)).substr(-2) +
                      ('0'+dt[2].toString(16)).substr(-2)
                      ;
                    ctx3.fillRect(x,y,1,1);
                  }
                }
            }
          }
          downloadbutton.href=canvas3.toDataURL("image/png");

        }
        // 参考点
        //ctx3.fillStyle ="#FF0";
        //ctx3.fillRect(p.x,p.y,10,10);
        //ctx3.fillRect(p2.x,p2.y,10,10);
      };
    }
  }
  //loadAndPredict();
}

