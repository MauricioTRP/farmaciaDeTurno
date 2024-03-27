const myHeaders = new Headers();
myHeaders.append("Cookie", "visid_incap_2881154=JF0h4MfvRxu1SJqPVzCyMxr5AWYAAAAAQUIPAAAAAACepEDonTvH7zndTDgw/pRl");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

function getFarmaciaTurno() {
  return new Promise((resolve, reject) => {
    fetch("https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php", requestOptions)
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  })
}

function getFarmaciaSantiago(data) {
  return data.filter(farmacia => farmacia["comuna_nombre"] == "SANTIAGO")
}

function imprimirData(data) {
  console.log(`La dirección de la farmacia de turno es: ${data[0]["local_direccion"]}, la hora de cierre es ${data[0]["funcionamiento_hora_cierre"]}`)
}

// Uso de la promesa

getFarmaciaTurno()
  .then(getFarmaciaSantiago)
  .then(imprimirData) 
