import profilePicture from '../assets/profile-picture/nathaniel-dacasin.jpg';

function ProfilePhoto() {
  return ( 
  <div>
    <img
        src={profilePicture}
        alt="Nathaniel Picture"
        className="w-100 h-100 rounded-full shadow-lg border-4 border-blue-300 object-cover"
        />  
  </div> 
  );
}

export default ProfilePhoto;