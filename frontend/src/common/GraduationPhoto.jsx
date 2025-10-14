import gradPicture from '../assets/profile-picture/grad.jpg';

function GraduationPhoto() {
  return ( 
  <div>
    <img
        src={gradPicture}
        alt="Nathaniel Picture"
        className="w-100 h-100 shadow-lg border-4 border-blue-300 object-cover"
        />  
  </div> 
  );
}

export default GraduationPhoto;