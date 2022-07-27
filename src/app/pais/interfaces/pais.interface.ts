// Country = pais
export interface Country {
    name:           {
        common: string;
        oficial: string;
    };
    topLevelDomain: string[];
    cca2:           string;
    cca3:           string;
    ccn3:           number;
    alpha3Code:     string;
    callingCodes:   string[];
    capital:        string;
    altSpellings:   string[];
    subregion:      string;
    region:         string;
    population:     number;
    latlng:         number[];
    demonym:        string;
    area:           number;
    gini:           number;
    timezones:      string[];
    borders:        string[];
    nativeName:     string;
    numericCode:    number;
    flags:          Flags;
    currencies:     Currency[];
    languages:      Language[];
    translations:   Translations;
    flag:           string;
    regionalBlocs:  RegionalBloc[];
    cioc:           string;
    independent:    boolean;
}

export interface Currency {
    code:   string;
    name:   string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1:   string;
    iso639_2:   string;
    name:       string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym:    string;
    name:       string;
    otherNames: string[];
}

export interface Translations {
    
    ara: {
        common: string;
        oficial: string;
    };
    pol: {
        common: string;
        oficial: string;
    };
    rus: {
        common: string;
        oficial: string;
    };
    urd: {
        common: string;
        oficial: string;
    };
    swe: {
        common: string;
        oficial: string;
    };
    spa: {
        common: string;
        oficial: string;
    };
    zho: {
        common: string;
        oficial: string;
    };
    fr: {
        common: string;
        oficial: string;
    };
    jpn: {
        common: string;
        oficial: string;
    };
    ita: {
        common: string;
        oficial: string;
    };
    sl: {
        common: string;
        oficial: string;
    };
    hun: {
        common: string;
        oficial: string;
    }
}
