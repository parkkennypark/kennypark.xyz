(this["webpackJsonpreact-tutorial-website"]=this["webpackJsonpreact-tutorial-website"]||[]).push([[0],{38:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},47:function(e){e.exports=JSON.parse('[{"year":2000,"events":[{"date":"December","text":"Project launch: Me! Critical reception was overwhelmingly positive, despite the glaring bugs scattered throughout. \\"Is it supposed to poop this much?\\"","img":"/images/timeline/01 Feb BIRTH.JPG"}]},{"year":2007,"events":[{"date":"At some point in","text":"The first-grade-fun-bench incident."}]},{"year":2008,"events":[{"date":"December","text":"I got my first taste for money. I\'ve been told I changed after that day.","img":"/images/timeline/08 Dec MONEY.JPG"}]},{"year":2009,"events":[{"date":"March","text":"I graced the stage as a cat in our second grade production of Peter Rabbit. I had one line: \u201cMeow, I love rabbit soup!\u201d","img":"/images/timeline/09 Dec CAT.JPG"},{"date":"A momentous day in","text":"My parents bought me a Nintendo DS Lite. I credit this system for getting me into game development, shaping my tastes, and familiarizing myself with computers. A 10/10 console."},{"date":"A fateful day in","text":"I downloaded Game Maker, and made a bunch of dumb games. Thus began my obsession with game development."}]},{"year":2011,"events":[{"date":"A glorious day in","text":"My parents made the mistake of introducing me to microwavable chimichangas. What a summer that was."},{"date":"A prophetic day in","text":"I temporarily ascended from my mortal form and caught a Nerf bullet that my brother shot at me with my teeth. "}]},{"year":2016,"events":[{"date":"April","text":"After a friend thought it would be funny to make a game about shooting ducks from a cannon, I finally followed through and published my first game to the Google Play Store, \\"VR Ducks.\\"","img":"/images/games/VR Ducks/VR Ducks icon 512x512.png"}]},{"year":2017,"events":[{"date":"July","text":"I participated in my first game jam, producing \\"The Research Center for Boxy Physics\\"","img":"/images/games/RCBP/RCBP icon 512x512.png"},{"date":"August","text":"After dedicating a year and three months of my life to ducks, \\"Duck Warfare\\" was released on the mobile app stores.","img":"/images/games/Duck Warfare/Duck Warfare icon.png"}]},{"year":2018,"events":[{"date":"Halloween","text":"The Banana Boys rolled into town, terrifying the locals. The value of real estate in the area plummeted.","img":"/images/timeline/18 Nov BANANA.jpg"}]},{"year":2019,"events":[{"date":"March","text":"My beloved Melona-colored Squier Bullet Telecaster came home with me from a Guitar Center.","img":"/images/timeline/19 Mar GUITAR.jpg"},{"date":"June","text":"I graduated high school, and went to Lake Tahoe on a senior trip. I comparatively haven\'t felt at peace ever since.","img":"/images/timeline/19 May FRIENDS.JPG"},{"date":"August","text":"Deciding to find an end to my years of crippling debt, \\"burrito finance\\" was developed and released to keep track of my spending.","img":"/images/games/burrito finance/burrito finance icon 512x512.png"},{"date":"August","text":"I evolved into a train, braced for the cold, and started studying game design at Purdue University."},{"date":"September","text":"A nervous freshman, I applied for and got accepted to a job as a Unity programmer at Purdue\'s Envision Center, where I currently work."}]},{"year":2084,"events":[{"date":"Summer Olympics","text":"Still alive and kicking, I\u2019m now a five-time gold medalist in the wildly popular Olympic sport Extreme Wheelchair Racing. My performance this year looks like it will end in another easy gold, but at the last second, I throw the race and give a nod to the rookie in the Argentina roster. He\u2019s like a son to me. It\u2019s your turn, kid. Make me proud."}]}]')},51:function(e,t,a){},52:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),r=a(42),i=a.n(r),o=(a(51),a(15)),c=a(11),l=(a(38),a(52),a(0)),d=function(e){var t=e.text,a=e.link;return Object(l.jsx)(o.b,{draggable:"false",className:"link-btn",to:a,children:Object(l.jsx)("p",{className:"text-center",children:t})})},m=a.p+"static/media/Head.2262f40e.png",h=a(19),p=a(9),j=a(70);function b(e){var t=Object(n.useRef)(),a=Object(j.a)("/head.glb"),s=a.nodes,r=a.materials;return Object(l.jsx)("group",Object(p.a)(Object(p.a)({ref:t},e),{},{dispose:null,children:Object(l.jsx)("mesh",{geometry:s.Head.geometry,material:r.HEAD,scale:[1,1,1],rotation:[.25,3.1415,0]})}))}j.a.preload("/head.glb");var u=a(46),g=a(2);Object(h.b)({OrbitControls:u.a});var x=function(){var e=Object(h.e)(),t=e.camera,a=e.gl.domElement,s=Object(n.useRef)();return Object(h.c)((function(e){return s.current.update()})),Object(l.jsx)("orbitControls",{ref:s,args:[t,a],enableZoom:!1,enablePan:!1,enableDamping:!0,dampingFactor:.1,autoRotate:!0,autoRotateSpeed:2,rotateSpeed:.6})},f=function(){return Object(l.jsx)(h.a,{id:"head",colorManagement:!0,camera:{position:[0,0,-19],fov:20},onCreated:function(e){var t=e.gl;e.scene;t.toneMapping=g.NoToneMapping},children:Object(l.jsxs)(n.Suspense,{fallback:m,children:[Object(l.jsx)(x,{}),Object(l.jsx)(b,{})]})})},y=function(e){var t=e.link,a=e.text;return Object(l.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:a})},O=function(){return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{id:"header",className:"horizontal-layout",children:[Object(l.jsx)(f,{}),Object(l.jsxs)("div",{id:"header-text",children:[Object(l.jsxs)("h1",{children:["Hi! I'm ",Object(l.jsx)("span",{className:"text-red",children:"Kenny Park"}),"."]}),Object(l.jsx)("p",{className:"p1",children:"I\u2019m a 20 year old game developer, programmer, artist, and all around cool guy - though that last point is up for debate."}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{className:"p1",children:"This website is a collection of my games, art, and other creative projects."})]})]}),Object(l.jsxs)("div",{id:"button-row",className:"vertical-layout",children:[Object(l.jsx)(d,{text:"GAMES / APPLICATIONS",link:"/games"}),Object(l.jsx)(d,{text:"RENDERS / 3D WORK",link:"/renders"}),Object(l.jsx)(d,{text:"OTHER PROJECTS",link:"/others"})]}),Object(l.jsxs)("div",{id:"bottom-links",children:[Object(l.jsxs)("label",{className:"float-left",children:[Object(l.jsx)(o.b,{to:"/about",children:"about/contact"})," | ",Object(l.jsx)(o.b,{to:"/timeline",children:"timeline"})," | ",Object(l.jsx)(o.b,{to:"/site-info",children:"site info"})]}),Object(l.jsxs)("div",{className:"float-right",children:[Object(l.jsx)(y,{link:"https://twitter.com/kennyparkpark",text:"twitter"})," | ",Object(l.jsx)(y,{link:"https://instagram.com/kennypark.png",text:"instagram"})]})]})]})})},v=(a(40),a(62),function(e){var t=e.link,a=e.showHome,n=Object(c.f)();return Object(l.jsxs)("div",{id:"back-header-div",children:[Object(l.jsx)("label",{id:"back-button",onClick:function(){n.push(t)},children:"back"}),"false"===a?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("label",{id:"home-button",onClick:function(){n.push("/")},children:"home"})]})});v.defaultProps={link:"",showHome:"false"};var k=v,w=(a(41),a(63),a(64),function(e){var t=e.className,a=e.src,n=e.alt;e.expandable;return a?"mp4"===a.split(".").pop()?Object(l.jsx)("video",{className:t,autoPlay:!0,loop:!0,children:Object(l.jsx)("source",{src:a,type:"video/mp4"})}):Object(l.jsx)("img",{className:t,src:a,alt:n}):Object(l.jsx)(l.Fragment,{})}),I=function(e){var t=e.game;return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{link:"/games",showHome:"true"}),Object(l.jsxs)("div",{className:"project-header horizontal-layout",children:[Object(l.jsx)("img",{className:"project-icon",src:t.projPath+"/"+t.icon,alt:"uh oh"}),Object(l.jsxs)("div",{className:"project-short-description-div vertical-layout",children:[Object(l.jsx)("h1",{className:"project-title text-red",children:t.name}),t.shortDescription]})]}),Object(l.jsx)("div",{className:"screenshot-div",children:t.screenshots.map((function(e,a){return Object(l.jsx)(w,{className:"screenshot",src:t.projPath+"/screenshots/"+e,alt:"uh oh"},a)}))}),t.body]})})},N=function e(t){var a=t.name,n=t.tagline,s=t.icon,r=t.link,i=Object(c.g)();return Object(l.jsx)(o.b,{to:i.url+r,className:"project-preview",children:Object(l.jsxs)("div",{className:"vertical-layout text-div",children:[Object(l.jsx)("img",{className:"project-list-icon",src:s,alt:e}),Object(l.jsx)("p",{className:"text-name text-red text-center",children:a}),Object(l.jsx)("p",{className:"text-tagline text-center",children:n})]})})},C=a(1),P=function e(t,a,n,s,r,i,o,c){Object(C.a)(this,e),this.name=t,this.link=a,this.projPath=n,this.icon=s,this.screenshots=r,this.tagline=i,this.shortDescription=o,this.body=c},A=function(e){var t=e.property,a=e.value;return Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"text-red",children:t}),": ",a]})},T=[new P("VOID","/void","/images/games/void chat","void chat icon 256x256.png",["landing menu.png","signup menu.png","main menu.png"],"Forum Program",Object(l.jsxs)("pre",{children:["A forum app made with Java Swing that runs on a dedicated server.","\n\n","Made for a group final project in an intro Computer Science class."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Project Date",value:"May 2021"}),Object(l.jsx)(A,{property:"Development Time",value:"Three weeks"}),Object(l.jsx)(A,{property:"Language",value:"Java (Swing framework for GUI)"}),Object(l.jsx)(A,{property:"Programs",value:"IntelliJ"}),Object(l.jsxs)("pre",{children:["\n","For this project, we were prompted to make a social media program that implements profiles, posts, and comments that would all be sent to different clients through a dedicated multi-threaded server. These three items can also be edited at any time and automatically synced across clients. No starter code was provided.","\n\n","I played the role of the team lead for this project. To split up work, I made an outline of the various classes we needed and distributed work to my three other teammates. I was responsible for the program's concept, the GUI design and implementation, and the main functionality for post creation and server/client communication."]})]})),new P("No Monkey Business","/no-monkey-business","/images/games/No Monkey Business","No Monkey Business icon 256x256.png",["Screenshot 1.png","Gun selection.png","Spawn UI.jpg","Old Map.jpg"],"Frantic FPS",Object(l.jsxs)("pre",{children:["A casual, high-paced first person shooter I developed to play with my friends.","\n\n","Was started three times, but unfortunately never finished. I learned so much that I figured I'd show it off anyway."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Development Time",value:"March 2020 - September 2020"}),Object(l.jsx)(A,{property:"Programs",value:"Unity, ProBuilder, Blender, Adobe Illustrator"}),Object(l.jsxs)("pre",{children:["\n","This project started as a lighthearted game I could goof around on with my friends. It was meant to be a frantic multiplayer shooter with an emphasis on unique gamemodes, with planned modes such as 'Chunky Munky' (a twist on juggernaut) and 'Capture the Rotisserie Chicken' (capture the flag meets control points).","\n\n","I learned a lot working solo on this project, including networking code, Unity events/listeners, modeling and rigging, and level and UI design. While it was certainly a challenge, I had a blast doing it all.","\n\n","The game is currently in a playable state featuring a roster of unique weapons and endless free-for-all gameplay. Having played with some friends, I'm happy to say it is a lot of fun.","\n\n","\u200bUltimately, I've decided to drop the project for the time being. Due to the sporadic nature of its development, the code base simply isn't well-structured enough to allow for me to easily continue working on it. It's taught me the invaluable lesson that structure matters, and I have since been much better at planning interweaving systems. I'm still incredibly proud of this game, and I guarantee the monkeys will make a reappearance in some form or another."]})]})),new P("Wreck The Halls","/wreck-the-halls","/images/games/Wreck The Halls","Wreck The Halls icon 256x256.png",["iPhone 5.52020-01-10_14-19-04.png","iPhone 5.52020-01-10_14-20-50.png","iPhone 5.52020-01-10_14-21-14.png","iPhone 5.52020-01-10_14-22-37.png","iPhone 5.52020-01-10_14-22-51.png","iPhone 5.52020-01-10_14-23-10.png"],"Twin-Stick Shooter",Object(l.jsxs)("pre",{children:["A Christmas (or Halloween?) themed twin-stick shooter about stopping the joy of the holiday season.","\n\n","Made in 24 hours for Purdue\u2019s IGDC Halloween Game Jam, with post-jam work/polishing done later."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"October 2019"}),Object(l.jsx)(A,{property:"Development Time",value:"24 hours, plus\r post-jam work"}),Object(l.jsx)(A,{property:"Programs",value:"Unity, Adobe Illustrator,\r Blender"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{link:"https://play.google.com/store/apps/details?id=com.KennyPark.WrecktheHalls",text:"Android"}),","," ",Object(l.jsx)(y,{link:"https://apps.apple.com/us/app/wreck-the-halls/id1493863302?ls=1",text:"iOS"}),","," ",Object(l.jsx)(y,{link:"https://parkkennypark.itch.io/wreck-the-halls",text:"Browser"})," (original jam ver.)"]})}),Object(l.jsxs)("pre",{children:["\n",'I made this game as my submission for a 24-hour game jam hosted by a game development club at Purdue university. The theme was very broad: "Halloween." I made everything in the game, save the sfx and music. It won first place (of four projects), netting me a king-sized Kit Kat. I love Kit Kats, so I was pretty ecstatic.',"\n\n","A couple months down the road, I took a some time to polish the game as well as to add achievements and an endless mode before porting it to mobile. I tried my best to maintain the game's graphical fidelity while still handling well on mobile devices."]})]})),new P("burrito finance","/burrito-finance","/images/games/burrito finance","burrito finance icon 256x256.png",["screenshot 1.jpg","screenshot 2.jpg","screenshot 3.jpg","screenshot 4.jpg","screenshot 5.jpg"],"Personal Finance?",Object(l.jsxs)("pre",{children:["A simple personal spending tracker that tells you how much you\u2019ve spent in burritos.","\n\n","Made for personal use before entering college, and released for the fun of it."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"August 2019"}),Object(l.jsx)(A,{property:"Development Time",value:"One week"}),Object(l.jsx)(A,{property:"Programs",value:"Unity 3D, Adobe Illustrator"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{link:"https://play.google.com/store/apps/details?id=com.KennyPark.money",text:"Android"}),","," ",Object(l.jsx)(y,{link:"https://apps.apple.com/us/app/burrito-finance/id1476182873",text:"iOS"}),","," "]})}),Object(l.jsxs)("pre",{children:["\n","burrito finance was made to be a bare-bones tool to see roughly how much I spend per month. It is a simple app created for personal use - I had previously been jotting down expenses on a notes app but found this to be clunky and unhelpful. I'm sure a good solution already exists out there, but I thought it would be fun to make my own app.","\n\n","As always, I wanted to inject my own style into this one; even if it was just for personal use, I didn't want it to be a boring app. The fluid animations I included between screens helped with this."]})]})),new P("Duck Warfare","/duck-warfare","/images/games/Duck Warfare","Duck Warfare icon 256x256.png",["scrn 1.png","scrn 2.png","scrn 3.png","scrn 4.png","scrn 5.png","scrn 6.png"],"Quirky Tower Defense",Object(l.jsxs)("pre",{children:["A tower-defense-type game featuring a large cast of ducks and Newgrounds-era stylings.","\n\n","My first major and monetized project."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"August 2017"}),Object(l.jsx)(A,{property:"Development Time",value:"One year and three months"}),Object(l.jsx)(A,{property:"Programs",value:"Unity, Adobe Illustrator,\r Blender"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{link:"https://play.google.com/store/apps/details?id=com.lonelybench.DuckWarfare",text:"Android"}),","," ",Object(l.jsx)(y,{link:"https://apps.apple.com/us/app/duck-warfare/id1269957119",text:"iOS"}),","," "]})}),Object(l.jsxs)("pre",{children:["\n","Duck Warfare was my first major project. My goal for this game was to make a short, casual experience full of charm and quirks. I worked on this game solo, meaning I took care of the art, design, gameplay, scripting, and release. With it still being one of my first projects, there are definite issues with the game (many being UI related) and it lacks polish overall. Regardless, I'm really happy with the game, and I think it has a lot of character!","\n\n","I still get emails from players asking for more levels or a second game, which always makes me smile. Maybe some day."]})]})),new P("R.C.B.P","/rcbp","/images/games/RCBP","RCBP icon 256x256.png",["iPhone 5.5 2020-01-19_14-12-43.png","iPhone 5.5 2020-01-19_14-15-22.png","iPhone 5.5 2020-01-19_14-16-21.png"],"Game Jam Entry",Object(l.jsxs)("pre",{children:["A simple puzzle game about controlling boxes with your mind.","\n\n","Made in a week for the GDQ Game Jam."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"July 2017"}),Object(l.jsx)(A,{property:"Development Time",value:"One week"}),Object(l.jsx)(A,{property:"Programs",value:"Unity 3D, Adobe Illustrator"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{link:"https://play.google.com/store/apps/details?id=com.lonelybench.RCBP",text:"Android"}),","," ",Object(l.jsx)(y,{link:"https://apps.apple.com/us/app/boxy-physics-research-center/id1412305838?ls=1",text:"iOS"}),","," ",Object(l.jsx)(y,{link:"https://parkkennypark.itch.io/the-research-center-for-boxy-physics",text:"Browser"})]})}),Object(l.jsxs)("pre",{children:["\n","This was my first time participating in a game jam, and I'm really happy with the end result. The jam was completely open ended - no themes, rules, or any restrictions. I've never designed puzzles for a game before, and though there aren't many in the game, I was able to produce novel ways to play on the core mechanic.","\n\n","The game was ported to mobile post-jam."]})]})),new P("VR Ducks","/vr-ducks","/images/games/VR Ducks","VR Ducks icon 256x256.png",["scrn 1.png","scrn 2.png","scrn 3.png","scrn 4.png","scrn 5.png","scrn 6.png","scrn 7.png"],"Mobile VR Game",Object(l.jsxs)("pre",{children:["A carnival/arcade shootout game where you fire ducks from a cannon to try to get a high score.","\n\n","My first published game."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"April 2016"}),Object(l.jsx)(A,{property:"Development Time",value:"Two months"}),Object(l.jsx)(A,{property:"Programs",value:"Unity 3D, Adobe Illustrator,\r Blender"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsx)(y,{link:"https://play.google.com/store/apps/details?id=com.Lonely_Bench.VR_Ducks",text:"Android"})}),Object(l.jsxs)("pre",{children:["\n","A carnival style shootout game where you fire ducks from a cannon to knock out pirates. The ducks can be customized with various hats/accessories, and Google Play leaderboard support allows users to compete for the highest score.","\n\n","The game supports both VR and traditional play.","\n\n","This was the first finished game I made with Unity. I was in the very early stages of learning scripting and design in general, and as such the game is pretty rough around the edges. It serves as a reminder of how much I've learned on all aspects of game creation."]})]})),new P("Block Turtle","/block-turtle","/images/games/Block Turtle","Block Turtle icon 256x256.png",["Fire.png","Rocket.png","Instructions.png"],"Relic of the Past",Object(l.jsxs)("pre",{children:["A prototype I made in fifth grade using Game Maker 8.0 featuring Blocky the Turtle.","\n\n","One of the few games that still exist from my early days of game development."]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(A,{property:"Release Date",value:"August 2017"}),Object(l.jsx)(A,{property:"Development Time",value:"One year and three months"}),Object(l.jsx)(A,{property:"Programs",value:"Game Maker 8.0"}),Object(l.jsx)(A,{property:"Platforms",value:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{link:"https://kennythepea.weebly.com/",text:"PC"})," (on my old website)"]})}),Object(l.jsxs)("pre",{children:["\n","I have a lot of fond memories associated with this little game and its little blocky protagonist. My late elementary school days were filled with goofy ideas for games like this that would eventually lead me to an even greater passion for making things. My natural skew towards goofiness still shines through very clearly in all my projects.","\n\n","There are a lot more small prototypes like this one from my days fiddling with Game Maker and Construct 2, but I unfortunately didn't learn the importance of backing up files until it was too late. I would love to play those dumb little games again.","\n\n","R.I.P. Block Turtle :("]})]}))],D=function(){var e=T.map((function(e,t){return Object(l.jsx)(N,{name:e.name,tagline:e.tagline,icon:e.projPath+"/"+e.icon,link:e.link},t)}));return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{link:"/"}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)("h2",{className:"page-title",children:"GAMES / APPLICATIONS"})}),Object(l.jsx)("div",{className:"game-grid-container",children:e})]})})},R=function(e){var t=e.name,a=e.year,n=e.previewImage,s=e.link,r=Object(c.g)();return Object(l.jsx)(o.b,{to:r.url+s,className:"render-preview",children:Object(l.jsxs)("div",{className:"vertical-layout text-div",children:[Object(l.jsx)("img",{className:"render-preview-image",src:n,alt:n}),Object(l.jsxs)("p",{className:"p1",children:[Object(l.jsx)("span",{className:"text-red",children:t})," (",a,")"]})]})})},M=function e(t,a,n,s,r,i,o,c){Object(C.a)(this,e),this.name=t,this.link=a,this.projPath=n,this.previewImage=s,this.images=r,this.year=i,this.description=o,this.credits=c},S=[new M("Cozy Interior","/cozy-interior","/images/renders/Cozy Interior","Cozy Interior thumbnail.png",["Relaxed Final Tagged.png","Safe Final Tagged.png","Clean Final Tagged.png","Clay w wireframe.png"],2021,Object(l.jsxs)("pre",{children:["Lit and rendered in Blender. Composited in Photoshop.","\n\n","This was a lighting project for a class. Most of the models were downloaded from Sketchfab, and was laid out based on an illustration - credits are below."]}),Object(l.jsxs)("pre",{className:"p2",children:["Based on an ",Object(l.jsx)(y,{link:"https://www.artstation.com/artwork/baBD8d",text:"illustration"})," by Anastasia Ermakova","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/old-stylised-computer-b576681b31de4723afef244b1b7c2c91",text:"Old Computer"})," by Alien Dev (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/laptop-dc3daa4c867a4582b6aaeeb484ca7bf4",text:"Laptop"})," by VISIONNEW (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/vintage-books-7a9bedf1e85c4f85b1b384dbdadadee9",text:"Books"})," by feivelyn (CC Attribution Non-Commercial)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/soda-can-1b63dd4832144e89955ecf2f70e8af4b",text:"Soda can"})," by junhyde (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/office-chair-well-used-29c10eb4b62e464caae5d62ac7dd19f8",text:"Office chair"})," by iedalton (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/radio-d21d6bf783154170bfa6dc7ce0a208f1",text:"Radio"})," by TraianDumbrava (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/cardboard-boxes-713484d8f2284528bbd28ad41e197b24",text:"Cardboard boxes"})," by Juan Carlos CR. (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/soviet-military-boots-kirza-6e16fa9f2d3944088913ff5e0505d192",text:"Boots"})," by KIFIR (CC Attribution Non-Commercial)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/japanese-clothes-a87d993c197749e3a243fac636f23485",text:"Japanese clothes"})," by Takeru (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/hangers-w-clothes-6df08ef8a8504504911ef520cd870aa8",text:"Sweatshirt"})," by melaamory (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/room-accessories-fd15a1985a3b48c59e8a96a7522d4eaf",text:"Various room accessories"})," by Matt Lemoine (CC Attribution Non-Commercial Share-A-Like)","\n","Some textures downloaded from"," ",Object(l.jsx)(y,{link:"https://ambientcg.com/",text:"ambientCG"}),".","\n","HDRIs downloaded by ",Object(l.jsx)(y,{link:"https://hdrihaven.com/",text:"HDRI Haven"}),"."]})),new M("Yui's House","/yuis-house","/images/renders/Yui's House","Yui's House thumbnail.png",["Morning.png","Evening.png","Night.png","Clay w wireframe.png"],2021,Object(l.jsxs)("pre",{children:["Modeled, lit, and rendered in Blender. Textures made in Substance Painter. Graded in Lightroom. Composited in Photoshop.","\n\n",'This was a lighting project for a class. The house is from one of my favorite anime, "K-On!" Credits are below.']}),Object(l.jsxs)("pre",{className:"p2",children:["Scene based on ",Object(l.jsx)(y,{link:"https://1.bp.blogspot.com/-1gbsNbwm8UM/Wi1fDZRBBXI/AAAAAAAAR9c/3fe6z_xPW44KNsRV7McXkiO893sfHV8vgCLcBGAs/s1600/kon104-05m16s.png",text:"Yui's house"}),' from the anime "K-On!"',"\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/japanese-tori-gate-11c75832cc91469cb98eccdfc28c6eeb#download",text:"Tori gate"})," by Jasmine (CC Attribution Non-Commercial)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/japan-stone-lamp-bfd94071302f439485520566ee5228a7",text:"Stone lantern"})," by datucarl (CC Attribution)","\n",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/mazda-rx8-6c4dec575a814b1a87f484527b0ec1f1",text:"Mazda RX8"})," by yoshipicture (CC Attribution)","\n","Some textures downloaded from"," ",Object(l.jsx)(y,{link:"https://ambientcg.com/",text:"ambientCG"}),".","\n","HDRIs downloaded by ",Object(l.jsx)(y,{link:"https://hdrihaven.com/",text:"HDRI Haven"}),"."]})),new M("Kyoto Street","/kyoto-street","/images/renders/Kyoto Street","Kyoto Street thumbnail.png",["main shot, 128 samples [final].png","cutout shot, 128 samples [final].png","viewport render.jpg"],2021,Object(l.jsxs)("pre",{children:["Modeled, lit, and rendered in Blender. Textures made in Substance Painter. Graded in Lightroom. Composited in Photoshop.","\n\n","I wanted something cool to post on my Instagram, so I decided to put my 3D skills to the test. I decided to recreate a"," ",Object(l.jsx)(y,{link:"https://www.google.com/maps/@35.0080722,135.7706522,3a,75y,86.3h,85.44t/data=!3m6!1e1!3m4!1sjrRUzhLvHzww6WicoqGqMw!2e0!7i16384!8i8192",text:"real street"})," in Kyoto, Japan after seeing a photo by"," ",Object(l.jsx)(y,{link:"https://teemusphoto.com/work/japan/",text:"Teemu Photography"}),". All the modelling and texturing work was done by me. I'm pretty happy with the end result, and managed to fool a good amount of my friends."]})),new M("Japanese Room","/japanese-room","/images/renders/Japanese Room","Japanese Room thumbnail.png",["Interior.mp4","Still.png"],2021,Object(l.jsxs)("pre",{children:["Modeled, lit, and rendered in Blender.","\n\n","This was a project for a modeling class. All models are by me. Textures are from CC0Textures.com. Based on an"," ",Object(l.jsx)(y,{link:"https://twitter.com/ArsXC/status/1282684359972130818/photo/3",text:"illustration"}),"."]})),new M("Lego Pier","/lego-pier","/images/renders/Lego Pier","Lego Pier thumbnail.png",["Mockup Final.png","Edited Render.png","Front Shot.png","Hanging Man.png","Clay w wireframe.png"],2020,Object(l.jsxs)("pre",{children:["Modeled, textured, lit, and rendered in Blender. Composited in Photoshop.","\n\n","This was a project for a modelling class. All models and textures were made by me. The Lego figures are based on official Lego sets."]})),new M("Lamp","/lamp","/images/renders/Lamp","Lamp thumbnail.png",["Lamp Edited.png","Lamp Trip.png","Wireframe.png"],2020,Object(l.jsxs)("pre",{children:["Modeled, textured, lit, and rendered in Blender. Composited in Photoshop.","\n\n","I modeled the lamp following a professor's tutorial. The rest of the scene as well as the texturing and lighting was done independently by me. The lamp model can be viewed on"," ",Object(l.jsx)(y,{link:"https://sketchfab.com/3d-models/lamp-0f97601335ed48ba9bb796a97a0780a0",text:"Sketchfab"}),"."]}))],B=function(){var e=S.map((function(e,t){return Object(l.jsx)(R,{name:e.name,year:e.year,previewImage:e.projPath+"/"+e.previewImage,link:e.link},t)}));return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{link:"/"}),Object(l.jsx)("div",{className:"",children:Object(l.jsx)("h2",{className:"page-title",children:"RENDERS / 3D WORK"})}),Object(l.jsx)("div",{className:"render-grid-container",children:e}),Object(l.jsx)(d,{text:"Various",link:"/virtual-labs"})]})})},H=function(){var e=Object(c.g)();return Object(l.jsxs)("div",{className:"centered-div",children:[Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"vertical-layout",children:[Object(l.jsx)(k,{}),Object(l.jsx)("h1",{className:"page-title",children:"ABOUT"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"I'm an undergraduate student at Purdue University studying game development and design."}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["I've been thinking up games since elementary school, back when a friend and I put all our lucrative project ideas in a red folder we labeled \"",Object(l.jsx)("span",{className:"text-red",children:"TOP SECRET"}),"\" with a cheap black marker. Since then, I've been working tirelessly on projects, improving my skills with every little idea, abandoned prototype, and rare finished project I've worked on. My red folder has long been abandoned, but my passion for making things is still very much alive."]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:"I think personality is what shines through in a good project. That's why I chose to design this website the way I did; I wanted to make something that reflects my tastes and personality, and I knew using a sleek, modern template wouldn't do that. Art is a reflection of its creator, so hopefully you like what you've seen!"}),Object(l.jsx)("br",{}),Object(l.jsx)(o.b,{to:e.url+"/resume",children:"Resume"})]})]})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("p",{children:"Email: parkkennypark@gmail.com"}),Object(l.jsx)("p",{children:"Discord: Kenny Park, #6479"})]})]})},E=(a(65),a(47)),G=function(){var e=E.map((function(e){return e.events.map((function(t,a){return Object(l.jsxs)("div",{className:"timeline-container",children:[Object(l.jsxs)("h3",{className:"text-center",children:[t.date," ",Object(l.jsx)("span",{className:"text-red",children:e.year})]}),Object(l.jsxs)("div",{className:"horizontal-layout",children:[Object(l.jsx)(w,{className:"timeline-image",src:t.img,alt:"Img not found"}),Object(l.jsx)("p",{className:"p2 timeline-text text-center",children:t.text})]})]},a)}))}));return Object(l.jsxs)("div",{className:"centered-div",children:[Object(l.jsxs)("div",{className:"timeline-container",children:[Object(l.jsx)(k,{link:""}),Object(l.jsx)("h1",{className:"text-center",children:"TIMELINE"}),Object(l.jsx)("p",{className:"p1 text-center",children:"All the important(?) events in my life, to this point and beyond."}),Object(l.jsx)("p",{className:"p2 text-center",children:"(Definitely not just an excuse to share pictures I like.)"})]}),e]})},F=function(){return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{link:"/"}),Object(l.jsx)("h2",{className:"page-title",children:"SITE INFO"}),Object(l.jsxs)("div",{style:{textAlign:"center"},children:[Object(l.jsxs)("p",{children:["This site was made by me with"," ",Object(l.jsx)("span",{className:"text-red",children:"React"}),". It is hosted using Github Pages."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["If you're interested, the site's full source is available"," ",Object(l.jsx)(y,{link:"https://github.com/parkkennypark/parkkennypark.github.io",text:"here"}),"."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["The sole font used in this site is called"," ",Object(l.jsx)(y,{link:"https://www.freekoreanfont.com/typo-dodam-m-download",text:"Typo Dodam M"}),".",Object(l.jsx)("br",{})," It is free for personal use, and I like it a lot."]}),Object(l.jsx)("br",{}),Object(l.jsxs)("p",{children:["My siblings are also very creative people with their own websites.",Object(l.jsx)("br",{}),Object(l.jsx)(y,{link:"https://parklauren.com",text:"Sister Park"})," | ",Object(l.jsx)(y,{link:"https://ttttt.xyz",text:"Brother Park"})]})]})]})})},L=(a(66),function(e){var t=e.render;return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{link:"/renders",showHome:"true"}),Object(l.jsxs)("div",{className:"render-page-title",children:[Object(l.jsxs)("h1",{children:[Object(l.jsx)("span",{className:"text-red",children:t.name})," (",t.year,")"]}),t.description]}),Object(l.jsx)("div",{className:"render-page-images",children:t.images.map((function(e,a){return Object(l.jsx)(w,{className:"render-image",src:t.projPath+"/"+e,alt:t.projPath+"/"+e},a)}))}),t.credits]})})}),J=function(){return Object(l.jsx)("div",{className:"centered-div",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{}),Object(l.jsx)("h1",{children:"UNDER CONSTRUCTION!"}),Object(l.jsx)("p",{className:"p2",children:"Come back later? Maybe?"})]})})};var W=function(){return Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"background",style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("p",{id:"version-text",children:"ver 0.5.1"}),Object(l.jsxs)(c.c,{children:[Object(l.jsx)(c.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(c.a,{path:"/games/test",children:Object(l.jsx)(I,{})}),Object(l.jsx)(c.a,{path:"/games",children:function(){var e,t=window.location.pathname;return"/games"===t?Object(l.jsx)(D,{}):(T.forEach((function(a){t==="/games"+a.link&&(e=a)})),e?Object(l.jsx)(I,{game:e}):Object(l.jsx)(J,{}))}}),Object(l.jsx)(c.a,{path:"/renders",children:function(){var e,t=window.location.pathname;return"/renders"===t?Object(l.jsx)(B,{}):(S.forEach((function(a){t==="/renders"+a.link&&(e=a)})),e?Object(l.jsx)(L,{render:e}):Object(l.jsx)(J,{}))}}),Object(l.jsx)(c.a,{path:"/about",children:Object(l.jsx)(H,{})}),Object(l.jsx)(c.a,{path:"/timeline",children:Object(l.jsx)(G,{})}),Object(l.jsx)(c.a,{path:"/site-info",children:Object(l.jsx)(F,{})}),Object(l.jsx)(c.a,{children:Object(l.jsx)(J,{})})]})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(W,{})}),document.getElementById("root")),U()}},[[67,1,2]]]);
//# sourceMappingURL=main.6215aa5a.chunk.js.map