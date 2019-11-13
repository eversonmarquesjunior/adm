import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Adm } from '../adm/adm';

@Component({
  selector: 'app-redefinicao',
  templateUrl: './redefinicao.page.html',
  styleUrls: ['./redefinicao.page.scss'],
})
export class RedefinicaoPage implements OnInit {

  constructor(private autenticacao: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  adm: Adm = new Adm();

  redefinir() {
    alert('Verifique a mensagem enviada no seu email');
    this.autenticacao.auth.sendPasswordResetEmail(this.adm.email).then(
      () => { this.router.navigate(['home']); }).catch((erro) => alert('Ocorreu um erro'));

}
  }
