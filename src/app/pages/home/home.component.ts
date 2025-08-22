import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../../github.service'; // ajuste o caminho

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private githubService: GithubService) { }

  buscar() {
    const nome = this.username.trim();

    this.githubService.getUser(nome).subscribe({
      next: () => {
        this.errorMessage = '';
        this.router.navigate(['/perfil', nome]);
      },
      error: () => {
        this.errorMessage = 'Usuário não encontrado!';
        this.username = '';
      }
    });
  }

  limparErro() {
    this.errorMessage = '';
  }
}


