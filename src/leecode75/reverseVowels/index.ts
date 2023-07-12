/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75
 */

export const reverseVowels = (s: string): string => {
  const strings = s.split("");
  const tempVowels: string[] = [];
  const reversedStrings: string[] = [];
  const vowels = ["a", "e", "i", "o", "u"];
  strings.forEach((s) => {
    if (vowels.includes(s.toLowerCase())) {
      reversedStrings.push("-");
      tempVowels.push(s);
    } else {
      reversedStrings.push(s);
    }
  });
  tempVowels.reverse();
  let count = 0;
  while (reversedStrings.findIndex((s) => s === "-") >= 0) {
    reversedStrings.splice(
      reversedStrings.findIndex((s) => s === "-"),
      1,
      tempVowels[count]
    );
    count++;
  }
  return reversedStrings.join("");
};
