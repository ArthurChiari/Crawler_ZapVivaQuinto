var fs = require("fs");
var myobj = {
  context: {
    mapShowing: true,
    listShowing: true,
    userId: "m8BuhYiHLGhSuc0idRDqD61aw3VQn1wGz1YCamf9srOi6TXhetrhbQ",
    deviceId: "m8BuhYiHLGhSuc0idRDqD61aw3VQn1wGz1YCamf9srOi6TXhetrhbQ",
    numPhotos: 12,
    isSSR: false,
  },
  filters: {
    businessContext: "RENT",
    blocklist: [],
    selectedHouses: [],
    location: {
      coordinate: { lat: -19.916681, lng: -43.934493 },
      viewport: {
        east: -43.85844701000976,
        north: -19.778305852049844,
        south: -20.054935168692165,
        west: -44.01053898999023,
      },
      neighborhoods: [],
      countryCode: "BR",
    },
    priceRange: [],
    specialConditions: [],
    excludedSpecialConditions: [],
    houseSpecs: {
      area: { range: {} },
      houseTypes: [],
      amenities: [],
      installations: [],
      bathrooms: { range: {} },
      bedrooms: { range: {} },
      parkingSpace: { range: {} },
    },
    availability: "ANY",
    occupancy: "ANY",
    partnerIds: [],
    categories: [],
  },
  sorting: { criteria: "RELEVANCE", order: "DESC" },
  pagination: { pageSize: 12, offset: 0 },
  slug: "belo-horizonte-mg-brasil",
  fields: [
    "id",
    "coverImage",
    "rent",
    "totalCost",
    "salePrice",
    "iptuPlusCondominium",
    "area",
    "imageList",
    "imageCaptionList",
    "address",
    "regionName",
    "city",
    "visitStatus",
    "activeSpecialConditions",
    "type",
    "forRent",
    "forSale",
    "isPrimaryMarket",
    "bedrooms",
    "parkingSpaces",
    "listingTags",
    "yield",
    "yieldStrategy",
    "neighbourhood",
    "categories",
    "bathrooms",
    "isFurnished",
    "installations",
  ],
  experiments: ["ab_search_services_mono_pclick:1"],
};
const url =
  "https://apigw.prod.quintoandar.com.br/cached/house-listing-search/v1/search/list";

var global_response = [];
async function getData() {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(myobj),
    });

    const json = await response.json();

    const total = json.hits.total.value;

    var aux = 0;

    console.log(`>>>>>>>>>>>>>>> peguei um total de ${total} aps`);

    while (aux < total) {
      var currentObj = {
        ...myobj,
        pagination: { pageSize: 12, offset: aux },
      };
      var response2 = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(currentObj),
      });
      var json2 = await response2.json();
      var hits2 = json2.hits.hits;
      global_response = [...global_response, ...hits2];
      aux = aux + 12;
      console.log(`>>>>>>>>>>> guardei os ${aux}`);
      await new Promise((r) => setTimeout(r, 2000));
    }
    fs.writeFile(
      "quinto_ap.json",
      JSON.stringify(global_response),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  } catch (error) {
    console.error(error.message);
  }
}

getData();
