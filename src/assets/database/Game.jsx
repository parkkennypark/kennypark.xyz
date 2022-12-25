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
        date,
        engine,
        isStarred = false,
        hasCode = false
    ) {
        this.name = name;
        this.link = link;
        this.projPath = projPath;
        this.icon = icon;
        this.screenshots = screenshots;
        this.tagline = tagline;
        this.shortDescription = shortDescription;
        this.body = body;
        this.date = date;
        this.engine = engine;
        this.isStarred = isStarred;
        this.hasCode = hasCode;
    }
}
