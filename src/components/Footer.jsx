import React from 'react';
import { Bike, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <Bike className="logo-icon" />
                            <span>Velocita</span>
                        </div>
                        <p className="footer-desc">
                            The premier marketplace for certified pre-owned performance motorcycles. Track ready, street legal.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Inventory</h4>
                        <ul>
                            <li><a href="/shop?type=supersport">Supersport</a></li>
                            <li><a href="/shop?type=naked">Hyper Naked</a></li>
                            <li><a href="/shop?type=adventure">Adventure</a></li>
                            <li><a href="/shop?type=cafe">Cafe Racer</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/selling-guide">Selling Guide</a></li>
                            <li><a href="/track-days">Track Day Calendar</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Stay Tuned</h4>
                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                        <div className="newsletter">
                            <input type="email" placeholder="Join the club" />
                            <button className="btn-icon"><Mail size={16} /></button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Velocita Moto Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
