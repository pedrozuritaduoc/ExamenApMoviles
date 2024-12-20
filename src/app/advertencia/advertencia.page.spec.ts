import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvertenciaPage } from './advertencia.page';

describe('AdvertenciaPage', () => {
  let component: AdvertenciaPage;
  let fixture: ComponentFixture<AdvertenciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
