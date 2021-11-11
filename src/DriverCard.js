import Rating from "./Rating"

function DriverCard(props) {

    let starArr = ["☆", "☆", "☆", "☆", "☆"];
    let rate = Math.round(props.rating);

    starArr.fill("★", 0, rate);
 
    return (
        <div className="card mb-3" style={{width: "700px", backgroundColor: "rgb(69, 94, 181)", color: "white"}}>
            <div className="row g-0">
                <div className="d-flex col-md-4">
                    <img src={props.img} className="w-75 img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{props.name}{props.firstName}</p>
                        <p className="card-text h1">{starArr[0]}{starArr[1]}{starArr[2]}{starArr[3]}{starArr[4]}</p>
                        <p className="card-text">{props.car.model} - {props.car.licensePlate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCard;