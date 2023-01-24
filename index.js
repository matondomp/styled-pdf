import * as jsPDF from 'jspdf';
import { calculateTheLengthOfText, percent, removePercent } from './helper'

const docs = new jsPDF()

let pageHeight = docs.internal.pageSize.height || doc.internal.pageSize.getHeight();
let pageWidth = docs.internal.pageSize.width || doc.internal.pageSize.getWidth();
let globalHeight = 0;

class Element {
  constructor(width, height, padding = 0, margin = 0, content = '') {
    this.width = width
    this.height = height
    this.padding = padding
    this.margin = margin
    this.content = content
    this.next = null
    this.prev = null
  }

}

class MainContainer extends Element {
  constructor(width, height, padding, margin, content = '') {
    super(width, height, padding, margin, content)
  }
  content()
}

MainContainer.prototype.add = (content) => {
  content
}

//const element = new MainContainer().add()

class Container {

  constructor() {
    this.doc = new jsPDF()
  }

  addPage(heigth, top) {
    if (globalHeight >= heigth) {
      this.doc.addPage();
      globalHeight = top;
    }
  }

  div(style) {
    let border = style.border != undefined ? style.border : [255, 255, 255];
    let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
    let setColor = style.bgColor != undefined ? "FD" : undefined;
    this.doc.setDrawColor(...border);
    this.doc.setFillColor(...bgColor);
    let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
    this.doc.rect(
      percent(pageHeight, style.marginLeft),
      height,
      percent(pageWidth, style.width),
      percent(pageWidth, style.padding),
      setColor
    );
  }

  th(style) {
    let border = style.border != undefined ? style.border : [255, 255, 255];
    let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
    let setColor = style.bgColor != undefined ? "FD" : undefined;
    this.doc.setDrawColor(...border);
    this.doc.setFillColor(...bgColor);
    let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
    this.doc.rect(
      percent(pageHeight, style.marginLeft),
      height,
      percent(pageWidth, style.width),
      percent(pageWidth, style.padding),
      setColor
    );
  }

  td(style) {
    let border = style.border != undefined ? style.border : [255, 255, 255];
    let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
    let setColor = style.bgColor != undefined ? "FD" : undefined;
    this.doc.setDrawColor(...border);
    this.doc.setFillColor(...bgColor);
    let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
    this.doc.rect(
      percent(pageHeight, style.marginLeft),
      height,
      percent(pageWidth, style.width),
      percent(pageHeight, style.padding),
      setColor
    );
  }

  splitText(text, size, width, font = "") {
    let lines = this.doc
      .setFont(font)
      .setFontSize(size)
      .splitTextToSize(text, width || undefined);
    return lines;
  }

  p(text, style, callBack = 0) {
    let addPosition = callBack;
    this.doc.setFont("", style.fontWeigth);
    this.doc.setFontSize(style.fontSize);
    let marginTopPercent = percent(pageHeight, (globalHeight + removePercent(style.marginTop)) + '%');
    let formatedText = this.validateTextField(text)
    this.doc.text(
      percent(pageWidth, style.marginLeft),
      marginTopPercent,
      formatedText,
      { maxWidth: style.width ? style.width : 0, align: style.alignText || "" }
    );
    marginTopPercent += addPosition;
  }

  hr(style) {
    this.doc.setFont("", 'bold');
    this.doc.setDrawColor(0, 0, 0)
    this.doc.setLineWidth(style.width || 0.5);
    this.doc.line(
      percent(pageWidth, style.marginLeft),
      percent(pageHeight, (globalHeight + removePercent(style.top)) + '%'),
      percent(pageWidth, style.marginRight),
      percent(pageHeight, (globalHeight + removePercent(style.bottom)) + '%')
    );
  }

  Image(src, style) {
    this.doc.addImage(
      src,
      "JPEG",
      percent(pageWidth, style.marginLeft),
      percent(pageWidth, globalHeight + removePercent(style.marginTop) + '%'),
      percent(pageWidth, style.width),
      percent(pageWidth, style.height)
    );
  }


  save(name = '', report = 'print') {
    globalHeight = 0
    if (report == 'print') {
      this.doc.autoPrint();
      window.open(this.doc.output("bloburl"));
    } else {
      this.doc.save(name);
    }

  }

  validateTextField(text) {
    if (text) {
      return text
    }
    return '---'
  }
  setGlobalHeight(height) {
    globalHeight = height
  }
  addUpGlobalHeight(height) {
    globalHeight += height
  }

  reduceGlobalHeight(height) {
    globalHeight -= height
  }
}

export {
  Container,
  calculateTheLengthOfText,
  percent,
  removePercent,
  globalHeight,
}

