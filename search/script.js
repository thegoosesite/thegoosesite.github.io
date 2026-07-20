/*document.addEventListener("DOMContentLoaded", function () {
  const PAGES = [
  {
      title: "Home Page",
      url: "https://thegoosesite.github.io",
      content: "Welcome to everyone except Saam! Repent your goosins at St. Duck's Church",
      keywords: "home, welcome, main, index, goose, goosism, repent, worship"
  },
  {
      title: "The Youtube Channel",
      url: "https://thegoosesite.github.io/youtube",
      content: "Subscribe or die.",
      keywords: "youtube, holy, channel, yt"
  },
    {
      title: "The Unity Videos",
      url: "https://thegoosesite.github.io/videos",
      content: "Worship, pray, and repent with the unity videos.",
      keywords: "goose videos, quite holy, channel, videos, unity"
  },
  {
      title: "The Trinity Slideshows",
      url: "https://thegoosesite.github.io/powerpoint",
      content: "Pray with the trinity slideshows...",
      keywords: "slides, powerpoint, microsoft, trinity, slideshow, slideshows"
  },
  {
      title: "The Holy Goose Bible",
      url: "https://thegoosesite.github.io/bible",
      content: "Read the holy goose bible and cherish it for life.",
      keywords: "quran, bible, book, gooseling, holy"
  },
  {
    title: "Dancing Monster",
    url: "https://thegoosesite.github.io/saint-rainbowhairs",
    content: "Secret page... Saint Rainbowhairs",
    keywords: "supercalifragilisticexpialidocious, rainbowhairscanonization"
  },
];
// Get results
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
// Get search
function performSearch(query){
  // Escape the previous results
  searchResults.innerHTML = '';
  // Clean Query
  const cleanQuery = query.toLowerCase().trim();
  // return
  if (cleanQuery === '') {
        return; 
    }
  // Filter
  const filteredPages = PAGES.filter(page => {
  return page.title.toLowerCase().includes(cleanQuery) || 
         page.content.toLowerCase().includes(cleanQuery) || 
         page.keywords.toLowerCase().includes(cleanQuery);
  });
  // Results
  if (filteredPages.length === 0) {
      searchResults.innerHTML = '<li class="no-results">No pages found matching your search.</li>';
  } else {
      filteredPages.forEach(page => {
          const li = document.createElement('li');
          li.className = 'result-item';
          
          // Create standard snippet from content
          let snippet = page.content;
          if (snippet.length > 120) {
              snippet = snippet.substring(0, 120) + '...';
          }

          li.innerHTML = `
              <a href="${page.url}">${page.title}</a>
              <p>${snippet}</p>
          `;
          searchResults.appendChild(li);
      });
  }
  // Track user types
  });
  searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
});

*/