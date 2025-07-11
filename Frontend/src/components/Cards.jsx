import React, { useState } from 'react';

function Cards({ item, showFullDescriptionButton }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-850 dark:text-white">
        <figure>
          <img
            src={item.thumbnail || "https://pngimg.com/d/book_PNG2111.png"}
            className="w-70 h-40 object-cover"
            alt={item.title || item.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title || item.name}
            {item.category && (
              <div className="badge badge-secondary">{item.category}</div>
            )}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.authors?.join(", ") || "Author unknown"}
          </p>
          <p className="text-xs mt-2">
            {showFull
              ? item.description || "No description"
              : (item.description?.slice(0, 100) || "No description") + '...'}
            {item.description && item.description.length > 100 && (
              <button
                onClick={() => setShowFull(!showFull)}
                className="ml-2 text-pink-500 underline text-sm"
              >
                {showFull ? "Show Less" : "Read More"}
              </button>
            )}
          </p>

          <div className="card-actions flex justify-between items-center mt-3">
            {item.price && (
              <div className="badge badge-outline">${item.price}</div>
            )}

            <a
              href={
                item.buyLink
                  ? item.buyLink
                  : `https://www.amazon.in/s?k=${encodeURIComponent(item.title || item.name)}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:bg-pink-500 hover:text-white px-3 py-1 rounded-full border-[2px] duration-200"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
