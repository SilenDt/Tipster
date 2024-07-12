import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gray-500 p-8">
        <h1 className="text-4xl text-white font-bold">I am your Home Page</h1>
        <p className="text-white mt-4">
          Welcome to your home page content.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
