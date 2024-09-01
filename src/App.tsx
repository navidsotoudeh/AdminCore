import { Button } from "./components/ui/button.tsx"

import './App.css'

function App() {
  return (
      <div className="bg-gray-50 min-h-screen">
          <Button variant="destructive" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started
          </Button>
          <footer className="bg-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <p className="text-gray-600">&copy; 2024 BrandName. All rights reserved.</p>
              </div>
          </footer>
      </div>
  )
}

export default App
