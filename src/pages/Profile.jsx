import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  

  return (
    <div className="bg-white overflow-hidden shadow border dark:bg-black">
      <div className="px-4 py-5 sm:px-6 ">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
          User Profile
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-white">
          This is some information about the user.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Username
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              John Doe
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Email address
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              johndoe@example.com
            </dd>
          </div>
          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500 dark:text-white">
              Password
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-white">
              xxxxxxxx
            </dd>
          </div>
        </dl>
      </div>
      <div className="py-5 text-center">
        <Link to="/updateprofile">
          <button className="bg-green-300 text-black h-8 rounded-md px-3">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
}
