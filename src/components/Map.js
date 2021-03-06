// import { useState, useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";


// const Map = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyCqM9og69-LsTfCN4ZCeKqz683PcpN3K74",
//     libraries: ["places"],
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Mapp />;
// }

// const Mapp = () => {
//   const center = useMemo(() => ({ lat: 40, lng: -100 }), []);
//   const [selected, setSelected] = useState(null);

//   return (
//     <>
//       <div className="places-container">
//         <PlacesAutocomplete setSelected={setSelected} />
//       </div>

//       <GoogleMap
//         zoom={5}
//         center={center}
//         mapContainerClassName="map-container"
//       >
//         {selected && <Marker position={selected} />}
//       </GoogleMap>
//     </>
//   );
// }

// const PlacesAutocomplete = ({ setSelected }) => {
//   const {
//     ready,
//     value,
//     setValue,
//     suggestions: { status, data },
//     clearSuggestions,
//   } = usePlacesAutocomplete();

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setSelected({ lat, lng });
//   };

//   return (
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           disabled={!ready}
//           className="combobox-input"
//           placeholder="Search an address"
//         />
//           <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ place_id, description }) => (
//                 <ComboboxOption key={place_id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//   );
// };

// export default Map;
