import Barong from '../picture/barong.jpg';

function ProtoCard() {
  return ( 
  <div>
    <img
        src={Barong}
        alt="Nathaniel with Barong"
        className="w-100 h-100 rounded-2xl shadow-lg border-1 border-blue-400 mb-6 object-cover "
      />  
  </div> );
}

export default ProtoCard;