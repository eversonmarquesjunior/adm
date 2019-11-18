import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aviso } from '../aviso/aviso';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-turmas',
  templateUrl: './turmas.page.html',
  styleUrls: ['./turmas.page.scss'],
})
export class TurmasPage implements OnInit {

endereco : string;
endereco2 : string;
aviso : Aviso = new Aviso();
tipo_aviso : string;

  constructor(private rota: Router, private banco : AngularFireDatabase, private autenticacao : AngularFireAuth, private warn : AlertController, private router : Router) { }

  ngOnInit() {
  }

  // proximo() {
  //   this.rota.navigate([this.endereco]);
  //
  // }
  //

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
