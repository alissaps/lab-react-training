

function IdCard(props) {
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0 d-flex align-items-center">
                <div className="col-md-4">
                    <img src={props.picture} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text"><strong className="text-muted">First Name:</strong> {props.firstName}</p>
                        <p className="card-text"><strong className="text-muted">Last Name:</strong> {props.lastName}</p>
                        <p className="card-text"><strong className="text-muted">Gender:</strong> {props.gender}</p>
                        <p className="card-text"><strong className="text-muted">Height:</strong> {props.height}</p>
                        <p className="card-text"><strong className="text-muted">Birth:</strong> {props.birth}</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default IdCard;