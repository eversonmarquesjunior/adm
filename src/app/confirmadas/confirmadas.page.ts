import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MensagemPage } from '../mensagem/mensagem.page';
import { Aviso } from '../aviso/aviso';

@Component({
  selector: 'app-confirmadas',
  templateUrl: './confirmadas.page.html',
  styleUrls: ['./confirmadas.page.scss'],
})
export class ConfirmadasPage implements OnInit {

  ngOnInit() {
  }

}
