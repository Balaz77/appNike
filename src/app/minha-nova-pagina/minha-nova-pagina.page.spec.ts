import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MinhaNovaPaginaPage } from './minha-nova-pagina.page';

describe('MinhaNovaPaginaPage', () => {
  let component: MinhaNovaPaginaPage;
  let fixture: ComponentFixture<MinhaNovaPaginaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaNovaPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
