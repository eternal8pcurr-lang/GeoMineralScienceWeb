import React, { useState, useEffect } from 'react';
import {
  Users,
  Map,
  Cpu,
  Mountain,
  Pickaxe,
  ScanLine,
  ShieldCheck,
  Activity,
  ArrowRight,
  Microscope,
  FlaskConical,
  Send
} from 'lucide-react';

// This will be moved inside the component

// Helper Component for Navigation Cards
const NavCard = ({ icon, title, desc, onClick }) => (
  <button
    onClick={onClick}
    className="bg-stone-900/80 backdrop-blur-sm border border-stone-700 p-6 rounded-xl flex flex-col items-center text-center hover:bg-stone-800 hover:border-amber-500/50 transition-all group w-full"
  >
    <div className="mb-4 p-3 rounded-full bg-stone-950 border border-stone-800 group-hover:border-amber-500 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-stone-400 text-sm">{desc}</p>
  </button>
);

// Helper Component for Property Cards
const PropertyCard = ({ name, status, desc, image }) => (
  <div className="group bg-stone-900 border border-stone-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all">
    <div className="h-48 overflow-hidden relative">
      <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-all z-10"></div>
      <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-stone-950/80 backdrop-blur text-amber-500 text-xs font-bold rounded-full border border-amber-500/20">
          {status}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <p className="text-stone-400 text-sm mb-4">{desc}</p>
      <button className="text-amber-500 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
        View Report <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const App = () => {
  const [query, setQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Load Chatbase chatbot script
  useEffect(() => {
    // Add Chatbase script
    const script = document.createElement('script');
    script.innerHTML = `(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="GQ5Qh8nJ6XRvgvVFwRqZa";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();`;
    document.head.appendChild(script);

    // Clean up
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const userMessage = query.trim();
    setQuery('');

    // Open Chatbase chat and send message
    if (window.chatbase) {
      // Open the chat widget
      window.chatbase('open');

      // Try to send the message - Chatbase might support this
      setTimeout(() => {
        // Some chat widgets support sending messages programmatically
        // If not supported, at least the chat is open for the user
        if (window.chatbase && typeof window.chatbase === 'function') {
          try {
            // Try different methods to send the message
            window.chatbase('sendMessage', userMessage);
          } catch (error) {
            console.log('Direct message sending not supported, chat opened for user input');
          }
        }
      }, 1000); // Wait for chat to open
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-amber-500 selection:text-stone-900">

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mountain className="text-amber-500 h-8 w-8" />
            <span className="text-xl font-bold tracking-wider text-white">GEO<span className="text-amber-500">MINERAL</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-300">
            <button onClick={() => scrollToSection('team')} className="hover:text-amber-400 transition-colors">Team</button>
            <button onClick={() => scrollToSection('properties')} className="hover:text-amber-400 transition-colors">Properties</button>
            <button onClick={() => scrollToSection('technology')} className="hover:text-amber-400 transition-colors">Technology</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with LLM Interface */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548567117-d7607ea0b7b6?q=80&w=2940&auto=format&fit=crop"
            alt="Nevada Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/80 to-stone-950"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center space-y-12 pt-20">

          {/* Main LLM Prompt Box */}
          <div className="w-full bg-stone-900/60 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl shadow-amber-900/20 p-6 md:p-8 transform transition-all hover:border-amber-500/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-amber-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-xs text-amber-500 font-mono tracking-widest">GMS-AI V.2.0</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-light text-center mb-8 text-white leading-relaxed">
              Hello, learn about <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">GeoMineralScience.</span>
              <br />
              <span className="text-2xl text-stone-300 mt-2 block">Assaying properties, technology, the people.</span>
            </h1>

            <form onSubmit={handleSearch} className="relative group w-full max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Pickaxe className="h-5 w-5 text-stone-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about assaying, prospecting, or our latest Maps 1580 data..."
                className="w-full bg-stone-950/80 border border-stone-700 text-stone-100 pl-12 pr-16 py-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-lg placeholder:text-stone-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-lg transition-colors shadow-lg shadow-amber-900/20"
              >
                <Send size={20} />
              </button>
            </form>

            <div className="text-center mt-6">
              <p className="text-stone-400 text-sm">
                Start a conversation with our AI assistant trained on our prospecting data and technology
              </p>
              <div className="inline-flex items-center gap-2 bg-stone-900/80 backdrop-blur-sm border border-stone-700 px-4 py-2 rounded-xl mt-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-stone-300 text-xs">AI Assistant Ready</span>
              </div>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <NavCard
              icon={<Users className="h-8 w-8 text-amber-400" />}
              title="Meet the Team"
              desc="Experts in geology and assaying."
              onClick={() => scrollToSection('team')}
            />
            <NavCard
              icon={<Map className="h-8 w-8 text-amber-400" />}
              title="The Properties"
              desc="Current and future exploration sites."
              onClick={() => scrollToSection('properties')}
            />
            <NavCard
              icon={<Cpu className="h-8 w-8 text-amber-400" />}
              title="That Technology"
              desc="Advanced XRT & Maps 1580."
              onClick={() => scrollToSection('technology')}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-stone-500">
          <ScanLine size={24} />
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* TEAM SECTION */}
        <section id="team" className="scroll-mt-24">
          <div className="border-l-4 border-amber-500 pl-6 mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Meet The Team</h2>
            <p className="text-stone-400 text-lg">Decades of combined experience in mineral exploration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group bg-stone-900 border border-stone-800 p-6 rounded-xl hover:border-amber-500/50 transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-stone-800 mb-4 mx-auto overflow-hidden border-2 border-stone-700 group-hover:border-amber-500">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Geologist${i}`} alt="Team Member" />
                </div>
                <h3 className="text-xl font-bold text-center text-white">Expert {i}</h3>
                <p className="text-amber-500 text-center text-sm mb-4">Senior Geologist</p>
                <p className="text-stone-400 text-sm text-center">Specializing in sediment analysis and prospecting strategies in the Nevada basin.</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROPERTIES SECTION */}
        <section id="properties" className="scroll-mt-24 relative">
           {/* Decorative bg element */}
           <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-amber-900/10 to-transparent -z-10 blur-3xl"></div>

          <div className="border-l-4 border-amber-500 pl-6 mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">The Properties</h2>
            <p className="text-stone-400 text-lg">Exploring the rich mineral belts of the American West.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Primary Property */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-stone-700">
              <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20 transition-all z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1547531455-c20b67362804?q=80&w=2000&auto=format&fit=crop"
                alt="The Courbet"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 bg-gradient-to-t from-stone-950 via-stone-900/90 to-transparent w-full">
                <div className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full mb-3">CURRENT FLAGSHIP</div>
                <h3 className="text-3xl font-bold text-white mb-2">The Courbet</h3>
                <p className="text-stone-300 max-w-2xl">Our primary excavation and analysis site featuring promising early-stage returns. Advanced mapping currently underway.</p>
              </div>
            </div>

            {/* Up and Coming */}
            <PropertyCard
              name="Jungle Canyon"
              status="Up-and-Coming"
              desc="High potential geological formations identified in preliminary scans."
              image="https://images.unsplash.com/photo-1622588699104-585a21087e50?q=80&w=1000&auto=format&fit=crop"
            />
            <PropertyCard
              name="Benita Canyon"
              status="Exploration Phase"
              desc="Adjacent to historic lodes, Benita Canyon represents our next frontier."
              image="https://images.unsplash.com/photo-1533496078747-817343e7486f?q=80&w=1000&auto=format&fit=crop"
            />
          </div>
        </section>

        {/* TECHNOLOGY SECTION */}
        <section id="technology" className="scroll-mt-24">
          <div className="border-l-4 border-amber-500 pl-6 mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">That Technology</h2>
            <p className="text-stone-400 text-lg">State-of-the-art assaying and auditing tools.</p>
          </div>

          {/* Maps 1580 Spotlight */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-8 md:p-12 border border-amber-500/30 shadow-2xl relative overflow-hidden mb-12">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <ScanLine size={300} className="text-amber-500" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                 <h3 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
                  Maps 1580
                </h3>
                <span className="px-4 py-1 rounded-full border border-amber-500/50 text-amber-400 text-sm font-mono bg-amber-950/30">
                  IN-HOUSE AUDITING
                </span>
              </div>

              <p className="text-xl text-stone-300 mb-8 max-w-3xl leading-relaxed">
                Our proprietary Maps 1580 Technology is an in-house auditing and assaying program that integrates very advanced <strong className="text-amber-400">XRT Geo-locating (RTK)</strong> protocols.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-stone-950/50 p-6 rounded-xl border border-stone-700">
                  <Activity className="text-amber-500 mb-4 h-8 w-8" />
                  <h4 className="text-white font-bold mb-2">Superior Standards</h4>
                  <p className="text-stone-400 text-sm">We maintain standards of assaying and fire assaying that go above and beyond any current industry requirement.</p>
                </div>
                <div className="bg-stone-950/50 p-6 rounded-xl border border-stone-700">
                  <ShieldCheck className="text-amber-500 mb-4 h-8 w-8" />
                  <h4 className="text-white font-bold mb-2">Advanced Modeling</h4>
                  <p className="text-stone-400 text-sm">
                    This is above what current models provide. While the 33 101 represents the current industry standard, the <strong className="text-white">1580 is more advanced</strong> and offers unprecedented granular accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
               <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-amber-500">
                 <Microscope size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">XRF Analysis</h3>
               <p className="text-stone-400 text-sm">High-speed, non-destructive elemental analysis using our advanced XRF guns for immediate field results.</p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
               <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-amber-500">
                 <FlaskConical size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Third-Party Labs</h3>
               <p className="text-stone-400 text-sm">We verify all findings through accredited independent analytical laboratories to ensure absolute data integrity.</p>
            </div>

            <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl flex flex-col items-center text-center hover:border-amber-500/30 transition-all">
               <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mb-6 text-amber-500">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Qualified Persons (QPs)</h3>
               <p className="text-stone-400 text-sm">All technical reports are overseen and signed off by independent Qualified Persons per industry regulations.</p>
            </div>
          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-900 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
          <p>&copy; 2024 Geo-Mineral Science. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-amber-500 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-500 cursor-pointer">Terms of Service</span>
            <span className="hover:text-amber-500 cursor-pointer">Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
