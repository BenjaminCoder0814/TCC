import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const links = {
    product: [
      { name: 'AI Analysis', href: '/triagem' },
      { name: 'Workout Plans', href: '/planos' },
      { name: 'Nutrition', href: '/loja' },
      { name: 'Professionals', href: '/profissionais' },
      { name: 'Mobile App', href: '/app' }
    ],
    resources: [
      { name: 'Blog & Articles', href: '/blog' },
      { name: 'Video Library', href: '/videos' },
      { name: 'Help Center', href: '/faq' },
      { name: 'Success Stories', href: '/ranking' },
      { name: 'Community', href: '/ideias' }
    ],
    company: [
      { name: 'About Us', href: '/sobre' },
      { name: 'Careers', href: '/careers' },
      { name: 'Partners', href: '/parceiros' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Contact', href: '/contato' }
    ],
    legal: [
      { name: 'Terms of Service', href: '/termos' },
      { name: 'Privacy Policy', href: '/privacidade' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'GDPR', href: '/gdpr' }
    ]
  };

  const awards = [
    { name: 'Best Fitness App 2024', org: 'App Store Awards' },
    { name: 'Top Innovation', org: 'TechCrunch' },
    { name: 'Users Choice', org: 'Google Play' },
    { name: 'Health & Fitness Leader', org: 'Webby Awards' }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Newsletter CTA Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Stay Ahead of Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fitness Journey</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get exclusive workout tips, nutrition insights, and early access to new features. Join 250,000+ fitness enthusiasts.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white bg-opacity-10 backdrop-blur-sm border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Subscribe Free
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              ✨ 100% Free • 📧 Weekly insights • 🚫 No spam ever • ❌ Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                  <span className="text-white font-bold text-xl">ML</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MUSCLE</span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">LEVELS</span>
                  </h3>
                  <p className="text-xs text-gray-500">Powered by AI</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                The world's most advanced AI-powered fitness platform. Transform your body and mind with personalized workouts, nutrition plans, and expert guidance.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  250,000+ Active Users
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  5M+ Workouts Completed
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
                  98.7% Success Rate
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: '📷', href: '#', followers: '125K' },
                  { name: 'YouTube', icon: '📺', href: '#', followers: '89K' },
                  { name: 'TikTok', icon: '🎵', href: '#', followers: '156K' },
                  { name: 'Twitter', icon: '🐦', href: '#', followers: '67K' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group bg-gray-800 hover:bg-gray-700 p-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                    title={`${social.name} - ${social.followers} followers`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-blue-400">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-green-400">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-purple-400">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Contact Info */}
            <div className="mt-8 p-4 bg-gray-800 bg-opacity-50 rounded-xl">
              <h5 className="font-semibold mb-3 text-gray-300">Global Support</h5>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <span className="mr-2">🌍</span>
                  <span>Available worldwide</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏰</span>
                  <span>24/7 Live Chat</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">�</span>
                  <span>support@musclelevels.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-yellow-400">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Awards & Recognition */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4 text-gray-300">Awards & Recognition</h5>
              <div className="space-y-3">
                {awards.slice(0, 2).map((award, index) => (
                  <div key={index} className="text-xs">
                    <div className="text-yellow-400 font-semibold">{award.name}</div>
                    <div className="text-gray-500">{award.org}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-t border-gray-800 py-8 bg-black bg-opacity-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            {[
              { number: '250,847', label: 'Lives Transformed', color: 'text-green-400' },
              { number: '5.2M+', label: 'Workouts Completed', color: 'text-blue-400' },
              { number: '98.7%', label: 'Success Rate', color: 'text-purple-400' },
              { number: '190+', label: 'Countries Served', color: 'text-yellow-400' },
              { number: '24/7', label: 'Expert Support', color: 'text-pink-400' },
              { number: '4.9★', label: 'App Store Rating', color: 'text-orange-400' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`text-2xl md:text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-gray-800 py-6 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
              <div>&copy; 2024 MUSCLE LEVELS. All rights reserved worldwide.</div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <span className="mr-1">🇺🇸</span>
                  <span>English</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">💰</span>
                  <span>USD</span>
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                All Systems Operational
              </span>
              <span className="flex items-center">
                <span className="mr-1">🔒</span>
                <span>256-bit SSL Encrypted</span>
              </span>
              <span className="flex items-center">
                <span className="mr-1">�️</span>
                <span>SOC 2 Type II Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}