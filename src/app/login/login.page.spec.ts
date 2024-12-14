import { AuthService } from '../auth.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginPage } from './login.page';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let mockDatosService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockNavController: jasmine.SpyObj<NavController>;

  beforeEach(async () => {
    mockDatosService = jasmine.createSpyObj('DatosService', ['login', 'getUserRole']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockNavController = jasmine.createSpyObj('NavController', ['navigateForward']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AuthService, useValue: mockDatosService },
        { provide: Router, useValue: mockRouter },
        { provide: NavController, useValue: mockNavController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('debería retornar true para una contraseña de 8 caracteres o más', () => {
    const resultado = component.validarLargoPass('12345678');
    expect(resultado).toBeTrue();
  });

  it('debería retornar false para una contraseña con menos de 8 caracteres', () => {
    const resultado = component.validarLargoPass('1234567');
    expect(resultado).toBeFalse();
  });

  it('debería retornar false para una contraseña vacía', () => {
    const resultado = component.validarLargoPass('');
    expect(resultado).toBeFalse();
  });
  it('debería retornar true para un usuario con exactamente 3 caracteres', () => {
    const resultado = component.validarLargoUsuario('abc');
    expect(resultado).toBeTrue();
  });

  it('debería retornar true para un usuario con exactamente 8 caracteres', () => {
    const resultado = component.validarLargoUsuario('abcdefgh');
    expect(resultado).toBeTrue();
  });

  it('debería retornar true para un usuario con un largo entre 3 y 8 caracteres', () => {
    const resultado = component.validarLargoUsuario('abcdef');
    expect(resultado).toBeTrue();
  });

  it('debería retornar false para un usuario con menos de 3 caracteres', () => {
    const resultado = component.validarLargoUsuario('ab');
    expect(resultado).toBeFalse();
  });

  it('debería retornar false para un usuario con más de 8 caracteres', () => {
    const resultado = component.validarLargoUsuario('abcdefghi');
    expect(resultado).toBeFalse();
  });

  it('debería retornar false para un usuario vacío', () => {
    const resultado = component.validarLargoUsuario('');
    expect(resultado).toBeFalse();
  });
});