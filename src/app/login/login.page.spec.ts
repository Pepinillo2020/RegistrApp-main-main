import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { ToastController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let toastControllerSpy: jasmine.SpyObj<ToastController>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceMock = jasmine.createSpyObj('AuthService', ['login', 'getRole']);
    const toastControllerMock = jasmine.createSpyObj('ToastController', ['create']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [FormsModule], // Para ngModel
      providers: [
        { provide: AuthService, useValue: authServiceMock },
        { provide: ToastController, useValue: toastControllerMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    toastControllerSpy = TestBed.inject(ToastController) as jasmine.SpyObj<ToastController>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login model', () => {
    expect(component.login.Usuario).toEqual('');
    expect(component.login.Password).toEqual('');
  });

  it('should validate model correctly', () => {
    const validModel = { Usuario: 'testuser', Password: 'password123' };
    const invalidModel = { Usuario: '', Password: 'password123' };

    expect(component.validateModel(validModel)).toBeTrue();
    expect(component.validateModel(invalidModel)).toBeFalse();
    expect(component.field).toEqual('Usuario');
  });

  it('should validate user length', () => {
    expect(component.validarLargoUsuario('us')).toBeFalse();
    expect(component.validarLargoUsuario('user')).toBeTrue();
    expect(component.validarLargoUsuario('toolongusername')).toBeFalse();
  });

  it('should validate password length', () => {
    expect(component.validarLargoPass('short')).toBeFalse();
    expect(component.validarLargoPass('longenough')).toBeTrue();
  });

  it('should show a toast when a field is missing', async () => {
    const toastMock = { present: jasmine.createSpy('present') };
    toastControllerSpy.create.and.returnValue(Promise.resolve(toastMock as any));

    component.field = 'Usuario';
    await component.presentToast('Falta: ' + component.field);

    expect(toastControllerSpy.create).toHaveBeenCalledWith({
      message: 'Falta: Usuario',
      duration: 2000,
      position: 'top',
    });
    expect(toastMock.present).toHaveBeenCalled();
  });

  it('should attempt login and handle success', () => {
    authServiceSpy.login.and.returnValue(of(true));
    authServiceSpy.getRole.and.returnValue('profesor');

    component.login = { Usuario: 'validuser', Password: 'validpassword' };
    component.iniciarSesion();

    expect(authServiceSpy.login).toHaveBeenCalledWith('validuser', 'validpassword');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/tab-prof']);
  });

  it('should handle login failure', () => {
    authServiceSpy.login.and.returnValue(of(false));

    component.login = { Usuario: 'invaliduser', Password: 'invalidpassword' };
    component.iniciarSesion();

    expect(authServiceSpy.login).toHaveBeenCalledWith('invaliduser', 'invalidpassword');
    expect(component.login.Password).toEqual('');
  });

  it('should handle server error on login', () => {
    authServiceSpy.login.and.returnValue(throwError('Server error'));

    component.login = { Usuario: 'validuser', Password: 'validpassword' };
    component.iniciarSesion();

    expect(authServiceSpy.login).toHaveBeenCalledWith('validuser', 'validpassword');
  });
});
