export default class Game {
    constructor(
        name,
        link,
        projPath,
        icon,
        screenshots,
        tagline,
        shortDescription,
        body,
        isStarred = false
    ) {
        this.name = name;
        this.link = link;
        this.projPath = projPath;
        this.icon = icon;
        this.screenshots = screenshots;
        this.tagline = tagline;
        this.shortDescription = shortDescription;
        this.body = body;
        this.isStarred = isStarred;
    }
}
