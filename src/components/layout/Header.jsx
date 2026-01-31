import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import userAvatar from '../../assets/avatar-11.jpg';

const Header = ({ onToggleSidebar }) => (
  <header className="sticky top-0 z-50 bg-white shadow border-b border-gray-200">
    <nav className="flex items-center justify-between px-4 py-2 lg:px-7">
      {/* Sidebar Toggle */}
      <div className='flex items-center gap-3'>
      <button onClick={onToggleSidebar} className="text-gray-500 focus:outline-none" aria-label="Toggle sidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-text-indent-left text-muted" viewBox="0 0 16 16">
					<path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
				</svg>
      </button>

      {/* Search */}
      <div className="hidden lg:flex-1 md:block mx-4 relative">
        <input type="search" placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
        <SearchIcon className="absolute left-3 top-2.5 text-gray-500" fontSize="small" />
      </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-3">
        <button className="text-gray-600 hover:text-black p-1 rounded"><WbSunnyIcon /></button>
        <button className="relative text-gray-600 hover:text-black p-2 rounded">
          <NotificationsNoneIcon />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
        </button>
        <div className="relative group">
          <img src={userAvatar} alt="User" className="w-9 h-9 rounded-full border-2 border-gray-300 cursor-pointer" />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 hidden group-hover:block z-20">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
