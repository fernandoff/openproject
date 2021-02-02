import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteUserWizardComponent } from './component/invite-user-wizard.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgOptionHighlightModule} from "@ng-select/ng-option-highlight";
import {StepperModule} from "core-app/modules/common/stepper/stepper.module";
import {OpenprojectCommonModule} from "core-app/modules/common/openproject-common.module";

@NgModule({
  declarations: [InviteUserWizardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgOptionHighlightModule,
    StepperModule,
    OpenprojectCommonModule,
  ],
  exports: [InviteUserWizardComponent]
})
export class InviteUserWizardModule { }