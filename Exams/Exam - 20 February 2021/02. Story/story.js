class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${
        this._likes.length - 1
      } others like this story!`;
    }
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    if (this.creator === username) {
      throw new Error("You can't like your own story!");
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }
    let index = this._likes.indexOf(username);
    this._likes.splice(index, 1);

    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    if (id === undefined || !this._comments.find((c) => c.id === id)) {
      let id = this._comments.length + 1;

      let comment = { id, username, content, replies: [] };

      this._comments.push(comment);
      return `${username} commented on ${this.title}`;
    } else {
      let repliesList = this._comments.find((c) => c.id === id).replies;
      if (repliesList.length === 0) {
        repliesList.push({ id: id + 0.1, username, content });
      } else {
        let lastId = repliesList[repliesList.length - 1].id;
        repliesList.push({ id: lastId + 0.1, username, content });
      }
      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

    if (sortingType === "asc") {
      this._comments = this._comments.sort((a, b) => a.id - b.id);
    } else if (sortingType === "desc") {
      this._comments = this._comments.sort((a, b) => b.id - a.id);
    } else if (sortingType === "username") {
      this._comments = this._comments.sort((a, b) =>
        a.username.localeCompare(b.username)
      );
    }

    for (const comment of this._comments) {
      result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;
      if (comment.replies.length !== 0) {
        if (sortingType === "asc") {
          comment.replies = comment.replies.sort((a, b) => a.id - b.id);
        } else if (sortingType === "desc") {
          comment.replies = comment.replies.sort((a, b) => b.id - a.id);
        } else if (sortingType === "username") {
          comment.replies = comment.replies.sort((a, b) =>
            a.username.localeCompare(b.username)
          );
        }
      }

      for (const replayComment of comment.replies) {
        result += `--- ${replayComment.id.toFixed(1)}. ${
          replayComment.username
        }: ${replayComment.content}\n`;
      }
    }
    return result.trim();
  }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John")); //, "John liked My Story!");
console.log(art.likes); //, "John likes this story!");
console.log(art.like("Ivan")); //,"Ivan liked My Story!");
console.log(art.like("Steven")); //, "Steven liked My Story!");
console.log(art.likes); //, "John and 2 others like this story!");
console.log(art.comment("Anny", "Some Content")); //,"Anny commented on My Story");
console.log(art.comment("Ammy", "New Content", 1)); //,"You replied successfully");
console.log(art.comment("Zane", "Reply", 2)); //,"Zane commented on My Story");
console.log(art.comment("Jessy", "Nice :)")); //, "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2)); //, "You replied successfully");
