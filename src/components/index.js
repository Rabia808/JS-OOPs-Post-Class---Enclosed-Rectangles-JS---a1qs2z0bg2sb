//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1, rec2) {
  if (rec1.top && rec1.left) {
    if (rec1.height && rec1.width) {
      if (
        rec1.left.split("px")[0] <= rec2.left.split("px")[0] &&
        rec1.top.split("px")[0] <= rec2.top.split("px")[0] &&
        rec1.width.split("px")[0] >= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] >= rec2.height.split("px")[0]
      ) {
        return {
          top: rec1.top,
          left: rec1.left,
          height: rec1.height,
          width: rec1.width,
          children: [
            {
              top: rec2.top,
              left: rec2.left,
              height: rec2.height,
              width: rec2.width,
              children: [],
            },
          ],
        };
      } else if (
        rec1.left.split("px")[0] >= rec2.left.split("px")[0] &&
        rec1.top.split("px")[0] >= rec2.top.split("px")[0] &&
        rec1.width.split("px")[0] <= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] <= rec2.height.split("px")[0]
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
      } else {
        return { ...rec1 };
      }
    } else if (rec1.bottom && rec1.right) {
      if (
        rec1.left.split("px")[0] <= rec2.left.split("px")[0] &&
        rec1.top.split("px")[0] <= rec2.top.split("px")[0] &&
        rec1.bottom.split("px")[0] >= rec2.bottom.split("px")[0] &&
        rec1.right.split("px")[0] >= rec2.right.split("px")[0]
      ) {
        return {
          bottom: rec1.bottom,
          right: rec1.right,
          height: rec1.height,
          width: rec1.width,
          children: [{ ...rec2 }],
        };
      } else if (
        rec1.left.split("px")[0] >= rec2.left.split("px")[0] &&
        rec1.top.split("px")[0] >= rec2.top.split("px")[0] &&
        rec1.right.split("px")[0] <= rec2.right.split("px")[0] &&
        rec1.bottom.split("px")[0] <= rec2.bottom.split("px")[0]
      ) {
        return {
          top: rec2.top,
          left: rec2.left,
          bottom: rec2.bottom,
          right: rec2.right,
          children: [{ ...rec1 }],
        };
      } else {
        return { ...rec1 };
      }
    }
  } else if (rec1.bottom && rec1.right && rec1.height && rec1.width) {
    if (
      rec1.bottom.split("px")[0] >= rec2.bottom.split("px")[0] &&
      rec1.right.split("px")[0] >= rec2.right.split("px")[0] &&
      rec1.width.split("px")[0] >= rec2.width.split("px")[0] &&
      rec1.height.split("px")[0] >= rec2.height.split("px")[0]
    ) {
      return {
        bottom: rec1.bottom,
        right: rec1.right,
        height: rec1.height,
        width: rec1.width,
        children: [
          {
            ...rec2,
          },
        ],
      };
    } else if (
      rec1.bottom.split("px")[0] <= rec2.bottom.split("px")[0] &&
      rec1.right.split("px")[0] <= rec2.right.split("px")[0] &&
      rec1.width.split("px")[0] <= rec2.width.split("px")[0] &&
      rec1.height.split("px")[0] <= rec2.height.split("px")[0]
    ) {
      return {
        bottom: rec2.bottom,
        right: rec2.right,
        height: rec2.height,
        width: rec2.width,
        children: [
          {
            ...rec1,
          },
        ],
      };
    } else {
      return { ...rec1 };
    }
  } else if (rec1.height && rec1.width) {
    if (rec1.bottom && rec1.left) {
      if (
        rec1.left.split("px")[0] <= rec2.left.split("px")[0] &&
        rec1.bottom.split("px")[0] >= rec2.bottom.split("px")[0] &&
        rec1.width.split("px")[0] >= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] >= rec2.height.split("px")[0]
      ) {
        return {
          left: rec1.left,
          bottom: rec1.bottom,
          height: rec1.height,
          width: rec1.width,
          children: [
            {
              ...rec2,
            },
          ],
        };
      } else if (
        rec1.left.split("px")[0] >= rec2.left.split("px")[0] &&
        rec1.bottom.split("px")[0] <= rec2.bottom.split("px")[0] &&
        rec1.width.split("px")[0] <= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] <= rec2.height.split("px")[0]
      ) {
        return {
          left: rec2.left,
          bottom: rec2.bottom,
          height: rec2.height,
          width: rec2.width,
          children: [
            {
              ...rec2,
            },
          ],
        };
      } else {
        return { ...rec1 };
      }
    } else if (rec1.top && rec1.right) {
      if (
        rec1.top.split("px")[0] <= rec2.top.split("px")[0] &&
        rec1.right.split("px")[0] >= rec2.right.split("px")[0] &&
        rec1.width.split("px")[0] >= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] >= rec2.height.split("px")[0]
      ) {
        return {
          top: rec1.top,
          right: rec1.right,
          height: rec1.height,
          width: rec1.width,
          children: [
            {
              ...rec2,
            },
          ],
        };
      } else if (
        rec1.top.split("px")[0] >= rec2.top.split("px")[0] &&
        rec1.right.split("px")[0] <= rec2.right.split("px")[0] &&
        rec1.width.split("px")[0] <= rec2.width.split("px")[0] &&
        rec1.height.split("px")[0] <= rec2.height.split("px")[0]
      ) {
        return {
          top: rec2.left,
          right: rec2.bottom,
          height: rec2.height,
          width: rec2.width,
          children: [
            {
              ...rec2,
            },
          ],
        };
      } else {
        return { ...rec1 };
      }
    }
  }
  return { ...rec1 };
}

export default updateStructure;
