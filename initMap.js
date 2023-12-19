async function initMap(idx,crds) {
  //@ts-ignore

  const { Map } = await google.maps.importLibrary("maps");
  
  let map = new Map(document.getElementById(`m${idx}`), {
    center: { lat: crds[1], lng: crds[0] },
    zoom: 15,
  });

    new google.maps.Marker(
        {
            position:{ lat: crds[1], lng: crds[0] },
            map:map,
            title:"fsdf",
            
        }
    )
}

let panorama;
function view(idx,crds) {

  panorama = new google.maps.StreetViewPanorama(
    document.getElementById(`v${idx}`),
    {
      position: { lat: crds[1], lng: crds[0] },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    },
  );
}


