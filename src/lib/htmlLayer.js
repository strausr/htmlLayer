export class HtmlLayer{
  constructor(img, transformableImage){
    this.img = img;
    this.img.setAttribute('src', transformableImage.toURL());
  }
  render(transformation) {
    this.img.src = transformation.toURL();
  }
}
