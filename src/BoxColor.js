function BoxColor(props) {
  return (
    <div className="card">
      <div className="card-body" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>rgb({props.r}, {props.g}, {props.b})</div>
    </div>
  );
}



export default BoxColor;
