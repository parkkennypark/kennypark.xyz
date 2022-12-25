export default class Render {
  constructor(
    name,
    link,
    projPath,
    previewImage,
    images,
    year,
    description,
    credits
  ) {
    this.name = name;
    this.link = link;
    this.projPath = projPath;
    this.previewImage = previewImage;
    this.images = images;
    this.year = year;
    this.description = description;
    this.credits = credits;
  }
}
