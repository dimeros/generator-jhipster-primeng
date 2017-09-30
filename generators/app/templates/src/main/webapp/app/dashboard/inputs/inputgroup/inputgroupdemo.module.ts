import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {FormsModule}    from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions-wizard/components/wizard.module';

import {
    InputGroupDemoComponent,
    inputGroupDemoRoute
} from './';

const DASHBOARD_STATES = [
    inputGroupDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        FormsModule,
        InputTextModule,
        CheckboxModule,
        RadioButtonModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(DASHBOARD_STATES, { useHash: true })
    ],
    declarations: [
        InputGroupDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>InputGroupDemoModule {}