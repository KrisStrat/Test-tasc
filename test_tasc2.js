function findBestMatch (K, ARR) {
  if (ARR.includes(K)) {
    return K;
  }
  else  {
    for (i = 0, i < 8, i++) {
      let x = K + i;
      let y = K - i;
      if (ARR.includes(x) || (ARR.includes(y))) {
        return K;
      };
    };
  };
};

let K = 23;
let ARR = [10, 20, 33, 8]

findBestMatch(K,ARR);
