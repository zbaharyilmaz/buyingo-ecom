"use client";

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const EcommerceFooter = () => {
  return (
    <footer className="bg-brand-bg text-brand-text">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-brand-text mb-4">Buying</h2>
          <p className="text-sm text-brand-text">
            Discover your style with us. ShopNow offers the latest trends in
            fashion, tech, and home essentials.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-brand-text">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm text-brand-text">
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Shipping & Returns</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-text">
            Subscribe
          </h3>
          <p className="text-sm text-brand-text mb-4">
            Get the latest deals and updates right to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded bg-brand-bg text-brand-text focus:outline-none border border-brand-text"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brand-logo text-brand-text rounded hover:bg-rose-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-brand-textlogo py-6 mt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Buyingo.com | All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a href="#" className="hover:text-brand-text">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-brand-text">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-brand-text">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-brand-text">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;
