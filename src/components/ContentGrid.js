// components/ContentGrid.js

export default function ContentGrid({ title, emoji, items = [] }) {
  // Check if items is an array and has length before rendering the list
  if (!Array.isArray(items) || items.length === 0) {
    return <div>Loading...</div>; // Or return null if no loading indicator is needed
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <h2 className="flex items-center font-semibold text-lg mb-2 relative">
        <span className="pl-3">{emoji}</span>
        <span className="ml-2 text-slate-700 p-2 text-base">{title}</span>
        {/* Absolute-positioned full-width underline for the heading */}
        <div className="absolute bottom-0 left-0 w-full border-b border-gray-300"></div>
      </h2>
      <ul className="pl-4 counter-reset pb-2">
        {items.map((item, index) => (
          <li key={index} className="mb-1 counter-increment group p-0.5 ">
            <a 
              href={item.url} 
              // onClick={() => trackEvent('Link Clicked', { name: item.name, url: item.url })}

              className="flex items-center no-underline text-sm hover:text-blue-500" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {/* Counter */}
              <span className="counter text-slate-300 mr-2"></span>
              {/* Text with conditional underline on hover */}
              <span className="text-slate-500 underline underline-offset-4 hover:text-red-500">{item.name}</span>
              {/* Separate span for the arrow to prevent it from being underlined */}
              <span className="ml-2 text-slate-500 transform rotate-[-45deg] inline-block group-hover:no-underline hover:text-red-500">→</span>
            </a>
            {/* Full-width underline for each list item */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Define default props in case they are not provided
ContentGrid.defaultProps = {
  items: [], // Default to an empty array
};
