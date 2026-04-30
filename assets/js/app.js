let currentLang = localStorage.getItem('appLang') || 'or'; 
let currentPostOffices = []; 
let activeFilter = null;

const i18n = {
    or: {
        title: "ଭାରତ ପିନକୋଡ୍ ଖୋଜନ୍ତୁ", toggleBtn: "English", placeholder: "୬-ଅଙ୍କ ବିଶିଷ୍ଟ ପିନକୋଡ୍...",
        searchBtn: "ଖୋଜନ୍ତୁ", poName: "ଉପ-ଡାକଘର", branchType: "ଶାଖା ପ୍ରକାର", delivery: "ବିତରଣ ସ୍ଥିତି",
        districtState: "ଜିଲ୍ଲା ଏବଂ ରାଜ୍ୟ", mapBtn: "ମାନଚିତ୍ରରେ ଦେଖନ୍ତୁ", copyBtn: "କପି କରନ୍ତୁ",
        shareBtn: "ସେୟାର କରନ୍ତୁ", copied: "କପି ହୋଇଛି!", linkCopied: "ଲିଙ୍କ୍ କପି ହୋଇଛି!",
        loading: "ଅନୁସନ୍ଧାନ କରାଯାଉଛି...", invalidLength: "ଦୟାକରି ସଠିକ୍ ୬-ଅଙ୍କ ବିଶିଷ୍ଟ ପିନକୋଡ୍ ଦିଅନ୍ତୁ।",
        noData: "କୌଣସି ତଥ୍ୟ ମିଳିଲା ନାହିଁ।", summaryText: "ଫଳାଫଳ:", 
        footerText: "Sandeep Biswal Gଙ୍କ ଅନ୍ୟ ପ୍ରକଳ୍ପ ଦେଖନ୍ତୁ", sharePO: "ଏହି ଡାକଘର ସେୟାର କରନ୍ତୁ"
    },
    en: {
        title: "India Pincode Finder", toggleBtn: "ଓଡ଼ିଆ", placeholder: "Enter 6-digit Pincode...",
        searchBtn: "Search", poName: "Post Office", branchType: "Branch Type", delivery: "Delivery Status",
        districtState: "District & State", mapBtn: "View on Map", copyBtn: "Copy Pin",
        shareBtn: "Share Link", copied: "Copied!", linkCopied: "Link Copied!",
        loading: "Searching...", invalidLength: "Please enter a valid 6-digit pincode.",
        noData: "No data found.", summaryText: "Results:", 
        footerText: "See other projects by Sandeep Biswal G", sharePO: "Share this Post Office"
    }
};

const elements = {
    input: document.getElementById('pincode-input'),
    error: document.getElementById('error-msg'),
    loading: document.getElementById('loading-state'),
    grid: document.getElementById('results-grid'),
    summary: document.getElementById('result-summary'),
    pinSpan: document.getElementById('searched-pin'),
    clearBtn: document.getElementById('clear-filter-btn')
};

// ... (Paste all the remaining javascript logic for handleRouting(), searchPincode(), renderResults(), etc. here exactly as it was in the single file).

// Init
window.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    handleRouting();
    window.addEventListener('popstate', handleRouting);
});
