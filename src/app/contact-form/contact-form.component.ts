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
}
