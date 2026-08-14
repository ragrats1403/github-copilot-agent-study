import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeList } from './employee-list';

describe('EmployeeList', () => {
  let component: EmployeeList;
  let fixture: ComponentFixture<EmployeeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeList],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the employee list heading and employee details', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Employee List');
    expect(compiled.textContent).toContain('Alice Johnson');
    expect(compiled.textContent).toContain('Software Engineer');
    expect(compiled.textContent).toContain('alice.johnson@example.com');
    expect(compiled.textContent).toContain('Engineering');

    const tableRows = compiled.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);
  });
});
