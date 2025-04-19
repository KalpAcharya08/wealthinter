import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketAssetsOverview = () => {
  const [dataPoints, setDataPoints] = useState([]);
  const [lastRefreshed, setLastRefreshed] = useState('');
  const [loading, setLoading] = useState(true);
  const apiKey = '3EXJL0OGB1E3ZYPK';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://www.alphavantage.co/query`,
          {
            params: {
              function: 'TIME_SERIES_INTRADAY',
              symbol: 'IBM',
              interval: '5min',
              apikey: apiKey,
            },
          }
        );

        const timeSeries = res.data['Time Series (5min)'];
        const metaData = res.data['Meta Data'];

        if (timeSeries) {
          const formattedData = Object.entries(timeSeries).map(
            ([timestamp, values]) => ({
              timestamp,
              open: values['1. open'],
              high: values['2. high'],
              low: values['3. low'],
              close: values['4. close'],
              volume: values['5. volume'],
            })
          );

          setDataPoints(formattedData.slice(0, 10)); // Show latest 10
          setLastRefreshed(metaData['3. Last Refreshed']);
        } else {
          console.error('Unexpected API response:', res.data);
        }
      } catch (error) {
        console.error('Error fetching IBM stock data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">IBM Intraday Stock Data</h1>
      {loading ? (
        <p className="text-gray-700">Loading data...</p>
      ) : (
        <div className="overflow-x-auto">
          <p className="mb-2 text-sm text-gray-600">Last Refreshed: {lastRefreshed}</p>
          <table className="min-w-full bg-white rounded-2xl shadow-md overflow-hidden">
            <thead className="bg-gray-200 text-gray-700 text-sm">
              <tr>
                <th className="px-4 py-2 text-left">Timestamp</th>
                <th className="px-4 py-2">Open</th>
                <th className="px-4 py-2">High</th>
                <th className="px-4 py-2">Low</th>
                <th className="px-4 py-2">Close</th>
                <th className="px-4 py-2">Volume</th>
              </tr>
            </thead>
            <tbody>
              {dataPoints.map((dp, index) => (
                <tr key={index} className="text-sm text-gray-800 even:bg-gray-50">
                  <td className="px-4 py-2">{dp.timestamp}</td>
                  <td className="px-4 py-2">${parseFloat(dp.open).toFixed(2)}</td>
                  <td className="px-4 py-2">${parseFloat(dp.high).toFixed(2)}</td>
                  <td className="px-4 py-2">${parseFloat(dp.low).toFixed(2)}</td>
                  <td className="px-4 py-2">${parseFloat(dp.close).toFixed(2)}</td>
                  <td className="px-4 py-2">{dp.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MarketAssetsOverview;
