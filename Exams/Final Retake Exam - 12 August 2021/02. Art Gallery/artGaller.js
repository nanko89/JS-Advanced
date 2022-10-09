class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    articleModel = articleModel.toLowerCase();
    if (!this.possibleArticles.hasOwnProperty(articleModel)) {
      throw Error("This article model is not included in this gallery!");
    }

    let exist = this.listOfArticles.findIndex(
      (a) => a.articleName === articleName
    );
    if (exist === -1) {
      this.listOfArticles.push({
        articleModel,
        articleName,
        quantity: Number(quantity),
      });
    } else {
      if (this.listOfArticles[exist].articleModel === articleModel) {
        this.listOfArticles[exist].quantity += quantity;
      } else {
        this.listOfArticles.push({
          articleModel,
          articleName,
          quantity: Number(quantity),
        });
      }
    }
    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  }

  inviteGuest(guestName, personality) {
    if (this.guests.findIndex((g) => g.guestName === guestName) !== -1) {
      throw Error(`${guestName} has already been invited.`);
    }

    let points = 50;
    if (personality === "Vip") {
      points = 500;
    } else if (personality === "Middle") {
      points = 250;
    }

    this.guests.push({ guestName, points, purchaseArticle: 0 });
    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let article = this.listOfArticles.find(
      (a) => a.articleModel === articleModel && a.articleName === articleName
    );
    let guest = this.guests.find((g) => g.guestName === guestName);

    if (article === undefined) {
      throw Error("This article is not found.");
    }

    if (article.quantity === 0) {
      return `The ${articleName} is not available.`;
    }

    if (guest === undefined) {
      return "This guest is not invited.";
    }

    let articlePoint = this.possibleArticles[article.articleModel];
    let reducePoints = guest.points - articlePoint;
    if (reducePoints < 0) {
      return "You need to more points to purchase the article.";
    }
    guest.points = reducePoints;
    article.quantity--;
    guest.purchaseArticle++;
    return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
  }

  showGalleryInfo(criteria) {
    let result = "";

    if (criteria === "article") {
      result = "Articles information:\n";
      this.listOfArticles.map(
        (a) =>
          (result += `${a.articleModel} - ${a.articleName} - ${a.quantity}\n`)
      );
    } else if (criteria === "guest") {
      result = "Guests information:\n";
      this.guests.map(
        (g) => (result += `${g.guestName} - ${g.purchaseArticle}\n`)
      );
    }
    return result.trim();
  }
}

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.addArticle("picture", "Mona Liza", 3));
// console.log(artGallery.addArticle("Item", "Ancient vase", 2));
// console.log(artGallery.addArticle("PICTURE", "Mona Liza", 1));

// const artGallery = new ArtGallery("Curtis Mayfield");
// console.log(artGallery.inviteGuest("John", "Vip"));
// console.log(artGallery.inviteGuest("Peter", "Middle"));
// console.log(artGallery.inviteGuest("John", "Middle"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// console.log(artGallery.buyArticle("picture", "Mona Liza", "John"));
// console.log(artGallery.buyArticle("item", "Ancient vase", "Peter"));
// console.log(artGallery.buyArticle("item", "Mona Liza", "John"));

// const artGallery = new ArtGallery("Curtis Mayfield");
// artGallery.addArticle("picture", "Mona Liza", 3);
// artGallery.addArticle("Item", "Ancient vase", 2);
// artGallery.addArticle("picture", "Mona Liza", 1);
// artGallery.inviteGuest("John", "Vip");
// artGallery.inviteGuest("Peter", "Middle");
// artGallery.buyArticle("picture", "Mona Liza", "John");
// artGallery.buyArticle("item", "Ancient vase", "Peter");
// console.log(artGallery.showGalleryInfo("article"));
// console.log(artGallery.showGalleryInfo("guest"));

let art = new ArtGallery("Curtis Mayfield");

art.addArticle("picture", "Mona Liza", 3);
art.addArticle("Item", "Ancient vase", 2);
art.addArticle("picture", "Mona Liza", 1);

art.inviteGuest("John", "Vip");
art.inviteGuest("Peter", "Middle");

art.buyArticle("picture", "Mona Liza", "John");
art.buyArticle("item", "Ancient vase", "Peter");
console.log(art.showGalleryInfo("article"));
console.log(art.showGalleryInfo("guest"));
