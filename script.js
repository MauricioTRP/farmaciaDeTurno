function getPizza() {
  return new Promise((resolve, reject) => {
    let resuelve = true;
    if (resuelve){
      setTimeout(
        () => {
          resolve("Proceso pedir pizza 🍕")
          // reject("No encontramos pizza 🥹")
        }
        ,
        2000
        )
    } else {
      reject("no encontramos pizza 🍕🥹")
    }
    })
}

function llamarPizzeria(data) {
  console.log("seguimos en ", data);
  console.log("Alo, pizzeria Victor, quiero 5 pizzas");
  return data;
}

function esperarPizza(data) {
  console.log("seguimos en ", data);
  console.log("Ahora estamos esperando");
  return data;
}

function comerPizza(data) {
  console.log("seguimos en ", data);
  console.log("Estamos comiendo pizza");
}

