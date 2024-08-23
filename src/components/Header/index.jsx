import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserActions from "./UserActions";
import DropdownMenu from "./DropdownMenu";
import bellIcon from "../../assets/bell-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";

const navItems = [
  { label: "Home", isActive: false },
  { label: "Dashboard", isActive: true },
  { label: "Projects", isActive: false },
  { label: "Tasks", isActive: false },
  { label: "Reporting", isActive: false },
  { label: "Users", isActive: false },
];

const actionIcons = [
  {
    src: searchIcon,
    alt: "Search",
  },
  {
    src: settingsIcon,
    alt: "Notifications",
  },
  {
    src: bellIcon,
    alt: "Settings",
  },
];

function Header() {
  return (
    <header className="flex overflow-hidden flex-col items-center self-center w-full bg-white border-b border-gray-200 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center px-8 w-full max-w-screen-xl min-h-[72px] max-md:px-5 max-md:max-w-full">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Navigation */}
        <Navigation navItems={navItems} />

        {/* Action Icons */}
        <UserActions actionIcons={actionIcons} />

        {/* Mobile Menu Button */}
        <DropdownMenu navItems={navItems} />
      </div>
    </header>
  );
}

export default Header;
