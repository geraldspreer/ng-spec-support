## Angular

```
const changeSelectInputTo = (selector: string, index: number) => {
    const selectInput = fixture.nativeElement.querySelector(selector);
    selectInput.value = selectInput.options[index].value;
    selectInput.dispatchEvent(new Event('change'));
  };
  
const findElement = (selector: string) => {
    return fixture.nativeElement.querySelector(selector);
};

const clickElement = (selector: string) => {
    fixture.nativeElement.querySelector(selector).click();
    fixture.detectChanges();
};

```

