function DriverCard(props) {

    let starArr = ["☆", "☆", "☆", "☆", "☆"];
    let rate = Math.round(props.rating);

    starArr.fill("★", 0, rate);

    return (
        <div className="card mb-3" style={{maxWidth: "540px", backgroundColor: "rgb(69, 94, 181)", color: "white"}}>
            <div className="row g-0 d-flex justify-content-center">
                <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{props.name}{props.firstName}</p>
                        <p className="card-text">{starArr[0]}{starArr[1]}{starArr[2]}{starArr[3]}{starArr[4]}</p>
                        <p className="card-text">{props.car.model} - {props.car.licensePlate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverCard;