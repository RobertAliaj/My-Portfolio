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
    let sendButton = this.sendButton.nativeElement;

    // deaktiviere die Felder
    nameField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;


    //hier muss eine Animation angezeigt werden  (Email wird gesendet oder ähnliches)


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

    // Hier noch ein Text anzeigen "Email wurde gesendet"
    // sobald es gesendet wurde werden die Felder wie aktiviert
    nameField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }


  onInput(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;
    this.updateInputClasses();
    this.target.value.length > 0 ? this.showRequiredText(inputType) : this.hideRequiredText(inputType);

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


  // Diese Funktion checkt das erste 
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
    switch (inputType) {
      case 'name':
        this.showWarningName = false;
        break;
      case 'email':
        this.showWarningEmail = false;
        break;
      case 'message':
        this.showWarningMessage = false;
        break;
    }
  }


  hideRequiredText(inputType: string) {
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

  showLoaderFunction() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      this.emailSent = true;
    }, 2000);
  }

  //   this.sendButton.nativeElement.innerHTML = '<div class="loader"></div>';
  // setTimeout(() => {
  //   this.sendButton.nativeElement.innerHTML = 'Email Sent';
  // }, 2000);
  //   }

}




