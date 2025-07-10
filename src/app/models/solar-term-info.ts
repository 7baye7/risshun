export interface Season
{
    name: string;
    nativeNames: Map<string, Variation>;
    solarTerms: Map<number, SolarTermInfo>;
}

export interface SolarTermInfo
{
    name: string;
    nativeNames: Map<string, Variation>;
    pentads: Map<number, Pentad>;
}

export interface Pentad
{
    variations: Map<string, ExtendedVariation>;
}

export interface Variation
{
    nativeName: string;
    transliteration: string;
}

export interface ExtendedVariation extends Variation
{
    name: string;
    explanation: string | undefined;
}