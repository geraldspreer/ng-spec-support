import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";

export class TestHelper<T> {
  fixture: ComponentFixture<T>;
  debug: DebugElement;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
    this.debug = fixture.debugElement;
  }

  public findElement(selector: string): HTMLElement {
    return this.fixture.nativeElement.querySelector(selector);
  }

  public clickElement(selector: string) {
    this.debug.nativeElement.querySelector(selector).click();
    this.fixture.detectChanges();
  }

  public setInputWithSelectorTo(selector: string, value: string | number) {
    const inputToSet = this.debug.nativeElement.querySelector(selector);
    inputToSet.value = value;
    inputToSet.dispatchEvent(new Event("input"));
  }

  public changeSelectInputTo(selector: string, index: number) {
    const selectInput = this.debug.nativeElement.querySelector(selector);
    selectInput.value = selectInput.options[index].value;
    selectInput.dispatchEvent(new Event("change"));
  }

  public hasElement = (selector: string) {
    return expect(helper.findElement(selector))
    .withContext(`${selector} should be visible`)
    .not.toBeNull();
  };

  public doesNotHaveElement = (selector: string) {
    return expect(helper.findElement(selector))
    .withContext(`${selector} should not be visible`)
    .toBeNull();
  };
}
