document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const filterBox = document.getElementById('filter-box');
  const dropdownContent = document.getElementById('dropdown-content');
  const dropdownItems = dropdownContent.querySelectorAll('.dropdown-item');
  const countryContainer = document.querySelector('.country-container');
  const searchInput = document.querySelector('.search-input');

  function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.toggle('dark-mode', savedTheme === 'dark');
      themeToggle.querySelector('span').textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
      themeToggle.querySelector('img').src = savedTheme === 'dark' ? 'icon-sun.svg' : 'icon-moon.svg';
      const arrowIcon = document.querySelector('.icon-arrow-down');
      if (arrowIcon) {
        arrowIcon.src = savedTheme === 'dark' ? 'gray-icon-arrow-down.svg' : 'icon-arrow-down.svg';
      }
    } else {
      body.classList.remove('dark-mode');
      themeToggle.querySelector('span').textContent = 'Dark Mode';
      themeToggle.querySelector('img').src = 'icon-moon.svg';
      const arrowIcon = document.querySelector('.icon-arrow-down');
      if (arrowIcon) {
        arrowIcon.src = 'icon-arrow-down.svg';
      }
    }
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    themeToggle.querySelector('span').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    themeToggle.querySelector('img').src = isDarkMode ? 'icon-sun.svg' : 'icon-moon.svg';
    const arrowIcon = document.querySelector('.icon-arrow-down');
    if (arrowIcon) {
      arrowIcon.src = isDarkMode ? 'gray-icon-arrow-down.svg' : 'icon-arrow-down.svg';
    }
  });

  const countries = [
{
  name: "Afghanistan",
  capital: "Kabul",
  region: "Asia",
  subregion: "Southern Asia",
  population: 40218234,
  flags: {
    svg: "https://flagcdn.com/af.svg"
  },
  link: "country.html?country=AFG"
},


{
  name: "Åland Islands",
  capital: "Mariehamn",
  region: "Europe",
  subregion: "Northern Europe",
  population: 28875,
  flags: {
    svg: "https://flagcdn.com/ax.svg"
  },
  link: "country.html?country=ALA"
},


{
  name: "Albania",
  capital: "Tirana",
  region: "Europe",
  subregion: "Southern Europe",
  population: 2837743,
  flags: {
    svg: "https://flagcdn.com/al.svg"
  },
  link: "country.html?country=ALB"
},



{
  name: "Algeria",
  capital: "Algiers",
  region: "Africa",
  subregion: "Northern Africa",
  population: 44700000,
  flags: {
    svg: "https://flagcdn.com/dz.svg"
  },
  link: "country.html?country=DZA"
},


{
  name: "American Samoa",
  capital: "Pago Pago",
  region: "Oceania",
  subregion: "Polynesia",
  population: 55197,
  flags: {
    svg: "https://flagcdn.com/as.svg"
  },
  link: "country.html?country=ASM"
},


{
  name: "Andorra",
  capital: "Andorra la Vella",
  region: "Europe",
  subregion: "Southern Europe",
  population: 77265,
  flags: {
    svg: "https://flagcdn.com/ad.svg"
  },
  link: "country.html?country=AND"
},


{
  name: "Angola",
  capital: "Luanda",
  region: "Africa",
  subregion: "Middle Africa",
  population: 32866268,
  flags: {
    svg: "https://flagcdn.com/ao.svg"
  },
  link: "country.html?country=AGO"
},

{
  name: "Anguilla",
  capital: "The Valley",
  region: "Americas",
  subregion: "Caribbean",
  population: 13452,
  flags: {
    svg: "https://flagcdn.com/ai.svg"
  },
  link: "country.html?country=AIA"
},


{
  name: "Antarctica",
  capital: null,
  region: "Polar",
  subregion: "Antarctica",
  population: 1000,
  flags: {
    svg: "https://flagcdn.com/aq.svg"
  },
  link: "country.html?country=ATA"
},


{
  name: "Antigua and Barbuda",
  capital: "Saint John's",
  region: "Americas",
  subregion: "Caribbean",
  population: 97928,
  flags: {
    svg: "https://flagcdn.com/ag.svg"
  },
  link: "country.html?country=ATG"
},


{
  name: "Argentina",
  capital: "Buenos Aires",
  region: "Americas",
  subregion: "South America",
  population: 45376763,
  flags: {
    svg: "https://flagcdn.com/ar.svg"
  },
  link: "country.html?country=ARG"
},


{
  name: "Armenia",
  capital: "Yerevan",
  region: "Asia",
  subregion: "Western Asia",
  population: 2963234,
  flags: {
    svg: "https://flagcdn.com/am.svg"
  },
  link: "country.html?country=ARM"
},


{
  name: "Aruba",
  capital: "Oranjestad",
  region: "Americas",
  subregion: "Caribbean",
  population: 106766,
  flags: {
    svg: "https://flagcdn.com/aw.svg"
  },
  link: "country.html?country=ABW"
},


{
  name: "Australia",
  capital: "Canberra",
  region: "Oceania",
  subregion: "Australia and New Zealand",
  population: 25687041,
  flags: {
    svg: "https://flagcdn.com/au.svg"
  },
  link: "country.html?country=AUS"
},


{
  name: "Austria",
  capital: "Vienna",
  region: "Europe",
  subregion: "Central Europe",
  population: 8917205,
  flags: {
    svg: "https://flagcdn.com/at.svg"
  },
  link: "country.html?country=AUT"
},


{
  name: "Azerbaijan",
  capital: "Baku",
  region: "Asia",
  subregion: "Western Asia",
  population: 10110116,
  flags: {
    svg: "https://flagcdn.com/az.svg"
  },
  link: "country.html?country=AZE"
},


{
  name: "Bahamas",
  capital: "Nassau",
  region: "Americas",
  subregion: "Caribbean",
  population: 393248,
  flags: {
    svg: "https://flagcdn.com/bs.svg"
  },
  link: "country.html?country=BHS"
},


{
  name: "Bahrain",
  capital: "Manama",
  region: "Asia",
  subregion: "Western Asia",
  population: 1701583,
  flags: {
    svg: "https://flagcdn.com/bh.svg"
  },
  link: "country.html?country=BHR"
},


{
  name: "Bangladesh",
  capital: "Dhaka",
  region: "Asia",
  subregion: "Southern Asia",
  population: 164689383,
  flags: {
    svg: "https://flagcdn.com/bd.svg"
  },
  link: "country.html?country=BGD"
},


{
  name: "Barbados",
  capital: "Bridgetown",
  region: "Americas",
  subregion: "Caribbean",
  population: 287371,
  flags: {
    svg: "https://flagcdn.com/bb.svg"
  },
  link: "country.html?country=BRB"
},


{
  name: "Belarus",
  capital: "Minsk",
  region: "Europe",
  subregion: "Eastern Europe",
  population: 9398861,
  flags: {
    svg: "https://flagcdn.com/by.svg"
  },
  link: "country.html?country=BLR"
},


{
  name: "Belgium",
  capital: "Brussels",
  region: "Europe",
  subregion: "Western Europe",
  population: 11555997,
  flags: {
    svg: "https://flagcdn.com/be.svg"
  },
  link: "country.html?country=BEL"
},


{
  name: "Belize",
  capital: "Belmopan",
  region: "Americas",
  subregion: "Central America",
  population: 397621,
  flags: {
    svg: "https://flagcdn.com/bz.svg"
  },
  link: "country.html?country=BLZ"
},


{
  name: "Benin",
  capital: "Porto-Novo",
  region: "Africa",
  subregion: "Western Africa",
  population: 12123198,
  flags: {
    svg: "https://flagcdn.com/bj.svg"
  },
  link: "country.html?country=BEN"
},


{
  name: "Bermuda",
  capital: "Hamilton",
  region: "Americas",
  subregion: "Northern America",
  population: 63903,
  flags: {
    svg: "https://flagcdn.com/bm.svg"
  },
  link: "country.html?country=BMU"
},


{
  name: "Bhutan",
  capital: "Thimphu",
  region: "Asia",
  subregion: "Southern Asia",
  population: 771612,
  flags: {
    svg: "https://flagcdn.com/bt.svg"
  },
  link: "country.html?country=BTN"
},


{
  name: "Bolivia (Plurinational State of)",
  capital: "Sucre",
  region: "Americas",
  subregion: "South America",
  population: 11673029,
  flags: {
    svg: "https://flagcdn.com/bo.svg"
  },
  link: "country.html?country=BOL"
},


{
  name: "Bonaire, Sint Eustatius and Saba",
  capital: "Kralendijk",
  region: "Americas",
  subregion: "Caribbean",
  population: 17408,
  flags: {
    svg: "https://flagcdn.com/bq.svg"
  },
  link: "country.html?country=BES"
},


{
  name: "Bosnia and Herzegovina",
  capital: "Sarajevo",
  region: "Europe",
  subregion: "Southern Europe",
  population: 3280815,
  flags: {
    svg: "https://flagcdn.com/ba.svg"
  },
  link: "country.html?country=BIH"
},


{
  name: "Botswana",
  capital: "Gaborone",
  region: "Africa",
  subregion: "Southern Africa",
  population: 2351625,
  flags: {
    svg: "https://flagcdn.com/bw.svg"
  },
  link: "country.html?country=BWA"
},


{
  name: "Bouvet Island",
  capital: null,
  region: "Antarctic Ocean",
  subregion: "South Antarctic Ocean",
  population: 0,
  flags: {
    svg: "https://flagcdn.com/bv.svg"
  },
  link: "country.html?country=BVT"
},


{
  name: "Brazil",
  capital: "Brasília",
  region: "Americas",
  subregion: "South America",
  population: 212559409,
  flags: {
    svg: "https://flagcdn.com/br.svg"
  },
  link: "country.html?country=BRA"
},


{
  name: "British Indian Ocean Territory",
  capital: "Diego Garcia",
  region: "Africa",
  subregion: "Eastern Africa",
  population: 3000,
  flags: {
    svg: "https://flagcdn.com/io.svg"
  },
  link: "country.html?country=IOT"
},


{
  name: "United States Minor Outlying Islands",
  capital: null,
  region: "Americas",
  subregion: "Northern America",
  population: 300,
  flags: {
    svg: "https://flagcdn.com/um.svg"
  },
  link: "country.html?country=UMI"
},


{
  name: "Virgin Islands (British)",
  capital: "Road Town",
  region: "Americas",
  subregion: "Caribbean",
  population: 30237,
  flags: {
    svg: "https://flagcdn.com/vg.svg"
  },
  link: "country.html?country=VGB"
},


{
  name: "Virgin Islands (U.S.)",
  capital: "Charlotte Amalie",
  region: "Americas",
  subregion: "Caribbean",
  population: 106290,
  flags: {
    svg: "https://flagcdn.com/vi.svg"
  },
  link: "country.html?country=VIR"
},


{
  name: "Brunei Darussalam",
  capital: "Bandar Seri Begawan",
  region: "Asia",
  subregion: "South-Eastern Asia",
  population: 437483,
  flags: {
    svg: "https://flagcdn.com/bn.svg"
  },
  link: "country.html?country=BRN"
},


{
  name: "Bulgaria",
  capital: "Sofia",
  region: "Europe",
  subregion: "Eastern Europe",
  population: 6927288,
  flags: {
    svg: "https://flagcdn.com/bg.svg"
  },
  link: "country.html?country=BGR"
},


{
  name: "Burkina Faso",
  capital: "Ouagadougou",
  region: "Africa",
  subregion: "Western Africa",
  population: 20903278,
  flags: {
    svg: "https://flagcdn.com/bf.svg"
  },
  link: "country.html?country=BFA"
},


{
  name: "Burundi",
  capital: "Gitega",
  region: "Africa",
  subregion: "Eastern Africa",
  population: 11890781,
  flags: {
    svg: "https://flagcdn.com/bi.svg"
  },
  link: "country.html?country=BDI"
},


{
  name: "Cambodia",
  capital: "Phnom Penh",
  region: "Asia",
  subregion: "South-Eastern Asia",
  population: 16718971,
  flags: {
    svg: "https://flagcdn.com/kh.svg"
  },
  link: "country.html?country=KHM"
},


{
  name: "Cameroon",
  capital: "Yaoundé",
  region: "Africa",
  subregion: "Middle Africa",
  population: 26545864,
  flags: {
    svg: "https://flagcdn.com/cm.svg"
  },
  link: "country.html?country=CMR"
},


{
  name: "Canada",
  capital: "Ottawa",
  region: "Americas",
  subregion: "Northern America",
  population: 38005238,
  flags: {
    svg: "https://flagcdn.com/ca.svg"
  },
  link: "country.html?country=CAN"
},


{
  name: "Cabo Verde",
  capital: "Praia",
  region: "Africa",
  subregion: "Western Africa",
  population: 555988,
  flags: {
    svg: "https://flagcdn.com/cv.svg"
  },
  link: "country.html?country=CPV"
},


{
  "name": "Cayman Islands",
  "capital": "George Town",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 65720,
  "flags": {
    "svg": "https://flagcdn.com/ky.svg"
  },
  "link": "country.html?country=CYM"
},


{
  "name": "Central African Republic",
  "capital": "Bangui",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 4829764,
  "flags": {
    "svg": "https://flagcdn.com/cf.svg"
  },
  "link": "country.html?country=CAF"
},


{
  "name": "Chad",
  "capital": "N'Djamena",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 16425859,
  "flags": {
    "svg": "https://flagcdn.com/td.svg"
  },
  "link": "country.html?country=TCD"
},


{
  "name": "Chile",
  "capital": "Santiago",
  "region": "Americas",
  "subregion": "South America",
  "population": 19116209,
  "flags": {
    "svg": "https://flagcdn.com/cl.svg"
  },
  "link": "country.html?country=CHL"
},


{
  "name": "China",
  "capital": "Beijing",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 1402112000,
  "flags": {
    "svg": "https://flagcdn.com/cn.svg"
  },
  "link": "country.html?country=CHN"
},


{
  "name": "Christmas Island",
  "capital": "Flying Fish Cove",
  "region": "Oceania",
  "subregion": "Australia and New Zealand",
  "population": 2072,
  "flags": {
    "svg": "https://flagcdn.com/cx.svg"
  },
  "link": "country.html?country=CXR"
},


{
  "name": "Cocos (Keeling) Islands",
  "capital": "West Island",
  "region": "Oceania",
  "subregion": "Australia and New Zealand",
  "population": 550,
  "flags": {
    "svg": "https://flagcdn.com/cc.svg"
  },
  "link": "country.html?country=CCK"
},


{
  "name": "Colombia",
  "capital": "Bogotá",
  "region": "Americas",
  "subregion": "South America",
  "population": 50882884,
  "flags": {
    "svg": "https://flagcdn.com/co.svg"
  },
  "link": "country.html?country=COL"
},


{
  "name": "Comoros",
  "capital": "Moroni",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 869595,
  "flags": {
    "svg": "https://flagcdn.com/km.svg"
  },
  "link": "country.html?country=COM"
},


{
  "name": "Congo",
  "capital": "Brazzaville",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 5518092,
  "flags": {
    "svg": "https://flagcdn.com/cg.svg"
  },
  "link": "country.html?code=COG"
},


{
  "name": "Congo (Democratic Republic of the)",
  "capital": "Kinshasa",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 89561404,
  "flags": {
    "svg": "https://flagcdn.com/cd.svg"
  },
  "link": "country.html?country=COD"
},


{
  "name": "Cook Islands",
  "capital": "Avarua",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 18100,
  "flags": {
    "svg": "https://flagcdn.com/ck.svg"
  },
  "link": "country.html?country=COK"
},


{
  "name": "Costa Rica",
  "capital": "San José",
  "region": "Americas",
  "subregion": "Central America",
  "population": 5094114,
  "flags": {
    "svg": "https://flagcdn.com/cr.svg"
  },
  "link": "country.html?country=CRI"
},


{
  "name": "Croatia",
  "capital": "Zagreb",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 4047200,
  "flags": {
    "svg": "https://flagcdn.com/hr.svg"
  },
  "link": "country.html?country=HRV"
},


{
  "name": "Cuba",
  "capital": "Havana",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 11326616,
  "flags": {
    "svg": "https://flagcdn.com/cu.svg"
  },
  "link": "country.html?country=CUB"
},


{
  "name": "Curaçao",
  "capital": "Willemstad",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 155014,
  "flags": {
    "svg": "https://flagcdn.com/cw.svg"
  },
  "link": "country.html?country=CUW"
},


{
  "name": "Cyprus",
  "capital": "Nicosia",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 1207361,
  "flags": {
    "svg": "https://flagcdn.com/cy.svg"
  },
  "link": "country.html?country=CYP"
},


{
  "name": "Czech Republic",
  "capital": "Prague",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 10698896,
  "flags": {
    "svg": "https://flagcdn.com/cz.svg"
  },
  "link": "country.html?country=CZE"
},


{
  "name": "Denmark",
  "capital": "Copenhagen",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 5831404,
  "flags": {
    "svg": "https://flagcdn.com/dk.svg"
  },
  "link": "country.html?country=DNK"
},


{
  "name": "Djibouti",
  "capital": "Djibouti",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 988002,
  "flags": {
    "svg": "https://flagcdn.com/dj.svg"
  },
  "link": "country.html?country=DJI"
},


{
  "name": "Dominica",
  "capital": "Roseau",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 71991,
  "flags": {
    "svg": "https://flagcdn.com/dm.svg"
  },
  "link": "country.html?country=DMA"
},


{
  "name": "Dominican Republic",
  "capital": "Santo Domingo",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 10847904,
  "flags": {
    "svg": "https://flagcdn.com/do.svg"
  },
  "link": "country.html?country=DOM"
},


{
  "name": "Ecuador",
  "capital": "Quito",
  "region": "Americas",
  "subregion": "South America",
  "population": 17643060,
  "flags": {
    "svg": "https://flagcdn.com/ec.svg"
  },
  "link": "country.html?country=ECU"
},


{
  "name": "Egypt",
  "capital": "Cairo",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 102334403,
  "flags": {
    "svg": "https://flagcdn.com/eg.svg"
  },
  "link": "country.html?country=EGY"
},


{
  "name": "El Salvador",
  "capital": "San Salvador",
  "region": "Americas",
  "subregion": "Central America",
  "population": 6486201,
  "flags": {
    "svg": "https://flagcdn.com/sv.svg"
  },
  "link": "country.html?country=SLV"
},


{
  "name": "Equatorial Guinea",
  "capital": "Malabo",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 1402985,
  "flags": {
    "svg": "https://flagcdn.com/gq.svg"
  },
  "link": "country.html?country=GNQ"
},


{
  "name": "Eritrea",
  "capital": "Asmara",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 5352000,
  "flags": {
    "svg": "https://flagcdn.com/er.svg"
  },
  "link": "country.html?country=ERI"
},


{
  "name": "Estonia",
  "capital": "Tallinn",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 1331057,
  "flags": {
    "svg": "https://flagcdn.com/ee.svg"
  },
  "link": "country.html?country=EST"
},


{
  "name": "Ethiopia",
  "capital": "Addis Ababa",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 114963583,
  "flags": {
    "svg": "https://flagcdn.com/et.svg"
  },
  "link": "country.html?country=ETH"
},


{
  "name": "Falkland Islands (Malvinas)",
  "capital": "Stanley",
  "region": "Americas",
  "subregion": "South America",
  "population": 2563,
  "flags": {
    "svg": "https://flagcdn.com/fk.svg"
  },
  "link": "country.html?country=FLK"
},



{
  "name": "Faroe Islands",
  "capital": "Tórshavn",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 48865,
  "flags": {
    "svg": "https://flagcdn.com/fo.svg"
  },
  "link": "country.html?country=FRO"
},



{
  "name": "Fiji",
  "capital": "Suva",
  "region": "Oceania",
  "subregion": "Melanesia",
  "population": 896444,
  "flags": {
    "svg": "https://flagcdn.com/fj.svg"
  },
  "link": "country.html?country=FJI"
},



{
  "name": "Finland",
  "capital": "Helsinki",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 5530719,
  "flags": {
    "svg": "https://flagcdn.com/fi.svg"
  },
  "link": "country.html?country=FIN"
},



{
  "name": "France",
  "capital": "Paris",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 67391582,
  "flags": {
    "svg": "https://flagcdn.com/fr.svg"
  },
  "link": "country.html?country=FRA"
},



{
  "name": "French Guiana",
  "capital": "Cayenne",
  "region": "Americas",
  "subregion": "South America",
  "population": 254541,
  "flags": {
    "svg": "https://flagcdn.com/gf.svg"
  },
  "link": "country.html?country=GUF"
},


{
  "name": "French Polynesia",
  "capital": "Papeetē",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 280904,
  "flags": {
    "svg": "https://flagcdn.com/pf.svg"
  },
  "link": "country.html?country=PYF"
},



{
  "name": "French Southern Territories",
  "capital": "Port-aux-Français",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 140,
  "flags": {
    "svg": "https://flagcdn.com/tf.svg"
  },
  "link": "country.html?country=ATF"
},



{
  "name": "Gabon",
  "capital": "Libreville",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 2225728,
  "flags": {
    "svg": "https://flagcdn.com/ga.svg"
  },
  "link": "country.html?country=GAB"
},



{
  "name": "Gambia",
  "capital": "Banjul",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 2416664,
  "flags": {
    "svg": "https://flagcdn.com/gm.svg"
  },
  "link": "country.html?country=GMB"
},


{
  "name": "Georgia",
  "capital": "Tbilisi",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 3714000,
  "flags": {
    "svg": "https://flagcdn.com/ge.svg"
  },
  "link": "country.html?country=GEO"
},



{
  "name": "Germany",
  "capital": "Berlin",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 83240525,
  "flags": {
    "svg": "https://flagcdn.com/de.svg"
  },
  "link": "country.html?country=DEU"
},


{
  "name": "Ghana",
  "capital": "Accra",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 31072945,
  "flags": {
    "svg": "https://flagcdn.com/gh.svg"
  },
  "link": "country.html?country=GHA"
},



{
  "name": "Gibraltar",
  "capital": "Gibraltar",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 33691,
  "flags": {
    "svg": "https://flagcdn.com/gi.svg"
  },
  "link": "country.html?country=GIB"
},



{
  "name": "Greece",
  "capital": "Athens",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 10715549,
  "flags": {
    "svg": "https://flagcdn.com/gr.svg"
  },
  "link": "country.html?country=GRC"
},


{
  "name": "Greenland",
  "capital": "Nuuk",
  "region": "Americas",
  "subregion": "Northern America",
  "population": 56367,
  "flags": {
    "svg": "https://flagcdn.com/gl.svg"
  },
  "link": "country.html?country=GRL"
},



{
  "name": "Grenada",
  "capital": "St. George's",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 112519,
  "flags": {
    "svg": "https://flagcdn.com/gd.svg"
  },
  "link": "country.html?country=GRD"
},



{
  "name": "Guadeloupe",
  "capital": "Basse-Terre",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 400132,
  "flags": {
    "svg": "https://flagcdn.com/gp.svg"
  },
  "link": "country.html?country=GLP"
},


{
  "name": "Guam",
  "capital": "Hagåtña",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 168783,
  "flags": {
    "svg": "https://flagcdn.com/gu.svg"
  },
  "link": "country.html?country=GUM"
},


{
  "name": "Guatemala",
  "capital": "Guatemala City",
  "region": "Americas",
  "subregion": "Central America",
  "population": 16858333,
  "flags": {
    "svg": "https://flagcdn.com/gt.svg"
  },
  "link": "country.html?country=GTM"
},



{
  "name": "Guernsey",
  "capital": "St. Peter Port",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 62999,
  "flags": {
    "svg": "https://flagcdn.com/gg.svg"
  },
  "link": "country.html?country=GGY"
},



{
  "name": "Guinea",
  "capital": "Conakry",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 13132792,
  "flags": {
    "svg": "https://flagcdn.com/gn.svg"
  },
  "link": "country.html?country=GIN"
},


{
  "name": "Guinea-Bissau",
  "capital": "Bissau",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 1967998,
  "flags": {
    "svg": "https://flagcdn.com/gw.svg"
  },
  "link": "country.html?country=GNB"
},


{
  "name": "Guyana",
  "capital": "Georgetown",
  "region": "Americas",
  "subregion": "South America",
  "population": 786559,
  "flags": {
    "svg": "https://flagcdn.com/gy.svg"
  },
  "link": "country.html?country=GUY"
},


{
  "name": "Haiti",
  "capital": "Port-au-Prince",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 11402533,
  "flags": {
    "svg": "https://flagcdn.com/ht.svg"
  },
  "link": "country.html?country=HTI"
},



{
  "name": "Heard Island and McDonald Islands",
  "capital": "N/A",
  "region": "Antarctic",
  "subregion": "Antarctic",
  "population": 0,
  "flags": {
    "svg": "https://flagcdn.com/hm.svg"
  },
  "link": "country.html?country=HMD"
},


{
  "name": "Honduras",
  "capital": "Tegucigalpa",
  "region": "Americas",
  "subregion": "Central America",
  "population": 9904608,
  "flags": {
    "svg": "https://flagcdn.com/hn.svg"
  },
  "link": "country.html?country=HND"
},


{
  "name": "Hong Kong",
  "capital": "City of Victoria",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 7481800,
  "flags": {
    "svg": "https://flagcdn.com/hk.svg"
  },
  "link": "country.html?country=HKG"
},



{
  "name": "Hungary",
  "capital": "Budapest",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 9749763,
  "flags": {
    "svg": "https://flagcdn.com/hu.svg"
  },
  "link": "country.html?country=HUN"
},



{
  "name": "Iceland",
  "capital": "Reykjavík",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 366425,
  "flags": {
    "svg": "https://flagcdn.com/is.svg"
  },
  "link": "country.html?country=ISL"
},


{
  "name": "India",
  "capital": "New Delhi",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 1380004385,
  "flags": {
    "svg": "https://flagcdn.com/in.svg"
  },
  "link": "country.html?country=IND"
},


{
  "name": "Indonesia",
  "capital": "Jakarta",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 273523621,
  "flags": {
    "svg": "https://flagcdn.com/id.svg"
  },
  "link": "country.html?country=IDN"
},

{
  "name": "Ivory Coast",
  "capital": "Yamoussoukro",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 26378275,
  "flags": {
    "svg": "https://flagcdn.com/ci.svg"
  },
  "link": "country.html?country=CIV"
},

{
  "name": "Iran",
  "capital": "Tehran",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 83992953,
  "flags": {
    "svg": "https://flagcdn.com/ir.svg"
  },
  "link": "country.html?country=IRN"
},

{
  "name": "Iraq",
  "capital": "Baghdad",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 40222503,
  "flags": {
    "svg": "https://flagcdn.com/iq.svg"
  },
  "link": "country.html?country=IRQ"
},


{
  "name": "Ireland",
  "capital": "Dublin",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 4994724,
  "flags": {
    "svg": "https://flagcdn.com/ie.svg"
  },
  "link": "country.html?country=IRL"
},

{
  "name": "Isle of Man",
  "capital": "Douglas",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 85032,
  "flags": {
    "svg": "https://flagcdn.com/im.svg"
  },
  "link": "country.html?country=IMN"
},

{
  "name": "Israel",
  "capital": "Jerusalem",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 9216900,
  "flags": {
    "svg": "https://flagcdn.com/il.svg"
  },
  "link": "country.html?country=ISR"
},

{
  "name": "Italy",
  "capital": "Rome",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 59554023,
  "flags": {
    "svg": "https://flagcdn.com/it.svg"
  },
  "link": "country.html?country=ITA"
},

{
  "name": "Jamaica",
  "capital": "Kingston",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 2961161,
  "flags": {
    "svg": "https://flagcdn.com/jm.svg"
  },
  "link": "country.html?country=JAM"
},

{
  "name": "Japan",
  "capital": "Tokyo",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 125836021,
  "flags": {
    "svg": "https://flagcdn.com/jp.svg"
  },
  "link": "country.html?country=JPN"
},

{
  "name": "Jordan",
  "capital": "Amman",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 10203140,
  "flags": {
    "svg": "https://flagcdn.com/jo.svg"
  },
  "link": "country.html?country=JOR"
},


{
  "name": "Kazakhstan",
  "capital": "Nur-Sultan",
  "region": "Asia",
  "subregion": "Central Asia",
  "population": 18754440,
  "flags": {
    "svg": "https://flagcdn.com/kz.svg"
  },
  "link": "country.html?country=KAZ"
},

{
  "name": "Kenya",
  "capital": "Nairobi",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 53771300,
  "flags": {
    "svg": "https://flagcdn.com/ke.svg"
  },
  "link": "country.html?country=KEN"
},

{
  "name": "Kiribati",
  "capital": "South Tarawa",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 119446,
  "flags": {
    "svg": "https://flagcdn.com/ki.svg"
  },
  "link": "country.html?country=KIR"
},

{
  "name": "Korea (Democratic People's Republic of)",
  "capital": "Pyongyang",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 25778815,
  "flags": {
    "svg": "https://flagcdn.com/kp.svg"
  },
  "link": "country.html?country=PRK"
},

{
  "name": "Korea (Republic of)",
  "capital": "Seoul",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 51780579,
  "flags": {
    "svg": "https://flagcdn.com/kr.svg"
  },
  "link": "country.html?country=KOR"
},

{
  "name": "Kuwait",
  "capital": "Kuwait City",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 4270563,
  "flags": {
    "svg": "https://flagcdn.com/kw.svg"
  },
  "link": "country.html?country=KWT"
},

{
  "name": "Kyrgyzstan",
  "capital": "Bishkek",
  "region": "Asia",
  "subregion": "Central Asia",
  "population": 6591600,
  "flags": {
    "svg": "https://flagcdn.com/kg.svg"
  },
  "link": "country.html?country=KGZ"
},


{
  "name": "Laos",
  "capital": "Vientiane",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 7275556,
  "flags": {
    "svg": "https://flagcdn.com/la.svg"
  },
  "link": "country.html?country=LAO"
},


{
  "name": "Latvia",
  "capital": "Riga",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 1901548,
  "flags": {
    "svg": "https://flagcdn.com/lv.svg"
  },
  "link": "country.html?country=LVA"
},


{
  "name": "Lebanon",
  "capital": "Beirut",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 6825442,
  "flags": {
    "svg": "https://flagcdn.com/lb.svg"
  },
  "link": "country.html?country=LBN"
},


{
  "name": "Lesotho",
  "capital": "Maseru",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 2142252,
  "flags": {
    "svg": "https://flagcdn.com/ls.svg"
  },
  "link": "country.html?country=LSO"
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
  "name": "Libya",
  "capital": "Tripoli",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 6871287,
  "flags": {
    "svg": "https://flagcdn.com/ly.svg"
  },
  "link": "country.html?country=LBY"
},


{
  "name": "Liechtenstein",
  "capital": "Vaduz",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 38137,
  "flags": {
    "svg": "https://flagcdn.com/li.svg"
  },
  "link": "country.html?country=LIE"
},


{
  "name": "Lithuania",
  "capital": "Vilnius",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 2794700,
  "flags": {
    "svg": "https://flagcdn.com/lt.svg"
  },
  "link": "country.html?country=LTU"
},


{
  "name": "Luxembourg",
  "capital": "Luxembourg",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 632275,
  "flags": {
    "svg": "https://flagcdn.com/lu.svg"
  },
  "link": "country.html?country=LUX"
},


{
  "name": "Macao",
  "capital": null,
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 649342,
  "flags": {
    "svg": "https://flagcdn.com/mo.svg"
  },
  "link": "country.html?country=MAC"
},

{
  "name": "Madagascar",
  "capital": "Antananarivo",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 27691019,
  "flags": {
    "svg": "https://flagcdn.com/mg.svg"
  },
  "link": "country.html?country=MDG"
},

{
  "name": "Malawi",
  "capital": "Lilongwe",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 19129955,
  "flags": {
    "svg": "https://flagcdn.com/mw.svg"
  },
  "link": "country.html?country=MWI"
},


{
  "name": "Malaysia",
  "capital": "Kuala Lumpur",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 32365998,
  "flags": {
    "svg": "https://flagcdn.com/my.svg"
  },
  "link": "country.html?country=MYS"
},

{
  "name": "Maldives",
  "capital": "Malé",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 540542,
  "flags": {
    "svg": "https://flagcdn.com/mv.svg"
  },
  "link": "country.html?country=MDV"
},

{
  "name": "Mali",
  "capital": "Bamako",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 20250834,
  "flags": {
    "svg": "https://flagcdn.com/ml.svg"
  },
  "link": "country.html?country=MLI"
},

{
  "name": "Malta",
  "capital": "Valletta",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 525285,
  "flags": {
    "svg": "https://flagcdn.com/mt.svg"
  },
  "link": "country.html?country=MLT"
},

{
  "name": "Marshall Islands",
  "capital": "Majuro",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 59194,
  "flags": {
    "svg": "https://flagcdn.com/mh.svg"
  },
  "link": "country.html?country=MHL"
},


{
  "name": "Mauritania",
  "capital": "Nouakchott",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 4649660,
  "flags": {
    "svg": "https://flagcdn.com/mr.svg"
  },
  "link": "country.html?country=MRT"
},


{
  "name": "Mauritius",
  "capital": "Port Louis",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 1265740,
  "flags": {
    "svg": "https://flagcdn.com/mu.svg"
  },
  "link": "country.html?country=MUS"
},


{
  "name": "Mayotte",
  "capital": "Mamoudzou",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 226915,
  "flags": {
    "svg": "https://flagcdn.com/yt.svg"
  },
  "link": "country.html?country=MYT"
},

{
  "name": "Mexico",
  "capital": "Mexico City",
  "region": "Americas",
  "subregion": "North America",
  "population": 128932753,
  "flags": {
    "svg": "https://flagcdn.com/mx.svg"
  },
  "link": "country.html?country=MEX"
},

{
  "name": "Micronesia (Federated States of)",
  "capital": "Palikir",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 115021,
  "flags": {
    "svg": "https://flagcdn.com/fm.svg"
  },
  "link": "country.html?country=FSM"
},

{
  "name": "Moldova (Republic of)",
  "capital": "Chișinău",
  "region": "Europe",
  "subregion": "Eastern Europe",
  "population": 2617820,
  "flags": {
    "svg": "https://flagcdn.com/md.svg"
  },
  "link": "country.html?country=MDA"
},


{
  "name": "Monaco",
  "capital": "Monaco",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 39244,
  "flags": {
    "svg": "https://flagcdn.com/mc.svg"
  },
  "link": "country.html?country=MCO"
},


{
  "name": "Mongolia",
  "capital": "Ulan Bator",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 3278292,
  "flags": {
    "svg": "https://flagcdn.com/mn.svg"
  },
  "link": "country.html?country=MNG"
},

{
  "name": "Montenegro",
  "capital": "Podgorica",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 621718,
  "flags": {
    "svg": "https://flagcdn.com/me.svg"
  },
  "link": "country.html?country=MNE"
},


{
  "name": "Montserrat",
  "capital": "Plymouth",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 4922,
  "flags": {
    "svg": "https://flagcdn.com/ms.svg"
  },
  "link": "country.html?country=MSR"
},


{
  "name": "Morocco",
  "capital": "Rabat",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 36910558,
  "flags": {
    "svg": "https://flagcdn.com/ma.svg"
  },
  "link": "country.html?country=MAR"
},

{
  "name": "Mozambique",
  "capital": "Maputo",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 31255435,
  "flags": {
    "svg": "https://flagcdn.com/mz.svg"
  },
  "link": "country.html?country=MOZ"
},


{
  "name": "Myanmar",
  "capital": "Naypyidaw",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 54409794,
  "flags": {
    "svg": "https://flagcdn.com/mm.svg"
  },
  "link": "country.html?country=MMR"
},

{
  "name": "Namibia",
  "capital": "Windhoek",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 2540916,
  "flags": {
    "svg": "https://flagcdn.com/na.svg"
  },
  "link": "country.html?country=NAM"
},

{
  "name": "Nauru",
  "capital": "Yaren",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 10834,
  "flags": {
    "svg": "https://flagcdn.com/nr.svg"
  },
  "link": "country.html?country=NRU"
},


{
  "name": "Nepal",
  "capital": "Kathmandu",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 29136808,
  "flags": {
    "svg": "https://flagcdn.com/np.svg"
  },
  "link": "country.html?country=NPL"
},


{
  "name": "Netherlands",
  "capital": "Amsterdam",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 17441139,
  "flags": {
    "svg": "https://flagcdn.com/nl.svg"
  },
  "link": "country.html?country=NLD"
},


{
  "name": "New Caledonia",
  "capital": "Nouméa",
  "region": "Oceania",
  "subregion": "Melanesia",
  "population": 271960,
  "flags": {
    "svg": "https://flagcdn.com/nc.svg"
  },
  "link": "country.html?country=NCL"
},


{
  "name": "New Zealand",
  "capital": "Wellington",
  "region": "Oceania",
  "subregion": "Australia and New Zealand",
  "population": 5084300,
  "flags": {
    "svg": "https://flagcdn.com/nz.svg"
  },
  "link": "country.html?country=NZL"
},


{
  "name": "Nicaragua",
  "capital": "Managua",
  "region": "Americas",
  "subregion": "Central America",
  "population": 6624554,
  "flags": {
    "svg": "https://flagcdn.com/ni.svg"
  },
  "link": "country.html?country=NIC"
},


{
  "name": "Niger",
  "capital": "Niamey",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 24206636,
  "flags": {
    "svg": "https://flagcdn.com/ne.svg"
  },
  "link": "country.html?country=NER"
},


{
  "name": "Nigeria",
  "capital": "Abuja",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 206139587,
  "flags": {
    "svg": "https://flagcdn.com/ng.svg"
  },
  "link": "country.html?country=NGA"
},


{
  "name": "Niue",
  "capital": "Alofi",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 1470,
  "flags": {
    "svg": "https://flagcdn.com/nu.svg"
  },
  "link": "country.html?country=NIU"
},


{
  "name": "Norfolk Island",
  "capital": "Kingston",
  "region": "Oceania",
  "subregion": "Australia and New Zealand",
  "population": 2302,
  "flags": {
    "svg": "https://flagcdn.com/nf.svg"
  },
  "link": "country.html?country=NFK"
},


{
  "name": "North Macedonia",
  "capital": "Skopje",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 2083380,
  "flags": {
    "svg": "https://flagcdn.com/mk.svg"
  },
  "link": "country.html?country=MKD"
},


{
  "name": "Northern Mariana Islands",
  "capital": "Saipan",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 57557,
  "flags": {
    "svg": "https://flagcdn.com/mp.svg"
  },
  "link": "country.html?country=MNP"
},

{
  "name": "Norway",
  "capital": "Oslo",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 5379475,
  "flags": {
    "svg": "https://flagcdn.com/no.svg"
  },
  "link": "country.html?country=NOR"
},


{
  "name": "Oman",
  "capital": "Muscat",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 5106622,
  "flags": {
    "svg": "https://flagcdn.com/om.svg"
  },
  "link": "country.html?country=OMN"
},

{
  "name": "Pakistan",
  "capital": "Islamabad",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 220892331,
  "flags": {
    "svg": "https://flagcdn.com/pk.svg"
  },
  "link": "country.html?country=PAK"
},


{
  "name": "Palau",
  "capital": "Ngerulmud",
  "region": "Oceania",
  "subregion": "Micronesia",
  "population": 18092,
  "flags": {
    "svg": "https://flagcdn.com/pw.svg"
  },
  "link": "country.html?country=PLW"
},


{
  "name": "Palestine, State of",
  "capital": "Ramallah",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 4803269,
  "flags": {
    "svg": "https://flagcdn.com/ps.svg"
  },
  "link": "country.html?country=PSE"
},


{
  "name": "Panama",
  "capital": "Panama City",
  "region": "Americas",
  "subregion": "Central America",
  "population": 4314768,
  "flags": {
    "svg": "https://flagcdn.com/pa.svg"
  },
  "link": "country.html?country=PAN"
},


{
  "name": "Papua New Guinea",
  "capital": "Port Moresby",
  "region": "Oceania",
  "subregion": "Melanesia",
  "population": 8947027,
  "flags": {
    "svg": "https://flagcdn.com/pg.svg"
  },
  "link": "country.html?country=PNG"
},


{
  "name": "Paraguay",
  "capital": "Asunción",
  "region": "Americas",
  "subregion": "South America",
  "population": 7132530,
  "flags": {
    "svg": "https://flagcdn.com/py.svg"
  },
  "link": "country.html?country=PRY"
},


{
  "name": "Peru",
  "capital": "Lima",
  "region": "Americas",
  "subregion": "South America",
  "population": 32971846,
  "flags": {
    "svg": "https://flagcdn.com/pe.svg"
  },
  "link": "country.html?country=PER"
},


{
  "name": "Philippines",
  "capital": "Pilipinas",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 109581085,
  "flags": {
    "svg": "https://flagcdn.com/ph.svg"
  },
  "link": "country.html?country=PHL"
},


{
  "name": "Pitcairn",
  "capital": "Adamstown",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 56,
  "flags": {
    "svg": "https://flagcdn.com/pn.svg"
  },
  "link": "country.html?country=PCN"
},


{
  "name": "Poland",
  "capital": "Warsaw",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 37950802,
  "flags": {
    "svg": "https://flagcdn.com/pl.svg"
  },
  "link": "country.html?country=POL"
},

{
  "name": "Portugal",
  "capital": "Lisbon",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 10305564,
  "flags": {
    "svg": "https://flagcdn.com/pt.svg"
  },
  "link": "country.html?country=PRT"
},


{
  "name": "Puerto Rico",
  "capital": "San Juan",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 3194034,
  "flags": {
    "svg": "https://flagcdn.com/pr.svg"
  },
  "link": "country.html?country=PRI"
},

{
  "name": "Qatar",
  "capital": "Doha",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 2881060,
  "flags": {
    "svg": "https://flagcdn.com/qa.svg"
  },
  "link": "country.html?country=QAT"
},


{
  "name": "Republic of Kosovo",
  "capital": "Pristina",
  "region": "Europe",
  "subregion": "Eastern Europe",
  "population": 1775378,
  "flags": {
    "svg": "https://flagcdn.com/xk.svg"
  },
  "link": "country.html?country=UNK"
},

{
  "name": "Réunion",
  "capital": "Saint-Denis",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 840974,
  "flags": {
    "svg": "https://flagcdn.com/re.svg"
  },
  "link": "country.html?country=REU"
},

{
  "name": "Romania",
  "capital": "Bucharest",
  "region": "Europe",
  "subregion": "Eastern Europe",
  "population": 19286123,
  "flags": {
    "svg": "https://flagcdn.com/ro.svg"
  },
  "link": "country.html?country=ROU"
},

{
  "name": "Russian Federation",
  "capital": "Moscow",
  "region": "Europe",
  "subregion": "Eastern Europe",
  "population": 144104080,
  "flags": {
    "svg": "https://flagcdn.com/ru.svg"
  },
  "link": "country.html?country=RUS"
},

{
  "name": "Rwanda",
  "capital": "Kigali",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 12952209,
  "flags": {
    "svg": "https://flagcdn.com/rw.svg"
  },
  "link": "country.html?country=RWA"
},

{
  "name": "Saint Barthélemy",
  "capital": "Gustavia",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 9417,
  "flags": {
    "svg": "https://flagcdn.com/bl.svg"
  },
  "link": "country.html?country=BLM"
},

{
  "name": "Saint Helena, Ascension and Tristan da Cunha",
  "capital": "Jamestown",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 4255,
  "flags": {
    "svg": "https://flagcdn.com/sh.svg"
  },
  "link": "country.html?country=SHN"
},

{
  "name": "Saint Kitts and Nevis",
  "capital": "Basseterre",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 53192,
  "flags": {
    "svg": "https://flagcdn.com/kn.svg"
  },
  "link": "country.html?country=KNA"
},

{
  "name": "Saint Lucia",
  "capital": "Castries",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 183629,
  "flags": {
    "svg": "https://flagcdn.com/lc.svg"
  },
  "link": "country.html?country=LCA"
},

{
  "name": "Saint Martin (French part)",
  "capital": "Marigot",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 38659,
  "flags": {
    "svg": "https://flagcdn.com/mf.svg"
  },
  "link": "country.html?country=MAF"
},

{
  "name": "Saint Pierre and Miquelon",
  "capital": "Saint-Pierre",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 6069,
  "flags": {
    "svg": "https://flagcdn.com/pm.svg"
  },
  "link": "country.html?country=SPM"
},

{
  "name": "Saint Vincent and the Grenadines",
  "capital": "Kingstown",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 110947,
  "flags": {
    "svg": "https://flagcdn.com/vc.svg"
  },
  "link": "country.html?country=VCT"
},

{
  "name": "Samoa",
  "capital": "Apia",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 198410,
  "flags": {
    "svg": "https://flagcdn.com/ws.svg"
  },
  "link": "country.html?country=WSM"
},

{
  "name": "San Marino",
  "capital": "City of San Marino",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 33938,
  "flags": {
    "svg": "https://flagcdn.com/sm.svg"
  },
  "link": "country.html?country=SMR"
},

{
  "name": "São Tomé and Príncipe",
  "capital": "São Tomé",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 219161,
  "flags": {
    "svg": "https://flagcdn.com/st.svg"
  },
  "link": "country.html?country=STP"
},

{
  "name": "Saudi Arabia",
  "capital": "Riyadh",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 34813867,
  "flags": {
    "svg": "https://flagcdn.com/sa.svg"
  },
  "link": "country.html?country=SAU"
},

{
  "name": "Senegal",
  "capital": "Dakar",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 16743930,
  "flags": {
    "svg": "https://flagcdn.com/sn.svg"
  },
  "link": "country.html?country=SEN"
},

{
  "name": "Serbia",
  "capital": "Belgrade",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 6908224,
  "flags": {
    "svg": "https://flagcdn.com/rs.svg"
  },
  "link": "country.html?country=SRB"
},

{
  "name": "Seychelles",
  "capital": "Victoria",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 98462,
  "flags": {
    "svg": "https://flagcdn.com/sc.svg"
  },
  "link": "country.html?country=SYC"
},

{
  "name": "Sierra Leone",
  "capital": "Freetown",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 7976985,
  "flags": {
    "svg": "https://flagcdn.com/sl.svg"
  },
  "link": "country.html?country=SLE"
},

{
  "name": "Singapore",
  "capital": "Singapore",
  "region": "Asia",
  "subregion": "South-Eastern Africa",
  "population": 5685807,
  "flags": {
    "svg": "https://flagcdn.com/sg.svg"
  },
  "link": "country.html?country=SGP"
},

{
  "name": "Sint Maarten (Dutch part)",
  "capital": "Philipsburg",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 40812,
  "flags": {
    "svg": "https://flagcdn.com/sx.svg"
  },
  "link": "country.html?country=SXM"
},

{
  "name": "Slovakia",
  "capital": "Bratislava",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 5458827,
  "flags": {
    "svg": "https://flagcdn.com/sk.svg"
  },
  "link": "country.html?country=SVK"
},

{
  "name": "Slovenia",
  "capital": "Ljubljana",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 2100126,
  "flags": {
    "svg": "https://flagcdn.com/si.svg"
  },
  "link": "country.html?country=SVN"
},

{
  "name": "Solomon Islands",
  "capital": "Honiara",
  "region": "Oceania",
  "subregion": "Melanesia",
  "population": 686878,
  "flags": {
    "svg": "https://flagcdn.com/sb.svg"
  },
  "link": "country.html?country=SLB"
},

{
  "name": "Somalia",
  "capital": "Mogadishu",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 15893219,
  "flags": {
    "svg": "https://flagcdn.com/so.svg"
  },
  "link": "country.html?country=SOM"
},

{
  "name": "South Africa",
  "capital": "Pretoria",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 59308690,
  "flags": {
    "svg": "https://flagcdn.com/za.svg"
  },
  "link": "country.html?country=ZAF"
},


{
  "name": "South Georgia and the South Sandwich Islands",
  "capital": "King Edward Point",
  "region": "Americas",
  "subregion": "South America",
  "population": 30,
  "flags": {
    "svg": "https://flagcdn.com/gs.svg"
  },
  "link": "country.html?country=SGS"
},

{
  "name": "Spain",
  "capital": "Madrid",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 47351567,
  "flags": {
    "svg": "https://flagcdn.com/es.svg"
  },
  "link": "country.html?country=ESP"
},

{
  "name": "Sri Lanka",
  "capital": "Sri Jayawardenepura Kotte",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 21919000,
  "flags": {
    "svg": "https://flagcdn.com/lk.svg"
  },
  "link": "country.html?country=LKA"
},


{
  "name": "Sudan",
  "capital": "Khartoum",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 43849269,
  "flags": {
    "svg": "https://flagcdn.com/sd.svg"
  },
  "link": "country.html?country=SDN"
},

{
  "name": "South Sudan",
  "capital": "Juba",
  "region": "Africa",
  "subregion": "Middle Africa",
  "population": 11193729,
  "flags": {
    "svg": "https://flagcdn.com/ss.svg"
  },
  "link": "country.html?country=SSD"
},

{
  "name": "Suriname",
  "capital": "Paramaribo",
  "region": "Americas",
  "subregion": "South America",
  "population": 586634,
  "flags": {
    "svg": "https://flagcdn.com/sr.svg"
  },
  "link": "country.html?country=SUR"
},

{
  "name": "Svalbard and Jan Mayen",
  "capital": "Longyearbyen",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 2562,
  "flags": {
    "svg": "https://flagcdn.com/sj.svg"
  },
  "link": "country.html?country=SJM"
},

{
  "name": "Swaziland",
  "capital": "Mbabane",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 1160164,
  "flags": {
    "svg": "https://flagcdn.com/sz.svg"
  },
  "link": "country.html?country=SWZ"
},

{
  "name": "Sweden",
  "capital": "Stockholm",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 10353442,
  "flags": {
    "svg": "https://flagcdn.com/se.svg"
  },
  "link": "country.html?country=SWE"
},

{
  "name": "Switzerland",
  "capital": "Bern",
  "region": "Europe",
  "subregion": "Central Europe",
  "population": 8636896,
  "flags": {
    "svg": "https://flagcdn.com/ch.svg"
  },
  "link": "country.html?country=CHE"
},

{
  "name": "Taiwan",
  "capital": "Taipei",
  "region": "Asia",
  "subregion": "Eastern Asia",
  "population": 23503349,
  "flags": {
    "svg": "https://flagcdn.com/tw.svg"
  },
  "link": "country.html?country=TWN"
},


{
  "name": "Tajikistan",
  "capital": "Dushanbe",
  "region": "Asia",
  "subregion": "Central Asia",
  "population": 9537642,
  "flags": {
    "svg": "https://flagcdn.com/tj.svg"
  },
  "link": "country.html?country=TJK"
},

{
  "name": "Thailand",
  "capital": "Bangkok",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 69799978,
  "flags": {
    "svg": "https://flagcdn.com/th.svg"
  },
  "link": "country.html?country=THA"
},

{
  "name": "Timor-Leste",
  "capital": "Dili",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 1318442,
  "flags": {
    "svg": "https://flagcdn.com/tl.svg"
  },
  "link": "country.html?country=TLS"
},

{
  "name": "Togo",
  "capital": "Lomé",
  "region": "Africa",
  "subregion": "Western Africa",
  "population": 8278737,
  "flags": {
    "svg": "https://flagcdn.com/tg.svg"
  },
  "link": "country.html?country=TGO"
},

{
  "name": "Tokelau",
  "capital": "Fakaofo",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 1411,
  "flags": {
    "svg": "https://flagcdn.com/tk.svg"
  },
  "link": "country.html?country=TKL"
},

{
  "name": "Tonga",
  "capital": "Nuku\'alofa",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 105697,
  "flags": {
    "svg": "https://flagcdn.com/to.svg"
  },
  "link": "country.html?country=TON"
},

{
  "name": "Trinidad and Tobago",
  "capital": "Port of Spain",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 1399491,
  "flags": {
    "svg": "https://flagcdn.com/tt.svg"
  },
  "link": "country.html?country=TTO"
},

{
  "name": "Tunisia",
  "capital": "Tunis",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 11818618,
  "flags": {
    "svg": "https://flagcdn.com/tn.svg"
  },
  "link": "country.html?country=TUN"
},

{
  "name": "Turkey",
  "capital": "Ankara",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 84339067,
  "flags": {
    "svg": "https://flagcdn.com/tr.svg"
  },
  "link": "country.html?country=TUR"
},

{
  "name": "Turkmenistan",
  "capital": "Ashgabat",
  "region": "Asia",
  "subregion": "Central Asia",
  "population": 6031187,
  "flags": {
    "svg": "https://flagcdn.com/tm.svg"
  },
  "link": "country.html?country=TKM"
},

{
  "name": "Turks and Caicos Islands",
  "capital": "Cockburn Town",
  "region": "Americas",
  "subregion": "Caribbean",
  "population": 38718,
  "flags": {
    "svg": "https://flagcdn.com/tc.svg"
  },
  "link": "country.html?country=TCA"
},

{
  "name": "Tuvalu",
  "capital": "Funafuti",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 11792,
  "flags": {
    "svg": "https://flagcdn.com/tv.svg"
  },
  "link": "country.html?country=TUV"
},

{
  "name": "Uganda",
  "capital": "Kampala",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 45741000,
  "flags": {
    "svg": "https://flagcdn.com/ug.svg"
  },
  "link": "country.html?country=UGA"
},

{
  "name": "Ukraine",
  "capital": "Kyiv",
  "region": "Europe",
  "subregion": "Eastern Europe",
  "population": 44134693,
  "flags": {
    "svg": "https://flagcdn.com/ua.svg"
  },
  "link": "country.html?country=UKR"
},

{
  "name": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 9890400,
  "flags": {
    "svg": "https://flagcdn.com/ae.svg"
  },
  "link": "country.html?country=ARE"
},

{
  "name": "United Kingdom of Great Britain and Northern Ireland",
  "capital": "London",
  "region": "Europe",
  "subregion": "Northern Europe",
  "population": 67215293,
  "flags": {
    "svg": "https://flagcdn.com/gb.svg"
  },
  "link": "country.html?country=GBR"
},

{
  "name": "United States of America",
  "capital": "Washington, D.C.",
  "region": "Americas",
  "subregion": "Northern America",
  "population": 329484123,
  "flags": {
    "svg": "https://flagcdn.com/us.svg"
  },
  "link": "country.html?country=USA"
},

{
  "name": "Uruguay",
  "capital": "Montevideo",
  "region": "Americas",
  "subregion": "South America",
  "population": 3473727,
  "flags": {
    "svg": "https://flagcdn.com/uy.svg"
  },
  "link": "country.html?country=URY"
},

{
  "name": "Uzbekistan",
  "capital": "Tashkent",
  "region": "Asia",
  "subregion": "Central Asia",
  "population": 34232050,
  "flags": {
    "svg": "https://flagcdn.com/uz.svg"
  },
  "link": "country.html?country=UZB"
},

{
  "name": "Vanuatu",
  "capital": "Port Vila",
  "region": "Oceania",
  "subregion": "Melanesia",
  "population": 307150,
  "flags": {
    "svg": "https://flagcdn.com/vu.svg"
  },
  "link": "country.html?country=VUT"
},

{
  "name": "Vatican City",
  "capital": "Vatican City",
  "region": "Europe",
  "subregion": "Southern Europe",
  "population": 451,
  "flags": {
    "svg": "https://flagcdn.com/va.svg"
  },
  "link": "country.html?country=VAT"
},

{
  "name": "Venezuela (Bolivarian Republic of)",
  "capital": "Caracas",
  "region": "Americas",
  "subregion": "South America",
  "population": 28435943,
  "flags": {
    "svg": "https://flagcdn.com/ve.svg"
  },
  "link": "country.html?country=VEN"
},

{
  "name": "Vietnam",
  "capital": "Hanoi",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 97338583,
  "flags": {
    "svg": "https://flagcdn.com/vn.svg"
  },
  "link": "country.html?country=VNM"
},

{
  "name": "Wallis and Futuna",
  "capital": "Mata-Utu",
  "region": "Oceania",
  "subregion": "Polynesia",
  "population": 11750,
  "flags": {
    "svg": "https://flagcdn.com/wf.svg"
  },
  "link": "country.html?country=WLF"
},

{
  "name": "Western Sahara",
  "capital": "El Aaiún",
  "region": "Africa",
  "subregion": "Northern Africa",
  "population": 510713,
  "flags": {
    "svg": "https://flagcdn.com/eh.svg"
  },
  "link": "country.html?country=ESH"
},

{
  "name": "Yemen",
  "capital": "Sana\'a",
  "region": "Asia",
  "subregion": "Western Asia",
  "population": 29825968,
  "flags": {
    "svg": "https://flagcdn.com/ye.svg"
  },
  "link": "country.html?country=YEM"
},

{
  "name": "Zambia",
  "capital": "Lusaka",
  "region": "Africa",
  "subregion": "Eastern Africa",
  "population": 18383956,
  "flags": {
    "svg": "https://flagcdn.com/zm.svg"
  },
  "link": "country.html?country=ZMB"
},

{
  "name": "Zimbabwe",
  "capital": "Harare",
  "region": "Africa",
  "subregion": "Southern Africa",
  "population": 14862927,
  "flags": {
    "svg": "https://flagcdn.com/zw.svg"
  },
  "link": "country.html?country=ZWE"
},

  ];

  function generateCountryCards(countries) {
    countryContainer.innerHTML = ''; // Clear existing cards
    countries.forEach(country => {
      const countryCard = document.createElement('a');
      countryCard.classList.add('country-card');
      countryCard.href = country.link;

      countryCard.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name} flag" class="country-flag">
        <h3 class="country-name">${country.name}</h3>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      `;
      countryCard.style.opacity = 0; // Start hidden
      countryContainer.appendChild(countryCard);
      // Fade in transition
      setTimeout(() => {
        countryCard.style.transition = 'opacity 0.3s ease';
        countryCard.style.opacity = 1;
      }, 0);
    });
  }

  function filterCountries(region) {
    const filteredCountries = countries.filter(country =>
      region === 'all' || country.region === region
    );
    generateCountryCards(filteredCountries);
  }

  function searchCountries(query) {
    const filteredCountries = countries.filter(country =>
      country.name.toLowerCase().includes(query.toLowerCase())
    );
    generateCountryCards(filteredCountries);
  }

  // Toggle dropdown visibility
  filterBox.addEventListener('click', () => {
    filterBox.classList.toggle('open');
  });

  // Handle dropdown item clicks
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const selectedRegion = e.target.dataset.region;
      dropdownItems.forEach(dItem => dItem.classList.remove('selected'));
      e.target.classList.add('selected');
      filterCountries(selectedRegion);
      filterBox.classList.remove('open');
      filterBox.querySelector('.filter-text').textContent = e.target.textContent;
    });
  });

  // Handle search input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    searchCountries(query);
  });

  applySavedTheme();
  generateCountryCards(countries);
});
