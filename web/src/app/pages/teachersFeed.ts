import { Component } from "@angular/core";

@Component({
  selector: 'teachers-feed',
  standalone: true,
  imports: [],
  template: `
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  <!-- Bootstrap core CSS -->
  <link href="./vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Additional CSS Files -->
  <link rel="stylesheet" href="./assets/index.js">
  <link rel="stylesheet" href="./assets/css/templatemo-scholar.css">
  <link rel="stylesheet" href="./assets/css/owl.css">
  <link rel="stylesheet" href="./assets/css/animate.css">
  <link rel="stylesheet"href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>



  <div class="container">
  <div class="section-heading">
  <h6 style="margin-top: 20px">Top Professores</h6>
  </div>
    <div class="row">
      <div class="col-lg-3 col-md-6">
        <div class="team-member">
          <div class="main-content">
            <img src="assets/images/member-01.jpg" alt="">
            <span class="category">{{teacher.teachingArea}}</span>
            <h4>{{teacher.name}}</h4>
            <ul class="social-icons">
              <li><a href="#"><i class="fab fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
      <div class="team-member">
        <div class="main-content">
          <img src="assets/images/member-01.jpg" alt="">
          <span class="category">{{teacher.teachingArea}}</span>
          <h4>{{teacher.name}}</h4>
          <ul class="social-icons">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-lg-3 col-md-6">
    <div class="team-member">
      <div class="main-content">
        <img src="assets/images/member-01.jpg" alt="">
        <span class="category">{{teacher.teachingArea}}</span>
        <h4>{{teacher.name}}</h4>
        <ul class="social-icons">
          <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-lg-3 col-md-6">
  <div class="team-member">
    <div class="main-content">
      <img src="assets/images/member-01.jpg" alt="">
      <span class="category">{{teacher.teachingArea}}</span>
      <h4>{{teacher.name}}</h4>
      <ul class="social-icons">
        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
      </ul>
    </div>
  </div>
</div>

</div>
<script src="./vendor/index.js"></script>
<script src="./assets/index.js"></script>`
})
export class TeachersFeed {}
