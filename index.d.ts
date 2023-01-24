
interface Idiv {
    border: Array<string>,
    bgColor: Array<string>,
    marginLeft: string,
    width: string,
    padding: string,
    heigth: string
}
interface Ith {
    border: Array<string>,
    bgColor: Array<string>,
    marginLeft: string,
    width: string,
    padding: string,
    heigth: string
}

interface Itd {
    border: Array<string>,
    bgColor: Array<string>,
    marginLeft: string,
    width: string,
    padding: string,
    heigth: string
}

interface Ip {
    border: Array<string>,
    bgColor: Array<string>,
    marginLeft: string,
    width: string,
    padding: string,
    heigth: string
}

interface Iimage {
    border: Array<string>,
    bgColor: Array<string>,
    marginLeft: string,
    width: string,
    padding: string,
    heigth: string
}

export interface Container {
    addPage(heigth: string, top: string): void
    div(style: Idiv): void
    th(style: Ith): void
    td(style: Itd): void
    splitText(): void
    p(text: string, style: Ip): void
    hr(): void
    Image(src: string, style: Iimage): void
    save(): void
    validateTextField(): void
    setGlobalHeight(): void
    addUpGlobalHeight(): void
    reduceGlobalHeight: number
}

