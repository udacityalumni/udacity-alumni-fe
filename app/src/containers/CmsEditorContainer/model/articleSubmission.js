export class ArticleSubmission {
  constructor() {
    this.statusEnum = {
      0: 'draft',
      1: 'published',
      2: 'archived',
    };
    this.toArticle = this.toArticle.bind(this);
    const args = arguments[0];
    this.content = args.content;
    this.title = args.title;
    this.status = this.statusEnum[`${args.status}`];
    this.tags = args.tags.map((tag) => ({
      tag: tag.label,
    }));
    this.spotlighted = args.spotlighted;
    this.json = args.json;
    this.feature_image = args.feature_image;
  }
  toArticle() {
    return {
      title: this.title,
      content: this.content,
      json: this.json,
      status: this.status,
      spotlighted: this.spotlighted,
      tags: this.tags,
      feature_image: this.feature_image,
    };
  }
}

const inputToArticle = (input) => new ArticleSubmission(input).toArticle();

export default inputToArticle;
