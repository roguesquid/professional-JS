function makeCounter(n) {
  let count = n;

  return {
    increase: () => {
      count += 1;
    },
    decrease: () => {
      count -= 1;
    },
    getCount: () => {
      return count;
    },
  }
}

// como count esta en un scope de funcion no puede ser accedido fuera