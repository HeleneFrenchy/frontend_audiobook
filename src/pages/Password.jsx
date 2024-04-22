import React from 'react'




const Password = () => {
  return (
    <div className="bg-white overflow-hidden shadow border dark:bg-black mt-12 text-center rounded-md">
      <h1 className="mt-8 text-lg"> Forgot your password?</h1>
      <p className="mt-5">Click on the button below to reset your password.</p>
      <button className="bg-green-300 rounded-md py-1 px-3 hover:bg-green-500 mt-5 mb-8">
        RESET YOUR PASSWORD
      </button>
    </div>
  );
}

export default Password