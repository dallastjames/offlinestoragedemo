import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameData, GameDataFromCSV } from '@gc/models';

@Injectable({
    providedIn: 'root'
})
export class SeedService {
    constructor(private http: HttpClient) {}

    public async seedLocalstorage(): Promise<void> {
        localStorage.clear();
        const data = await this.http
            .get<GameDataFromCSV[]>('./assets/data.json')
            .toPromise();
        console.log(data);
        const classedData = data.map(d => GameData.fromCSVRow(d));
        localStorage.setItem('data', JSON.stringify(classedData));
    }
}
