import React, { useState } from 'react';
import { MenuIcon, SearchIcon, CartIcon } from './Icons';
import UserProfile from './UserProfile';

interface HeaderProps {
    onCartClick: () => void;
    cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, cartItemCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Stickers', href: '#' },
        { name: 'Labels', href: '#' },
        { name: 'Materials', href: '#' },
        { name: 'Reorder', href: '#' },
        { name: 'Quote', href: '#' },
        { name: 'Support', href: '#' },
    ];

    return (
        <header className="bg-black text-white sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20">
                    {/* Left Section */}
                    <div className="flex-1 flex justify-start items-center">
                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(0, 3).map(link => (
                                <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-wider hover:text-yellow-400 transition">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-800">
                                <MenuIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Center Section: Logo */}
                    <div className="flex-shrink-0">
                        <a href="#">
                           <img src="https://i.postimg.cc/KvvNMK89/stickerverselogo.png" alt="StickerApp Logo" className="h-10 w-auto" />
                        </a>
                    </div>
                    
                    {/* Right Section */}
                    <div className="flex-1 flex justify-end items-center">
                        {/* Desktop Nav Links & Icons */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(3).map(link => (
                                <a key={link.name} href={link.href} className="text-sm font-bold uppercase tracking-wider hover:text-yellow-400 transition">
                                    {link.name}
                                </a>
                            ))}
                            <button className="hover:text-yellow-400 transition"><SearchIcon className="h-6 w-6"/></button>
                            <UserProfile />
                            <button onClick={onCartClick} className="relative hover:text-yellow-400 transition">
                                <CartIcon className="h-7 w-7"/>
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                        
                        {/* Mobile Icons */}
                        <div className="lg:hidden flex items-center space-x-4">
                             <button className="hover:text-yellow-400 transition"><SearchIcon className="h-6 w-6"/></button>
                             <UserProfile />
                             <button onClick={onCartClick} className="relative hover:text-yellow-400 transition">
                                 <CartIcon className="h-7 w-7"/>
                                 {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                                        {cartItemCount}
                                    </span>
                                )}
                             </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                             <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;