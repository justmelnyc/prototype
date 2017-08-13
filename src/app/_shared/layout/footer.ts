import { Component } from '@angular/core';

@Component({
  selector: 'foot',
  template: `
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-3">
            <div id="about" class="content">
              <strong>Bulma</strong> by <a>Jeremy Thomas</a>.
              <p id="alternative">
                <a href="#">An alternative to <strong>Bootstrap</strong></a>
              </p>
            </div>
          </div>
          <div class="column is-5">
            <div id="share" class="content">
              <div>
                <strong>Support</strong> and share the love!
              </div>

              <div id="social">

              </div>

            </div>
          </div>
          <div class="column is-4">
            <div id="sister">
              <p>
                More <strong>helpful</strong> tools:
              </p>
              <ul>
                <li>
                  <a href="#">
                    <img src="http://bulma.io/images/css-reference-logo.png" alt="CSS Reference logo">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="http://bulma.io/images/html-reference-logo.png" alt="HTML Reference logo">
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p id="tsp">
          <small>
            Source code licensed <a href="#">MIT</a>.
            <br>
            Website content licensed <a rel="license" href="#">CC BY-NC-SA 4.0</a>.
          </small>
        </p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: white;
    }
    #sister ul {
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    #sister li {
      display: flex;
      height: 30px;
      margin: 5px 1rem 0 0;
    }
    #sister img {
      height: 30px;
    }

    
  `]
})
export class FooterComponent {
  constructor() {

  }
}
