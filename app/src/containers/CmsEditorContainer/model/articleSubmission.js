export class ArticleSubmission {
  constructor() {
    this.setStatusFromRaw = this.setStatusFromRaw.bind(this);
    this.toArticle = this.toArticle.bind(this);
    const args = arguments[0];
    this.content = args.content;
    this.title = args.title;
    this.status = this.setStatusFromRaw(args.status);
    this.tags = args.tags.map((tag) => ({
      tag: tag.label,
    }));
    this.spotlighted = args.spotlighted;
    this.json = args.json;
    this.feature_image = args.feature_image;
  }
  setStatusFromRaw(status) {
    switch (status) {
      case 0:
        return 'draft';
      case 1:
        return 'published';
      case 2:
        return 'archived';
      default: return 'draft';
    }
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
