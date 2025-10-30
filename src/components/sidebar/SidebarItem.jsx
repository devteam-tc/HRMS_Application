import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SidebarSubItem from "./SidebarSubItem";

const SidebarItem = ({
  item,
  expandedItems,
  onToggle,
  onModuleChange,
  activeModule,
  isCollapsed,
  isHovered
}) => {
  const { id, label, icon: Icon, subItems } = item;
  const hasSubItems = Array.isArray(subItems) && subItems.length > 0;
  const isExpanded = expandedItems.includes(id);
  const isParentActive =
    activeModule === id || subItems?.some((s) => s.id === activeModule);
    
  // Show tooltip when sidebar is collapsed and item is hovered
  const showTooltip = isCollapsed && isHovered;

  return (
    <div className="space-y-1 relative">
      {/* Parent Item */}
      <div className="relative">
        <button
          onClick={() => (hasSubItems ? onToggle(id) : onModuleChange(id))}
          className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-200 ${
            isParentActive && !hasSubItems
              ? "neu-primary text-white"
              : "neu-button text-[#333333] "
          } ${isCollapsed ? 'justify-center p-3' : 'px-4'}`}
        >
          <div className={`flex items-center ${isCollapsed ? 'mx-auto' : ''}`}>
            <Icon size={20} className={isCollapsed ? '' : 'mr-3'} />
            {!isCollapsed && <span className="font-medium">{label}</span>}
          </div>
          {hasSubItems && !isCollapsed && (
            isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
          )}
        </button>
        
        {/* Tooltip for collapsed items */}
        {showTooltip && (
          <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md z-50 whitespace-nowrap">
            {label}
            {/* <div className="absolute top-1/2 right-full w-2 h-2 -mt-1 bg-gray-800 transform rotate-45"></div> */}
          </div>
        )}
      </div>

      {/* Submenu */}
      {hasSubItems && (isExpanded || (isCollapsed === true && isHovered === true)) && (
        <div 
          className={`space-y-1 neu-card-inset p-2 rounded-xl ${
            isCollapsed && isHovered 
              ? 'absolute left-full top-0 ml-2 min-w-[200px] z-50' 
              : 'ml-4'
          }`}
        >
          {subItems.map((subItem) => (
            <SidebarSubItem
              key={subItem.id}
              subItem={subItem}
              activeModule={activeModule}
              onModuleChange={onModuleChange}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
