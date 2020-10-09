import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatIcon} from '@angular/material/Icon';

const matModules: String[] = [
 "MatButtonModule",
    "MatToolbarModule"
];


@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatListModule,
        BrowserAnimationsModule
        // MatIcon
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatListModule,
        BrowserAnimationsModule
        // MatIcon
    ]
  })
export class material{

}