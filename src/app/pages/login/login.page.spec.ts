import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { FormErrorModule } from 'src/app/components/form-error/form-error.module';
import { LoginPage, loginValidator } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule.withRoutes([]),
        FormErrorModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email abc@abc.com should pass the validator', () => {
    const validator = loginValidator.email.regex;
    expect(validator.test('abc@abc.com')).toBeTruthy();
  });

  it('email abc.123@abcaaa.com should pass the validator', () => {
    const validator = loginValidator.email.regex;
    expect(validator.test('abc.123@abcaaa.com')).toBeTruthy();
  });

  it('email abc.123@abcaaa.123 should not pass the validator', () => {
    const validator = loginValidator.email.regex;
    expect(validator.test('abc.123@abcaaa.123')).toBeFalsy();
  });

  it('email abc.123@a.b should not pass the validator', () => {
    const validator = loginValidator.email.regex;
    expect(validator.test('abc.123@a.b')).toBeFalsy();
  });
});
