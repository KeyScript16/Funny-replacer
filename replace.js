function makeRidiculous() {
  const wordsMap = [
    ["problem", "kerfuffle"],
    ["the", "the legendary"],
    ["business", "clown show"],
    ["money", "shinies"],
    ["important", "super-duper serious"],
    ["technology", "dark magic"],
    ["coincidence", "coincidink"]
  ];

  let html = document.body.innerHTML;
  
  wordsMap.forEach(([original, funny]) => {
    const regex = new RegExp(`\\b${original}\\b`, 'gi');
    html = html.replace(regex, funny);
  });
  
  document.body.innerHTML = html;
}

makeRidiculous();
