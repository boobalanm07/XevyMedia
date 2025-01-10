import { Basket, BowlFood, BuildingApartment, CarProfile, FediverseLogo, Moped } from '@phosphor-icons/react';
import { Chalkboard, GameController, Heartbeat } from 'phosphor-react';
import React from 'react';

const AppConsulting = () => {
  return (
    <section className="page-theme app-consulting spacer-xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 justify-content-center text-center mx-auto text-white">
            <h2 className="h3 mb-30">App Development & Consulting For All Types of App</h2>
            <p className="mb-50">
              We provide high-end mobile app development & consulting services for a wide range of existing business platforms and startups.
              Get a 360-degree consultation service to keep your toes in the business.
            </p>
          </div>
        </div>
        <div className="row g-lg-2 gy-4">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <BowlFood size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">On-Demand Applications</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Taxi Booking App</li>
                <li>Food Delivery App</li>
                <li>Grocery Delivery App</li>
                <li>Logistics App</li>
                <li>Flower Delivery App</li>
                <li>Entertainment App</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <FediverseLogo size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Social Media App</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Whatsapp Clone App</li>
                <li>Candy AI App</li>
                <li>Tinder Clone App</li>
                <li>Bumble Clone App</li>
                <li>NSFW App</li>
                <li>Onlyfans Clone App</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <Chalkboard size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Education App</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Special Learning App</li>
                <li>STEM App</li>
                <li>Language Learning</li>
                <li>Dictionary Apps</li>
                <li>Audio Book Application</li>
                <li>Skill-Building Apps</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <BuildingApartment size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Real Estate Apps</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Property Listing Apps</li>
                <li>Tenant & Landlord</li>
                <li>Agent Management</li>
                <li>Auction Apps</li>
                <li>Real Estate Investment</li>
                <li>Metaverse Real Estate</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <Heartbeat size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Healthcare App</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Doctor Booking App</li>
                <li>Medicine Delivery App</li>
                <li>Diagnosis Assistant</li>
                <li>Home Health Care</li>
                <li>Pharmacy Delivery Apps</li>
                <li>Telemedicine Apps</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <CarProfile size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Automotive App</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Diagnostic & Monitoring</li>
                <li>Vehicle Control App</li>
                <li>Fuel & Charging</li>
                <li>Navigation App</li>
                <li>Smart Parking App</li>
                <li>IoT Based App</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <GameController size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Gaming Apps</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>AAA Gaming App</li>
                <li>Strategy Gaming App</li>
                <li>Casino Game App</li>
                <li>Blockchain Gaming</li>
                <li>Educational Game App</li>
                <li>Role Playing Game</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <Moped size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">Travel & Hospitality App</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Hotel Booking App</li>
                <li>Trip Planner App</li>
                <li>Ticket Booking Apps</li>
                <li>Travel Community</li>
                <li>VR Tours</li>
                <li>Restaurant Booking App</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="fade-wrapper">
              <div className="mb-20">
                <Basket size={32} />
              </div>
              <h3 className="text-white h5 mb-20 w-semibold">eCommerce Apps</h3>
              <ul className="tick-list list-unstyled mb-0">
                <li>Marketplace Apps</li>
                <li>Daily Deals App</li>
                <li>eCommerce Game App</li>
                <li>Price Comparison Apps</li>
                <li>eWallet Apps</li>
                <li>Virtual Try-On Apps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppConsulting;
