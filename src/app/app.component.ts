import { RouterOutlet } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private toastr: ToastrService, private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {

    this.toastr.success('hello kerolos', 'succes kero')
  }

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  showtoast() {
    this.toastr.success('hello kerolos', 'succes kero')

  }

  GetValueFromTranslation(){
    this.translate.get('WELCOME').subscribe((res: string) => {
      alert('Translated text:'+ res);
    });
  }
}
