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

const hasElement = (selector: string) => {
    expect(helper.findElement(selector))
    .withContext(`${selector} should be visible`)
    .not.toBeNull();
  };

const doesNotHaveElement = (selector: string) => {
    expect(helper.findElement(selector))
    .withContext(`${selector} should be visible`)
    .toBeNull();
  };

const addFontAwesome = () => {
    const firstDiv = this.findElement('div');
    const fontAwesome = document.createElement('script');
    fontAwesome.src = 'https://kit.fontawesome.com/{kit-id}.js';
    firstDiv.appendChild(fontAwesome);
  }

const addBootstrap = () => {
    const firstDiv = this.findElement('div');
    const bootstrapLink = document.createElement('link');
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    bootstrapLink.rel = 'stylesheet';
    firstDiv.appendChild(bootstrapLink);
  }

const scrollToBottomAfter = (time: number) => {
    setTimeout(function() {
      const scrollToBottom = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: scrollToBottom,
        behavior: 'smooth'
      });
    }, time);
  }
```

