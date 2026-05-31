// Accounting — Summer 2027 internships.
// Globals: ACCOUNTING_LAST_UPDATED, ACCOUNTING_COMPANIES, ACCOUNTING_INTERNSHIPS. Pay & acceptance are rough public ESTIMATES; tickers/HQ are real.

window.ACCOUNTING_LAST_UPDATED = "2026-05-31";

window.ACCOUNTING_COMPANIES = {
  "Walmart": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: WMT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/WMT",
    "stockTrend": "View the live WMT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 1,
    "hq": "Bentonville, AR",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Amazon": {
    "tier": "Fortune 100 company",
    "background": "E-commerce / cloud recruiting accounting talent.",
    "deepProfile": [
      "E-commerce / cloud with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: AMZN",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/AMZN",
    "stockTrend": "View the live AMZN stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 2,
    "hq": "Seattle, WA",
    "founded": "Not on file.",
    "history": "E-commerce / cloud with a well-known early-careers program."
  },
  "Apple": {
    "tier": "Fortune 100 company",
    "background": "Consumer tech recruiting accounting talent.",
    "deepProfile": [
      "Consumer tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: AAPL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/AAPL",
    "stockTrend": "View the live AAPL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 4,
    "hq": "Cupertino, CA",
    "founded": "Not on file.",
    "history": "Consumer tech with a well-known early-careers program."
  },
  "UnitedHealth Group": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: UNH",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/UNH",
    "stockTrend": "View the live UNH stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 5,
    "hq": "Minnetonka, MN",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Berkshire Hathaway": {
    "tier": "Fortune 100 company",
    "background": "Conglomerate recruiting accounting talent.",
    "deepProfile": [
      "Conglomerate with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BRK.B",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BRK.B",
    "stockTrend": "View the live BRK.B stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 6,
    "hq": "Omaha, NE",
    "founded": "Not on file.",
    "history": "Conglomerate with a well-known early-careers program."
  },
  "CVS Health": {
    "tier": "Fortune 100 company",
    "background": "Healthcare / retail recruiting accounting talent.",
    "deepProfile": [
      "Healthcare / retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CVS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CVS",
    "stockTrend": "View the live CVS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 6,
    "hq": "Woonsocket, RI",
    "founded": "Not on file.",
    "history": "Healthcare / retail with a well-known early-careers program."
  },
  "ExxonMobil": {
    "tier": "Fortune 100 company",
    "background": "Energy recruiting accounting talent.",
    "deepProfile": [
      "Energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: XOM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/XOM",
    "stockTrend": "View the live XOM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 7,
    "hq": "Spring, TX",
    "founded": "Not on file.",
    "history": "Energy with a well-known early-careers program."
  },
  "Alphabet (Google)": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GOOGL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GOOGL",
    "stockTrend": "View the live GOOGL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 8,
    "hq": "Mountain View, CA",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "McKesson": {
    "tier": "Fortune 100 company",
    "background": "Healthcare distribution recruiting accounting talent.",
    "deepProfile": [
      "Healthcare distribution with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MCK",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MCK",
    "stockTrend": "View the live MCK stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 9,
    "hq": "Irving, TX",
    "founded": "Not on file.",
    "history": "Healthcare distribution with a well-known early-careers program."
  },
  "Cencora": {
    "tier": "Fortune 100 company",
    "background": "Pharma distribution recruiting accounting talent.",
    "deepProfile": [
      "Pharma distribution with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: COR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/COR",
    "stockTrend": "View the live COR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 10,
    "hq": "Conshohocken, PA",
    "founded": "Not on file.",
    "history": "Pharma distribution with a well-known early-careers program."
  },
  "Costco": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: COST",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/COST",
    "stockTrend": "View the live COST stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 11,
    "hq": "Issaquah, WA",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "JPMorgan Chase": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: JPM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/JPM",
    "stockTrend": "View the live JPM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 12,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Microsoft": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MSFT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MSFT",
    "stockTrend": "View the live MSFT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 13,
    "hq": "Redmond, WA",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "Cardinal Health": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CAH",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CAH",
    "stockTrend": "View the live CAH stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 14,
    "hq": "Dublin, OH",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Chevron": {
    "tier": "Fortune 100 company",
    "background": "Energy recruiting accounting talent.",
    "deepProfile": [
      "Energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CVX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CVX",
    "stockTrend": "View the live CVX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 15,
    "hq": "San Ramon, CA",
    "founded": "Not on file.",
    "history": "Energy with a well-known early-careers program."
  },
  "Cigna": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CI",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CI",
    "stockTrend": "View the live CI stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 16,
    "hq": "Bloomfield, CT",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Ford Motor": {
    "tier": "Fortune 100 company",
    "background": "Automotive recruiting accounting talent.",
    "deepProfile": [
      "Automotive with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: F",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/F",
    "stockTrend": "View the live F stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 17,
    "hq": "Dearborn, MI",
    "founded": "Not on file.",
    "history": "Automotive with a well-known early-careers program."
  },
  "Bank of America": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BAC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BAC",
    "stockTrend": "View the live BAC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 18,
    "hq": "Charlotte, NC",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "General Motors": {
    "tier": "Fortune 100 company",
    "background": "Automotive recruiting accounting talent.",
    "deepProfile": [
      "Automotive with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GM",
    "stockTrend": "View the live GM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 19,
    "hq": "Detroit, MI",
    "founded": "Not on file.",
    "history": "Automotive with a well-known early-careers program."
  },
  "Elevance Health": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ELV",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ELV",
    "stockTrend": "View the live ELV stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 20,
    "hq": "Indianapolis, IN",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Citigroup": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: C",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/C",
    "stockTrend": "View the live C stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 21,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Centene": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CNC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CNC",
    "stockTrend": "View the live CNC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 22,
    "hq": "St. Louis, MO",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Home Depot": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: HD",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/HD",
    "stockTrend": "View the live HD stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 23,
    "hq": "Atlanta, GA",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Marathon Petroleum": {
    "tier": "Fortune 100 company",
    "background": "Energy recruiting accounting talent.",
    "deepProfile": [
      "Energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MPC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MPC",
    "stockTrend": "View the live MPC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 24,
    "hq": "Findlay, OH",
    "founded": "Not on file.",
    "history": "Energy with a well-known early-careers program."
  },
  "Kroger": {
    "tier": "Fortune 100 company",
    "background": "Retail / grocery recruiting accounting talent.",
    "deepProfile": [
      "Retail / grocery with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: KR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/KR",
    "stockTrend": "View the live KR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 25,
    "hq": "Cincinnati, OH",
    "founded": "Not on file.",
    "history": "Retail / grocery with a well-known early-careers program."
  },
  "Phillips 66": {
    "tier": "Fortune 100 company",
    "background": "Energy recruiting accounting talent.",
    "deepProfile": [
      "Energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PSX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PSX",
    "stockTrend": "View the live PSX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 26,
    "hq": "Houston, TX",
    "founded": "Not on file.",
    "history": "Energy with a well-known early-careers program."
  },
  "Fannie Mae": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: FNMA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/FNMA",
    "stockTrend": "View the live FNMA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 27,
    "hq": "Washington, DC",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Walgreens": {
    "tier": "Fortune 100 company",
    "background": "Healthcare / retail recruiting accounting talent.",
    "deepProfile": [
      "Healthcare / retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: WBA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/WBA",
    "stockTrend": "View the live WBA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 28,
    "hq": "Deerfield, IL",
    "founded": "Not on file.",
    "history": "Healthcare / retail with a well-known early-careers program."
  },
  "Valero Energy": {
    "tier": "Fortune 100 company",
    "background": "Energy recruiting accounting talent.",
    "deepProfile": [
      "Energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: VLO",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/VLO",
    "stockTrend": "View the live VLO stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 29,
    "hq": "San Antonio, TX",
    "founded": "Not on file.",
    "history": "Energy with a well-known early-careers program."
  },
  "Meta": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: META",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/META",
    "stockTrend": "View the live META stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 30,
    "hq": "Menlo Park, CA",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "Verizon": {
    "tier": "Fortune 100 company",
    "background": "Telecom recruiting accounting talent.",
    "deepProfile": [
      "Telecom with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: VZ",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/VZ",
    "stockTrend": "View the live VZ stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 31,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Telecom with a well-known early-careers program."
  },
  "AT&T": {
    "tier": "Fortune 100 company",
    "background": "Telecom recruiting accounting talent.",
    "deepProfile": [
      "Telecom with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: T",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/T",
    "stockTrend": "View the live T stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 32,
    "hq": "Dallas, TX",
    "founded": "Not on file.",
    "history": "Telecom with a well-known early-careers program."
  },
  "Comcast": {
    "tier": "Fortune 100 company",
    "background": "Media / telecom recruiting accounting talent.",
    "deepProfile": [
      "Media / telecom with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CMCSA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CMCSA",
    "stockTrend": "View the live CMCSA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 33,
    "hq": "Philadelphia, PA",
    "founded": "Not on file.",
    "history": "Media / telecom with a well-known early-careers program."
  },
  "Wells Fargo": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: WFC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/WFC",
    "stockTrend": "View the live WFC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 34,
    "hq": "San Francisco, CA",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Goldman Sachs": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GS",
    "stockTrend": "View the live GS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 35,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Target": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TGT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TGT",
    "stockTrend": "View the live TGT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 36,
    "hq": "Minneapolis, MN",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Humana": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: HUM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/HUM",
    "stockTrend": "View the live HUM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 37,
    "hq": "Louisville, KY",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "State Farm": {
    "tier": "Fortune 100 company",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 38,
    "hq": "Bloomington, IL",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Tesla": {
    "tier": "Fortune 100 company",
    "background": "Automotive / energy recruiting accounting talent.",
    "deepProfile": [
      "Automotive / energy with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TSLA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TSLA",
    "stockTrend": "View the live TSLA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 39,
    "hq": "Austin, TX",
    "founded": "Not on file.",
    "history": "Automotive / energy with a well-known early-careers program."
  },
  "Morgan Stanley": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MS",
    "stockTrend": "View the live MS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 40,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Johnson & Johnson": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: JNJ",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/JNJ",
    "stockTrend": "View the live JNJ stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 41,
    "hq": "New Brunswick, NJ",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Archer Daniels Midland": {
    "tier": "Fortune 100 company",
    "background": "Agribusiness recruiting accounting talent.",
    "deepProfile": [
      "Agribusiness with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ADM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ADM",
    "stockTrend": "View the live ADM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 42,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Agribusiness with a well-known early-careers program."
  },
  "PepsiCo": {
    "tier": "Fortune 100 company",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PEP",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PEP",
    "stockTrend": "View the live PEP stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 43,
    "hq": "Purchase, NY",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "UPS": {
    "tier": "Fortune 100 company",
    "background": "Logistics recruiting accounting talent.",
    "deepProfile": [
      "Logistics with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: UPS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/UPS",
    "stockTrend": "View the live UPS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 44,
    "hq": "Atlanta, GA",
    "founded": "Not on file.",
    "history": "Logistics with a well-known early-careers program."
  },
  "FedEx": {
    "tier": "Fortune 100 company",
    "background": "Logistics recruiting accounting talent.",
    "deepProfile": [
      "Logistics with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: FDX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/FDX",
    "stockTrend": "View the live FDX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 45,
    "hq": "Memphis, TN",
    "founded": "Not on file.",
    "history": "Logistics with a well-known early-careers program."
  },
  "Disney": {
    "tier": "Fortune 100 company",
    "background": "Media / entertainment recruiting accounting talent.",
    "deepProfile": [
      "Media / entertainment with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: DIS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/DIS",
    "stockTrend": "View the live DIS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 46,
    "hq": "Burbank, CA",
    "founded": "Not on file.",
    "history": "Media / entertainment with a well-known early-careers program."
  },
  "Dell Technologies": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: DELL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/DELL",
    "stockTrend": "View the live DELL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 47,
    "hq": "Round Rock, TX",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "Lowe's": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: LOW",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/LOW",
    "stockTrend": "View the live LOW stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 48,
    "hq": "Mooresville, NC",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Procter & Gamble": {
    "tier": "Fortune 100 company",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PG",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PG",
    "stockTrend": "View the live PG stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 49,
    "hq": "Cincinnati, OH",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "Boeing": {
    "tier": "Fortune 100 company",
    "background": "Aerospace recruiting accounting talent.",
    "deepProfile": [
      "Aerospace with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BA",
    "stockTrend": "View the live BA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Highly competitive",
    "compScore": 4,
    "news": [],
    "fortune": 50,
    "hq": "Arlington, VA",
    "founded": "Not on file.",
    "history": "Aerospace with a well-known early-careers program."
  },
  "Albertsons": {
    "tier": "Fortune 100 company",
    "background": "Retail / grocery recruiting accounting talent.",
    "deepProfile": [
      "Retail / grocery with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ACI",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ACI",
    "stockTrend": "View the live ACI stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 51,
    "hq": "Boise, ID",
    "founded": "Not on file.",
    "history": "Retail / grocery with a well-known early-careers program."
  },
  "Sysco": {
    "tier": "Fortune 100 company",
    "background": "Food distribution recruiting accounting talent.",
    "deepProfile": [
      "Food distribution with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: SYY",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/SYY",
    "stockTrend": "View the live SYY stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 52,
    "hq": "Houston, TX",
    "founded": "Not on file.",
    "history": "Food distribution with a well-known early-careers program."
  },
  "RTX (Raytheon)": {
    "tier": "Fortune 100 company",
    "background": "Aerospace / defense recruiting accounting talent.",
    "deepProfile": [
      "Aerospace / defense with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: RTX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/RTX",
    "stockTrend": "View the live RTX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 53,
    "hq": "Arlington, VA",
    "founded": "Not on file.",
    "history": "Aerospace / defense with a well-known early-careers program."
  },
  "Lockheed Martin": {
    "tier": "Fortune 100 company",
    "background": "Aerospace / defense recruiting accounting talent.",
    "deepProfile": [
      "Aerospace / defense with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: LMT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/LMT",
    "stockTrend": "View the live LMT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 54,
    "hq": "Bethesda, MD",
    "founded": "Not on file.",
    "history": "Aerospace / defense with a well-known early-careers program."
  },
  "Intel": {
    "tier": "Fortune 100 company",
    "background": "Semiconductors recruiting accounting talent.",
    "deepProfile": [
      "Semiconductors with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: INTC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/INTC",
    "stockTrend": "View the live INTC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 55,
    "hq": "Santa Clara, CA",
    "founded": "Not on file.",
    "history": "Semiconductors with a well-known early-careers program."
  },
  "IBM": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: IBM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/IBM",
    "stockTrend": "View the live IBM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 56,
    "hq": "Armonk, NY",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "HCA Healthcare": {
    "tier": "Fortune 100 company",
    "background": "Healthcare recruiting accounting talent.",
    "deepProfile": [
      "Healthcare with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: HCA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/HCA",
    "stockTrend": "View the live HCA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 57,
    "hq": "Nashville, TN",
    "founded": "Not on file.",
    "history": "Healthcare with a well-known early-careers program."
  },
  "Caterpillar": {
    "tier": "Fortune 100 company",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CAT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CAT",
    "stockTrend": "View the live CAT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 58,
    "hq": "Irving, TX",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Nationwide": {
    "tier": "Insurance",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Columbus, OH",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "MetLife": {
    "tier": "Fortune 100 company",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MET",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MET",
    "stockTrend": "View the live MET stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 59,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Coca-Cola": {
    "tier": "Fortune 100 company",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: KO",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/KO",
    "stockTrend": "View the live KO stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 60,
    "hq": "Atlanta, GA",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "Pfizer": {
    "tier": "Fortune 100 company",
    "background": "Pharma recruiting accounting talent.",
    "deepProfile": [
      "Pharma with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PFE",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PFE",
    "stockTrend": "View the live PFE stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 61,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Pharma with a well-known early-careers program."
  },
  "Nike": {
    "tier": "Fortune 100 company",
    "background": "Consumer goods / apparel recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / apparel with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: NKE",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/NKE",
    "stockTrend": "View the live NKE stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 62,
    "hq": "Beaverton, OR",
    "founded": "Not on file.",
    "history": "Consumer goods / apparel with a well-known early-careers program."
  },
  "Merck": {
    "tier": "Fortune 100 company",
    "background": "Pharma recruiting accounting talent.",
    "deepProfile": [
      "Pharma with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MRK",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MRK",
    "stockTrend": "View the live MRK stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 63,
    "hq": "Rahway, NJ",
    "founded": "Not on file.",
    "history": "Pharma with a well-known early-careers program."
  },
  "Honeywell": {
    "tier": "Fortune 100 company",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: HON",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/HON",
    "stockTrend": "View the live HON stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 64,
    "hq": "Charlotte, NC",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "American Express": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: AXP",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/AXP",
    "stockTrend": "View the live AXP stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 65,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Abbott": {
    "tier": "Fortune 100 company",
    "background": "Healthcare / devices recruiting accounting talent.",
    "deepProfile": [
      "Healthcare / devices with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ABT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ABT",
    "stockTrend": "View the live ABT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 66,
    "hq": "Abbott Park, IL",
    "founded": "Not on file.",
    "history": "Healthcare / devices with a well-known early-careers program."
  },
  "3M": {
    "tier": "Fortune 100 company",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MMM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MMM",
    "stockTrend": "View the live MMM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 67,
    "hq": "St. Paul, MN",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Deere & Company": {
    "tier": "Fortune 100 company",
    "background": "Industrials / ag recruiting accounting talent.",
    "deepProfile": [
      "Industrials / ag with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: DE",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/DE",
    "stockTrend": "View the live DE stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 68,
    "hq": "Moline, IL",
    "founded": "Not on file.",
    "history": "Industrials / ag with a well-known early-careers program."
  },
  "Oracle": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ORCL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ORCL",
    "stockTrend": "View the live ORCL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 69,
    "hq": "Austin, TX",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "General Electric": {
    "tier": "Fortune 100 company",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GE",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GE",
    "stockTrend": "View the live GE stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 70,
    "hq": "Boston, MA",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Cisco": {
    "tier": "Fortune 100 company",
    "background": "Tech recruiting accounting talent.",
    "deepProfile": [
      "Tech with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CSCO",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CSCO",
    "stockTrend": "View the live CSCO stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 71,
    "hq": "San Jose, CA",
    "founded": "Not on file.",
    "history": "Tech with a well-known early-careers program."
  },
  "TJX Companies": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TJX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TJX",
    "stockTrend": "View the live TJX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 72,
    "hq": "Framingham, MA",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "NVIDIA": {
    "tier": "Fortune 100 company",
    "background": "Semiconductors recruiting accounting talent.",
    "deepProfile": [
      "Semiconductors with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: NVDA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/NVDA",
    "stockTrend": "View the live NVDA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 73,
    "hq": "Santa Clara, CA",
    "founded": "Not on file.",
    "history": "Semiconductors with a well-known early-careers program."
  },
  "Salesforce": {
    "tier": "Fortune 100 company",
    "background": "Tech / SaaS recruiting accounting talent.",
    "deepProfile": [
      "Tech / SaaS with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CRM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CRM",
    "stockTrend": "View the live CRM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 74,
    "hq": "San Francisco, CA",
    "founded": "Not on file.",
    "history": "Tech / SaaS with a well-known early-careers program."
  },
  "AbbVie": {
    "tier": "Fortune 100 company",
    "background": "Pharma recruiting accounting talent.",
    "deepProfile": [
      "Pharma with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ABBV",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ABBV",
    "stockTrend": "View the live ABBV stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 75,
    "hq": "North Chicago, IL",
    "founded": "Not on file.",
    "history": "Pharma with a well-known early-careers program."
  },
  "Best Buy": {
    "tier": "Fortune 100 company",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BBY",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BBY",
    "stockTrend": "View the live BBY stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 76,
    "hq": "Richfield, MN",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Bristol Myers Squibb": {
    "tier": "Fortune 100 company",
    "background": "Pharma recruiting accounting talent.",
    "deepProfile": [
      "Pharma with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BMY",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BMY",
    "stockTrend": "View the live BMY stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 77,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Pharma with a well-known early-careers program."
  },
  "United Airlines": {
    "tier": "Fortune 100 company",
    "background": "Airlines recruiting accounting talent.",
    "deepProfile": [
      "Airlines with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: UAL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/UAL",
    "stockTrend": "View the live UAL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 78,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Airlines with a well-known early-careers program."
  },
  "Delta Air Lines": {
    "tier": "Fortune 100 company",
    "background": "Airlines recruiting accounting talent.",
    "deepProfile": [
      "Airlines with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: DAL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/DAL",
    "stockTrend": "View the live DAL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 79,
    "hq": "Atlanta, GA",
    "founded": "Not on file.",
    "history": "Airlines with a well-known early-careers program."
  },
  "American Airlines": {
    "tier": "Fortune 100 company",
    "background": "Airlines recruiting accounting talent.",
    "deepProfile": [
      "Airlines with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: AAL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/AAL",
    "stockTrend": "View the live AAL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 80,
    "hq": "Fort Worth, TX",
    "founded": "Not on file.",
    "history": "Airlines with a well-known early-careers program."
  },
  "Tyson Foods": {
    "tier": "Fortune 100 company",
    "background": "Consumer goods / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TSN",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TSN",
    "stockTrend": "View the live TSN stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 81,
    "hq": "Springdale, AR",
    "founded": "Not on file.",
    "history": "Consumer goods / food with a well-known early-careers program."
  },
  "Prudential Financial": {
    "tier": "Fortune 100 company",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PRU",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PRU",
    "stockTrend": "View the live PRU stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 82,
    "hq": "Newark, NJ",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Mondelez": {
    "tier": "Consumer goods / food",
    "background": "Consumer goods / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MDLZ",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MDLZ",
    "stockTrend": "View the live MDLZ stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Consumer goods / food with a well-known early-careers program."
  },
  "General Dynamics": {
    "tier": "Fortune 100 company",
    "background": "Aerospace / defense recruiting accounting talent.",
    "deepProfile": [
      "Aerospace / defense with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GD",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GD",
    "stockTrend": "View the live GD stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 83,
    "hq": "Reston, VA",
    "founded": "Not on file.",
    "history": "Aerospace / defense with a well-known early-careers program."
  },
  "Capital One": {
    "tier": "Fortune 100 company",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: COF",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/COF",
    "stockTrend": "View the live COF stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 84,
    "hq": "McLean, VA",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Charter Communications": {
    "tier": "Fortune 100 company",
    "background": "Telecom / media recruiting accounting talent.",
    "deepProfile": [
      "Telecom / media with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CHTR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CHTR",
    "stockTrend": "View the live CHTR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": 85,
    "hq": "Stamford, CT",
    "founded": "Not on file.",
    "history": "Telecom / media with a well-known early-careers program."
  },
  "Nordstrom": {
    "tier": "Retail",
    "background": "Retail recruiting accounting talent.",
    "deepProfile": [
      "Retail with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: JWN",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/JWN",
    "stockTrend": "View the live JWN stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Seattle, WA",
    "founded": "Not on file.",
    "history": "Retail with a well-known early-careers program."
  },
  "Estée Lauder": {
    "tier": "Consumer goods / beauty",
    "background": "Consumer goods / beauty recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / beauty with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: EL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/EL",
    "stockTrend": "View the live EL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Consumer goods / beauty with a well-known early-careers program."
  },
  "Colgate-Palmolive": {
    "tier": "Consumer goods",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CL",
    "stockTrend": "View the live CL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "Kimberly-Clark": {
    "tier": "Consumer goods",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: KMB",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/KMB",
    "stockTrend": "View the live KMB stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Irving, TX",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "General Mills": {
    "tier": "Consumer goods / food",
    "background": "Consumer goods / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: GIS",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/GIS",
    "stockTrend": "View the live GIS stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Minneapolis, MN",
    "founded": "Not on file.",
    "history": "Consumer goods / food with a well-known early-careers program."
  },
  "Kellanova": {
    "tier": "Consumer goods / food",
    "background": "Consumer goods / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: K",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/K",
    "stockTrend": "View the live K stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Consumer goods / food with a well-known early-careers program."
  },
  "Kraft Heinz": {
    "tier": "Consumer goods / food",
    "background": "Consumer goods / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: KHC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/KHC",
    "stockTrend": "View the live KHC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Consumer goods / food with a well-known early-careers program."
  },
  "Unilever": {
    "tier": "Consumer goods",
    "background": "Consumer goods recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: UL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/UL",
    "stockTrend": "View the live UL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Englewood Cliffs, NJ",
    "founded": "Not on file.",
    "history": "Consumer goods with a well-known early-careers program."
  },
  "L'Oréal USA": {
    "tier": "Consumer goods / beauty",
    "background": "Consumer goods / beauty recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / beauty with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Consumer goods / beauty with a well-known early-careers program."
  },
  "Anheuser-Busch": {
    "tier": "Consumer goods / bev",
    "background": "Consumer goods / bev recruiting accounting talent.",
    "deepProfile": [
      "Consumer goods / bev with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: BUD",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/BUD",
    "stockTrend": "View the live BUD stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "St. Louis, MO",
    "founded": "Not on file.",
    "history": "Consumer goods / bev with a well-known early-careers program."
  },
  "Mastercard": {
    "tier": "Payments",
    "background": "Payments recruiting accounting talent.",
    "deepProfile": [
      "Payments with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MA",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MA",
    "stockTrend": "View the live MA stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Purchase, NY",
    "founded": "Not on file.",
    "history": "Payments with a well-known early-careers program."
  },
  "Visa": {
    "tier": "Payments",
    "background": "Payments recruiting accounting talent.",
    "deepProfile": [
      "Payments with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: V",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/V",
    "stockTrend": "View the live V stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "San Francisco, CA",
    "founded": "Not on file.",
    "history": "Payments with a well-known early-careers program."
  },
  "Adobe": {
    "tier": "Tech / SaaS",
    "background": "Tech / SaaS recruiting accounting talent.",
    "deepProfile": [
      "Tech / SaaS with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ADBE",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ADBE",
    "stockTrend": "View the live ADBE stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "San Jose, CA",
    "founded": "Not on file.",
    "history": "Tech / SaaS with a well-known early-careers program."
  },
  "Qualcomm": {
    "tier": "Semiconductors",
    "background": "Semiconductors recruiting accounting talent.",
    "deepProfile": [
      "Semiconductors with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: QCOM",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/QCOM",
    "stockTrend": "View the live QCOM stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "San Diego, CA",
    "founded": "Not on file.",
    "history": "Semiconductors with a well-known early-careers program."
  },
  "Texas Instruments": {
    "tier": "Semiconductors",
    "background": "Semiconductors recruiting accounting talent.",
    "deepProfile": [
      "Semiconductors with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TXN",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TXN",
    "stockTrend": "View the live TXN stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Dallas, TX",
    "founded": "Not on file.",
    "history": "Semiconductors with a well-known early-careers program."
  },
  "Medtronic": {
    "tier": "Healthcare / devices",
    "background": "Healthcare / devices recruiting accounting talent.",
    "deepProfile": [
      "Healthcare / devices with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MDT",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MDT",
    "stockTrend": "View the live MDT stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Minneapolis, MN",
    "founded": "Not on file.",
    "history": "Healthcare / devices with a well-known early-careers program."
  },
  "Eli Lilly": {
    "tier": "Pharma",
    "background": "Pharma recruiting accounting talent.",
    "deepProfile": [
      "Pharma with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: LLY",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/LLY",
    "stockTrend": "View the live LLY stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Indianapolis, IN",
    "founded": "Not on file.",
    "history": "Pharma with a well-known early-careers program."
  },
  "Northrop Grumman": {
    "tier": "Aerospace / defense",
    "background": "Aerospace / defense recruiting accounting talent.",
    "deepProfile": [
      "Aerospace / defense with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: NOC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/NOC",
    "stockTrend": "View the live NOC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Falls Church, VA",
    "founded": "Not on file.",
    "history": "Aerospace / defense with a well-known early-careers program."
  },
  "Marriott": {
    "tier": "Hospitality",
    "background": "Hospitality recruiting accounting talent.",
    "deepProfile": [
      "Hospitality with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MAR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MAR",
    "stockTrend": "View the live MAR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Bethesda, MD",
    "founded": "Not on file.",
    "history": "Hospitality with a well-known early-careers program."
  },
  "Starbucks": {
    "tier": "Consumer / food",
    "background": "Consumer / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: SBUX",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/SBUX",
    "stockTrend": "View the live SBUX stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Seattle, WA",
    "founded": "Not on file.",
    "history": "Consumer / food with a well-known early-careers program."
  },
  "McDonald's": {
    "tier": "Consumer / food",
    "background": "Consumer / food recruiting accounting talent.",
    "deepProfile": [
      "Consumer / food with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: MCD",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/MCD",
    "stockTrend": "View the live MCD stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Consumer / food with a well-known early-careers program."
  },
  "PNC Financial": {
    "tier": "Financial services",
    "background": "Financial services recruiting accounting talent.",
    "deepProfile": [
      "Financial services with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PNC",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PNC",
    "stockTrend": "View the live PNC stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Pittsburgh, PA",
    "founded": "Not on file.",
    "history": "Financial services with a well-known early-careers program."
  },
  "Travelers": {
    "tier": "Insurance",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: TRV",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/TRV",
    "stockTrend": "View the live TRV stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Liberty Mutual": {
    "tier": "Insurance",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Boston, MA",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Progressive": {
    "tier": "Insurance",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PGR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PGR",
    "stockTrend": "View the live PGR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Mayfield, OH",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Allstate": {
    "tier": "Insurance",
    "background": "Insurance recruiting accounting talent.",
    "deepProfile": [
      "Insurance with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: ALL",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/ALL",
    "stockTrend": "View the live ALL stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Northbrook, IL",
    "founded": "Not on file.",
    "history": "Insurance with a well-known early-careers program."
  },
  "Cummins": {
    "tier": "Industrials",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: CMI",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CMI",
    "stockTrend": "View the live CMI stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Columbus, IN",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Emerson Electric": {
    "tier": "Industrials",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: EMR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/EMR",
    "stockTrend": "View the live EMR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "St. Louis, MO",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Paccar": {
    "tier": "Industrials",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: PCAR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/PCAR",
    "stockTrend": "View the live PCAR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Bellevue, WA",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Stanley Black & Decker": {
    "tier": "Industrials",
    "background": "Industrials recruiting accounting talent.",
    "deepProfile": [
      "Industrials with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: SWK",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/SWK",
    "stockTrend": "View the live SWK stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New Britain, CT",
    "founded": "Not on file.",
    "history": "Industrials with a well-known early-careers program."
  },
  "Whirlpool": {
    "tier": "Consumer durables",
    "background": "Consumer durables recruiting accounting talent.",
    "deepProfile": [
      "Consumer durables with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Integrity, excellence, teamwork, customer focus",
    "tagline": "",
    "ticker": "NYSE/NASDAQ: WHR",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/WHR",
    "stockTrend": "View the live WHR stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Benton Harbor, MI",
    "founded": "Not on file.",
    "history": "Consumer durables with a well-known early-careers program."
  },
  "Deloitte": {
    "tier": "Major employer",
    "background": "The largest professional-services firm by revenue",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "The largest professional-services firm by revenue",
    "tagline": "The largest professional-services firm by revenue",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "The largest professional-services firm by revenue. "
  },
  "PwC": {
    "tier": "Major employer",
    "background": "Build trust in society and solve important problems",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Build trust in society and solve important problems",
    "tagline": "Build trust in society and solve important problems",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Build trust in society and solve important problems. "
  },
  "EY (Ernst & Young)": {
    "tier": "Major employer",
    "background": "Building a better working world",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Building a better working world",
    "tagline": "Building a better working world",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Building a better working world. "
  },
  "KPMG": {
    "tier": "Major employer",
    "background": "Making the difference",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Making the difference",
    "tagline": "Making the difference",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Making the difference. "
  },
  "RSM US": {
    "tier": "Major employer",
    "background": "The leading provider to the middle market",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "The leading provider to the middle market",
    "tagline": "The leading provider to the middle market",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "The leading provider to the middle market. "
  },
  "BDO USA": {
    "tier": "Major employer",
    "background": "People who know, know BDO",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "People who know, know BDO",
    "tagline": "People who know, know BDO",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "People who know, know BDO. "
  },
  "Grant Thornton": {
    "tier": "Major employer",
    "background": "Status go",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Status go",
    "tagline": "Status go",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Status go. "
  },
  "CLA (CliftonLarsonAllen)": {
    "tier": "Major employer",
    "background": "Create opportunities",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Create opportunities",
    "tagline": "Create opportunities",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Minneapolis, MN",
    "founded": "Not on file.",
    "history": "Create opportunities. "
  },
  "Baker Tilly": {
    "tier": "Major employer",
    "background": "Now, for tomorrow",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Now, for tomorrow",
    "tagline": "Now, for tomorrow",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Now, for tomorrow. "
  },
  "Crowe": {
    "tier": "Major employer",
    "background": "Embolden your business",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Embolden your business",
    "tagline": "Embolden your business",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Chicago, IL",
    "founded": "Not on file.",
    "history": "Embolden your business. "
  },
  "Forvis Mazars": {
    "tier": "Major employer",
    "background": "Forward vision, results",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Forward vision, results",
    "tagline": "Forward vision, results",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Springfield, MO",
    "founded": "Not on file.",
    "history": "Forward vision, results. "
  },
  "Moss Adams": {
    "tier": "Major employer",
    "background": "Rise with the West",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Rise with the West",
    "tagline": "Rise with the West",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Seattle, WA",
    "founded": "Not on file.",
    "history": "Rise with the West. "
  },
  "Plante Moran": {
    "tier": "Major employer",
    "background": "A reputation built on relationships",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "A reputation built on relationships",
    "tagline": "A reputation built on relationships",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Southfield, MI",
    "founded": "Not on file.",
    "history": "A reputation built on relationships. "
  },
  "CBIZ": {
    "tier": "Major employer",
    "background": "Helping businesses thrive",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Helping businesses thrive",
    "tagline": "Helping businesses thrive",
    "ticker": "NYSE/NASDAQ: CBZ",
    "isPublic": true,
    "stockUrl": "https://finance.yahoo.com/quote/CBZ",
    "stockTrend": "View the live CBZ stock chart and trend on Yahoo Finance.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Cleveland, OH",
    "founded": "Not on file.",
    "history": "Helping businesses thrive. "
  },
  "Cohen & Company": {
    "tier": "Major employer",
    "background": "Great relationships, great results",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Great relationships, great results",
    "tagline": "Great relationships, great results",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Cleveland, OH",
    "founded": "Not on file.",
    "history": "Great relationships, great results. "
  },
  "Marcum": {
    "tier": "Major employer",
    "background": "Ask Marcum",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Ask Marcum",
    "tagline": "Ask Marcum",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Ask Marcum. "
  },
  "CohnReznick": {
    "tier": "Major employer",
    "background": "Create opportunity",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Create opportunity",
    "tagline": "Create opportunity",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "New York, NY",
    "founded": "Not on file.",
    "history": "Create opportunity. "
  },
  "Wipfli": {
    "tier": "Major employer",
    "background": "Perspective that moves you forward",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Perspective that moves you forward",
    "tagline": "Perspective that moves you forward",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Milwaukee, WI",
    "founded": "Not on file.",
    "history": "Perspective that moves you forward. "
  },
  "Aprio": {
    "tier": "Major employer",
    "background": "Advisory, assurance, tax and outsourcing",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "Advisory, assurance, tax and outsourcing",
    "tagline": "Advisory, assurance, tax and outsourcing",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "Atlanta, GA",
    "founded": "Not on file.",
    "history": "Advisory, assurance, tax and outsourcing. "
  },
  "Armanino": {
    "tier": "Major employer",
    "background": "The accounting and consulting firm of the future",
    "deepProfile": [
      "A leading firm with an established early-careers internship pipeline; recruiting is structured and often starts the fall before the summer."
    ],
    "values": "The accounting and consulting firm of the future",
    "tagline": "The accounting and consulting firm of the future",
    "ticker": "Private",
    "isPublic": false,
    "stockUrl": null,
    "stockTrend": "Private or part of a larger parent — no standalone public stock.",
    "acceptanceRate": "~5-12% (est.)",
    "competitiveness": "Competitive",
    "compScore": 3,
    "news": [],
    "fortune": null,
    "hq": "San Ramon, CA",
    "founded": "Not on file.",
    "history": "The accounting and consulting firm of the future. "
  }
};

window.ACCOUNTING_INTERNSHIPS = [
  {
    "id": "walmart-corporate-accounting-2027",
    "company": "Walmart",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Walmart%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "walmart-internal-audit-2027",
    "company": "Walmart",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Walmart%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "amazon-corporate-accounting-2027",
    "company": "Amazon",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Amazon%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "amazon-internal-audit-2027",
    "company": "Amazon",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Amazon%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "apple-corporate-accounting-2027",
    "company": "Apple",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Apple%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "apple-internal-audit-2027",
    "company": "Apple",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Apple%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "unitedhealth-group-corporate-accounting-2027",
    "company": "UnitedHealth Group",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=UnitedHealth%20Group%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "unitedhealth-group-internal-audit-2027",
    "company": "UnitedHealth Group",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=UnitedHealth%20Group%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "berkshire-hathaway-corporate-accounting-2027",
    "company": "Berkshire Hathaway",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Berkshire%20Hathaway%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "berkshire-hathaway-internal-audit-2027",
    "company": "Berkshire Hathaway",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Berkshire%20Hathaway%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cvs-health-corporate-accounting-2027",
    "company": "CVS Health",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CVS%20Health%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cvs-health-internal-audit-2027",
    "company": "CVS Health",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CVS%20Health%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "exxonmobil-corporate-accounting-2027",
    "company": "ExxonMobil",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=ExxonMobil%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "exxonmobil-internal-audit-2027",
    "company": "ExxonMobil",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=ExxonMobil%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "alphabet-google-corporate-accounting-2027",
    "company": "Alphabet (Google)",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Alphabet%20(Google)%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "alphabet-google-internal-audit-2027",
    "company": "Alphabet (Google)",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Alphabet%20(Google)%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "mckesson-corporate-accounting-2027",
    "company": "McKesson",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=McKesson%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "mckesson-internal-audit-2027",
    "company": "McKesson",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=McKesson%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cencora-corporate-accounting-2027",
    "company": "Cencora",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cencora%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cencora-internal-audit-2027",
    "company": "Cencora",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cencora%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "costco-corporate-accounting-2027",
    "company": "Costco",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Costco%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "costco-internal-audit-2027",
    "company": "Costco",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Costco%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "jpmorgan-chase-corporate-accounting-2027",
    "company": "JPMorgan Chase",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=JPMorgan%20Chase%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "jpmorgan-chase-internal-audit-2027",
    "company": "JPMorgan Chase",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=JPMorgan%20Chase%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "microsoft-corporate-accounting-2027",
    "company": "Microsoft",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Microsoft%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "microsoft-internal-audit-2027",
    "company": "Microsoft",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Microsoft%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cardinal-health-corporate-accounting-2027",
    "company": "Cardinal Health",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cardinal%20Health%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cardinal-health-internal-audit-2027",
    "company": "Cardinal Health",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cardinal%20Health%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "chevron-corporate-accounting-2027",
    "company": "Chevron",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Chevron%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "chevron-internal-audit-2027",
    "company": "Chevron",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Chevron%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cigna-corporate-accounting-2027",
    "company": "Cigna",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cigna%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cigna-internal-audit-2027",
    "company": "Cigna",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cigna%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "ford-motor-corporate-accounting-2027",
    "company": "Ford Motor",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Ford%20Motor%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "ford-motor-internal-audit-2027",
    "company": "Ford Motor",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Ford%20Motor%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "bank-of-america-corporate-accounting-2027",
    "company": "Bank of America",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Bank%20of%20America%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "bank-of-america-internal-audit-2027",
    "company": "Bank of America",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Bank%20of%20America%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-motors-corporate-accounting-2027",
    "company": "General Motors",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Motors%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-motors-internal-audit-2027",
    "company": "General Motors",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Motors%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "elevance-health-corporate-accounting-2027",
    "company": "Elevance Health",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Elevance%20Health%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "elevance-health-internal-audit-2027",
    "company": "Elevance Health",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Elevance%20Health%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "citigroup-corporate-accounting-2027",
    "company": "Citigroup",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Citigroup%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "citigroup-internal-audit-2027",
    "company": "Citigroup",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Citigroup%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "centene-corporate-accounting-2027",
    "company": "Centene",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Centene%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "centene-internal-audit-2027",
    "company": "Centene",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Centene%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "home-depot-corporate-accounting-2027",
    "company": "Home Depot",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Home%20Depot%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "home-depot-internal-audit-2027",
    "company": "Home Depot",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Home%20Depot%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "marathon-petroleum-corporate-accounting-2027",
    "company": "Marathon Petroleum",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marathon%20Petroleum%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "marathon-petroleum-internal-audit-2027",
    "company": "Marathon Petroleum",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marathon%20Petroleum%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "kroger-corporate-accounting-2027",
    "company": "Kroger",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kroger%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "kroger-internal-audit-2027",
    "company": "Kroger",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kroger%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "phillips-66-corporate-accounting-2027",
    "company": "Phillips 66",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Phillips%2066%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "phillips-66-internal-audit-2027",
    "company": "Phillips 66",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Phillips%2066%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "fannie-mae-corporate-accounting-2027",
    "company": "Fannie Mae",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Fannie%20Mae%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "fannie-mae-internal-audit-2027",
    "company": "Fannie Mae",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Fannie%20Mae%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "walgreens-corporate-accounting-2027",
    "company": "Walgreens",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Walgreens%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "walgreens-internal-audit-2027",
    "company": "Walgreens",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Walgreens%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "valero-energy-corporate-accounting-2027",
    "company": "Valero Energy",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Valero%20Energy%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "valero-energy-internal-audit-2027",
    "company": "Valero Energy",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Valero%20Energy%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "meta-corporate-accounting-2027",
    "company": "Meta",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Meta%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "meta-internal-audit-2027",
    "company": "Meta",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Meta%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "verizon-corporate-accounting-2027",
    "company": "Verizon",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Verizon%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "verizon-internal-audit-2027",
    "company": "Verizon",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Verizon%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "at-t-corporate-accounting-2027",
    "company": "AT&T",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=AT%26T%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "at-t-internal-audit-2027",
    "company": "AT&T",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=AT%26T%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "comcast-corporate-accounting-2027",
    "company": "Comcast",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Comcast%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "comcast-internal-audit-2027",
    "company": "Comcast",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Comcast%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "wells-fargo-corporate-accounting-2027",
    "company": "Wells Fargo",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wells%20Fargo%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "wells-fargo-internal-audit-2027",
    "company": "Wells Fargo",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wells%20Fargo%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "goldman-sachs-corporate-accounting-2027",
    "company": "Goldman Sachs",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Goldman%20Sachs%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "goldman-sachs-internal-audit-2027",
    "company": "Goldman Sachs",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Goldman%20Sachs%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "target-corporate-accounting-2027",
    "company": "Target",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Target%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "target-internal-audit-2027",
    "company": "Target",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Target%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "humana-corporate-accounting-2027",
    "company": "Humana",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Humana%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "humana-internal-audit-2027",
    "company": "Humana",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Humana%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "state-farm-corporate-accounting-2027",
    "company": "State Farm",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=State%20Farm%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "state-farm-internal-audit-2027",
    "company": "State Farm",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=State%20Farm%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "tesla-corporate-accounting-2027",
    "company": "Tesla",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Tesla%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "tesla-internal-audit-2027",
    "company": "Tesla",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Tesla%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "morgan-stanley-corporate-accounting-2027",
    "company": "Morgan Stanley",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Morgan%20Stanley%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "morgan-stanley-internal-audit-2027",
    "company": "Morgan Stanley",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Morgan%20Stanley%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "johnson-johnson-corporate-accounting-2027",
    "company": "Johnson & Johnson",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Johnson%20%26%20Johnson%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "johnson-johnson-internal-audit-2027",
    "company": "Johnson & Johnson",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Johnson%20%26%20Johnson%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "archer-daniels-midland-corporate-accounting-2027",
    "company": "Archer Daniels Midland",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Archer%20Daniels%20Midland%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "archer-daniels-midland-internal-audit-2027",
    "company": "Archer Daniels Midland",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Archer%20Daniels%20Midland%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "pepsico-corporate-accounting-2027",
    "company": "PepsiCo",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PepsiCo%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "pepsico-internal-audit-2027",
    "company": "PepsiCo",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PepsiCo%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "ups-corporate-accounting-2027",
    "company": "UPS",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=UPS%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "ups-internal-audit-2027",
    "company": "UPS",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=UPS%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "fedex-corporate-accounting-2027",
    "company": "FedEx",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=FedEx%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "fedex-internal-audit-2027",
    "company": "FedEx",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=FedEx%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "disney-corporate-accounting-2027",
    "company": "Disney",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Disney%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "disney-internal-audit-2027",
    "company": "Disney",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Disney%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "dell-technologies-corporate-accounting-2027",
    "company": "Dell Technologies",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Dell%20Technologies%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "dell-technologies-internal-audit-2027",
    "company": "Dell Technologies",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Dell%20Technologies%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "lowe-s-corporate-accounting-2027",
    "company": "Lowe's",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Lowe's%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "lowe-s-internal-audit-2027",
    "company": "Lowe's",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Lowe's%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "procter-gamble-corporate-accounting-2027",
    "company": "Procter & Gamble",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Procter%20%26%20Gamble%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "procter-gamble-internal-audit-2027",
    "company": "Procter & Gamble",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Procter%20%26%20Gamble%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "boeing-corporate-accounting-2027",
    "company": "Boeing",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Boeing%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "boeing-internal-audit-2027",
    "company": "Boeing",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Boeing%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "albertsons-corporate-accounting-2027",
    "company": "Albertsons",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Albertsons%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "albertsons-internal-audit-2027",
    "company": "Albertsons",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Albertsons%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "sysco-corporate-accounting-2027",
    "company": "Sysco",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Sysco%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "sysco-internal-audit-2027",
    "company": "Sysco",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Sysco%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "rtx-raytheon-corporate-accounting-2027",
    "company": "RTX (Raytheon)",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RTX%20(Raytheon)%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "rtx-raytheon-internal-audit-2027",
    "company": "RTX (Raytheon)",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RTX%20(Raytheon)%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "lockheed-martin-corporate-accounting-2027",
    "company": "Lockheed Martin",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Lockheed%20Martin%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "lockheed-martin-internal-audit-2027",
    "company": "Lockheed Martin",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Lockheed%20Martin%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "intel-corporate-accounting-2027",
    "company": "Intel",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Intel%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "intel-internal-audit-2027",
    "company": "Intel",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Intel%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "ibm-corporate-accounting-2027",
    "company": "IBM",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=IBM%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "ibm-internal-audit-2027",
    "company": "IBM",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=IBM%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "hca-healthcare-corporate-accounting-2027",
    "company": "HCA Healthcare",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=HCA%20Healthcare%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "hca-healthcare-internal-audit-2027",
    "company": "HCA Healthcare",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=HCA%20Healthcare%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "caterpillar-corporate-accounting-2027",
    "company": "Caterpillar",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Caterpillar%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "caterpillar-internal-audit-2027",
    "company": "Caterpillar",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Caterpillar%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "nationwide-corporate-accounting-2027",
    "company": "Nationwide",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nationwide%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "nationwide-internal-audit-2027",
    "company": "Nationwide",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nationwide%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "metlife-corporate-accounting-2027",
    "company": "MetLife",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=MetLife%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "metlife-internal-audit-2027",
    "company": "MetLife",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=MetLife%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "coca-cola-corporate-accounting-2027",
    "company": "Coca-Cola",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Coca-Cola%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "coca-cola-internal-audit-2027",
    "company": "Coca-Cola",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Coca-Cola%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "pfizer-corporate-accounting-2027",
    "company": "Pfizer",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Pfizer%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "pfizer-internal-audit-2027",
    "company": "Pfizer",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Pfizer%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "nike-corporate-accounting-2027",
    "company": "Nike",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nike%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "nike-internal-audit-2027",
    "company": "Nike",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nike%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "merck-corporate-accounting-2027",
    "company": "Merck",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Merck%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "merck-internal-audit-2027",
    "company": "Merck",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Merck%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "honeywell-corporate-accounting-2027",
    "company": "Honeywell",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Honeywell%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "honeywell-internal-audit-2027",
    "company": "Honeywell",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Honeywell%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "american-express-corporate-accounting-2027",
    "company": "American Express",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=American%20Express%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "american-express-internal-audit-2027",
    "company": "American Express",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=American%20Express%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "abbott-corporate-accounting-2027",
    "company": "Abbott",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Abbott%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "abbott-internal-audit-2027",
    "company": "Abbott",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Abbott%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "3m-corporate-accounting-2027",
    "company": "3M",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=3M%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "3m-internal-audit-2027",
    "company": "3M",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=3M%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "deere-company-corporate-accounting-2027",
    "company": "Deere & Company",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deere%20%26%20Company%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "deere-company-internal-audit-2027",
    "company": "Deere & Company",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deere%20%26%20Company%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "oracle-corporate-accounting-2027",
    "company": "Oracle",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Oracle%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "oracle-internal-audit-2027",
    "company": "Oracle",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Oracle%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-electric-corporate-accounting-2027",
    "company": "General Electric",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Electric%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-electric-internal-audit-2027",
    "company": "General Electric",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Electric%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cisco-corporate-accounting-2027",
    "company": "Cisco",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cisco%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cisco-internal-audit-2027",
    "company": "Cisco",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cisco%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "tjx-companies-corporate-accounting-2027",
    "company": "TJX Companies",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=TJX%20Companies%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "tjx-companies-internal-audit-2027",
    "company": "TJX Companies",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=TJX%20Companies%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "nvidia-corporate-accounting-2027",
    "company": "NVIDIA",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=NVIDIA%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "nvidia-internal-audit-2027",
    "company": "NVIDIA",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=NVIDIA%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "salesforce-corporate-accounting-2027",
    "company": "Salesforce",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Salesforce%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "salesforce-internal-audit-2027",
    "company": "Salesforce",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Salesforce%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "abbvie-corporate-accounting-2027",
    "company": "AbbVie",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=AbbVie%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "abbvie-internal-audit-2027",
    "company": "AbbVie",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=AbbVie%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "best-buy-corporate-accounting-2027",
    "company": "Best Buy",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Best%20Buy%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "best-buy-internal-audit-2027",
    "company": "Best Buy",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Best%20Buy%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "bristol-myers-squibb-corporate-accounting-2027",
    "company": "Bristol Myers Squibb",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Bristol%20Myers%20Squibb%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "bristol-myers-squibb-internal-audit-2027",
    "company": "Bristol Myers Squibb",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Bristol%20Myers%20Squibb%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "united-airlines-corporate-accounting-2027",
    "company": "United Airlines",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=United%20Airlines%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "united-airlines-internal-audit-2027",
    "company": "United Airlines",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=United%20Airlines%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "delta-air-lines-corporate-accounting-2027",
    "company": "Delta Air Lines",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Delta%20Air%20Lines%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "delta-air-lines-internal-audit-2027",
    "company": "Delta Air Lines",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Delta%20Air%20Lines%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "american-airlines-corporate-accounting-2027",
    "company": "American Airlines",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=American%20Airlines%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "american-airlines-internal-audit-2027",
    "company": "American Airlines",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=American%20Airlines%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "tyson-foods-corporate-accounting-2027",
    "company": "Tyson Foods",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Tyson%20Foods%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "tyson-foods-internal-audit-2027",
    "company": "Tyson Foods",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Tyson%20Foods%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "prudential-financial-corporate-accounting-2027",
    "company": "Prudential Financial",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Prudential%20Financial%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "prudential-financial-internal-audit-2027",
    "company": "Prudential Financial",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Prudential%20Financial%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "mondelez-corporate-accounting-2027",
    "company": "Mondelez",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Mondelez%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "mondelez-internal-audit-2027",
    "company": "Mondelez",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Mondelez%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-dynamics-corporate-accounting-2027",
    "company": "General Dynamics",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Dynamics%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-dynamics-internal-audit-2027",
    "company": "General Dynamics",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Dynamics%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "capital-one-corporate-accounting-2027",
    "company": "Capital One",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Capital%20One%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "capital-one-internal-audit-2027",
    "company": "Capital One",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Capital%20One%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "charter-communications-corporate-accounting-2027",
    "company": "Charter Communications",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Charter%20Communications%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "charter-communications-internal-audit-2027",
    "company": "Charter Communications",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Charter%20Communications%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "nordstrom-corporate-accounting-2027",
    "company": "Nordstrom",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nordstrom%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "nordstrom-internal-audit-2027",
    "company": "Nordstrom",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Nordstrom%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "est-e-lauder-corporate-accounting-2027",
    "company": "Estée Lauder",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Est%C3%A9e%20Lauder%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "est-e-lauder-internal-audit-2027",
    "company": "Estée Lauder",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Est%C3%A9e%20Lauder%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "colgate-palmolive-corporate-accounting-2027",
    "company": "Colgate-Palmolive",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Colgate-Palmolive%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "colgate-palmolive-internal-audit-2027",
    "company": "Colgate-Palmolive",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Colgate-Palmolive%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "kimberly-clark-corporate-accounting-2027",
    "company": "Kimberly-Clark",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kimberly-Clark%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "kimberly-clark-internal-audit-2027",
    "company": "Kimberly-Clark",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kimberly-Clark%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-mills-corporate-accounting-2027",
    "company": "General Mills",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Mills%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "general-mills-internal-audit-2027",
    "company": "General Mills",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=General%20Mills%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "kellanova-corporate-accounting-2027",
    "company": "Kellanova",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kellanova%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "kellanova-internal-audit-2027",
    "company": "Kellanova",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kellanova%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "kraft-heinz-corporate-accounting-2027",
    "company": "Kraft Heinz",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kraft%20Heinz%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "kraft-heinz-internal-audit-2027",
    "company": "Kraft Heinz",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Kraft%20Heinz%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "unilever-corporate-accounting-2027",
    "company": "Unilever",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Unilever%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "unilever-internal-audit-2027",
    "company": "Unilever",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Unilever%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "l-or-al-usa-corporate-accounting-2027",
    "company": "L'Oréal USA",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=L'Or%C3%A9al%20USA%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "l-or-al-usa-internal-audit-2027",
    "company": "L'Oréal USA",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=L'Or%C3%A9al%20USA%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "anheuser-busch-corporate-accounting-2027",
    "company": "Anheuser-Busch",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Anheuser-Busch%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "anheuser-busch-internal-audit-2027",
    "company": "Anheuser-Busch",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Anheuser-Busch%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "mastercard-corporate-accounting-2027",
    "company": "Mastercard",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Mastercard%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "mastercard-internal-audit-2027",
    "company": "Mastercard",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Mastercard%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "visa-corporate-accounting-2027",
    "company": "Visa",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Visa%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "visa-internal-audit-2027",
    "company": "Visa",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Visa%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "adobe-corporate-accounting-2027",
    "company": "Adobe",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Adobe%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "adobe-internal-audit-2027",
    "company": "Adobe",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Adobe%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "qualcomm-corporate-accounting-2027",
    "company": "Qualcomm",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Qualcomm%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "qualcomm-internal-audit-2027",
    "company": "Qualcomm",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Qualcomm%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "texas-instruments-corporate-accounting-2027",
    "company": "Texas Instruments",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Texas%20Instruments%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "texas-instruments-internal-audit-2027",
    "company": "Texas Instruments",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Texas%20Instruments%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "medtronic-corporate-accounting-2027",
    "company": "Medtronic",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Medtronic%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "medtronic-internal-audit-2027",
    "company": "Medtronic",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Medtronic%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "eli-lilly-corporate-accounting-2027",
    "company": "Eli Lilly",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Eli%20Lilly%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "eli-lilly-internal-audit-2027",
    "company": "Eli Lilly",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Eli%20Lilly%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "northrop-grumman-corporate-accounting-2027",
    "company": "Northrop Grumman",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Northrop%20Grumman%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "northrop-grumman-internal-audit-2027",
    "company": "Northrop Grumman",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Northrop%20Grumman%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "marriott-corporate-accounting-2027",
    "company": "Marriott",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marriott%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "marriott-internal-audit-2027",
    "company": "Marriott",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marriott%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "starbucks-corporate-accounting-2027",
    "company": "Starbucks",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Starbucks%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "starbucks-internal-audit-2027",
    "company": "Starbucks",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Starbucks%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "mcdonald-s-corporate-accounting-2027",
    "company": "McDonald's",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=McDonald's%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "mcdonald-s-internal-audit-2027",
    "company": "McDonald's",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=McDonald's%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "pnc-financial-corporate-accounting-2027",
    "company": "PNC Financial",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PNC%20Financial%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "pnc-financial-internal-audit-2027",
    "company": "PNC Financial",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PNC%20Financial%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "travelers-corporate-accounting-2027",
    "company": "Travelers",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Travelers%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "travelers-internal-audit-2027",
    "company": "Travelers",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Travelers%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "liberty-mutual-corporate-accounting-2027",
    "company": "Liberty Mutual",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Liberty%20Mutual%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "liberty-mutual-internal-audit-2027",
    "company": "Liberty Mutual",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Liberty%20Mutual%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "progressive-corporate-accounting-2027",
    "company": "Progressive",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Progressive%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "progressive-internal-audit-2027",
    "company": "Progressive",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Progressive%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "allstate-corporate-accounting-2027",
    "company": "Allstate",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Allstate%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "allstate-internal-audit-2027",
    "company": "Allstate",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Allstate%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "cummins-corporate-accounting-2027",
    "company": "Cummins",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cummins%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cummins-internal-audit-2027",
    "company": "Cummins",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Minneapolis, MN",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cummins%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "emerson-electric-corporate-accounting-2027",
    "company": "Emerson Electric",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Emerson%20Electric%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "emerson-electric-internal-audit-2027",
    "company": "Emerson Electric",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Seattle, WA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Emerson%20Electric%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "paccar-corporate-accounting-2027",
    "company": "Paccar",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Paccar%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "paccar-internal-audit-2027",
    "company": "Paccar",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Chicago, IL",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Paccar%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "stanley-black-decker-corporate-accounting-2027",
    "company": "Stanley Black & Decker",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Stanley%20Black%20%26%20Decker%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "stanley-black-decker-internal-audit-2027",
    "company": "Stanley Black & Decker",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "Dallas, TX",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Stanley%20Black%20%26%20Decker%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "whirlpool-corporate-accounting-2027",
    "company": "Whirlpool",
    "role": "Corporate Accounting Intern",
    "level": "Internship",
    "types": [
      "Corporate Accounting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Corporate Accounting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Whirlpool%20Corporate%20Accounting%20summer%202027%20internship%20careers"
  },
  {
    "id": "whirlpool-internal-audit-2027",
    "company": "Whirlpool",
    "role": "Internal Audit Intern",
    "level": "Internship",
    "types": [
      "Internal Audit"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "information_systems"
    ],
    "location": "San Francisco, CA",
    "about": "Internal Audit summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Whirlpool%20Internal%20Audit%20summer%202027%20internship%20careers"
  },
  {
    "id": "deloitte-audit-assurance-2027",
    "company": "Deloitte",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deloitte%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "deloitte-tax-2027",
    "company": "Deloitte",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Minneapolis, MN",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deloitte%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "deloitte-advisory-consulting-2027",
    "company": "Deloitte",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Charlotte, NC",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deloitte%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "deloitte-transaction-advisory-2027",
    "company": "Deloitte",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Seattle, WA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Deloitte%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "pwc-audit-assurance-2027",
    "company": "PwC",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PwC%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "pwc-tax-2027",
    "company": "PwC",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Chicago, IL",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PwC%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "pwc-advisory-consulting-2027",
    "company": "PwC",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Atlanta, GA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PwC%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "pwc-transaction-advisory-2027",
    "company": "PwC",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Dallas, TX",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=PwC%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "ey-ernst-young-audit-assurance-2027",
    "company": "EY (Ernst & Young)",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=EY%20(Ernst%20%26%20Young)%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "ey-ernst-young-tax-2027",
    "company": "EY (Ernst & Young)",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "San Francisco, CA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=EY%20(Ernst%20%26%20Young)%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "ey-ernst-young-advisory-consulting-2027",
    "company": "EY (Ernst & Young)",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Los Angeles, CA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=EY%20(Ernst%20%26%20Young)%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "ey-ernst-young-transaction-advisory-2027",
    "company": "EY (Ernst & Young)",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Minneapolis, MN",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=EY%20(Ernst%20%26%20Young)%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "kpmg-audit-assurance-2027",
    "company": "KPMG",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=KPMG%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "kpmg-tax-2027",
    "company": "KPMG",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Seattle, WA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=KPMG%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "kpmg-advisory-consulting-2027",
    "company": "KPMG",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "New York, NY",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=KPMG%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "kpmg-transaction-advisory-2027",
    "company": "KPMG",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Chicago, IL",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=KPMG%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "rsm-us-audit-assurance-2027",
    "company": "RSM US",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RSM%20US%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "rsm-us-tax-2027",
    "company": "RSM US",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Dallas, TX",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RSM%20US%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "rsm-us-advisory-consulting-2027",
    "company": "RSM US",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Boston, MA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RSM%20US%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "rsm-us-transaction-advisory-2027",
    "company": "RSM US",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "San Francisco, CA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=RSM%20US%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "bdo-usa-audit-assurance-2027",
    "company": "BDO USA",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=BDO%20USA%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "bdo-usa-tax-2027",
    "company": "BDO USA",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Minneapolis, MN",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=BDO%20USA%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "bdo-usa-advisory-consulting-2027",
    "company": "BDO USA",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Charlotte, NC",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=BDO%20USA%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "bdo-usa-transaction-advisory-2027",
    "company": "BDO USA",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Seattle, WA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=BDO%20USA%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "grant-thornton-audit-assurance-2027",
    "company": "Grant Thornton",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Grant%20Thornton%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "grant-thornton-tax-2027",
    "company": "Grant Thornton",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Chicago, IL",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Grant%20Thornton%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "grant-thornton-advisory-consulting-2027",
    "company": "Grant Thornton",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Atlanta, GA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Grant%20Thornton%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "grant-thornton-transaction-advisory-2027",
    "company": "Grant Thornton",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Dallas, TX",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Grant%20Thornton%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "cla-cliftonlarsonallen-audit-assurance-2027",
    "company": "CLA (CliftonLarsonAllen)",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CLA%20(CliftonLarsonAllen)%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "cla-cliftonlarsonallen-tax-2027",
    "company": "CLA (CliftonLarsonAllen)",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "San Francisco, CA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CLA%20(CliftonLarsonAllen)%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "cla-cliftonlarsonallen-advisory-consulting-2027",
    "company": "CLA (CliftonLarsonAllen)",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Los Angeles, CA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CLA%20(CliftonLarsonAllen)%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cla-cliftonlarsonallen-transaction-advisory-2027",
    "company": "CLA (CliftonLarsonAllen)",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Minneapolis, MN",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CLA%20(CliftonLarsonAllen)%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "baker-tilly-audit-assurance-2027",
    "company": "Baker Tilly",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Baker%20Tilly%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "baker-tilly-tax-2027",
    "company": "Baker Tilly",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Seattle, WA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Baker%20Tilly%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "baker-tilly-advisory-consulting-2027",
    "company": "Baker Tilly",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "New York, NY",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Baker%20Tilly%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "baker-tilly-transaction-advisory-2027",
    "company": "Baker Tilly",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Chicago, IL",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Baker%20Tilly%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "crowe-audit-assurance-2027",
    "company": "Crowe",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Crowe%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "crowe-tax-2027",
    "company": "Crowe",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Dallas, TX",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Crowe%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "crowe-advisory-consulting-2027",
    "company": "Crowe",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Boston, MA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Crowe%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "crowe-transaction-advisory-2027",
    "company": "Crowe",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "San Francisco, CA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Crowe%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "forvis-mazars-audit-assurance-2027",
    "company": "Forvis Mazars",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Forvis%20Mazars%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "forvis-mazars-tax-2027",
    "company": "Forvis Mazars",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Minneapolis, MN",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Forvis%20Mazars%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "forvis-mazars-advisory-consulting-2027",
    "company": "Forvis Mazars",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Charlotte, NC",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Forvis%20Mazars%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "forvis-mazars-transaction-advisory-2027",
    "company": "Forvis Mazars",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Seattle, WA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Forvis%20Mazars%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "moss-adams-audit-assurance-2027",
    "company": "Moss Adams",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Moss%20Adams%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "moss-adams-tax-2027",
    "company": "Moss Adams",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Chicago, IL",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Moss%20Adams%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "moss-adams-advisory-consulting-2027",
    "company": "Moss Adams",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Atlanta, GA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Moss%20Adams%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "moss-adams-transaction-advisory-2027",
    "company": "Moss Adams",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Dallas, TX",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Moss%20Adams%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "plante-moran-audit-assurance-2027",
    "company": "Plante Moran",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Plante%20Moran%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "plante-moran-tax-2027",
    "company": "Plante Moran",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "San Francisco, CA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Plante%20Moran%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "plante-moran-advisory-consulting-2027",
    "company": "Plante Moran",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Los Angeles, CA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Plante%20Moran%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "plante-moran-transaction-advisory-2027",
    "company": "Plante Moran",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Minneapolis, MN",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Plante%20Moran%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "cbiz-audit-assurance-2027",
    "company": "CBIZ",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CBIZ%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "cbiz-tax-2027",
    "company": "CBIZ",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Seattle, WA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CBIZ%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "cbiz-advisory-consulting-2027",
    "company": "CBIZ",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "New York, NY",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CBIZ%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cbiz-transaction-advisory-2027",
    "company": "CBIZ",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Chicago, IL",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CBIZ%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohen-company-audit-assurance-2027",
    "company": "Cohen & Company",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cohen%20%26%20Company%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohen-company-tax-2027",
    "company": "Cohen & Company",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Dallas, TX",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cohen%20%26%20Company%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohen-company-advisory-consulting-2027",
    "company": "Cohen & Company",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Boston, MA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cohen%20%26%20Company%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohen-company-transaction-advisory-2027",
    "company": "Cohen & Company",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "San Francisco, CA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Cohen%20%26%20Company%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "marcum-audit-assurance-2027",
    "company": "Marcum",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Los Angeles, CA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marcum%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "marcum-tax-2027",
    "company": "Marcum",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Minneapolis, MN",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marcum%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "marcum-advisory-consulting-2027",
    "company": "Marcum",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Charlotte, NC",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marcum%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "marcum-transaction-advisory-2027",
    "company": "Marcum",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Seattle, WA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Marcum%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohnreznick-audit-assurance-2027",
    "company": "CohnReznick",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "New York, NY",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CohnReznick%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohnreznick-tax-2027",
    "company": "CohnReznick",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Chicago, IL",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CohnReznick%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohnreznick-advisory-consulting-2027",
    "company": "CohnReznick",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Atlanta, GA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CohnReznick%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "cohnreznick-transaction-advisory-2027",
    "company": "CohnReznick",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Dallas, TX",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=CohnReznick%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "wipfli-audit-assurance-2027",
    "company": "Wipfli",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Boston, MA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "Yes",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wipfli%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "wipfli-tax-2027",
    "company": "Wipfli",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "San Francisco, CA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wipfli%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "wipfli-advisory-consulting-2027",
    "company": "Wipfli",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Los Angeles, CA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wipfli%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "wipfli-transaction-advisory-2027",
    "company": "Wipfli",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Minneapolis, MN",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Wipfli%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "aprio-audit-assurance-2027",
    "company": "Aprio",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Charlotte, NC",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "Yes",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Aprio%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "aprio-tax-2027",
    "company": "Aprio",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Seattle, WA",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Aprio%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "aprio-advisory-consulting-2027",
    "company": "Aprio",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "New York, NY",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Aprio%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "aprio-transaction-advisory-2027",
    "company": "Aprio",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "Chicago, IL",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "Online assessment"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Aprio%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  },
  {
    "id": "armanino-audit-assurance-2027",
    "company": "Armanino",
    "role": "Audit & Assurance Intern",
    "level": "Internship",
    "types": [
      "Audit & Assurance"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business"
    ],
    "location": "Atlanta, GA",
    "about": "Audit & Assurance summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "Yes",
      "assessment": "HireVue / video screen"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Armanino%20Audit%20%26%20Assurance%20summer%202027%20internship%20careers"
  },
  {
    "id": "armanino-tax-2027",
    "company": "Armanino",
    "role": "Tax Intern",
    "level": "Internship",
    "types": [
      "Tax"
    ],
    "majors": [
      "Accounting",
      "Finance"
    ],
    "majorTags": [
      "accounting",
      "finance"
    ],
    "location": "Dallas, TX",
    "about": "Tax summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Optional",
      "writtenAnswers": "No",
      "assessment": "Pymetrics game"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Armanino%20Tax%20summer%202027%20internship%20careers"
  },
  {
    "id": "armanino-advisory-consulting-2027",
    "company": "Armanino",
    "role": "Advisory & Consulting Intern",
    "level": "Internship",
    "types": [
      "Advisory & Consulting"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Business Administration",
      "Information Systems"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "business",
      "information_systems"
    ],
    "location": "Boston, MA",
    "about": "Advisory & Consulting summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Not required",
      "writtenAnswers": "No",
      "assessment": "SHL / numerical test"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Armanino%20Advisory%20%26%20Consulting%20summer%202027%20internship%20careers"
  },
  {
    "id": "armanino-transaction-advisory-2027",
    "company": "Armanino",
    "role": "Transaction Advisory Intern",
    "level": "Internship",
    "types": [
      "Transaction Advisory"
    ],
    "majors": [
      "Accounting",
      "Finance",
      "Economics"
    ],
    "majorTags": [
      "accounting",
      "finance",
      "economics"
    ],
    "location": "San Francisco, CA",
    "about": "Transaction Advisory summer internship: hands-on project work, exposure to leaders, and a structured early-careers experience.",
    "status": "Opens ~fall 2026",
    "due": "Opens ~fall 2026",
    "deadline": null,
    "comp": "~$25-38/hr — est.",
    "reqs": {
      "cv": "Required",
      "coverLetter": "Required",
      "writtenAnswers": "No",
      "assessment": "—"
    },
    "dateAdded": "2026-05-31",
    "isNew": false,
    "applyUrl": "https://www.google.com/search?q=Armanino%20Transaction%20Advisory%20summer%202027%20internship%20careers"
  }
];
