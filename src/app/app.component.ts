import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  copyText = 'Copy the CSS'
  pickedColor = '#00BFFF';

  showDiv1 = false;
  showDiv2 = false;
  showDiv3 = false;
  showDiv4 = false;

  showDiv(divNumber: number) {
    this.copyText = 'Copy the CSS'
    this.hideAllDivs();
    switch (divNumber) {
      case 1:
        this.showDiv1 = true;
        break;
      case 2:
        this.showDiv2 = true;
        break;
      case 3:
        this.showDiv3 = true;
        break;
      case 4:
        this.showDiv4 = true;
        break;
    }
  }

  hideAllDivs() {
    this.showDiv1 = false;
    this.showDiv2 = false;
    this.showDiv3 = false;
    this.showDiv4 = false;
  }

  topLeftPreview(input: string){
    this.hideAllDivs()
    let box = document.getElementById('box')
    if(!box) return;
    box.style.borderTopLeftRadius = `${input}px`
  }

  topRightPreview(input: string){
    this.hideAllDivs()
    let box = document.getElementById('box')
    if(!box) return;
    box.style.borderTopRightRadius = `${input}px`
  }

  bottomLeftPreview(input: string){
    this.hideAllDivs()
    let box = document.getElementById('box')
    if(!box) return;
    box.style.borderBottomLeftRadius = `${input}px`
  }

  bottomRightPreview(input: string){
    this.hideAllDivs()
    let box = document.getElementById('box')
    if(!box) return;
    box.style.borderBottomRightRadius = `${input}px`
  }

  copyCSS(inputTL: string, inputTR: string, inputBL: string , inputBR: string){
    this.copyText = 'Copied!'

    let box =  document.getElementById('box')?.style.backgroundColor

    if(inputTL){ inputTL += 'px'}else{inputTL += '0'}
    if(inputTR){ inputTR += 'px'}else{inputTR += '0'}
    if(inputBL){ inputBL += 'px'}else{inputBL += '0'}
    if(inputBR){ inputBR += 'px'}else{inputBR += '0'}

    let css = `border-radius: ${inputTL} ${inputTR} ${inputBL} ${inputBR};`

    navigator.clipboard.writeText(css)
  }
}
