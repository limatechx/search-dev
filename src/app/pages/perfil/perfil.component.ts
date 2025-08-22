import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: any;
  repos: any[] = [];
  errorMessage: string = '';
  username: string = '';

  constructor(private route: ActivatedRoute, private githubService: GithubService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username') || '';
      this.buscarUsuario();
    });
  }

  buscarUsuario() {
    this.errorMessage = ''; 

    if (!this.username) return;

    this.githubService.getUser(this.username).subscribe({
      next: data => {
        this.user = data;
        this.errorMessage = '';
      },
      error: () => {
        this.user = null;
        this.repos = [];
        this.errorMessage = 'Usuário não encontrado!'; //
      }
    });

    this.githubService.getRepos(this.username).subscribe({
      next: data => {
        this.repos = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
      },
      error: () => this.repos = []
    });
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}


