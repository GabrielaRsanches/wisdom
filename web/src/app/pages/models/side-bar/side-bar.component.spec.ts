import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSideBarComponent } from './side-bar.component';

describe('TeacherSideBarComponent', () => {
  let component: TeacherSideBarComponent;
  let fixture: ComponentFixture<TeacherSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherSideBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
