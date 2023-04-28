import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})


export class ContactFormComponent {

  // Viewchild muss erst mal importiert werden (oben) damit auf das "Id" zugegriefen werden kann
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  [key: string]: any;

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

  sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    let fd = new FormData();

    this.prepareData(fd, nameField, messageField);
    this.sendData(fd);
    this.disableInputFields(nameField, messageField, sendButton);

    this.clearInputfields(nameField, emailField, messageField);
    this.enableInputFields(nameField, messageField, sendButton);
    this.showDefaultButton();
  }


  prepareData(fd: any, nameField: any, messageField: any) {
    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
  }


  // hier wird das ganze an die unten stehende URL per "post request" gesendet  
  async sendData(fd: any) {
    await fetch('https://robert-aliaj.developerakademie.net/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
  }


  disableInputFields(nameField: any, messageField: any, sendButton: any) {
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
    this.showLoader = true;
    this.emailSent = true;
  }


  clearInputfields(nameField: any, emailField: any, messageField: any) {
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
      this.showLoader = false;
    }, 2000);
  }


  enableInputFields(nameField: any, messageField: any, sendButton: any) {
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  };


  showDefaultButton() {
    setTimeout(() => this.emailSent = false, 4000);
  }


  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.updateInputClasses();
  }


  onInput(inputType: string) {
    this.updateInputClasses();
    this.checkFilledInput(inputType);
    this.showGreenCheckOnInput(inputType);
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


  checkFilledInput(inputType: string) {
    this.target.value.length > 0 ? this.showRequiredTextOnInput(inputType) : this.hideRequiredTextOnInput(inputType);
  }


  showRequiredTextOnInput(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = false;
  }


  hideRequiredTextOnInput(inputType: string) {
    let oneInputField = 'showWarning' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = true;
  }


  showGreenCheckOnInput(inputType: string) {
    let oneInputField = 'showGreenCheck' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${oneInputField}`] = this.target.value.length > 0;
  }


  onFocus(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;

    if (this.target.value.length === 0) {
      this.target.classList.add('input-bg-warning');
      this.showRequiredTextOnFocus(inputType);
    }
  }


  showRequiredTextOnFocus(inputType: any) {
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