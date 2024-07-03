import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import NavBar from '../components/Layout/NavBar';

const HomePage = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar />

      <main className="flex-1 bg-gray-500 p-8">
        <h1 className="text-4xl text-white font-bold">I am your Home Page</h1>
        <p className="text-white mt-4">
          Welcome to your home page content.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
