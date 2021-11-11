import { useState } from 'react';

let count = 1;
let bgColor = "purple";

function LikeButton() {
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  let [clickCount, setClickCount] = useState(0);

  function handleIncrement() {
    setClickCount(clickCount + 1);
    if(count < colorArr.length -1) {
        count++
    } else {
        count = 0;
    }
    bgColor = colorArr[count];
  }

   let like = (clickCount === 0 || clickCount > 1) ? "Likes" : "Like";

  return (
      <button style={{backgroundColor: `${bgColor}`}} className="counter" onClick={handleIncrement}>
        {clickCount} {like}
      </button>
  );
}

export default LikeButton;
