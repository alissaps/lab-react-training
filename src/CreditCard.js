import visa from './assets/visa.png';
import master from './assets/master-card.svg';

function CreditCard(props) {
  let card = '';
  if (props.type === 'Visa') {
    card = visa;
  } else if (props.type === 'Master Card') {
    card = master;
  }
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="creditCard"
    >
      <div className="cardContainer">
        <img className="cardImage" src={card} alt="..." />
      </div>

      <div className="numberContainer">
        <p> **** **** **** {props.number[12]}{props.number[13]}{props.number[14]}{props.number[15]}</p>
      </div>

      <div className="infoContainer">
        <div>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </div>

        <div>{props.owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
