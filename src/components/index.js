//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

const rec1 = {
  top: "20px",
  left: "20px",
  height: "40px",
  width: "60px",
  children: [],
};

const rec2 = {
  top: "30px",
  left: "30px",
  height: "20px",
  width: "30px",
  children: [],
};

function updateStructure(rec1, rec2) {
  if (
    rec1?.top.split("px")[0] <= rec2?.top.split("px")[0] &&
    rec1?.left.split("px")[0] <= rec2?.left.split("px")[0]
  ) {
    // check if rec1 enclose rec2 or not---------------->
    if (
      rec1.height.split("px")[0] > rec2.height.split("px")[0] &&
      rec1.width.split("px")[0] > rec2.width.split("px")[0]
    ) {
      const rectangle2TopDimensionsRelativeToA =
        rec2.top.split("px")[0] - rec1.top.split("px")[0];
      const rectangle2leftDimensionsRelativeToA =
        rec2.left.split("px")[0] - rec1.left.split("px")[0];
      return {
        top: rec1.top,
        left: rec1.left,
        height: rec1.height,
        width: rec1.width,
        children: [
          {
            top: rectangle2TopDimensionsRelativeToA + "px",
            left: rectangle2leftDimensionsRelativeToA + "px",
            height: rec2.height,
            width: rec2.width,
            children: [],
          },
        ],
      };
    }

    //check if rec1 and rec2 are of same diamension
    else if (
      rec1.height.split("px")[0] === rec2.height.split("px")[0] &&
      rec1.width.split("px")[0] === rec2.width.split("px")[0]
    ) {
      return {
        top: rec2.top,
        left: rec2.left,
        height: rec2.height,
        width: rec2.width,
        children: [
          {
            top: rec1.top,
            left: rec1.left,
            height: rec1.height,
            width: rec1.width,
            children: [],
          },
        ],
      };
    }
  } else {
    //If none of the rectangle encloses the other
    return rec1;
  }
}

module.exports = updateStructure;
