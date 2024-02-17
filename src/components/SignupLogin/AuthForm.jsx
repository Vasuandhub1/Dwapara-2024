import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [divBg, setDivBg] = useState('bg-[#043873]'); // to change color when toggled

  const toggleTab = (tab) => {
    setActiveTab(tab);
    setDivBg(tab === 'login' ? 'bg-[#043873]' : 'bg-white');
  };

  return (
    <section className="authorisation flex justify-center items-center w-full h-screen bg-gradient-to-r from-blue-900 via-white to-blue-200  text-white">
      <div className={`sign-in-up-form rounded-lg shadow-lg p-8 w-[600px] h-[650px] relative ${divBg}`}>
        <div className="form-tabs  flex border border-gray-300 absolute top-4 right-4 rounded-lg">
          <button dir='ltr'
            className={`form-tabs__btn flex-1 py-2 px-3 rounded-s-lg ${activeTab === 'login' ? 'bg-white text-[#043873] hover:bg-white' : 'text-gray-800 hover:bg-[#043873] hover:text-white'}`}
            onClick={() => toggleTab('login')}
          >
            Login
          </button>
          <button dir='rtl'
            className={`form-tabs__btn flex-1 py-1 px-3 rounded-s-lg ${activeTab === 'register' ? 'bg-[#043873] text-white hover:bg-[#043873]' : 'text-white hover:bg-white hover:text-[#043873]'}`}
            onClick={() => toggleTab('register')}
          >
            Register
          </button>
        </div>
        {activeTab === 'login' && <LoginForm  />}
        {activeTab === 'register' && <RegisterForm />}
      </div>
    </section>
  );
};

export default AuthForm;
