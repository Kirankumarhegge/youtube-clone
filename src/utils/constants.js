export const baseUrl = "https://youtube-v3-alternative.p.rapidapi.com";

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?https://clients1.google.com/complete/search?client=firefox&ds=yt&q=";


export const OFFSET_LIVE_CHAT = 20;


export function capitalizeTheFirstLetterOfEachWord(words) {
  var separateWord = words.toLowerCase().split(" ");
  for (var i = 0; i < separateWord.length; i++) {
    separateWord[i] =
      separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
  }
  return separateWord.join(" ");
}
