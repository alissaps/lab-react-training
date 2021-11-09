function Rating(props) {
    let starArr = ["☆", "☆", "☆", "☆", "☆"];
    let rate = Math.round(props.children);

    starArr.fill("★", 0, rate);
    
    return (
        <p className="h1">
            {starArr[0]}
            {starArr[1]}
            {starArr[2]}
            {starArr[3]}
            {starArr[4]}
        </p>
    )
  }

export default Rating;

