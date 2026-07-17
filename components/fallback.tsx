import React from "react";

export const CoinOverviewFallback: React.FC = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />

        <div className="info">
          <div className="header-line-lg skeleton" />
          <div className="header-line-sm skeleton" />
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="period-button-skeleton skeleton" />
        <div className="period-button-skeleton skeleton" />
        <div className="period-button-skeleton skeleton" />
      </div>

      <div className="chart mt-4">
        <div className="chart-skeleton skeleton" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback: React.FC<{ rows?: number }> = ({ rows = 5 }) => {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>
      <div className="trending-coins-table">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="grid grid-cols-3 items-center py-2 px-5">
            <div className="name-cell">
              <div className="name-link">
                <div className="name-image skeleton" />
                <div className="flex flex-col">
                  <div className="name-line skeleton" />
                </div>
              </div>
            </div>

            <div className="change-cell">
              <div className="change-line skeleton" />
            </div>

            <div className="price-cell">
              <div className="price-line skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CategoriesFallback: React.FC<{ rows?: number }> = ({ rows = 6 }) => {
  return (
    <div id="categories-fallback">
      <h4>Top Categories</h4>
      <div className="mt-3">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="grid grid-cols-3 items-center gap-4 py-3 px-5">
            <div className="category-cell">
              <div className="category-skeleton skeleton" />
            </div>

            <div className="top-gainers-cell flex items-center">
              <div className="coin-skeleton skeleton" />
              <div className="coin-skeleton skeleton ml-2" />
              <div className="coin-skeleton skeleton ml-2" />
            </div>

            <div className="change-cell">
              <div className="value-skeleton-sm skeleton" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default null;
