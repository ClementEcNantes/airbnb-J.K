export interface Logement {
    id: number;
    city: {
        zipCode: number;
        name: string;    
    };
    prix: number;
    rating: number;
    favourite: boolean;
}