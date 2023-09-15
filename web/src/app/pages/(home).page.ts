import { Component } from '@angular/core';
import StudentRegistry from './studentRegistry';
import TeacherRegistry from './techerRegistry';
import { TeachersFeed } from './teachersFeed';
import { TeacherOrStudent } from './teacherOrStudent';
import { QuestionsFeed } from './questionsFeed';

@Component({
  selector: 'web-home',
  standalone: true,
  imports: [StudentRegistry, TeacherRegistry, TeachersFeed, TeacherOrStudent, QuestionsFeed],
  template: `


  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <title>Scholar - Online School HTML5 Template</title>

  <!-- Bootstrap core CSS -->
  <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="./assets/index.js">
  <link rel="stylesheet" href="./assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="./assets/css/owl.css">
  <link rel="stylesheet" href="./assets/css/animate.css">
  <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>



<!-- ***** Header Area Start ***** -->
<header class="header-area header-sticky">
  <div class="container">
      <div class="row">
          <div class="col-12">
              <nav class="main-nav">
                  <!-- ***** Logo Start ***** -->
                  <a href="index.html" class="logo">
                      <h1>WISDOM</h1>
                  </a>
                  <!-- ***** Logo End ***** -->
                  <!-- ***** Serach Start ***** -->
                  <div class="search-input">
                    <form id="search" action="#">
                      <input type="text" placeholder="Pesquisa" id='searchText' name="searchKeyword" onkeypress="handle" />
                      <i class="fa fa-search"></i>
                    </form>
                  </div>
                  <!-- ***** Serach Start ***** -->
                  <!-- ***** Menu Start ***** -->
                  <ul class="nav">
                  <li><a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a></li>
                  <li><a routerLink="/teacher-or-student" routerLinkActive="active" ariaCurrentWhenActive="page">Register</a></li>
                  <li><a routerLink="/questions-feed" routerLinkActive="active" ariaCurrentWhenActive="page" class="active">Top Professores</a></li>
                  <li><a routerLink="/teachers-feed" routerLinkActive="active" ariaCurrentWhenActive="page">Perguntas</a></li>
                </ul>
                  <a class='menu-trigger'>
                      <span>Menu</span>
                  </a>
                  <!-- ***** Menu End ***** -->
              </nav>

          </div>
      </div>
  </div>
</header>
<!-- ***** Header Area End ***** -->

<div class="main-banner" id="top">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="owl-carousel owl-banner">
          <div class="item item-1">
            <div class="header-text">
              <span class="category">Our Courses</span>
              <h2>With Scholar Teachers, Everything Is Easier</h2>
              <p>Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>
              <div class="buttons">
                <div class="main-button">
                  <a href="#">Request Demo</a>
                </div>
                <div class="icon-button">
                  <a href="#"><i class="fa fa-play"></i> What's Scholar?</a>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-2">
            <div class="header-text">
              <span class="category">Best Result</span>
              <h2>Get the best result out of your effort</h2>
              <p>You are allowed to use this template for any educational or commercial purpose. You are not allowed to re-distribute the template ZIP file on any other website.</p>
              <div class="buttons">
                <div class="main-button">
                  <a href="#">Request Demo</a>
                </div>
                <div class="icon-button">
                  <a href="#"><i class="fa fa-play"></i> What's the best result?</a>
                </div>
              </div>
            </div>
          </div>
          <div class="item item-3">
            <div class="header-text">
              <span class="category">Online Learning</span>
              <h2>Online Learning helps you save the time</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporious incididunt ut labore et dolore magna aliqua suspendisse.</p>
              <div class="buttons">
                <div class="main-button">
                  <a href="#">Request Demo</a>
                </div>
                <div class="icon-button">
                  <a href="#"><i class="fa fa-play"></i> What's Online Course?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<router-outlet></router-outlet>



<!-- Scripts -->
<!-- Bootstrap core JavaScript -->
<script src="./vendor/index.js"></script>
<script src="./assets/index.js"></script>



  `,
})
export default class HomeComponent {}
