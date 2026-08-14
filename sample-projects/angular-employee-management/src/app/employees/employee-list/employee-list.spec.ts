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

  it('should render the employee list heading and all employee details from the component data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');

    expect(compiled.querySelector('h1')?.textContent).toContain('Employee List');
    expect(rows.length).toBe(component.employees.length);

    component.employees.forEach((employee, index) => {
      const cells = rows[index].querySelectorAll('td');

      expect(cells[0]?.textContent).toContain(employee.name);
      expect(cells[1]?.textContent).toContain(employee.role);
      expect(cells[2]?.textContent).toContain(employee.email);
      expect(cells[3]?.textContent).toContain(employee.department);
    });
  });
});
