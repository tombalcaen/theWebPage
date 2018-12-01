import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpLabComponent } from './mvp-lab.component';

describe('MvpLabComponent', () => {
  let component: MvpLabComponent;
  let fixture: ComponentFixture<MvpLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
