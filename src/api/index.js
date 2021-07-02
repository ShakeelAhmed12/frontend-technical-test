// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  // const vehiclesList = [];
  // const endpointURLS = [];

  // const initalVehicleResponse = await fetch('/api/vehicles.json');
  // const initalVehicleData = await initalVehicleResponse.json();

  // initalVehicleData.map((vehicle) => {
  //   endpointURLS.push(vehicle.apiUrl);

  //   vehiclesList.push({
  //     vehicleId: vehicle.id,
  //     vehicleMedia: vehicle.media
  //   })
  // });

  // try{
  //   let vehicleResponseData = await Promise.all(
  //     endpointURLS.map(url => fetch(url)
  //       .then(r => r.json())
  //       .catch(error => ({ error, url }))
  //     )
  //   )

  //   const vehicleData = await Promise.all(vehicleResponseData);

  //   vehicleData.forEach((vehicle, i) => {
  //     vehiclesList[i].price = vehicle.price;
  //     vehiclesList[i].description = vehicle.description;
  //   });

  // }catch(errors){
  //   console.log(errors);
  // }

  const vehicles = await fetch('/api/vehicles.json').then((data) => data.json());
  try {
    const vehicleResponses = await Promise.all(
      vehicles.map((v) => fetch(v.apiUrl)
        .then((r) => r.json())
        .catch((error) => ({ error, v })))
    );

    return vehicles.map((v, i) => ({
      ...v,
      price: vehicleResponses[i].price ? vehicleResponses[i].price : null,
      description: vehicleResponses[i].description ? vehicleResponses[i].description : null,
    }));
  } catch (errors) {
    console.log(errors);
  }
}
