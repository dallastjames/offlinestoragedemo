export class GameData {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public iconUrl: string;

    constructor(params?: Partial<GameData>) {
        if (!!params) {
            this.id = params.id || this.id;
            this.name = params.name || this.name;
            this.description = params.description || this.description;
            this.price = params.price || this.price;
            this.iconUrl = params.iconUrl || this.iconUrl;
        }
    }

    static fromCSVRow(data: GameDataFromCSV): GameData {
        return new GameData({
            id: data.ID,
            name: data.Name,
            description: data.Description,
            price: data.Price,
            iconUrl: data['Icon URL']
        });
    }
}

export interface GameDataFromCSV {
    'Age Rating': string;
    'Average User Rating': number;
    'Current Version Release Date': string;
    Description: string;
    Genres: string;
    ID: number;
    'Icon URL': string;
    'In-app Purchases': string;
    Languages: string;
    Name: string;
    'Original Release Date': string;
    Price: number;
    'Primary Genre': string;
    Size: number;
    Subtitle: string;
    URL: string;
    'User Rating Count': number;
}
