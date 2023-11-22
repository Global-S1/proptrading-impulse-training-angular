import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCartComponent } from './challenge-cart.component';
import { ChallengeModule } from '../../challenge.module';
import { CoreModule } from 'src/app/shared/core/core.module';

fdescribe('ChallengeCartComponent', () => {
  let component: ChallengeCartComponent;
  let fixture: ComponentFixture<ChallengeCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeCartComponent],
      imports: [CoreModule, ChallengeModule]
    });
    fixture = TestBed.createComponent(ChallengeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title and numberClient', () => {
    const faseClassElement = fixture.nativeElement.querySelector('.fase');

    console.log(faseClassElement)
    console.log('a')

    component.pageContent = {
      title: { text: 'Nº de cuenta:', numberClient: '#09876452876' },
      phase: 'Fase 1',
      state: 'Activo',
      credential: {
        src: '../../../../assets/icons/escudo.png',
        alt: 'icon-escudo',
        text: 'Ver Credenciales',
        buttonAnalyzer: { text: 'VER MAS EN ANALYZER', theme: 'pageAnalyzer' },
      },
      line: { src: '../../../../assets/images/line.svg', alt: 'Line' },
      metrics: {
        equity: { text: 'Equity: ', amount: '$101.003', percentage: '+1.03%' },
        resumen: {
          title: 'Resumen de las reglas generales:',
          challengeProgress: [
            { text: ['Objetivo del 8% ', '0.67%'], value: 30 },
            { text: ['5% de pérdida máxima ', '1.36%'], value: 30 },
            { text: ['10% de pérdida total ', '0.06%'], value: 30 },
          ],
        },
      },
    };


    fixture.detectChanges();
    console.log(fixture)
    console.log(component)
    // console.log(component.pageContent)

    const titleElement = fixture.nativeElement.querySelector('.fase p');
    const spanElement = fixture.nativeElement.querySelector('.fase p span');

    expect(titleElement.textContent).toContain('Nº de cuenta:');
    expect(spanElement.textContent).toContain('#09876452876');
  });

  it('should render the credential image with correct src and alt attributes', () => {
    component.pageContent = {
      title: { text: 'Nº de cuenta:', numberClient: '#09876452876' },
      phase: 'Fase 1',
      state: 'Activo',
      credential: {
        src: '../../../../assets/icons/escudo.png',
        alt: 'icon-escudo',
        text: 'Ver Credenciales',
        buttonAnalyzer: { text: 'VER MAS EN ANALYZER', theme: 'pageAnalyzer' },
      },
      line: { src: '../../../../assets/images/line.svg', alt: 'Line' },
      metrics: {
        equity: { text: 'Equity: ', amount: '$101.003', percentage: '+1.03%' },
        resumen: {
          title: 'Resumen de las reglas generales:',
          challengeProgress: [
            { text: ['Objetivo del 8% ', '0.67%'], value: 30 },
            { text: ['5% de pérdida máxima ', '1.36%'], value: 30 },
            { text: ['10% de pérdida total ', '0.06%'], value: 30 },
          ],
        },
      },
    };

    fixture.detectChanges();

    const imgElement = fixture.nativeElement.querySelector('.credencial figure img');

    expect(imgElement.getAttribute('src')).toContain('../../../../assets/icons/escudo.png');
    expect(imgElement.getAttribute('alt')).toBe('icon-escudo');
  });

  it('should display the correct equity information', () => {
    component.pageContent = {
      title: { text: 'Nº de cuenta:', numberClient: '#09876452876' },
      phase: 'Fase 1',
      state: 'Activo',
      credential: {
        src: '../../../../assets/icons/escudo.png',
        alt: 'icon-escudo',
        text: 'Ver Credenciales',
        buttonAnalyzer: { text: 'VER MAS EN ANALYZER', theme: 'pageAnalyzer' },
      },
      line: { src: '../../../../assets/images/line.svg', alt: 'Line' },
      metrics: {
        equity: { text: 'Equity: ', amount: '$101.003', percentage: '+1.03%' },
        resumen: {
          title: 'Resumen de las reglas generales:',
          challengeProgress: [
            { text: ['Objetivo del 8% ', '0.67%'], value: 30 },
            { text: ['5% de pérdida máxima ', '1.36%'], value: 30 },
            { text: ['10% de pérdida total ', '0.06%'], value: 30 },
          ],
        },
      },
    };

    fixture.detectChanges();

    const equityElement = fixture.nativeElement.querySelector('.metrics p span');

    expect(equityElement.textContent).toContain('$101.003');
    expect(equityElement.textContent).toContain('+1.03%');
  });
});
