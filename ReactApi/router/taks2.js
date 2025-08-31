// count the number of vowel in each stringof an Array

// input : ["apple", banana, "cherry" ]

// const vowel = ['a', 'e', 'i', 'o', 'u'];

const cVowels = (s) => {
    const matches = s.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
};

const s = "apple";
console.log(cVowels(s));
