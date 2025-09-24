
import React from 'react';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition text-sm">{children}</a>
  </li>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-4 lg:col-span-1">
                        <h4 className="font-bold mb-4">Stay connected with StickerApp</h4>
                        <p className="text-gray-400 text-sm mb-4">Sign up to our email list for insider deals, tips and inspiration.</p>
                        <form className="flex">
                            <input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white p-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                            <button type="submit" className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-r-md hover:bg-yellow-500 transition">SUBSCRIBE</button>
                        </form>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Useful links</h4>
                        <ul className="space-y-2">
                           <FooterLink href="#">Usages</FooterLink>
                           <FooterLink href="#">Add-Ons</FooterLink>
                           <FooterLink href="#">Our Sticker Packs</FooterLink>
                           <FooterLink href="#">Order Samples</FooterLink>
                           <FooterLink href="#">Shop</FooterLink>
                           <FooterLink href="#">Blog</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-4">Support</h4>
                        <ul className="space-y-2">
                           <FooterLink href="#">Contact us</FooterLink>
                           <FooterLink href="#">Quote</FooterLink>
                           <FooterLink href="#">FAQs</FooterLink>
                           <FooterLink href="#">How to's</FooterLink>
                           <FooterLink href="#">Shipping</FooterLink>
                           <FooterLink href="#">Payments</FooterLink>
                        </ul>
                    </div>

                     <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2">
                           <FooterLink href="#">About us</FooterLink>
                           <FooterLink href="#">Legal</FooterLink>
                           <FooterLink href="#">Reviews</FooterLink>
                           <FooterLink href="#">Press</FooterLink>
                           <FooterLink href="#">Cookies</FooterLink>
                           <FooterLink href="#">Accessibility</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 sm:mb-0">© StickerApp 2025</p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white"><img src="https://stickerapp.com/media/32x30/0d3bac0c35/white-ic-som-instagram.svg" alt="Instagram" className="h-6 w-6"/></a>
                        <a href="#" className="text-gray-400 hover:text-white"><img src="https://stickerapp.com/media/30x28/885aa3c949/white-ic-som-facebook.svg" alt="Facebook" className="h-6 w-6"/></a>
                        <a href="#" className="text-gray-400 hover:text-white"><img src="https://stickerapp.com/media/34x24/89ef8a3eb0/white-ic-som-youtube.svg" alt="YouTube" className="h-6 w-6"/></a>
                        <a href="#" className="text-gray-400 hover:text-white"><img src="https://stickerapp.com/media/28x28/3649f38bad/white-ic-som-linkedin.svg" alt="LinkedIn" className="h-6 w-6"/></a>
                        <a href="#" className="text-gray-400 hover:text-white"><img src="https://stickerapp.com/media/28x28/397b48854a/white-ic-som-x.svg" alt="X Twitter" className="h-6 w-6"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
