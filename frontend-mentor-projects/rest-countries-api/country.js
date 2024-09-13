// Existing theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the theme from localStorage
function applySavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.toggle('dark-mode', savedTheme === 'dark');
    themeToggle.querySelector('span').textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    themeToggle.querySelector('img').src = savedTheme === 'dark' ? 'icon-sun.svg' : 'icon-moon.svg';
  } else {
    // Default theme if none is saved
    body.classList.remove('dark-mode');
    themeToggle.querySelector('span').textContent = 'Dark Mode';
    themeToggle.querySelector('img').src = 'icon-moon.svg';
  }
}

// Function to switch themes and update UI
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Check if dark mode is active
  const isDarkMode = body.classList.contains('dark-mode');
  
  // Save the theme preference to localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

  // Toggle text and icon based on the theme
  themeToggle.querySelector('span').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  themeToggle.querySelector('img').src = isDarkMode ? 'icon-sun.svg' : 'icon-moon.svg';
});

// Select the back button
const backButton = document.querySelector('.back-button');

// Add a click event listener to handle the redirection
backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Function to dynamically populate country details
function populateCountryDetails(country) {
  const container = document.querySelector('.country-details-container');
  const flag = container.querySelector('.country-flag');
  const countryName = container.querySelector('.country-name');
  const firstTextbox = container.querySelector('.first-textbox');
  const secondTextbox = container.querySelector('.second-textbox');
  const bordersBlock = container.querySelector('.borders');

  // Apply transition effect
  container.classList.add('hidden');
  
  // Wait for the transition to end before updating content
  setTimeout(() => {
    // Populate the flag image
    flag.style.backgroundImage = `url('${country.flag}')`;

    // Populate the country name
    countryName.textContent = country.name;

    // Populate the first textbox (native name, population, region, subregion, capital)
    firstTextbox.innerHTML = `
      <p><strong>Native Name:</strong> ${country.nativeName}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Sub Region:</strong> ${country.subRegion}</p>
      <p><strong>Capital:</strong> ${country.capital}</p>
    `;

    // Populate the second textbox (top-level domain, currency, languages)
    secondTextbox.innerHTML = `
      <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
      <p><strong>Currency:</strong> ${country.currency}</p>
      <p><strong>Languages:</strong> ${country.languages.join(', ')}</p>
    `;

    // Populate the border countries with links to the respective country pages
    bordersBlock.innerHTML = ''; // Clear existing borders
    country.borders.forEach(borderCode => {
      const borderCountry = countries.find(c => c.alpha3Code === borderCode);
      if (borderCountry) {
        const borderElement = document.createElement('a');
        borderElement.className = 'border-country';
        borderElement.textContent = borderCode;
        borderElement.href = `?country=${borderCode}`; // Link to the country using alpha3Code
        bordersBlock.appendChild(borderElement);
      }
    });

    // Remove the hidden class to fade in
    container.classList.remove('hidden');
  }, 500); // Match the duration of the CSS transition
}

// Array of country data
const countries = [
{
  name: 'Afghanistan',
  nativeName: 'افغانستان',
   population: 40218234,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Kabul',
  topLevelDomain: '.af',
  currency: 'Afghan afghani',
  languages: ['Pashto', 'Uzbek', 'Turkmen'],
  flag: 'https://flagcdn.com/af.svg',
  borders: ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN'],
  alpha3Code: 'AFG'
},


{
  name: 'Åland Islands',
  nativeName: 'Åland',
  population: 28875,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Mariehamn',
  topLevelDomain: '.ax',
  currency: 'Euro',
  languages: ['Swedish'],
  flag: 'https://flagcdn.com/ax.svg',
  borders: [],
  alpha3Code: 'ALA'
},
  

{
  name: 'Albania',
  nativeName: 'Shqipëria',
  population: 2837743,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Tirana',
  topLevelDomain: '.al',
  currency: 'Albanian lek',
  languages: ['Albanian'],
  flag: 'https://flagcdn.com/al.svg',
  borders: ['MNE', 'GRC', 'MKD', 'UNK'],
  alpha3Code: 'ALB'
},


{
  name: 'Algeria',
  nativeName: 'الجزائر',
  population: 44700000,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Algiers',
  topLevelDomain: '.dz',
  currency: 'Algerian dinar',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/dz.svg',
  borders: ['TUN', 'LBY', 'NER', 'ESH', 'MRT', 'MLI', 'MAR'],
  alpha3Code: 'DZA'
},


{
  name: 'American Samoa',
  nativeName: 'American Samoa',
  population: 55197,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Pago Pago',
  topLevelDomain: '.as',
  currency: 'United States Dollar',
  languages: ['English', 'Samoan'],
  flag: 'https://flagcdn.com/as.svg',
  borders: [],
  alpha3Code: 'ASM'
},


{
  name: 'Andorra',
  nativeName: 'Andorra',
  population: 77265,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Andorra la Vella',
  topLevelDomain: '.ad',
  currency: 'Euro',
  languages: ['Catalan'],
  flag: 'https://flagcdn.com/ad.svg',
  borders: ['FRA', 'ESP'],
  alpha3Code: 'AND'
},


{
  name: 'Angola',
  nativeName: 'Angola',
  population: 32866268,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Luanda',
  topLevelDomain: '.ao',
  currency: 'Angolan kwanza',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/ao.svg',
  borders: ['COG', 'COD', 'ZMB', 'NAM'],
  alpha3Code: 'AGO'
},


{
  name: 'Anguilla',
  nativeName: 'Anguilla',
  population: 13452,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'The Valley',
  topLevelDomain: '.ai',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/ai.svg',
  borders: [],
  alpha3Code: 'AIA'
},


{
  name: 'Antarctica',
  nativeName: 'Antarctica',
  population: 1000,
  region: 'Polar',
  subRegion: 'Antarctica',
  capital: '',
  topLevelDomain: '.aq',
  currency: '',
  languages: ['English', 'Russian'],
  flag: 'https://flagcdn.com/aq.svg',
  borders: [],
  alpha3Code: 'ATA'
},


{
  name: 'Antigua and Barbuda',
  nativeName: 'Antigua and Barbuda',
  population: 97928,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: "Saint John's",
  topLevelDomain: '.ag',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/ag.svg',
  borders: [],
  alpha3Code: 'ATG'
},


{
  name: 'Armenia',
  nativeName: 'Հայաստան',
  population: 2963234,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Yerevan',
  topLevelDomain: '.am',
  currency: 'Armenian dram',
  languages: ['Armenian'],
  flag: 'https://flagcdn.com/am.svg',
  borders: ['AZE', 'GEO', 'IRN', 'TUR'],
  alpha3Code: 'ARM'
},


{
  name: 'Aruba',
  nativeName: 'Aruba',
  population: 106766,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Oranjestad',
  topLevelDomain: '.aw',
  currency: 'Aruban florin',
  languages: ['Dutch', '(Eastern) Punjabi'],
  flag: 'https://flagcdn.com/aw.svg',
  borders: [],
  alpha3Code: 'ABW'
},


{
  name: 'Australia',
  nativeName: 'Australia',
  population: 25687041,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'Canberra',
  topLevelDomain: '.au',
  currency: 'Australian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/au.svg',
  borders: [],
  alpha3Code: 'AUS'
},


{
  name: 'Austria',
  nativeName: 'Österreich',
  population: 8917205,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Vienna',
  topLevelDomain: '.at',
  currency: 'Euro',
  languages: ['German'],
  flag: 'https://flagcdn.com/at.svg',
  borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
  alpha3Code: 'AUT'
},


{
  name: 'Azerbaijan',
  nativeName: 'Azərbaycan',
  population: 10110116,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Baku',
  topLevelDomain: '.az',
  currency: 'Azerbaijani manat',
  languages: ['Azerbaijani'],
  flag: 'https://flagcdn.com/az.svg',
  borders: ['ARM', 'GEO', 'IRN', 'RUS', 'TUR'],
  alpha3Code: 'AZE'
},


{
  name: 'Bahamas',
  nativeName: 'Bahamas',
  population: 393248,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Nassau',
  topLevelDomain: '.bs',
  currency: 'Bahamian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/bs.svg',
  borders: [],
  alpha3Code: 'BHS'
},


{
  name: 'Bahrain',
  nativeName: '‏البحرين',
  population: 1701583,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Manama',
  topLevelDomain: '.bh',
  currency: 'Bahraini dinar',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/bh.svg',
  borders: [],
  alpha3Code: 'BHR'
},


{
  name: 'Bangladesh',
  nativeName: 'Bangladesh',
  population: 164689383,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Dhaka',
  topLevelDomain: '.bd',
  currency: 'Bangladeshi taka',
  languages: ['Bengali'],
  flag: 'https://flagcdn.com/bd.svg',
  borders: ['MMR', 'IND'],
  alpha3Code: 'BGD'
},


{
  name: 'Barbados',
  nativeName: 'Barbados',
  population: 287371,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Bridgetown',
  topLevelDomain: '.bb',
  currency: 'Barbadian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/bb.svg',
  borders: [],
  alpha3Code: 'BRB'
},


{
  name: 'Belarus',
  nativeName: 'Белару́сь',
  population: 9398861,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Minsk',
  topLevelDomain: '.by',
  currency: 'New Belarusian ruble',
  languages: ['Belarusian', 'Russian'],
  flag: 'https://flagcdn.com/by.svg',
  borders: ['LVA', 'LTU', 'POL', 'RUS', 'UKR'],
  alpha3Code: 'BLR'
},


{
  name: 'Belgium',
  nativeName: 'België',
  population: 11555997,
  region: 'Europe',
  subRegion: 'Western Europe',
  capital: 'Brussels',
  topLevelDomain: '.be',
  currency: 'Euro',
  languages: ['Dutch', 'French', 'German'],
  flag: 'https://flagcdn.com/be.svg',
  borders: ['FRA', 'DEU', 'LUX', 'NLD'],
  alpha3Code: 'BEL'
},


{
  name: 'Belize',
  nativeName: 'Belize',
  population: 397621,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'Belmopan',
  topLevelDomain: '.bz',
  currency: 'Belize dollar',
  languages: ['English', 'Spanish'],
  flag: 'https://flagcdn.com/bz.svg',
  borders: ['GTM', 'MEX'],
  alpha3Code: 'BLZ'
},


{
  name: 'Benin',
  nativeName: 'Bénin',
  population: 12123198,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Porto-Novo',
  topLevelDomain: '.bj',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/bj.svg',
  borders: ['BFA', 'NER', 'NGA', 'TGO'],
  alpha3Code: 'BEN'
},


{
  name: 'Bermuda',
  nativeName: 'Bermuda',
  population: 63903,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: 'Hamilton',
  topLevelDomain: '.bm',
  currency: 'Bermudian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/bm.svg',
  borders: [],
  alpha3Code: 'BMU'
},


{
  name: 'Bhutan',
  nativeName: 'ʼbrug-yul',
  population: 771612,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Thimphu',
  topLevelDomain: '.bt',
  currency: ['Bhutanese ngultrum, Indian rupee'],
  languages: ['Dzongkha'],
  flag: 'https://flagcdn.com/bt.svg',
  borders: ['CHN', 'IND'],
  alpha3Code: 'BTN'
},


{
  name: 'Bolivia (Plurinational State of)',
  nativeName: 'Bolivia',
  population: 11673029,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Sucre',
  topLevelDomain: '.bo',
  currency: 'Bolivian boliviano',
  languages: ['Spanish', 'Aymara', 'Quechua'],
  flag: 'https://flagcdn.com/bo.svg',
  borders: ['ARG', 'BRA', 'CHL', 'PRY', 'PER'],
  alpha3Code: 'BOL'
},


{
  name: 'Bonaire, Sint Eustatius and Saba',
  nativeName: 'Bonaire',
  population: 17408,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Kralendijk',
  topLevelDomain: '.nl',
  currency: 'United States dollar',
  languages: ['Dutch'],
  flag: 'https://flagcdn.com/bq.svg',
  borders: [],
  alpha3Code: 'BES'
},


{
  name: 'Bosnia and Herzegovina',
  nativeName: 'Bosna i Hercegovina',
  population: 3280815,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Sarajevo',
  topLevelDomain: '.ba',
  currency: 'Bosnia and Herzegovina convertible mark',
  languages: ['Bosnian', 'Croatian', 'Serbian'],
  flag: 'https://flagcdn.com/ba.svg',
  borders: ['HRV', 'MNE', 'SRB'],
  alpha3Code: 'BIH'
},


{
  name: 'Bouvet Island',
  nativeName: 'Bouvetøya',
  population: 0,
  region: 'Antarctic Ocean',
  subRegion: 'South Antarctic Ocean',
  capital: '',
  topLevelDomain: '.bv',
  currency: 'Norwegian krone',
  languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
  flag: 'https://flagcdn.com/bv.svg',
  borders: [],
  alpha3Code: 'BVT'
},


{
  name: 'Brazil',
  nativeName: 'Brasil',
  population: 212559409,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Brasília',
  topLevelDomain: '.br',
  currency: 'Brazilian real',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/br.svg',
  borders: ['ARG', 'BOL', 'COL', 'FRA', 'GUF', 'GUY', 'PRY', 'PER', 'SUR', 'URY', 'VEN'],
  alpha3Code: 'BRA'
},


{
  name: 'British Indian Ocean Territory',
  nativeName: 'British Indian Ocean Territory',
  population: 3000,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Diego Garcia',
  topLevelDomain: '.io',
  currency: 'United States dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/io.svg',
  borders: [],
  alpha3Code: 'IOT'
},


{
  name: 'United States Minor Outlying Islands',
  nativeName: 'United States Minor Outlying Islands',
  population: 300,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: '',
  topLevelDomain: '.us',
  currency: 'British pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/um.svg',
  borders: [],
  alpha3Code: 'UMI'
},


{
  name: 'Virgin Islands (U.S.)',
  nativeName: 'Virgin Islands of the United States',
  population: 106290,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Charlotte Amalie',
  topLevelDomain: '.vi',
  currency: 'United States dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/vi.svg',
  borders: [],
  alpha3Code: 'VIR'
},


{
  name: 'Brunei Darussalam',
  nativeName: 'Negara Brunei Darussalam',
  population: 437483,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Bandar Seri Begawan',
  topLevelDomain: '.bn',
  currency: 'Brunei dollar, Singapore dollar',
  languages: ['Malay'],
  flag: 'https://flagcdn.com/bn.svg',
  borders: ['MYS'],
  alpha3Code: 'BRN'
},


{
  name: 'Bulgaria',
  nativeName: 'България',
  population: 6927288,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Sofia',
  topLevelDomain: '.bg',
  currency: 'Bulgarian lev',
  languages: ['Bulgarian'],
  flag: 'https://flagcdn.com/bg.svg',
  borders: ['GRC', 'MKD', 'ROU', 'SRB', 'TUR'],
  alpha3Code: 'BGR'
},


{
  name: 'Burkina Faso',
  nativeName: 'Burkina Faso',
  population: 20903278,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Ouagadougou',
  topLevelDomain: '.bf',
  currency: 'West African CFA franc',
  languages: ['French', 'Fula'],
  flag: 'https://flagcdn.com/bf.svg',
  borders: ['BEN', 'CIV', 'GHA', 'MLI', 'NER', 'TGO'],
  alpha3Code: 'BFA'
},



{
  name: 'Burundi',
  nativeName: 'Burundi',
  population: 11890781,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Gitega',
  topLevelDomain: '.bi',
  currency: 'Burundian franc',
  languages: ['French', 'Kirundi'],
  flag: 'https://flagcdn.com/bi.svg',
  borders: ['COD', 'RWA', 'TZA'],
  alpha3Code: 'BDI'
},


{
  name: 'Cambodia',
  nativeName: 'Kâmpŭchéa',
  population: 16718971,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Phnom Penh',
  topLevelDomain: '.kh',
  currency: 'Cambodian riel, United States dollar',
  languages: ['Khmer'],
  flag: 'https://flagcdn.com/kh.svg',
  borders: ['LAO', 'THA', 'VNM'],
  alpha3Code: 'KHM'
},


{
  name: 'Cameroon',
  nativeName: 'Cameroon',
  population: 26545864,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Yaoundé',
  topLevelDomain: '.cm',
  currency: 'Central African CFA franc',
  languages: ['English', 'French'],
  flag: 'https://flagcdn.com/cm.svg',
  borders: ['CAF', 'TCD', 'COG', 'GNQ', 'GAB', 'NGA'],
  alpha3Code: 'CMR'
},


{
  name: 'Canada',
  nativeName: 'Canada',
  population: 38005238,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: 'Ottawa',
  topLevelDomain: '.ca',
  currency: 'Canadian dollar',
  languages: ['English', 'French'],
  flag: 'https://flagcdn.com/ca.svg',
  borders: ['USA'],
  alpha3Code: 'CAN'
},



{
  name: 'Cabo Verde',
  nativeName: 'Cabo Verde',
  population: 555988,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Praia',
  topLevelDomain: '.cv',
  currency: 'Cape Verdean escudo',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/cv.svg',
  borders: [],
  alpha3Code: 'CPV'
},

{
  name: 'Cayman Islands',
  nativeName: 'Cayman Islands',
  population: 65720,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'George Town',
  topLevelDomain: '.ky',
  currency: 'Cayman Islands dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/ky.svg',
  borders: [],
  alpha3Code: 'CYM'
},


{
  name: 'Central African Republic',
  nativeName: 'Ködörösêse tî Bêafrîka',
  population: 4829764,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Bangui',
  topLevelDomain: '.cf',
  currency: 'Central African CFA franc',
  languages: ['French', 'Sango'],
  flag: 'https://flagcdn.com/cf.svg',
  borders: ['CMR', 'TCD', 'COD', 'COG', 'SSD', 'SDN'],
  alpha3Code: 'CAF'
},


{
  name: 'Chad',
  nativeName: 'Tchad',
  population: 16425859,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'N\'Djamena',
  topLevelDomain: '.td',
  currency: 'Central African CFA franc',
  languages: ['French', 'Arabic'],
  flag: 'https://flagcdn.com/td.svg',
  borders: ['CMR', 'CAF', 'LBY', 'NER', 'NGA', 'SDN'],
  alpha3Code: 'TCD'
},


{
  name: 'Chile',
  nativeName: 'Chile',
  population: 19116209,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Santiago',
  topLevelDomain: '.cl',
  currency: 'Chilean peso',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/cl.svg',
  borders: ['ARG', 'BOL', 'PER'],
  alpha3Code: 'CHL'
},


{
  name: 'China',
  nativeName: '中国',
  population: 1402112000,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Beijing',
  topLevelDomain: '.cn',
  currency: 'Chinese yuan',
  languages: ['Chinese'],
  flag: 'https://flagcdn.com/cn.svg',
  borders: [
    'AFG', 'BTN', 'MMR', 'HKG', 'IND', 'KAZ', 'PRK', 'KGZ', 
    'LAO', 'MAC', 'MNG', 'PAK', 'RUS', 'TJK', 'VNM', 'NPL'
  ],
  alpha3Code: 'CHN'
},


{
  name: 'Christmas Island',
  nativeName: 'Christmas Island',
  population: 2072,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'Flying Fish Cove',
  topLevelDomain: '.cx',
  currency: 'Australian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/cx.svg',
  alpha3Code: 'CXR',
  borders: []
},


{
  name: 'Cocos (Keeling) Islands',
  nativeName: 'Cocos (Keeling) Islands',
  population: 550,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'West Island',
  topLevelDomain: '.cc',
  currency: 'Australian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/cc.svg',
  alpha3Code: 'CCK',
  borders: []
},


{
  name: 'Colombia',
  nativeName: 'Colombia',
  population: 50882884,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Bogotá',
  topLevelDomain: '.co',
  currency: 'Colombian peso',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/co.svg',
  alpha3Code: 'COL',
  borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN']
},


{
  name: 'Comoros',
  nativeName: 'Komori',
  population: 869595,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Moroni',
  topLevelDomain: '.km',
  currency: 'Comorian franc',
  languages: ['Arabic', 'French'],
  flag: 'https://flagcdn.com/km.svg',
  alpha3Code: 'COM',
  borders: []
},


{
  name: 'Congo',
  nativeName: 'République du Congo',
  population: 5518092,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Brazzaville',
  topLevelDomain: '.cg',
  currency: 'Central African CFA franc',
  languages: ['French', 'Lingala'],
  flag: 'https://flagcdn.com/cg.svg',
  alpha3Code: 'COG',
  borders: ['AGO', 'CMR', 'CAF', 'COD', 'GAB']
},


{
  name: 'Congo (Democratic Republic of the)',
  nativeName: 'République démocratique du Congo',
  population: 89561404,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Kinshasa',
  topLevelDomain: '.cd',
  currency: 'Congolese franc',
  languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
  flag: 'https://flagcdn.com/cd.svg',
  alpha3Code: 'COD',
  borders: ['AGO', 'BDI', 'CAF', 'COG', 'RWA', 'SSD', 'TZA', 'UGA', 'ZMB']
},



{
  name: 'Cook Islands',
  nativeName: 'Cook Islands',
  population: 18100,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Avarua',
  topLevelDomain: '.ck',
  currency: 'New Zealand dollar',
  languages: ['English', 'Cook Islands Māori'],
  flag: 'https://flagcdn.com/ck.svg',
  alpha3Code: 'COK',
  borders: []
},


{
  name: 'Costa Rica',
  nativeName: 'Costa Rica',
  population: 5094114,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'San José',
  topLevelDomain: '.cr',
  currency: 'Costa Rican colón',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/cr.svg',
  alpha3Code: 'CRI',
  borders: ['NIC', 'PAN']
},


{
  name: 'Croatia',
  nativeName: 'Hrvatska',
  population: 4047200,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Zagreb',
  topLevelDomain: '.hr',
  currency: 'Euro',
  languages: ['Croatian'],
  flag: 'https://flagcdn.com/hr.svg',
  alpha3Code: 'HRV',
  borders: ['BIH', 'HUN', 'MNE', 'SRB', 'SVN']
},


{
  name: 'Cuba',
  nativeName: 'Cuba',
  population: 11326616,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Havana',
  topLevelDomain: '.cu',
  currency: 'Cuban convertible peso, Cuban peso',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/cu.svg',
  alpha3Code: 'CUB',
  borders: []
},


{
  name: 'Curaçao',
  nativeName: 'Curaçao',
  population: 155014,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Willemstad',
  topLevelDomain: '.cw',
  currency: 'Netherlands Antillean guilder',
  languages: ['Dutch', '(Eastern) Punjabi', 'English'],
  flag: 'https://flagcdn.com/cw.svg',
  alpha3Code: 'CUW',
  borders: []
},


{
  name: 'Cyprus',
  nativeName: 'Κύπρος',
  population: 1207361,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Nicosia',
  topLevelDomain: '.cy',
  currency: 'Euro',
  languages: ['Greek (modern)', 'Turkish', 'Armenian'],
  flag: 'https://flagcdn.com/cy.svg',
  alpha3Code: 'CYP',
  borders: ['GBR']
},


{
  name: 'Czech Republic',
  nativeName: 'Česká republika',
  population: 10698896,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Prague',
  topLevelDomain: '.cz',
  currency: 'Czech koruna',
  languages: ['Czech'],
  flag: 'https://flagcdn.com/cz.svg',
  borders: ['DEU', 'AUT'],
  alpha3Code: 'CZE',
  borders: []
},


{
  name: 'Denmark',
  nativeName: 'Danmark',
  population: 5831404,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Copenhagen',
  topLevelDomain: '.dk',
  currency: 'Danish krone',
  languages: ['Danish'],
  flag: 'https://flagcdn.com/dk.svg',
  alpha3Code: 'DNK',
  borders: ['DEU']
},


{
  name: 'Djibouti',
  nativeName: 'Djibouti',
  population: 988002,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Djibouti',
  topLevelDomain: '.dj',
  currency: 'Djiboutian franc',
  languages: ['French', 'Arabic'],
  flag: 'https://flagcdn.com/dj.svg',
  alpha3Code: 'DJI',
  borders: ['ERI', 'ETH', 'SOM']
},


{
  name: 'Dominica',
  nativeName: 'Dominica',
  population: 71991,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Roseau',
  topLevelDomain: '.dm',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/dm.svg',
  alpha3Code: 'DMA',
  borders: [] // Dominica is an island nation and does not have land borders.
},


{
  name: 'Dominican Republic',
  nativeName: 'República Dominicana',
  population: 10847904,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Santo Domingo',
  topLevelDomain: '.do',
  currency: 'Dominican peso',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/do.svg',
  alpha3Code: 'DOM',
  borders: ['HTI']
},


{
  name: 'Ecuador',
  nativeName: 'Ecuador',
  population: 17643060,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Quito',
  topLevelDomain: '.ec',
  currency: 'United States dollar',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/ec.svg',
  alpha3Code: 'ECU',
  borders: ['COL', 'PER']
},


{
  name: 'Egypt',
  nativeName: 'مصر‎',
  population: 102334403,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Cairo',
  topLevelDomain: '.eg',
  currency: 'Egyptian pound',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/eg.svg',
  alpha3Code: 'EGY',
  borders: ['ISR', 'LBY', 'SDN']
},

{
  name: 'El Salvador',
  nativeName: 'El Salvador',
  population: 6486201,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'San Salvador',
  topLevelDomain: '.sv',
  currency: 'United States dollar',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/sv.svg',
  alpha3Code: 'SLV',
  borders: ['GTM', 'HND']
},

{
  name: 'Equatorial Guinea',
  nativeName: 'Guinea Ecuatorial',
  population: 1402985,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Malabo',
  topLevelDomain: '.gq',
  currency: 'Central African CFA franc',
  languages: ['Spanish', 'French', 'Portuguese', 'Fang'],
  flag: 'https://flagcdn.com/gq.svg',
  alpha3Code: 'GNQ',
  borders: ['CMR', 'GAB']
},


{
  name: 'Eritrea',
  nativeName: 'ኤርትራ',
  population: 5352000,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Asmara',
  topLevelDomain: '.er',
  currency: 'Eritrean nakfa',
  languages: ['Tigrinya', 'Arabic', 'English', 'Tigre', 'Kunama', 'Saho', 'Bilen', 'Nara', 'Afar'],
  flag: 'https://flagcdn.com/er.svg',
  alpha3Code: 'ERI',
  borders: ['DJI', 'ETH', 'SDN']
},

{
  name: 'Estonia',
  nativeName: 'Eesti',
  population: 1331057,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Tallinn',
  topLevelDomain: '.ee',
  currency: 'Euro',
  languages: ['Estonian'],
  flag: 'https://flagcdn.com/ee.svg',
  alpha3Code: 'EST',
  borders: ['LVA', 'RUS']
},


{
  name: 'Ethiopia',
  nativeName: 'ኢትዮጵያ',
  population: 114963583,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Addis Ababa',
  topLevelDomain: '.et',
  currency: 'Ethiopian birr',
  languages: ['Amharic'],
  flag: 'https://flagcdn.com/et.svg',
  alpha3Code: 'ETH',
  borders: ['DJI', 'ERI', 'KEN', 'SOM', 'SSD', 'SDN']
},


{
  name: 'Falkland Islands (Malvinas)',
  nativeName: 'Falkland Islands',
  population: 2563,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Stanley',
  topLevelDomain: '.fk',
  currency: 'Falkland Islands pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/fk.svg',
  alpha3Code: 'FLK',
  borders: []
},

{
  name: 'Faroe Islands',
  nativeName: 'Føroyar',
  population: 48865,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Tórshavn',
  topLevelDomain: '.fo',
  currency: ['Danish krone', 'Faroese króna'],
  languages: ['Faroese'],
  flag: 'https://flagcdn.com/fo.svg',
  alpha3Code: 'FRO',
  borders: []
},


{
  name: 'Fiji',
  nativeName: 'Fiji',
  population: 896444,
  region: 'Oceania',
  subRegion: 'Melanesia',
  capital: 'Suva',
  topLevelDomain: '.fj',
  currency: 'Fijian dollar',
  languages: ['English', 'Fijian', 'Fiji Hindi', 'Rotuman'],
  flag: 'https://flagcdn.com/fj.svg',
  alpha3Code: 'FJI',
  borders: []
},


{
  name: 'Finland',
  nativeName: 'Suomi',
  population: 5530719,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Helsinki',
  topLevelDomain: '.fi',
  currency: 'Euro',
  languages: ['Finnish', 'Swedish'],
  flag: 'https://flagcdn.com/fi.svg',
  alpha3Code: 'FIN',
  borders: ['NOR', 'SWE', 'RUS']
},


{
  name: 'France',
  nativeName: 'France',
  population: 67391582,
  region: 'Europe',
  subRegion: 'Western Europe',
  capital: 'Paris',
  topLevelDomain: '.fr',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/fr.svg',
  alpha3Code: 'FRA',
  borders: ['AND', 'BEL', 'DEU', 'ITA', 'LUX', 'MCO', 'ESP', 'CHE']
},

{
  name: 'French Guiana',
  nativeName: 'Guyane française',
  population: 254541,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Cayenne',
  topLevelDomain: '.gf',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/gf.svg',
  alpha3Code: 'GUF',
  borders: ['BRA', 'SUR']
},


{
  name: 'French Polynesia',
  nativeName: 'Polynésie française',
  population: 280904,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Papeetē',
  topLevelDomain: '.pf',
  currency: 'CFP franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/pf.svg',
  alpha3Code: 'PYF',
  borders: []
},


{
  name: 'French Southern Territories',
  nativeName: 'Territoire des Terres australes et antarctiques françaises',
  population: 140,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Port-aux-Français',
  topLevelDomain: '.tf',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/tf.svg',
  alpha3Code: 'ATF',
  borders: []
},

{
  name: 'Gabon',
  nativeName: 'Gabon',
  population: 2225728,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Libreville',
  topLevelDomain: '.ga',
  currency: 'Central African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/ga.svg',
  alpha3Code: 'GAB',
  borders: ['CMR', 'COG', 'GNQ']
},


{
  name: 'Gambia',
  nativeName: 'Gambia',
  population: 2416664,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Banjul',
  topLevelDomain: '.gm',
  currency: 'Gambian dalasi',
  languages: ['English'],
  flag: 'https://flagcdn.com/gm.svg',
  alpha3Code: 'GMB',
  borders: ['SEN']
},

{
  name: 'Georgia',
  nativeName: 'საქართველო',
  population: 3714000,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Tbilisi',
  topLevelDomain: '.ge',
  currency: 'Georgian Lari',
  languages: ['Georgian'],
  flag: 'https://flagcdn.com/ge.svg',
  alpha3Code: 'GEO',
  borders: ['ARM', 'AZE', 'RUS', 'TUR']
},

{
  name: 'Germany',
  nativeName: 'Deutschland',
  population: 83240525,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Berlin',
  topLevelDomain: '.de',
  currency: 'Euro',
  languages: ['German'],
  flag: 'https://flagcdn.com/de.svg',
  alpha3Code: 'DEU',
  borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE']
},


{
  name: 'Ghana',
  nativeName: 'Ghana',
  population: 31072945,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Accra',
  topLevelDomain: '.gh',
  currency: 'Ghanaian cedi',
  languages: ['English'],
  flag: 'https://flagcdn.com/gh.svg',
  alpha3Code: 'GHA',
  borders: ['BFA', 'CIV', 'TGO']
},

{
  name: 'Gibraltar',
  nativeName: 'Gibraltar',
  population: 33691,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Gibraltar',
  topLevelDomain: '.gi',
  currency: 'Gibraltar pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/gi.svg',
  alpha3Code: 'GIB',
  borders: ['ESP']
},

{
  name: 'Greece',
  nativeName: 'Ελλάδα',
  population: 10715549,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Athens',
  topLevelDomain: '.gr',
  currency: 'Euro',
  languages: ['Greek (modern)'],
  flag: 'https://flagcdn.com/gr.svg',
  alpha3Code: 'GRC',
  borders: ['ALB', 'BGR', 'TUR', 'MKD']
},

{
  name: 'Greenland',
  nativeName: 'Kalaallit Nunaat',
  population: 56367,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: 'Nuuk',
  topLevelDomain: '.gl',
  currency: 'Danish krone',
  languages: ['Kalaallisut'],
  flag: 'https://flagcdn.com/gl.svg',
  alpha3Code: 'GRL',
  borders: []
},


{
  name: 'Grenada',
  nativeName: 'Grenada',
  population: 112519,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'St. George\'s',
  topLevelDomain: '.gd',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/gd.svg',
  alpha3Code: 'GRD',
  borders: []
},


{
  name: 'Guadeloupe',
  nativeName: 'Guadeloupe',
  population: 400132,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Basse-Terre',
  topLevelDomain: '.gp',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/gp.svg',
  alpha3Code: 'GLP',
  borders: []
},

{
  name: 'Guam',
  nativeName: 'Guam',
  population: 168783,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Hagåtña',
  topLevelDomain: '.gu',
  currency: 'United States dollar',
  languages: ['English', 'Chamorro', 'Spanish'],
  flag: 'https://flagcdn.com/gu.svg',
  alpha3Code: 'GUM',
  borders: []
},


{
  name: 'Guatemala',
  nativeName: 'Guatemala',
  population: 16858333,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'Guatemala City',
  topLevelDomain: '.gt',
  currency: 'Guatemalan quetzal',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/gt.svg',
  alpha3Code: 'GTM',
  borders: ['BLZ', 'SLV', 'HND', 'MEX']
},

{
  name: 'Guernsey',
  nativeName: 'Guernsey',
  population: 62999,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'St. Peter Port',
  topLevelDomain: '.gg',
  currencies: ['British pound', 'Guernsey pound'],
  languages: ['English', 'French'],
  flag: 'https://flagcdn.com/gg.svg',
  alpha3Code: 'GGY',
  borders: []
},


{
  name: 'Guinea',
  nativeName: 'Guinée',
  population: 13132792,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Conakry',
  topLevelDomain: '.gn',
  currency: 'Guinean franc',
  languages: ['French', 'Fula'],
  flag: 'https://flagcdn.com/gn.svg',
  alpha3Code: 'GIN',
  borders: ['CIV', 'GNB', 'LBR', 'MLI', 'SEN', 'SLE']
},


{
  name: 'Guinea-Bissau',
  nativeName: 'Guiné-Bissau',
  population: 1967998,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Bissau',
  topLevelDomain: '.gw',
  currency: 'West African CFA franc',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/gw.svg',
  alpha3Code: 'GNB',
  borders: ['GIN', 'SEN']
},

{
  name: 'Guyana',
  nativeName: 'Guyana',
  population: 786559,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Georgetown',
  topLevelDomain: '.gy',
  currency: 'Guyanese dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/gy.svg',
  alpha3Code: 'GUY',
  borders: ['BRA', 'SUR', 'VEN']
},

{
  name: 'Haiti',
  nativeName: 'Haïti',
  population: 11402533,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Port-au-Prince',
  topLevelDomain: '.ht',
  currency: 'Haitian gourde',
  languages: ['French', 'Haitian'],
  flag: 'https://flagcdn.com/ht.svg',
  alpha3Code: 'HTI',
  borders: ['DOM']
},


{
  name: 'Heard Island and McDonald Islands',
  nativeName: 'Heard Island and McDonald Islands',
  population: 0,
  region: 'Antarctic',
  subRegion: 'Antarctic',
  capital: 'N/A', // No capital as it is uninhabited
  topLevelDomain: '.hm',
  currency: 'Australian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/hm.svg',
  alpha3Code: 'HMD',
  borders: [] // No land borders
},


{
  name: 'Vatican City',
  nativeName: 'Status Civitatis Vaticanae',
  population: 451,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Vatican City',
  topLevelDomain: '.va',
  currency: 'Euro',
  languages: ['Latin', 'Italian', 'French', 'German'],
  flag: 'https://flagcdn.com/va.svg',
  alpha3Code: 'VAT',
  borders: ['ITA']
},

{
  name: 'Honduras',
  nativeName: 'Honduras',
  population: 9904608,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'Tegucigalpa',
  topLevelDomain: '.hn',
  currency: 'Honduran lempira',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/hn.svg',
  alpha3Code: 'HND',
  borders: ['GTM', 'SLV', 'NIC']
},

{
  name: 'Hong Kong',
  nativeName: '香港',
  population: 7481800,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'City of Victoria',
  topLevelDomain: '.hk',
  currency: 'Hong Kong dollar',
  languages: ['English', 'Chinese'],
  flag: 'https://flagcdn.com/hk.svg',
  alpha3Code: 'HKG',
  borders: ['CHN']
},

{
  name: 'Hungary',
  nativeName: 'Magyarország',
  population: 9749763,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Budapest',
  topLevelDomain: '.hu',
  currency: 'Hungarian forint',
  languages: ['Hungarian'],
  flag: 'https://flagcdn.com/hu.svg',
  alpha3Code: 'HUN',
  borders: ['AUT', 'HRV', 'ROU', 'SRB', 'SVK', 'SVN', 'UKR']
},

{
  name: 'Iceland',
  nativeName: 'Ísland',
  population: 366425,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Reykjavík',
  topLevelDomain: '.is',
  currency: 'Icelandic króna',
  languages: ['Icelandic'],
  flag: 'https://flagcdn.com/is.svg',
  alpha3Code: 'ISL',
  borders: [] // Iceland does not share land borders with any country
},

{
  name: 'India',
  nativeName: 'भारत',
  population: 1380004385,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'New Delhi',
  topLevelDomain: '.in',
  currency: 'Indian rupee',
  languages: ['Hindi', 'English'],
  flag: 'https://flagcdn.com/in.svg',
  alpha3Code: 'IND',
  borders: ['AFG', 'BGD', 'BTN', 'MMR', 'CHN', 'NPL', 'PAK', 'LKA']
},


{
  name: 'Indonesia',
  nativeName: 'Indonesia',
  population: 273523621,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Jakarta',
  topLevelDomain: '.id',
  currency: 'Indonesian rupiah',
  languages: ['Indonesian'],
  flag: 'https://flagcdn.com/id.svg',
  alpha3Code: 'IDN',
  borders: ['TLS', 'MYS', 'PNG']
},


{
  name: 'Ivory Coast',
  nativeName: 'Côte d\'Ivoire',
  population: 26378275,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Yamoussoukro',
  topLevelDomain: '.ci',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/ci.svg',
  alpha3Code: 'CIV',
  borders: ['BFA', 'GHA', 'GIN', 'LBR', 'MLI']
},

{
  name: 'Iran',
  nativeName: 'ایران',
  population: 83992953,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Tehran',
  topLevelDomain: '.ir',
  currency: 'Iranian rial',
  languages: ['Persian (Farsi)'],
  flag: 'https://flagcdn.com/ir.svg',
  alpha3Code: 'IRN',
  borders: ['AFG', 'ARM', 'AZE', 'IRQ', 'PAK', 'TUR', 'TKM']
},

{
  name: 'Iraq',
  nativeName: 'العراق',
  population: 40222503,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Baghdad',
  topLevelDomain: '.iq',
  currency: 'Iraqi dinar',
  languages: ['Arabic', 'Kurdish'],
  flag: 'https://flagcdn.com/iq.svg',
  alpha3Code: 'IRQ',
  borders: ['IRN', 'JOR', 'KWT', 'SAU', 'SYR', 'TUR']
},


{
  name: 'Ireland',
  nativeName: 'Éire',
  population: 4994724,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Dublin',
  topLevelDomain: '.ie',
  currency: 'Euro',
  languages: ['Irish', 'English'],
  flag: 'https://flagcdn.com/ie.svg',
  alpha3Code: 'IRL',
  borders: ['GBR']
},

{
  name: 'Isle of Man',
  nativeName: 'Isle of Man',
  population: 85032,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Douglas',
  topLevelDomain: '.im',
  currency: ['British pound', ' Manx pound'],
  languages: ['English', 'Manx'],
  flag: 'https://flagcdn.com/im.svg',
  alpha3Code: 'IMN',
  borders: []
},

{
  name: 'Israel',
  nativeName: 'יִשְׂרָאֵל',
  population: 9216900,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Jerusalem',
  topLevelDomain: '.il',
  currency: ['Israeli new shekel'],
  languages: ['Hebrew (modern)', 'Arabic'],
  flag: 'https://flagcdn.com/il.svg',
  alpha3Code: 'ISR',
  borders: ['EGY', 'JOR', 'LBN', 'SYR']
},


{
  name: 'Italy',
  nativeName: 'Italia',
  population: 59554023,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Rome',
  topLevelDomain: '.it',
  currency: ['Euro'],
  languages: ['Italian'],
  flag: 'https://flagcdn.com/it.svg',
  alpha3Code: 'ITA',
  borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT']
},

{
  name: 'Jamaica',
  nativeName: 'Jamaica',
  population: 2961161,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Kingston',
  topLevelDomain: '.jm',
  currency: ['Jamaican dollar'],
  languages: ['English'],
  flag: 'https://flagcdn.com/jm.svg',
  alpha3Code: 'JAM',
  borders: []
},

{
  name: 'Japan',
  nativeName: '日本',
  population: 125836021,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Tokyo',
  topLevelDomain: '.jp',
  currency: ['Japanese yen'],
  languages: ['Japanese'],
  flag: 'https://flagcdn.com/jp.svg',
  alpha3Code: 'JPN',
  borders: []
},

{
  name: 'Jordan',
  nativeName: 'الأردن',
   population: 10203140,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Amman',
  topLevelDomain: '.jo',
  currency: ['Jordanian dinar'],
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/jo.svg',
  alpha3Code: 'JOR',
  borders: ['IRQ', 'ISR', 'SAU', 'SYR']
},

{
  name: 'Kazakhstan',
  nativeName: 'Қазақстан',
  population: 18754440,
  region: 'Asia',
  subRegion: 'Central Asia',
  capital: 'Nur-Sultan',
  topLevelDomain: ['.kz', '.қаз'],
  currency: ['Kazakhstani tenge'],
  languages: ['Kazakh', 'Russian'],
  flag: 'https://flagcdn.com/kz.svg',
  alpha3Code: 'KAZ',
  borders: ['CHN', 'KGZ', 'RUS', 'TKM', 'UZB']
},

{
  name: 'Kenya',
  nativeName: 'Kenya',
  population: 53771300,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Nairobi',
  topLevelDomain: '.ke',
  currency: 'Kenyan shilling',
  languages: ['English', 'Swahili'],
  flag: 'https://flagcdn.com/ke.svg',
  alpha3Code: 'KEN',
  borders: ['ETH', 'SOM', 'SSD', 'TZA', 'UGA']
},


{
  name: 'Kiribati',
  nativeName: 'Kiribati',
  population: 119446,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'South Tarawa',
  topLevelDomain: '.ki',
  currency: ['Australian dollar', ' Kiribati dollar'],
  languages: ['English'],
  flag: 'https://flagcdn.com/ki.svg',
  alpha3Code: 'KIR',
  borders: []
},

{
  name: 'Korea (Democratic People\'s Republic of)',
  nativeName: '북한',
  population: 25778815,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Pyongyang',
  topLevelDomain: '.kp',
  currency: 'North Korean won',
  languages: ['Korean'],
  flag: 'https://flagcdn.com/kp.svg',
  alpha3Code: 'PRK',
  borders: ['CHN', 'KOR', 'RUS']
},


{
  name: 'Kuwait',
  nativeName: 'الكويت',
  population: 4270563,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Kuwait City',
  topLevelDomain: '.kw',
  currency: ['Kuwaiti dinar'],
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/kw.svg',
  alpha3Code: 'KWT',
  borders: ['IRQ', 'SAU']
},

{
  name: 'Kyrgyzstan',
  nativeName: 'Кыргызстан',
  population: 6591600,
  region: 'Asia',
  subRegion: 'Central Asia',
  capital: 'Bishkek',
  topLevelDomain: '.kg',
  currency: ['Kyrgyzstani som'],
  languages: ['Kyrgyz', 'Russian'],
  flag: 'https://flagcdn.com/kg.svg',
  alpha3Code: 'KGZ',
  borders: ['CHN', 'KAZ', 'TJK', 'UZB']
},

{
  name: 'Laos',
  nativeName: 'ສາທາລະນະລັດ ປະຊາທິປະໄຕ ປະຊາຊົນລາວ',
  population: 7275556,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Vientiane',
  topLevelDomain: '.la',
  currency: 'Lao kip',
  languages: ['Lao'],
  flag: 'https://flagcdn.com/la.svg',
  alpha3Code: 'LAO',
  borders: ['MMR', 'KHM', 'CHN', 'THA', 'VNM']
},

{
  name: 'Latvia',
  nativeName: 'Latvija',
  population: 1901548,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Riga',
  topLevelDomain: '.lv',
  currency: 'Euro',
  languages: ['Latvian'],
  flag: 'https://flagcdn.com/lv.svg',
  alpha3Code: 'LVA',
  borders: ['BLR', 'EST', 'LTU', 'RUS']
},


{
  name: 'Lebanon',
  nativeName: 'لبنان',
   population: 6825442,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Beirut',
  topLevelDomain: '.lb',
  currency: 'Lebanese pound',
  languages: ['Arabic', 'French'],
  flag: 'https://flagcdn.com/lb.svg',
  alpha3Code: 'LBN',
  borders: ['ISR', 'SYR']
},

{
  name: 'Lesotho',
  nativeName: 'Lesotho',
  population: 2142252,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Maseru',
  topLevelDomain: '.ls',
  currency: ['Lesotho loti', ' South African rand'],
  languages: ['English', 'Southern Sotho'],
  flag: 'https://flagcdn.com/ls.svg',
  alpha3Code: 'LSO',
  borders: ['ZAF']
},

{
  name: 'Liberia',
  nativeName: 'Liberia',
  population: 5057677,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Monrovia',
  topLevelDomain: '.lr',
  currency: 'Liberian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/lr.svg',
  alpha3Code: 'LBR',
  borders: ['GIN', 'CIV', 'SLE']
},

{
  "name": "Liberia",
  "capital": "Monrovia",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 5057677,
  "flags": {
    "svg": "https://flagcdn.com/lr.svg"
  },
  "link": "country.html?country=LBR"
},

{
  name: 'Libya',
  nativeName: '‏ليبيا',
   population: 6871287,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Tripoli',
  topLevelDomain: '.ly',
  currency: 'Libyan dinar',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/ly.svg',
  alpha3Code: 'LBY',
  borders: ['DZA', 'TCD', 'EGY', 'NER', 'SDN', 'TUN']
},

{
  name: 'Liechtenstein',
  nativeName: 'Liechtenstein',
  population: 38137,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Vaduz',
  topLevelDomain: '.li',
  currency: 'Swiss franc',
  languages: ['German'],
  flag: 'https://flagcdn.com/li.svg',
  alpha3Code: 'LIE',
  borders: ['AUT', 'CHE']
},

{
  name: 'Lithuania',
  nativeName: 'Lietuva',
  population: 2794700,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Vilnius',
  topLevelDomain: '.lt',
  currency: 'Euro',
  languages: ['Lithuanian'],
  flag: 'https://flagcdn.com/lt.svg',
  alpha3Code: 'LTU',
  borders: ['BLR', 'LVA', 'POL', 'RUS']
},

{
  name: 'Luxembourg',
  nativeName: 'Lëtzebuerg',
  population: 632275,
  region: 'Europe',
  subRegion: 'Western Europe',
  capital: 'Luxembourg',
  topLevelDomain: '.lu',
  currency: 'Euro',
  languages: ['French', 'German', 'Luxembourgish'],
  flag: 'https://flagcdn.com/lu.svg',
  alpha3Code: 'LUX',
  borders: ['BEL', 'FRA', 'DEU']
},

{
  name: 'Macao',
  nativeName: '澳門',
  population: 649342,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: null,
  topLevelDomain: '.mo',
  currency: 'Macanese pataca',
  languages: ['Chinese', 'Portuguese'],
  flag: 'https://flagcdn.com/mo.svg',
  alpha3Code: 'MAC',
  borders: ['CHN']
},

{
  name: 'Madagascar',
  nativeName: 'Madagasikara',
  population: 27691019,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Antananarivo',
  topLevelDomain: '.mg',
  currency: 'Malagasy ariary',
  languages: ['French', 'Malagasy'],
  flag: 'https://flagcdn.com/mg.svg',
  alpha3Code: 'MDG',
  borders: []
},


{
  name: 'Malawi',
  nativeName: 'Malawi',
  population: 19129955,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Lilongwe',
  topLevelDomain: '.mw',
  currency: 'Malawian kwacha',
  languages: ['English', 'Chichewa'],
  flag: 'https://flagcdn.com/mw.svg',
  alpha3Code: 'MWI',
  borders: []
},


{
  name: 'Malaysia',
  nativeName: 'Malaysia',
  population: 32365998,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Kuala Lumpur',
  topLevelDomain: '.my',
  currency: 'Malaysian ringgit',
  languages: ['Malaysian'],
  flag: 'https://flagcdn.com/my.svg',
  alpha3Code: 'MYS',
  borders: []
},


{
  name: 'Maldives',
  nativeName: 'Maldives',
  population: 540542,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Malé',
  topLevelDomain: '.mv',
  currency: 'Maldivian rufiyaa',
  languages: ['Divehi'],
  flag: 'https://flagcdn.com/mv.svg',
  alpha3Code: 'MDV',
  borders: []
},

{
  name: 'Mali',
  nativeName: 'Mali',
  population: 20250834,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Bamako',
  topLevelDomain: '.ml',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/ml.svg',
  alpha3Code: 'MLI',
  borders: ['DZA', 'BFA', 'GIN', 'CIV', 'MRT', 'NER', 'SEN']
},

{
  name: 'Malta',
  nativeName: 'Malta',
  population: 525285,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Valletta',
  topLevelDomain: '.mt',
  currency: 'Euro',
  languages: ['Maltese', 'English'],
  flag: 'https://flagcdn.com/mt.svg',
  alpha3Code: 'MLT',
  borders: []
},

{
  name: 'Marshall Islands',
  nativeName: 'M̧ajeļ',
  population: 59194,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Majuro',
  topLevelDomain: '.mh',
  currency: 'United States dollar',
  languages: ['English', 'Marshallese'],
  flag: 'https://flagcdn.com/mh.svg',
  alpha3Code: 'MHL',
  borders: []
},

{
  name: 'Mauritania',
  nativeName: 'موريتانيا',
  population: 4649660,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Nouakchott',
  topLevelDomain: '.mr',
  currency: 'Mauritanian ouguiya',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/mr.svg',
  alpha3Code: 'MRT',
  borders: ['DZA', 'MLI', 'SEN', 'ESH']
},

{
  name: 'Mauritius',
  nativeName: 'Maurice',
  population: 1265740,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Port Louis',
  topLevelDomain: '.mu',
  currency: 'Mauritian rupee',
  languages: ['English'],
  flag: 'https://flagcdn.com/mu.svg',
  alpha3Code: 'MUS',
  borders: []
},


{
  name: 'Mayotte',
  nativeName: 'Mayotte',
  population: 226915,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Mamoudzou',
  topLevelDomain: '.yt',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/yt.svg',
  alpha3Code: 'MYT',
  borders: []
},

{
  name: 'Mexico',
  nativeName: 'México',
  population: 128932753,
  region: 'Americas',
  subRegion: 'North America',
  capital: 'Mexico City',
  topLevelDomain: '.mx',
  currency: 'Mexican peso',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/mx.svg',
  alpha3Code: 'MEX',
  borders: ['BLZ', 'GTM', 'USA']
},

{
  name: 'Micronesia (Federated States of)',
  nativeName: 'Micronesia',
  population: 115021,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Palikir',
  topLevelDomain: '.fm',
  currency: 'United States dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/fm.svg',
  alpha3Code: 'FSM',
  borders: []
},

{
  name: 'Moldova (Republic of)',
  nativeName: 'Moldova',
  population: 2617820,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Chișinău',
  topLevelDomain: '.md',
  currency: 'Moldovan leu',
  languages: ['Romanian'],
  flag: 'https://flagcdn.com/md.svg',
  alpha3Code: 'MDA',
  borders: ['ROU', 'UKR']
},


{
  name: 'Monaco',
  nativeName: 'Monaco',
  population: 39244,
  region: 'Europe',
  subRegion: 'Western Europe',
  capital: 'Monaco',
  topLevelDomain: '.mc',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/mc.svg',
  alpha3Code: 'MCO',
  borders: ['FRA']
},

{
  name: 'Mongolia',
  nativeName: 'Монгол улс',
  population: 3278292,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Ulan Bator',
  topLevelDomain: '.mn',
  currency: ['Mongolian tögrög'],
  languages: ['Mongolian'],
  flag: 'https://flagcdn.com/mn.svg',
  alpha3Code: 'MNG',
  borders: ['CHN', 'RUS']
},

{
  name: 'Montenegro',
  nativeName: 'Црна Гора',
  population: 621718,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Podgorica',
  topLevelDomain: '.me',
  currency: 'Euro',
  languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
  flag: 'https://flagcdn.com/me.svg',
  alpha3Code: 'MNE',
  borders: ['ALB', 'BIH', 'HRV', 'UNK', 'SRB']
},


{
  name: 'Montserrat',
  nativeName: 'Montserrat',
  population: 4922,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Plymouth',
  topLevelDomain: '.ms',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/ms.svg',
  alpha3Code: 'MSR',
  borders: []
},

{
  name: 'Morocco',
  nativeName: 'المغرب',
  population: 36910558,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Rabat',
  topLevelDomain: '.ma',
  currency: 'Moroccan dirham',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/ma.svg',
  alpha3Code: 'MAR',
  borders: ['DZA', 'ESH', 'ESP']
},

{
  name: 'Mozambique',
  nativeName: 'Moçambique',
  population: 31255435,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Maputo',
  topLevelDomain: '.mz',
  currency: 'Mozambican metical',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/mz.svg',
  alpha3Code: 'MOZ',
  borders: ['MWI', 'ZAF', 'SWZ', 'TZA', 'ZMB', 'ZWE']
},

{
  name: 'Myanmar',
  nativeName: 'Myanma',
  population: 54409794,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Naypyidaw',
  topLevelDomain: '.mm',
  currency: 'Burmese kyat',
  languages: ['Burmese'],
  flag: 'https://flagcdn.com/mm.svg',
  alpha3Code: 'MMR',
  borders: ['BGD', 'CHN', 'IND', 'LAO', 'THA']
},

{
  name: 'Namibia',
  nativeName: 'Namibia',
  population: 2540916,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Windhoek',
  topLevelDomain: '.na',
  currency: 'Namibian dollar',
  languages: ['English', 'Afrikaans'],
  flag: 'https://flagcdn.com/na.svg',
  alpha3Code: 'NAM',
  borders: ['AGO', 'BWA', 'ZAF', 'ZMB']
},

{
  name: 'Namibia',
  nativeName: 'Namibia',
  population: 2540916,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Windhoek',
  topLevelDomain: '.na',
  currency: 'Namibian dollar',
  languages: ['English', 'Afrikaans'],
  flag: 'https://flagcdn.com/na.svg',
  alpha3Code: 'NAM',
  borders: ['AGO', 'BWA', 'ZAF', 'ZMB']
},

{
  name: 'Nauru',
  nativeName: 'Nauru',
  population: 10834,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Yaren',
  topLevelDomain: '.nr',
  currency: 'Australian dollar',
  languages: ['English', 'Nauruan'],
  flag: 'https://flagcdn.com/nr.svg',
  alpha3Code: 'NRU',
  borders: []
},

{
  name: 'Nepal',
  nativeName: 'नेपाल',
  population: 29136808,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Kathmandu',
  topLevelDomain: '.np',
  currency: 'Nepalese rupee',
  languages: ['Nepali'],
  flag: 'https://flagcdn.com/np.svg',
  alpha3Code: 'NPL',
  borders: ['CHN', 'IND']
},

{
  name: 'Netherlands',
  nativeName: 'Nederland',
  population: 17441139,
  region: 'Europe',
  subRegion: 'Western Europe',
  capital: 'Amsterdam',
  topLevelDomain: '.nl',
  currency: 'Euro',
  languages: ['Dutch'],
  flag: 'https://flagcdn.com/nl.svg',
  alpha3Code: 'NLD',
  borders: ['BEL', 'DEU']
},

{
  name: 'New Caledonia',
  nativeName: 'Nouvelle-Calédonie',
  population: 271960,
  region: 'Oceania',
  subRegion: 'Melanesia',
  capital: 'Nouméa',
  topLevelDomain: '.nc',
  currency: 'CFP franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/nc.svg',
  alpha3Code: 'NCL',
  borders: []
},

{
  name: 'New Zealand',
  nativeName: 'New Zealand',
  population: 5084300,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'Wellington',
  topLevelDomain: '.nz',
  currency: 'New Zealand dollar',
  languages: ['English', 'Māori'],
  flag: 'https://flagcdn.com/nz.svg',
  alpha3Code: 'NZL',
  borders: []
},

{
  name: 'Nicaragua',
  nativeName: 'Nicaragua',
  population: 6624554,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'Managua',
  topLevelDomain: '.ni',
  currency: 'Nicaraguan córdoba',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/ni.svg',
  alpha3Code: 'NIC',
  borders: ['CRI', 'HND']
},


{
  name: 'Niger',
  nativeName: 'Niger',
  population: 24206636,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Niamey',
  topLevelDomain: '.ne',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/ne.svg',
  alpha3Code: 'NER',
  borders: ['DZA', 'BEN', 'BFA', 'TCD', 'LBY', 'MLI', 'NGA']
},


{
  name: 'Nigeria',
  nativeName: 'Nigeria',
  population: 206139587,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Abuja',
  topLevelDomain: '.ng',
  currency: 'Nigerian naira',
  languages: ['English'],
  flag: 'https://flagcdn.com/ng.svg',
  alpha3Code: 'NGA',
  borders: ['BEN', 'CMR', 'TCD', 'NER']
},

{
  name: 'Niue',
  nativeName: 'Niuē',
  population: 1470,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Alofi',
  topLevelDomain: '.nu',
  currency: 'New Zealand dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/nu.svg',
  alpha3Code: 'NIU',
  borders: [] // No land borders as Niue is an island
},

{
  name: 'Norfolk Island',
  nativeName: 'Norfolk Island',
  population: 2302,
  region: 'Oceania',
  subRegion: 'Australia and New Zealand',
  capital: 'Kingston',
  topLevelDomain: '.nf',
  currency: 'Australian dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/nf.svg',
  alpha3Code: 'NFK',
  borders: [] // No land borders as Norfolk Island is an island
},


{
  name: 'North Macedonia',
  nativeName: 'Македонија',
  population: 2083380,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Skopje',
  topLevelDomain: '.mk',
  currency: 'Macedonian denar',
  languages: ['Macedonian'],
  flag: 'https://flagcdn.com/mk.svg',
  alpha3Code: 'MKD',
  borders: ['ALB', 'BGR', 'GRC', 'UNK', 'SRB']
},

{
  name: 'Northern Mariana Islands',
  nativeName: 'Northern Mariana Islands',
  population: 57557,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Saipan',
  topLevelDomain: '.mp',
  currency: 'United States dollar',
  languages: ['English', 'Chamorro'],
  flag: 'https://flagcdn.com/mp.svg',
  alpha3Code: 'MNP',
  borders: [] // No land borders as Northern Mariana Islands is an island territory
},

{
  name: 'Norway',
  nativeName: 'Norge',
  population: 5379475,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Oslo',
  topLevelDomain: '.no',
  currency: 'Norwegian krone',
  languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
  flag: 'https://flagcdn.com/no.svg',
  alpha3Code: 'NOR',
  borders: ['FIN', 'SWE', 'RUS']
},


{
  name: 'Oman',
  nativeName: 'عمان',
  population: 5106622,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Muscat',
  topLevelDomain: '.om',
  currency: 'Omani rial',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/om.svg',
  alpha3Code: 'OMN',
  borders: ['SAU', 'ARE', 'YEM']
},


{
  name: 'Pakistan',
  nativeName: 'Pakistan',
  population: 220892331,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Islamabad',
  topLevelDomain: '.pk',
  currency: 'Pakistani rupee',
  languages: ['Urdu', 'English'],
  flag: 'https://flagcdn.com/pk.svg',
  alpha3Code: 'PAK',
  borders: ['AFG', 'CHN', 'IND', 'IRN']
},


{
  name: 'Palau',
  nativeName: 'Palau',
  population: 18092,
  region: 'Oceania',
  subRegion: 'Micronesia',
  capital: 'Ngerulmud',
  topLevelDomain: '.pw',
  currency: 'United States dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/pw.svg',
  alpha3Code: 'PLW',
  borders: [] // No land borders as Palau is an island nation
},

{
  name: 'Palestine, State of',
  nativeName: 'فلسطين',
  population: 4803269,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Ramallah',
  topLevelDomain: '.ps',
  currency: 'Egyptian pound, Israeli new shekel, Jordanian dinar',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/ps.svg',
  alpha3Code: 'PSE',
  borders: ['ISR', 'EGY', 'JOR']
},

{
  name: 'Panama',
  nativeName: 'Panamá',
  population: 4314768,
  region: 'Americas',
  subRegion: 'Central America',
  capital: 'Panama City',
  topLevelDomain: '.pa',
  currency: 'Panamanian balboa, United States dollar',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/pa.svg',
  alpha3Code: 'PAN',
  borders: ['COL', 'CRI']
},

{
  name: 'Papua New Guinea',
  nativeName: 'Papua Niugini',
  population: 8947027,
  region: 'Oceania',
  subRegion: 'Melanesia',
  capital: 'Port Moresby',
  topLevelDomain: '.pg',
  currency: 'Papua New Guinean kina',
  languages: ['English'],
  flag: 'https://flagcdn.com/pg.svg',
  alpha3Code: 'PNG',
  borders: ['IDN']
},

{
  name: 'Paraguay',
  nativeName: 'Paraguay',
  population: 7132530,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Asunción',
  topLevelDomain: '.py',
  currency: 'Paraguayan guaraní',
  languages: ['Spanish', 'Guaraní'],
  flag: 'https://flagcdn.com/py.svg',
  alpha3Code: 'PRY',
  borders: ['ARG', 'BOL', 'BRA']
},

{
  name: 'Peru',
  nativeName: 'Perú',
  population: 32971846,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Lima',
  topLevelDomain: '.pe',
  currency: 'Peruvian sol',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/pe.svg',
  alpha3Code: 'PER',
  borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU']
},

{
  name: 'Philippines',
  nativeName: 'Pilipinas',
  population: 109581085,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Manila',
  topLevelDomain: '.ph',
  currency: 'Philippine peso',
  languages: ['English'],
  flag: 'https://flagcdn.com/ph.svg',
  alpha3Code: 'PHL',
  borders: []
},

{
  name: 'Pitcairn',
  nativeName: 'Pitcairn Islands',
  population: 56,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Adamstown',
  topLevelDomain: '.pn',
  currency: ['New Zealand dollar', 'Pitcairn Islands dollar'],
  languages: ['English'],
  flag: 'https://flagcdn.com/pn.svg',
  alpha3Code: 'PCN',
  borders: []
},

{
  name: 'Poland',
  nativeName: 'Polska',
  population: 37950802,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Warsaw',
  topLevelDomain: '.pl',
  currency: 'Polish złoty',
  languages: ['Polish'],
  flag: 'https://flagcdn.com/pl.svg',
  alpha3Code: 'POL',
  borders: ['BLR', 'CZE', 'DEU', 'LTU', 'RUS', 'SVK', 'UKR']
},

{
  name: 'Portugal',
  nativeName: 'Portugal',
  population: 10305564,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Lisbon',
  topLevelDomain: '.pt',
  currency: 'Euro',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/pt.svg',
  alpha3Code: 'PRT',
  borders: ['ESP']
},

{
  name: 'Puerto Rico',
  nativeName: 'Puerto Rico',
  population: 3194034,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'San Juan',
  topLevelDomain: '.pr',
  currency: 'United States dollar',
  languages: ['Spanish', 'English'],
  flag: 'https://flagcdn.com/pr.svg',
  alpha3Code: 'PRI',
  borders: []
},

{
  name: 'Qatar',
  nativeName: 'قطر',
  population: 2881060,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Doha',
  topLevelDomain: '.qa',
  currency: 'Qatari riyal',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/qa.svg',
  alpha3Code: 'QAT',
  borders: ['SAU']
},

{
  name: 'Republic of Kosovo',
  nativeName: 'Republika e Kosovës',
  population: 1775378,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Pristina',
  topLevelDomain: '',
  currency: 'Euro',
  languages: ['Albanian', 'Serbian'],
  flag: 'https://flagcdn.com/xk.svg',
  alpha3Code: 'UNK',
  borders: ['ALB', 'MKD', 'MNE', 'SRB']
},

{
  name: 'Réunion',
  nativeName: 'La Réunion',
  population: 840974,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Saint-Denis',
  topLevelDomain: '.re',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/re.svg',
  alpha3Code: 'REU',
  borders: []
},

{
  name: 'Romania',
  nativeName: 'România',
  population: 19286123,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Bucharest',
  topLevelDomain: '.ro',
  currency: 'Romanian leu',
  languages: ['Romanian'],
  flag: 'https://flagcdn.com/ro.svg',
  alpha3Code: 'ROU',
  borders: ['BGR', 'HUN', 'MDA', 'SRB', 'UKR']
},

{
  name: 'Russian Federation',
  nativeName: 'Россия',
  population: 144104080,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Moscow',
  topLevelDomain: '.ru',
  currency: 'Russian ruble',
  languages: ['Russian'],
  flag: 'https://flagcdn.com/ru.svg',
  alpha3Code: 'RUS',
  borders: [
    'AZE', 'BLR', 'CHN', 'EST', 'FIN', 'GEO', 'KAZ', 'PRK', 
    'LVA', 'LTU', 'MNG', 'NOR', 'POL', 'UKR'
  ]
},

{
  name: 'Rwanda',
  nativeName: 'Rwanda',
  population: 12952209,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Kigali',
  topLevelDomain: '.rw',
  currency: 'Rwandan franc',
  languages: ['Kinyarwanda', 'English', 'French'],
  flag: 'https://flagcdn.com/rw.svg',
  alpha3Code: 'RWA',
  borders: ['BDI', 'COD', 'TZA', 'UGA']
},

{
  name: 'Saint Barthélemy',
  nativeName: 'Saint-Barthélemy',
  population: 9417,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Gustavia',
  topLevelDomain: '.bl',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/bl.svg',
  alpha3Code: 'BLM',
  borders: [] 
},

{
  name: 'Saint Helena, Ascension and Tristan da Cunha',
  nativeName: 'Saint Helena',
  population: 4255,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Jamestown',
  topLevelDomain: '.sh',
  currency: 'Saint Helena pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/sh.svg',
  alpha3Code: 'SHN',
  borders: []
},

{
  name: 'Saint Kitts and Nevis',
  nativeName: 'Saint Kitts and Nevis',
  population: 53192,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Basseterre',
  topLevelDomain: '.kn',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/kn.svg',
  alpha3Code: 'KNA',
  borders: []
},

{
  name: 'Saint Lucia',
  nativeName: 'Saint Lucia',
  population: 183629,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Castries',
  topLevelDomain: '.lc',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/lc.svg',
  alpha3Code: 'LCA',
  borders: []
},

{
  name: 'Saint Martin (French part)',
  nativeName: 'Saint-Martin',
  population: 38659,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Marigot',
  topLevelDomain: ['.mf', '.fr', '.gp'],
  currency: 'Euro',
  languages: ['English', 'French', 'Dutch'],
  flag: 'https://flagcdn.com/mf.svg',
  alpha3Code: 'MAF',
  borders: ['SXM', 'NLD']
},

{
  name: 'Saint Pierre and Miquelon',
  nativeName: 'Saint-Pierre-et-Miquelon',
  population: 6069,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: 'Saint-Pierre',
  topLevelDomain: '.pm',
  currency: 'Euro',
  languages: ['French'],
  flag: 'https://flagcdn.com/pm.svg',
  alpha3Code: 'SPM',
  borders: []
},

{
  name: 'Saint Vincent and the Grenadines',
  nativeName: 'Saint Vincent and the Grenadines',
  population: 110947,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Kingstown',
  topLevelDomain: '.vc',
  currency: 'East Caribbean dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/vc.svg',
  alpha3Code: 'VCT',
  borders: []
},

{
  name: 'Samoa',
  nativeName: 'Samoa',
  population: 198410,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Apia',
  topLevelDomain: '.ws',
  currency: 'Samoan tālā',
  languages: ['Samoan', 'English'],
  flag: 'https://flagcdn.com/ws.svg',
  alpha3Code: 'WSM',
  borders: []
},


{
  name: 'San Marino',
  nativeName: 'San Marino',
  population: 33938,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'City of San Marino',
  topLevelDomain: '.sm',
  currency: 'Euro',
  languages: ['Italian'],
  flag: 'https://flagcdn.com/sm.svg',
  alpha3Code: 'SMR',
  borders: ['ITA']
},

{
  name: 'São Tomé and Príncipe',
  nativeName: 'São Tomé e Príncipe',
  population: 219161,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'São Tomé',
  topLevelDomain: '.st',
  currency: 'São Tomé and Príncipe dobra',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/st.svg',
  alpha3Code: 'STP',
  borders: []
},

{
  name: 'Saudi Arabia',
  nativeName: 'العربية السعودية',
  population: 34813867,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Riyadh',
  topLevelDomain: '.sa',
  currency: 'Saudi riyal',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/sa.svg',
  alpha3Code: 'SAU',
  borders: ['IRQ', 'JOR', 'KWT', 'OMN', 'QAT', 'ARE', 'YEM']
},

{
  name: 'Senegal',
  nativeName: 'Sénégal',
  population: 16743930,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Dakar',
  topLevelDomain: '.sn',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/sn.svg',
  alpha3Code: 'SEN',
  borders: ['GMB', 'GIN', 'GNB', 'MLI', 'MRT']
},

{
  name: 'Serbia',
  nativeName: 'Србија',
  population: 6908224,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Belgrade',
  topLevelDomain: '.rs',
  currency: 'Serbian dinar',
  languages: ['Serbian'],
  flag: 'https://flagcdn.com/rs.svg',
  alpha3Code: 'SRB',
  borders: ['BIH', 'BGR', 'HRV', 'HUN', 'UNK', 'MKD', 'MNE', 'ROU']
},

{
  name: 'Seychelles',
  nativeName: 'Seychelles',
  population: 98462,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Victoria',
  topLevelDomain: '.sc',
  currency: 'Seychellois rupee',
  languages: ['French', 'English'],
  flag: 'https://flagcdn.com/sc.svg',
  alpha3Code: 'SYC',
  borders: []
},

{
  name: 'Sierra Leone',
  nativeName: 'Sierra Leone',
  population: 7976985,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Freetown',
  topLevelDomain: '.sl',
  currency: 'Sierra Leonean leone',
  languages: ['English'],
  flag: 'https://flagcdn.com/sl.svg',
  alpha3Code: 'SLE',
  borders: ['GIN', 'LBR']
},

{
  name: 'Singapore',
  nativeName: 'Singapore',
  population: 5685807,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Singapore',
  topLevelDomain: '.sg',
  currency: 'Singapore dollar',
  languages: ['English', 'Malay', 'Tamil', 'Chinese'],
  flag: 'https://flagcdn.com/sg.svg',
  alpha3Code: 'SGP',
  borders: []
},

{
  name: 'Sint Maarten (Dutch part)',
  nativeName: 'Sint Maarten',
  population: 40812,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Philipsburg',
  topLevelDomain: '.sx',
  currency: 'Netherlands Antillean guilder',
  languages: ['Dutch', 'English'],
  flag: 'https://flagcdn.com/sx.svg',
  alpha3Code: 'SXM',
  borders: []
},

{
  name: 'Slovakia',
  nativeName: 'Slovensko',
  population: 5458827,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Bratislava',
  topLevelDomain: '.sk',
  currency: 'Euro',
  languages: ['Slovak'],
  flag: 'https://flagcdn.com/sk.svg',
  alpha3Code: 'SVK',
  borders: []
},

{
  name: 'Slovenia',
  nativeName: 'Slovenija',
  population: 2100126,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Ljubljana',
  topLevelDomain: '.si',
  currency: 'Euro',
  languages: ['Slovene'],
  flag: 'https://flagcdn.com/si.svg',
  alpha3Code: 'SVN',
  borders: []
},


{
  name: 'Solomon Islands',
  nativeName: 'Solomon Islands',
  population: 686878,
  region: 'Oceania',
  subRegion: 'Melanesia',
  capital: 'Honiara',
  topLevelDomain: '.sb',
  currency: 'Solomon Islands dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/sb.svg',
  alpha3Code: 'SLB',
  borders: []
},

{
  name: 'Somalia',
  nativeName: 'Soomaaliya',
  population: 15893219,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Mogadishu',
  topLevelDomain: '.so',
  currency: 'Somali shilling',
  languages: ['Somali', 'Arabic'],
  flag: 'https://flagcdn.com/so.svg',
  alpha3Code: 'SOM',
  borders: ['DJI', 'ETH', 'KEN']
},

{
  name: 'South Africa',
  nativeName: 'South Africa',
  population: 59308690,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Pretoria',
  topLevelDomain: '.za',
  currency: 'South African rand',
  languages: [
    'Afrikaans',
    'English',
    'Southern Ndebele',
    'Southern Sotho',
    'Swati',
    'Tswana',
    'Tsonga',
    'Venda',
    'Xhosa',
    'Zulu'
  ],
  flag: 'https://flagcdn.com/za.svg',
  alpha3Code: 'ZAF',
  borders: ['BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE']
},

{
  name: 'South Georgia and the South Sandwich Islands',
  nativeName: 'South Georgia',
  population: 30,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'King Edward Point',
  topLevelDomain: '.gs',
  currency: 'Falkland Islands Pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/gs.svg',
  alpha3Code: 'SGS',
  borders: []
},

{
  name: 'Korea (Republic of)',
  nativeName: '대한민국',
  population: 51780579,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Seoul',
  topLevelDomain: '.kr',
  currency: 'South Korean won',
  languages: ['Korean'],
  flag: 'https://flagcdn.com/kr.svg',
  alpha3Code: 'KOR',
  borders: ['PRK']
},


{
  name: 'Spain',
  nativeName: 'España',
  population: 47351567,
  region: 'Europe',
  subRegion: 'Southern Europe',
  capital: 'Madrid',
  topLevelDomain: '.es',
  currency: 'Euro',
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/es.svg',
  alpha3Code: 'ESP',
  borders: ['AND', 'FRA', 'GIB', 'PRT', 'MAR']
},

{
  name: 'Sri Lanka',
  nativeName: 'śrī laṃkāva',
  population: 21919000,
  region: 'Asia',
  subRegion: 'Southern Asia',
  capital: 'Sri Jayawardenepura Kotte',
  topLevelDomain: '.lk',
  currency: 'Sri Lankan rupee',
  languages: ['Sinhalese', 'Tamil'],
  flag: 'https://flagcdn.com/lk.svg',
  alpha3Code: 'LKA',
  borders: ['IND']
},

{
  name: 'Sudan',
  nativeName: 'السودان',
  population: 43849269,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Khartoum',
  topLevelDomain: '.sd',
  currency: 'Sudanese pound',
  languages: ['Arabic', 'English'],
  flag: 'https://flagcdn.com/sd.svg',
  alpha3Code: 'SDN',
  borders: ['CAF', 'TCD', 'EGY', 'ERI', 'ETH', 'LBY', 'SSD']
},



{
  name: 'South Sudan',
  nativeName: 'South Sudan',
  population: 11193729,
  region: 'Africa',
  subRegion: 'Middle Africa',
  capital: 'Juba',
  topLevelDomain: '.ss',
  currency: 'South Sudanese pound',
  languages: ['English'],
  flag: 'https://flagcdn.com/ss.svg',
  alpha3Code: 'SSD',
  borders: ['CAF', 'COD', 'ETH', 'KEN', 'SDN', 'UGA']
},

{
  name: 'Suriname',
  nativeName: 'Suriname',
  population: 586634,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Paramaribo',
  topLevelDomain: '.sr',
  currency: 'Surinamese dollar',
  languages: ['Dutch'],
  flag: 'https://flagcdn.com/sr.svg',
  alpha3Code: 'SUR',
  borders: ['BRA', 'FRA', 'GUF', 'GUY']
},

{
  name: 'Svalbard and Jan Mayen',
  nativeName: 'Svalbard og Jan Mayen',
  population: 2562,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Longyearbyen',
  topLevelDomain: '.sj',
  currency: 'Norwegian krone',
  languages: ['Norwegian'],
  flag: 'https://flagcdn.com/sj.svg',
  alpha3Code: 'SJM',
  borders: []
},

{
  name: 'Swaziland',
  nativeName: 'Swaziland',
  population: 1160164,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Mbabane',
  topLevelDomain: '.sz',
  currency: 'Swazi lilangeni',
  languages: ['English', 'Swati'],
  flag: 'https://flagcdn.com/sz.svg',
  alpha3Code: 'SWZ',
  borders: ['MOZ', 'ZAF']
},

{
  name: 'Sweden',
  nativeName: 'Sverige',
  population: 10353442,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'Stockholm',
  topLevelDomain: '.se',
  currency: 'Swedish krona',
  languages: ['Swedish'],
  flag: 'https://flagcdn.com/se.svg',
  alpha3Code: 'SWE',
  borders: ['FIN', 'NOR']
},

{
  name: 'Switzerland',
  nativeName: 'Schweiz',
  population: 8636896,
  region: 'Europe',
  subRegion: 'Central Europe',
  capital: 'Bern',
  topLevelDomain: '.ch',
  currency: 'Swiss franc',
  languages: ['German', 'French', 'Italian', 'Romansh'],
  flag: 'https://flagcdn.com/ch.svg',
  alpha3Code: 'CHE',
  borders: ['AUT', 'FRA', 'ITA', 'LIE', 'DEU']
},

{
  name: 'Syria',
  nativeName: 'سوريا',
  population: 17500657,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Damascus',
  topLevelDomain: '.sy',
  currency: 'Syrian pound',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/sy.svg',
  alpha3Code: 'SYR',
  borders: ['IRQ', 'ISR', 'JOR', 'LBN', 'TUR']
},

{
  name: 'Taiwan',
  nativeName: '臺灣',
  population: 23503349,
  region: 'Asia',
  subRegion: 'Eastern Asia',
  capital: 'Taipei',
  topLevelDomain: '.tw',
  currency: 'New Taiwan dollar',
  languages: ['Chinese'],
  flag: 'https://flagcdn.com/tw.svg',
  alpha3Code: 'TWN',
  borders: []  // Taiwan does not share borders with any country
},

{
  name: 'Tajikistan',
  nativeName: 'Тоҷикистон',
  population: 9537642,
  region: 'Asia',
  subRegion: 'Central Asia',
  capital: 'Dushanbe',
  topLevelDomain: '.tj',
  currency: 'Tajikistani somoni',
  languages: ['Tajik', 'Russian'],
  flag: 'https://flagcdn.com/tj.svg',
  alpha3Code: 'TJK',
  borders: ['AFG', 'CHN', 'KGZ', 'UZB']
},

{
  name: 'Thailand',
  nativeName: 'ประเทศไทย',
  population: 69799978,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Bangkok',
  topLevelDomain: '.th',
  currency: 'Thai baht',
  languages: ['Thai'],
  flag: 'https://flagcdn.com/th.svg',
  alpha3Code: 'THA',
  borders: ['MMR', 'KHM', 'LAO', 'MYS']
},

{
  name: 'Timor-Leste',
  nativeName: 'Timor-Leste',
  population: 1318442,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Dili',
  topLevelDomain: '.tl',
  currency: 'United States Dollar',
  languages: ['Portuguese'],
  flag: 'https://flagcdn.com/tl.svg',
  alpha3Code: 'TLS',
  borders: ['IDN']
},

{
  name: 'Togo',
  nativeName: 'Togo',
  population: 8278737,
  region: 'Africa',
  subRegion: 'Western Africa',
  capital: 'Lomé',
  topLevelDomain: '.tg',
  currency: 'West African CFA franc',
  languages: ['French'],
  flag: 'https://flagcdn.com/tg.svg',
  alpha3Code: 'TGO',
  borders: ['BEN', 'BFA', 'GHA']
},

{
  name: 'Tokelau',
  nativeName: 'Tokelau',
  population: 1411,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Fakaofo',
  topLevelDomain: '.tk',
  currency: 'New Zealand dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/tk.svg',
  alpha3Code: 'TKL',
  borders: []
},

{
  name: 'Tonga',
  nativeName: 'Tonga',
  population: 105697,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Nuku\'alofa',
  topLevelDomain: '.to',
  currency: 'Tongan paʻanga',
  languages: ['English', 'Tonga (Tonga Islands)'],
  flag: 'https://flagcdn.com/to.svg',
  alpha3Code: 'TON',
  borders: []
},

{
  name: 'Trinidad and Tobago',
  nativeName: 'Trinidad and Tobago',
  population: 1399491,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Port of Spain',
  topLevelDomain: '.tt',
  currency: 'Trinidad and Tobago dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/tt.svg',
  alpha3Code: 'TTO',
  borders: []
},

{
  name: 'Tunisia',
  nativeName: 'تونس',
  population: 11818618,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'Tunis',
  topLevelDomain: '.tn',
  currency: 'Tunisian dinar',
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/tn.svg',
  alpha3Code: 'TUN',
  borders: ['DZA', 'LBY']
},

{
  name: 'Turkey',
  nativeName: 'Türkiye',
  population: 84339067,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Ankara',
  topLevelDomain: '.tr',
  currency: 'Turkish lira',
  languages: ['Turkish'],
  flag: 'https://flagcdn.com/tr.svg',
  alpha3Code: 'TUR',
  borders: ['ARM', 'AZE', 'BGR', 'GEO', 'GRC', 'IRN', 'IRQ', 'SYR']
},

{
  name: 'Turkmenistan',
  nativeName: 'Türkmenistan',
  population: 6031187,
  region: 'Asia',
  subRegion: 'Central Asia',
  capital: 'Ashgabat',
  topLevelDomain: '.tm',
  currency: 'Turkmenistan manat',
  languages: ['Turkmen', 'Russian'],
  flag: 'https://flagcdn.com/tm.svg',
  alpha3Code: 'TKM',
  borders: ['AFG', 'IRN', 'KAZ', 'UZB']
},

{
  name: 'Turks and Caicos Islands',
  nativeName: 'Turks and Caicos Islands',
  population: 38718,
  region: 'Americas',
  subRegion: 'Caribbean',
  capital: 'Cockburn Town',
  topLevelDomain: '.tc',
  currency: 'United States dollar',
  languages: ['English'],
  flag: 'https://flagcdn.com/tc.svg',
  alpha3Code: 'TCA',
  borders: []
},

{
  name: 'Tuvalu',
  nativeName: 'Tuvalu',
  population: 11792,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Funafuti',
  topLevelDomain: '.tv',
  currencies: ['Australian dollar', 'Tuvaluan dollar'],
  languages: ['English'],
  flag: 'https://flagcdn.com/tv.svg',
  alpha3Code: 'TUV',
  borders: []
},

{
  name: 'Uganda',
  nativeName: 'Uganda',
  population: 45741000,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Kampala',
  topLevelDomain: '.ug',
  currencies: ['Ugandan shilling'],
  languages: ['English', 'Swahili'],
  flag: 'https://flagcdn.com/ug.svg',
  alpha3Code: 'UGA',
  borders: ['COD', 'KEN', 'RWA', 'SSD', 'TZA']
},

{
  name: 'Ukraine',
  nativeName: 'Україна',
  population: 44134693,
  region: 'Europe',
  subRegion: 'Eastern Europe',
  capital: 'Kyiv',
  topLevelDomain: '.ua',
  currencies: ['Ukrainian hryvnia'],
  languages: ['Ukrainian'],
  flag: 'https://flagcdn.com/ua.svg',
  alpha3Code: 'UKR',
  borders: ['BLR', 'HUN', 'MDA', 'POL', 'ROU', 'RUS', 'SVK']
},

{
  name: 'United Arab Emirates',
  nativeName: 'دولة الإمارات العربية المتحدة',
  population: 9890400,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Abu Dhabi',
  topLevelDomain: '.ae',
  currencies: ['United Arab Emirates dirham'],
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/ae.svg',
  alpha3Code: 'ARE',
  borders: ['OMN', 'SAU']
},

{
  name: 'United Kingdom of Great Britain and Northern Ireland',
  nativeName: 'United Kingdom',
  population: 67215293,
  region: 'Europe',
  subRegion: 'Northern Europe',
  capital: 'London',
  topLevelDomain: '.uk',
  currencies: ['British pound'],
  languages: ['English'],
  flag: 'https://flagcdn.com/gb.svg',
  alpha3Code: 'GBR',
  borders: ['IRL']
},

{
  name: 'United States of America',
  nativeName: 'United States',
  population: 329484123,
  region: 'Americas',
  subRegion: 'Northern America',
  capital: 'Washington, D.C.',
  topLevelDomain: '.us',
  currencies: ['United States dollar'],
  languages: ['English'],
  flag: 'https://flagcdn.com/us.svg',
  alpha3Code: 'USA',
  borders: ['CAN', 'MEX']
},

{
  name: 'Uruguay',
  nativeName: 'Uruguay',
  population: 3473727,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Montevideo',
  topLevelDomain: '.uy',
  currencies: ['Uruguayan peso'],
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/uy.svg',
  alpha3Code: 'URY',
  borders: ['ARG', 'BRA']
},

{
  name: 'Uzbekistan',
  nativeName: 'O‘zbekiston',
  population: 34232050,
  region: 'Asia',
  subRegion: 'Central Asia',
  capital: 'Tashkent',
  topLevelDomain: '.uz',
  currencies: ['Uzbekistani so\'m'],
  languages: ['Uzbek', 'Russian'],
  flag: 'https://flagcdn.com/uz.svg',
  alpha3Code: 'UZB',
  borders: ['AFG', 'KAZ', 'KGZ', 'TJK', 'TKM']
},

{
  name: 'Vanuatu',
  nativeName: 'Vanuatu',
  population: 307150,
  region: 'Oceania',
  subRegion: 'Melanesia',
  capital: 'Port Vila',
  topLevelDomain: '.vu',
  currencies: ['Vanuatu vatu'],
  languages: ['Bislama', 'English', 'French'],
  flag: 'https://flagcdn.com/vu.svg',
  alpha3Code: 'VUT',
  borders: []
},

{
  name: 'Venezuela (Bolivarian Republic of)',
  nativeName: 'Venezuela',
  population: 28435943,
  region: 'Americas',
  subRegion: 'South America',
  capital: 'Caracas',
  topLevelDomain: '.ve',
  currencies: ['Venezuelan bolívar'],
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/ve.svg',
  alpha3Code: 'VEN',
  borders: ['BRA', 'COL', 'GUY']
},

{
  name: 'Vietnam',
  nativeName: 'Việt Nam',
  population: 97338583,
  region: 'Asia',
  subRegion: 'South-Eastern Asia',
  capital: 'Hanoi',
  topLevelDomain: '.vn',
  currencies: ['Vietnamese đồng'],
  languages: ['Vietnamese'],
  flag: 'https://flagcdn.com/vn.svg',
  alpha3Code: 'VNM',
  borders: ['KHM', 'CHN', 'LAO']
},

{
  name: 'Wallis and Futuna',
  nativeName: 'Wallis et Futuna',
  population: 11750,
  region: 'Oceania',
  subRegion: 'Polynesia',
  capital: 'Mata-Utu',
  topLevelDomain: '.wf',
  currencies: ['CFP franc'],
  languages: ['French'],
  flag: 'https://flagcdn.com/wf.svg',
  alpha3Code: 'WLF',
  borders: []
},

{
  name: 'Western Sahara',
  nativeName: 'الصحراء الغربية',
  population: 510713,
  region: 'Africa',
  subRegion: 'Northern Africa',
  capital: 'El Aaiún',
  topLevelDomain: '.eh',
  currencies: ['Moroccan dirham', 'Algerian dinar'],
  languages: ['Spanish'],
  flag: 'https://flagcdn.com/eh.svg',
  alpha3Code: 'ESH',
  borders: ['DZA', 'MRT', 'MAR']
},

{
  name: 'Yemen',
  nativeName: 'اليَمَن',
  population: 29825968,
  region: 'Asia',
  subRegion: 'Western Asia',
  capital: 'Sana\'a',
  topLevelDomain: '.ye',
  currencies: ['Yemeni rial'],
  languages: ['Arabic'],
  flag: 'https://flagcdn.com/ye.svg',
  alpha3Code: 'YEM',
  borders: ['OMN', 'SAU']
},

{
  name: 'Zambia',
  nativeName: 'Zambia',
  population: 18383956,
  region: 'Africa',
  subRegion: 'Eastern Africa',
  capital: 'Lusaka',
  topLevelDomain: '.zm',
  currencies: ['Zambian kwacha'],
  languages: ['English'],
  flag: 'https://flagcdn.com/zm.svg',
  alpha3Code: 'ZMB',
  borders: ['AGO', 'BWA', 'COD', 'MWI', 'MOZ', 'NAM', 'TZA', 'ZWE']
},


{
  name: 'Zimbabwe',
  nativeName: 'Zimbabwe',
  population: 14862927,
  region: 'Africa',
  subRegion: 'Southern Africa',
  capital: 'Harare',
  topLevelDomain: '.zw',
  currencies: ['Zambian kwacha'],
  languages: ['English', 'Shona', 'Northern Ndebele'],
  flag: 'https://flagcdn.com/zw.svg',
  alpha3Code: 'ZWE',
  borders: ['BWA', 'MOZ', 'ZAF', 'ZMB']
},





];

// Function to get query parameters from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Function to handle selecting a country by alpha3Code
function selectCountryByCode(alpha3Code) {
  const country = countries.find(c => c.alpha3Code === alpha3Code);
  if (country) {
    populateCountryDetails(country);
  } else {
    console.error('Country not found:', alpha3Code);
  }
}

// Check if there's a 'country' parameter in the URL
const selectedCountryCode = getQueryParam('country');

// Apply the saved theme when the page loads
applySavedTheme();

// If a country is specified in the URL, load that country's details, otherwise default to the first country
if (selectedCountryCode) {
  selectCountryByCode(selectedCountryCode);
} else {
  populateCountryDetails(countries[0]); // Default to the first country in the list
}
