 import { jsPDF } from 'jspdf'
 import { calculateTheLengthOfText, percent, removePercent } from './helper'

 const doc = new jsPDF()

 let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
 let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
 let globalHeight = 0;

function addPage(heigth, top) {
  if (globalHeight >= heigth) {
    doc.addPage();
    globalHeight = top;
  }
}

class Container {

    constructor() {}
  
    div(doc, style) {
      let border = style.border != undefined ? style.border : [255, 255, 255];
      let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
      let setColor = style.bgColor != undefined ? "FD" : undefined;
      doc.setDrawColor(...border);
      doc.setFillColor(...bgColor);
      let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
      doc.rect(
        percent(pageHeight, style.marginLeft),
        height,
        percent(pageWidth, style.width),
        percent(pageWidth, style.padding),
        setColor
      );
    }

    th(doc, style) {
      let border = style.border != undefined ? style.border : [255, 255, 255];
      let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
      let setColor = style.bgColor != undefined ? "FD" : undefined;
      doc.setDrawColor(...border);
      doc.setFillColor(...bgColor);
      let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
      doc.rect(
        percent(pageHeight, style.marginLeft),
        height,
        percent(pageWidth, style.width),
        percent(pageWidth, style.padding),
        setColor
      );
    }

    td(doc, style) {
      let border = style.border != undefined ? style.border : [255, 255, 255];
      let bgColor = style.bgColor != undefined ? style.bgColor : [255, 255, 255];
      let setColor = style.bgColor != undefined ? "FD" : undefined;
      doc.setDrawColor(...border);
      doc.setFillColor(...bgColor);
      let height = percent(pageHeight, (globalHeight + removePercent(style.heigth)) + '%');
      doc.rect(
        percent(pageHeight, style.marginLeft),
        height,
        percent(pageWidth, style.width),
        percent(pageHeight, style.padding),
        setColor
      );
    }

    splitText(text, size, width, font = "") {
      let lines = doc
        .setFont(font)
        .setFontSize(size)
        .splitTextToSize(text, width || undefined);
      return lines;
    }

    p(text, style, callBack = 0) {
      let addPosition = callBack;
      doc.setFont("", style.fontWeigth);
      doc.setFontSize(style.fontSize);
      let marginTopPercent = percent(pageHeight, (globalHeight + removePercent(style.marginTop)) + '%');
      let formatedText = text//this.splitText(text, style.fontSize, style.width, "");
      doc.text(
        percent(pageWidth, style.marginLeft),
        marginTopPercent,
        formatedText
      );
      marginTopPercent += addPosition;
    }
  
    hr(style) {
      doc.setFont("", 'bold');
      doc.setDrawColor(0, 0, 0)
      doc.setLineWidth(style.width || 0.5);
      doc.line(
        percent(pageWidth, style.marginLeft),
        percent(pageHeight, (globalHeight + removePercent(style.top)) + '%' ),
        percent(pageWidth, style.marginRight),
        percent(pageHeight, (globalHeight + removePercent(style.bottom)) + '%' )
      );
    }
  
    Image(src, style) {
      doc.addImage(
        src,
        "JPEG",
        percent(pageWidth, style.marginLeft),
        percent(pageWidth, globalHeight + removePercent(style.marginTop) + '%'),
        percent(pageWidth, style.width),
        percent(pageWidth, style.height)
      );
    }
    
    save() {
      doc.save();
    }

    print() {
      doc.autoPrint();
      doc.output("dataurlnewwindow");
    }
  }

  export {
    Container,
    addPage,
    calculateTheLengthOfText,
    percent,
    removePercent,
    globalHeight,
    doc
  }

