import { Component } from '@angular/core';
import { SeedService } from '@gc/services';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {
    constructor(private seedService: SeedService) {}

    seedDB(): void {
        this.seedService.seedLocalstorage();
    }
}
