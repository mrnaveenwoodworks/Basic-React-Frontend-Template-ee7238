import React from "react";
import Layout from "./components/Layout";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <main className="container mx-auto px-4 py-8">
          <section className="mb-10">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our App</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A modern React application styled with Tailwind CSS, providing a clean and responsive user experience.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Content</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="173.46 128 156 98.33 188.59 106.4 210.39 80 213.06 114.65 244 128 213.06 141.35 210.39 176 188.59 149.6 156 157.67 173.46 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <h3 className="text-xl font-medium text-gray-700 ml-2">Premium Features</h3>
                  </div>
                  <p className="text-gray-600">Discover our premium features designed to enhance your productivity.</p>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-5">
                  <div className="flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    <h3 className="text-xl font-medium text-gray-700 ml-2">Documentation</h3>
                  </div>
                  <p className="text-gray-600">Access comprehensive documentation to get started quickly.</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1581090123456-6405208b0264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDkyMjA2NzZ8&ixlib=rb-4.1.0&q=80&w=1080" alt="modern tech workspace with computer and plants" />
            </div>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default App;