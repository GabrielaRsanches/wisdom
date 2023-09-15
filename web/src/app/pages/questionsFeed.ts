import { Component } from "@angular/core";

@Component({
  selector: 'questions-feed',
  standalone: true,
  imports: [],
  template: `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

  <title>QUESTIONS</title>

  <!-- Bootstrap core CSS -->
  <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">


  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="./assets/index.js">
  <link rel="stylesheet" href="./assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="./assets/css/owl.css">
  <link rel="stylesheet" href="./assets/css/animate.css">
  <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>

  <body>

  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center">
        <div class="section-heading">

          <h2>Feed de Perguntas</h2>
        </div>
      </div>
    </div>
    <ul class="event_filter">
      <li>
        <a class="is_active" href="#!" data-filter="*">Show All</a>
      </li>
      <li>
        <a href="#!" data-filter=".teachingAreas">Disciplinas</a>
      </li>
      <li>
        <a href="#!" data-filter=".grade">Série Escolar</a>
      </li>
    </ul>
    <div class="row event_box">
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design">
        <div class="events_item">
          <div class="down-content">
            <span class="author">{{student.name}}</span>
            <h4>{{student.questions.id}}</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
      <div class="events_item">
      <div class="down-content">
        <span class="author">{{student.name}}</span>
        <h4>{{student.questions.id}}</h4>
      </div>
    </div>
      </div>
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 design wordpress">
      <div class="events_item">
      <div class="down-content">
        <span class="author">{{student.name}}</span>
        <h4>{{student.questions.id}}</h4>
      </div>
    </div>
      </div>
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
      <div class="events_item">
      <div class="down-content">
        <span class="author">{{student.name}}</span>
        <h4>{{student.questions.id}}</h4>
      </div>
    </div>
      </div>
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
      <div class="events_item">
      <div class="down-content">
        <span class="author">{{student.name}}</span>
        <h4>{{student.questions.id}}</h4>
      </div>
    </div>
      </div>
      <div class="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress design">
      <div class="events_item">
      <div class="down-content">
        <span class="author">{{student.name}}</span>
        <h4>{{student.questions.id}}</h4>
      </div>
    </div>
      </div>
    </div>
  </div>

  </body>
  `
})export class QuestionsFeed{}
