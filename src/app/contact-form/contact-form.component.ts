import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent {

  [key: string]: any;

  // Viewchild muss erst mal importiert werden (oben) damit auf das "Id" zugegriefen werden kann
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;


  showWarningName = false;
  showWarningEmail = false;
  showWarningMessage = false;

  showGreenCheckName = false;
  showGreenCheckEmail = false;
  showGreenCheckMessage = false;


  showLoader = false;
  emailSent = false;

  target!: HTMLInputElement;



  constructor() { }

  async sendMail() {



    // Hier wird auf die Variable zugegriffen (mit nativeElement) und da wird gesagt das alle Felder disabled sein sollen nach dem die Funktion aufgerufen wurde
    // hol die Elemente (das gleiche wie mit "document.getElementById('')")
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    // deaktiviere die Felder
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    this.showLoader = true;
    this.emailSent = true;



    // hier werden die Daten vorbereitet die man senden möchte
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);


    // hier wird das ganze an die unten stehende URL per "post request" gesendet  
    await fetch('https://robert-aliaj.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );

    setTimeout(() => {
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';

      nameField.classList.remove('has-content');
      emailField.classList.remove('has-content');
      messageField.classList.remove('has-content');

      this.showGreenCheckName = false;
      this.showGreenCheckEmail = false;
      this.showGreenCheckMessage = false;

    }, 2000);


    setTimeout(() => {
      this.showLoader = false;
    }, 2000);


    setTimeout(() => {
    this.emailSent = false;
    }, 4000);


    // sobald es gesendet wurde werden die Felder wieder aktiviert
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


  onInput(inputType: string) {
    this.updateInputClasses();
    this.checkFilledInput(inputType);
    this.showGreenCheck(inputType);
  }


  showGreenCheck(inputType: string) {
    switch (inputType) {
      case 'name':
        this.showGreenCheckName = this.target.value.length > 0;
        break;
      case 'email':
        this.showGreenCheckEmail = this.target.value.length > 0;
        break;
      case 'message':
        this.showGreenCheckMessage = this.target.value.length > 0;
        break;
    }
  }


  checkFilledInput(inputType: string) {
    this.target.value.length > 0 ? this.showRequiredText(inputType) : this.hideRequiredText(inputType);
  }


  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.updateInputClasses();
  }


  updateInputClasses() {
    this.target.value.length > 0 ? this.turnInputFieldToGreen() : this.turnInputFieldToRed();
  }


  turnInputFieldToGreen() {
    this.target.classList.add("has-content");
    this.target.classList.remove("empty-focused");
    this.target.classList.remove('input-bg-warning');
  }


  turnInputFieldToRed() {
    this.target.classList.remove("has-content");
    this.target.classList.add("empty-focused");
    this.target.classList.add('input-bg-warning');
  }


  onFocus(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;

    if (this.target.value.length === 0) {
      this.target.classList.add('input-bg-warning')

      switch (inputType) {
        case 'name':
          this.showWarningName = true;
          break;
        case 'email':
          this.showWarningEmail = true;
          break;
        case 'message':
          this.showWarningMessage = true;
          break;
      }
    }
  }


  showRequiredText(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = false;
  }

  hideRequiredText(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = true;
  }
}



  // showRequiredText(inputType: string) {
  //   switch (inputType) {
  //     case 'name':
  //       this.showWarningName = false;
  //       break;
  //     case 'email':
  //       this.showWarningEmail = false;
  //       break;
  //     case 'message':
  //       this.showWarningMessage = false;
  //       break;
  //   }
  // }