import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import {AuthServiceNew} from '../services/auth'
// import {AuthService} from '../services/auth.service'

@Component({
  selector: 'login',
  template: `
    <section class="hero is-fullheight is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <!--is-6 is-offset-3-->
            <div class="columns column is-6 is-offset-3 has-text-centered">
              <div class="overlay-dialog column is-10 is-offset-1 box">

                <div class="wordmarkSet">
                  <h3 class="overlay-title">
                    <logo></logo><br><wordmark></wordmark>
                  </h3>
                </div>
                
                <div class="overlay-content">Sign in to Medium to connect with voices and perspectives that matter.</div>
                <div class="overlay-actions buttonSet">
                  <div class="buttonSet buttonSet--vertical ">
                    <button aria-label="Connect with Facebook"
                            (click)="signInWithFacebook()"
                            class="button button--withChrome button--withIcon button--withSvgIcon button--withIconAndLabel button button--signin button--continue button--facebook"
                            title="Connect with Facebook">
                      <span class="svgIcon svgIcon--facebookFilled svgIcon--25px">
                        <svg class="svgIcon-use" height="25" viewbox="0 0 25 25" width="25">
                          <path d="M21 12.646C21 7.65 16.97 3.6 12 3.6s-9 4.05-9 9.046a9.026 9.026 0 0 0 7.59 8.924v-6.376H8.395V12.64h2.193v-1.88c0-2.186 1.328-3.375 3.267-3.375.93 0 1.728.07 1.96.1V9.77H14.47c-1.055 0-1.26.503-1.26 1.242v1.63h2.517l-.33 2.554H13.21V21.6c4.398-.597 7.79-4.373 7.79-8.954"></path>
                        </svg>
                      </span>
                      <div class="button-labelSet">
                        <span class="button-label button-label--multiLine">Continue with Facebook</span>
                          <span class="button-label button-label--subText button-label--multiLine">
                          <span class="u-fontSize12 u-textColorTransparentWhiteDark">We won’t post without asking</span></span>
                      </div>
                    </button>
                    <button aria-label="Connect with Google" (click)="signInWithGoogle()"
                            class="button button--withChrome button--withIcon button--withSvgIcon button--withIconAndLabel button button--signin button--continue button--google"
                            title="Connect with Google">
                      <span class="svgIcon svgIcon--googleNew svgIcon--25px">
                        <svg class="svgIcon-use" height="25" viewbox="0 0 25 25" width="25">
                          <g fill="none" fill-rule="evenodd">
                            <path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"></path>
                            <path d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0 0 12.5 21z" fill="#34A853"></path>
                            <path d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 0 0 4 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z" fill="#FBBC05"></path>
                            <path d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 0 0-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z" fill="#EA4335"></path>
                          </g>
                        </svg>
                      </span>
                      <span class="button-label">Continue with Google</span>
                    </button>
                    <button class="button button--primary button--large button--chromeless button--link u-marginTop15">Sign in or sign up with email</button>
                  </div>
                  <a class="toc" routerLink="tos">Terms of service</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero.is-dark a.toc {
      color: #807E7E;
    }
    .box {
      max-width: 520px;
    }
    .box .button--signin {
      text-align: center;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthServiceNew, private router: Router) {

  }
  ngOnInit() {}

  // Social Login
  async signInWithGoogle() {
    await this.auth.googleLogin()
    this.afterSignIn();
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  // Shared
  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/reservations']);
  }

  /// logout
  logout() {
    this.auth.logoutUser();
  }


}
