import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    
      
        
          
            Raahi
          
          
          
            <Link
              to="/"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/') ? 'text-blue-200 border-b-2 border-blue-200' : ''
              }`}
            >
              Home
            
            <Link
              to="/civilian"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/civilian') ? 'text-blue-200 border-b-2 border-blue-200' : ''
              }`}
            >
              Report Pothole
            
            <Link
              to="/civilian"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/civilian') ? 'text-blue-200 border-b-2 border-blue-200' : ''
              }`}
            >
              Dashboard
            
            <Link
              to="/admin"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/admin') ? 'text-blue-200 border-b-2 border-blue-200' : ''
              }`}
            >
              Admin
            
          
          
          
            Login
          
        
      
    
  );
}

export default Navbar;