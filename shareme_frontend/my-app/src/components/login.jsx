import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';


import { client } from '../client.js';
const Login = () => {
  const navigate = useNavigate();
  
  const responseGoogle = async (response) => {
    const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${response.access_token}` },
    }).then(res => res.json());

    localStorage.setItem('user', JSON.stringify(userInfo));
    const { name, sub, picture } = userInfo;

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true }); // ✅ fixed
    });
};
  const login = useGoogleLogin({
  onSuccess: responseGoogle,
  onError: () => console.log("Login Failed"),
});

  return (
  <div className="relative w-full h-screen overflow-hidden">

    <video
      src={shareVideo}
      loop
      muted
      autoPlay
      className="absolute top-0 left-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col justify-center items-center">

      {/* Logo */}
      <div className="w-40 mb-6">
        <img src={logo} alt="logo" />
      </div>

      {/* Button */}
      <div className="shadow-2xl">
        <button
          onClick={() => login()}
          className="bg-white flex items-center justify-center gap-3 px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 min-w-[240px]"
        >
          <FcGoogle className="text-xl" />
          <span className="text-gray-700 font-medium">
            Sign in with Google
          </span>
        </button>
      </div>
      

    </div>
  </div>
);
}

export default Login