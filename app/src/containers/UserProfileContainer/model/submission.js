export default class ProfileSubmission {
  constructor() {
    this.toData = this.toData.bind(this);
    const args = arguments[0];
    this.authToken = args.authToken;
    this.profile = {
      bio: args.bioInput,
      avatar: args.avatarInput,
      email: args.emailInput,
      public: args.publicInput,
    };
  }
  toData() {
    return {
      authToken: this.authToken,
      profile: this.profile,
    };
  }
}
