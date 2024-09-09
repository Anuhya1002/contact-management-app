// "use client";

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Ensure Leaflet styles are imported
// import { CasesData, CountryData } from '../type'; // Adjust import path if needed

// // Fetch COVID-19 historical cases data
// const fetchCasesData = async (): Promise<CasesData> => {
//     const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
//     return response.data;
// };

// // Fetch country-specific COVID-19 data
// const fetchCountryData = async (): Promise<CountryData[]> => {
//     const response = await axios.get('https://disease.sh/v3/covid-19/countries');
//     return response.data;
// };

// // Charts and Maps component
// export default function ChartsAndMaps() {
//     const { data: casesData } = useQuery(['casesData'], fetchCasesData);
//     const { data: countries } = useQuery(['countryData'], fetchCountryData);

//     // Example chart data for Line chart (adjust based on actual API response)
//     const chartData = {
//         labels: casesData ? Object.keys(casesData.cases) : [],
//         datasets: [
//             {
//                 label: 'Cases',
//                 data: casesData ? Object.values(casesData.cases) : [],
//                 borderColor: 'rgba(75, 192, 192, 1)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             },
//         ],
//     };

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">Charts & Maps</h1>

//             {/* Line chart to display historical data */}
//             {casesData && <Line data={chartData} />}

//             {/* Map showing country markers */}
//             <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: '500px' }}>
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 {countries?.map((country) => (
//                     <Marker key={country.countryInfo.iso2} position={[country.countryInfo.lat, country.countryInfo.long]}>
//                         <Popup>
//                             {country.country} <br />
//                             Active: {country.active} <br />
//                             Recovered: {country.recovered} <br />
//                             Deaths: {country.deaths}
//                         </Popup>
//                     </Marker>
//                 ))}
//             </MapContainer>
//         </div>
//     );
// }
