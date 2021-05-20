import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IncurridoComponent } from './incurrido.component';

describe('IncurridoComponent', () => {
  let component: IncurridoComponent;
  let fixture: ComponentFixture<IncurridoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [IncurridoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncurridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
