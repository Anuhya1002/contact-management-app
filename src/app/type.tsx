// src/app/types.ts

export interface CasesData {
    cases: Record<string, number>; // Example structure, adjust as needed
    // Add more properties if needed
}

export interface CountryInfo {
    iso2: string;
    lat: number;
    long: number;
}

export interface CountryData {
    country: string;
    countryInfo: CountryInfo;
    active: number;
    recovered: number;
    deaths: number;
}
