// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randomBaseIndex = Math.floor(Math.random() * dna.length);
      let newLetter = returnRandBase();
      do {
        newLetter = returnRandBase();
      } while (newLetter === this.dna[randomBaseIndex]);
      this.dna[randomBaseIndex] = newLetter;
    },
    compareDNA(pAequor) {
      if (pAequor.specimenNum === this.specimenNum) {
        return 0;
      }
      let matches = 0;
      // console.log(this.dna);
      // console.log(pAequor.dna);
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          matches++;
        }
      }
      const percent = (matches / this.dna.length) * 100;
      // console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percent}% DNA in common`);
      return percent;
    },
    willLikelySurvive() {
      // count C & G in array
      const cgArray = this.dna.filter((base) => {
        return base === "C" || base === "G";
      });
      return cgArray.length / this.dna.length >= 0.6;
    },
    complementStrand() {
      return (complementaryDNA = this.dna.map((base) => {
        switch (base) {
          case "A":
            return "T";
            break;
          case "T":
            return "A";
            break;
          case "C":
            return "G";
            break;
          case "G":
            return "C";
            break;
        }
      }));
    },
  };
};

const getCohorte = (num) => {
  const cohorte = [];
  for (let i = 1; i <= num; i++) {
    const pAequor = pAequorFactory(i, mockUpStrand());
    do {
      pAequor.mutate();
    } while (!pAequor.willLikelySurvive());
    cohorte.push(pAequor);
  }
  return cohorte;
};

const cohorte = getCohorte(30);
// console.log(cohorte);

console.log(cohorte[0].dna);
console.log(cohorte[0].complementStrand());

console.log([13, 3].sort((a, b) => a - b).toString());

const findNearestSpecimens = () => {
  // 1. Trouver pour chaque spécimen son parent le plus proche
  const pairs = cohorte.flatMap(specimen =>
    cohorte
      .filter(sibling => sibling !== specimen) // exclut soi-même
      .map(sibling => ({
        specimen,
        nearestParent: sibling,
        degree: specimen.compareDNA(sibling)
      }))
      .filter(pair => pair.degree > 0) // optionnel : ignore similarité nulle
  );

  // 2. Grouper par paire unique (évite doublons A→B et B→A)
  const uniquePairs = new Map();
  pairs.forEach(pair => {
    const key = [pair.specimen.specimenNum, pair.nearestParent.specimenNum]
      .sort((a, b) => a - b)
      .join(',');
    uniquePairs.set(key, pair);
  });

  // 3. Trier par degree décroissant et afficher les seuils
  const sortedPairs = Array.from(uniquePairs.values())
    .sort((a, b) => b.degree - a.degree);

  let currentThreshold = 0;
  sortedPairs.forEach(pair => {
    if (pair.degree >= currentThreshold) {
      console.log(pair);
      currentThreshold = pair.degree;
    }
  });
};

const findNearestSpecimensOld = () => {
  constHigherRates = [];

  cohorte.forEach((specimen) => {
    let parentalDegree = 0;
    let nearestParent;
    let key;
    cohorte.forEach((sibling) => {
      const degree = specimen.compareDNA(sibling);
      // console.log(degree);
      if (degree > parentalDegree) {
        parentalDegree = degree;
        nearestParent = sibling;
        key = [specimen.specimenNum, sibling.specimenNum]
          .sort((a, b) => a - b)
          .toString();
      }
    });

    constHigherRates.push({
      specimen: specimen,
      nearestParent: nearestParent,
      degree: parentalDegree,
    });
  });

  // trie le tableau selon le degré
  constHigherRates.sort((a, b) => a.degree - b.degree).reverse();

  // affiche tous les parents les plus proches
  parity = 0;
  constHigherRates.forEach((pair) => {
    if (pair.degree >= parity) {
      console.log(pair);
      parity = pair.degree;
    }
  });

  // console.log(constHigherRates);
};
findNearestSpecimens();
