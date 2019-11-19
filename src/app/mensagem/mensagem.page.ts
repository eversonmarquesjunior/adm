import { Component, OnInit } from '@angular/core';
import {Aviso} from '../aviso/aviso';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
})
export class MensagemPage implements OnInit {
  aviso : Aviso = new Aviso();
  tipo_aviso : string;
  constructor(private banco : AngularFireDatabase, private autenticacao : AngularFireAuth, private warn : AlertController, private router : Router) {
  }

  ngOnInit() {
  }

tipoMensagem(tipo){
  if(tipo == 1){
    this.aviso.tipo = "Aviso"
  }else if(tipo == 2){
    this.aviso.tipo = "Solicitação para Liberação"
  }
}

  async enviarMensagem(){
    const alert = await this.warn.create({
      header : 'Aviso',
      message : 'Tem certeza que quer enviar?',
      buttons : [{
        text : 'Sim',
        handler : () =>{
          this.aviso.adm.nome = this.autenticacao.auth.currentUser.email;
          this.banco.list("Mensagem").push(this.aviso);
          this.router.navigate(['destino']);
        }
      },{
        text : 'Não'
      }]

    });
    await alert.present();
  }

}
