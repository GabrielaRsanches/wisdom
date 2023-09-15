import { Component } from "@angular/core";


@Component({
  selector: 'teacher-or-student',
  standalone: true,
  imports: [],
  template: `
  <meta charset="utf-8">
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

  <body>
  <div class="contact-us section" id="contact">
  <div class="container">
    <div class="row">
      <div class="col-lg-6  align-self-center">
        <div class="section-heading">
          <h6>Registre-se</h6>
          <h2>Você é</h2>

        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact-us-content">
          <form id="contact-form" action="">
            <fieldset style="display: block">
              <button type="submit" id="form-submit" > ALUNO</button>
            </fieldset>

            <fieldset>
              <button type="submit" id="form-submit" class="orange-button">PROFESSOR</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<footer>
  <div class="container">
    <div class="col-lg-12">
      <p>Copyright © 2036 Scholar Organization. All rights reserved. &nbsp;&nbsp;&nbsp; Design: <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a></p>
    </div>
  </div>
</footer>
<script src="./vendor/index.js"></script>
<script src="./assets/index.js"></script>
</body>
  `
})export class TeacherOrStudent{}
