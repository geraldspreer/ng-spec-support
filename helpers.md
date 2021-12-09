##Angular


```
const changeSelectInputTo = (selector: string, index: number) => {
    const selectInput = fixture.nativeElement.querySelector(selector);
    selectInput.value = selectInput.options[index].value;
    selectInput.dispatchEvent(new Event('change'));
  };
```
