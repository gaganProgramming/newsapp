import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
    articles =  [
        {
          "source": {
            "id": null,
            "name": "KIRO Seattle"
          },
          "author": "KIRO 7 News Staff",
          "title": "15-year-old boy to remain in custody after deaths of 5 people in Fall City home - KIRO Seattle",
          "description": "A teenage girl who survived is at the hospital.",
          "url": "https://www.kiro7.com/news/local/investigation-underway-after-shooting-fall-city-early-monday-morning/GLHVVGPDCNCIDIROZYP2Q53GNM/",
          "urlToImage": "https://cmg-cmg-tv-10090-prod.cdn.arcpublishing.com/resizer/ts8NAsJ33YX91I-JO6Xs3AVNh6M=/1440x810/filters:format(jpg):quality(70)/d1hfln2sfez66z.cloudfront.net/10-22-2024/t_4d118adac4c148018fc9ca7f6139c330_name_Headlines2__Fall_City_frame_504.jpeg",
          "publishedAt": "2024-10-23T00:20:00Z",
          "content": "FALL CITY, Wash. — A 15-year-old boy was taken into custody after a domestic violence incident resulted in five people killed inside a Fall City home, according to the King County Sheriffs Office.\r\nO… [+5060 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Brie Stimson",
          "title": "Country star Zach Bryan apologizes to 'anyone I let down' as he announces split from girlfriend - Fox News",
          "description": "Country star Zach Bryan confirmed to fans on social media Tuesday that he and social media influencer, Brianna \"Chickenfry\" LaPaglia, have broken up, apologizing to anyone he \"let down.\"",
          "url": "https://www.foxnews.com/entertainment/country-star-zach-bryan-apologizes-anyone-i-let-down-he-announces-split-from-girlfriend",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/10/zach-bryan-brianna-chickenfry.jpg",
          "publishedAt": "2024-10-22T23:48:00Z",
          "content": "Zach Bryan took responsibility for not being \"perfect\" in his relationship with his now-ex Brianna \"Chickenfry\" LaPaglia after confirming on Tuesday that they had broken up. \r\n\"Brianna and me have br… [+4122 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Reuters",
          "title": "JPMorgan chief Dimon would consider a role in Harris administration, NYT reports - Yahoo Finance",
          "description": "Dimon is not making his stance known publicly for fear of retribution should Donald Trump, the Republican presidential candidate, win, according to the...",
          "url": "https://finance.yahoo.com/news/jpmorgan-chief-dimon-consider-role-154349436.html",
          "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/1f3e2600b3bc48b8f24351ade3f7cec3",
          "publishedAt": "2024-10-22T23:46:17Z",
          "content": "(Reuters) -JPMorgan Chase CEO Jamie Dimon would consider a government role, perhaps that of the Treasury Secretary, if Democratic Vice President Kamala Harris wins the U.S. presidential election, the… [+1632 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Florida Today"
          },
          "author": "Brooke Edwards",
          "title": "Live updates: SpaceX launch from Cape Canaveral today will tie record - Florida Today",
          "description": "SpaceX will launch a Starlink mission this evening. Will today be the day we see the Space Coast tie last year's launch rate?",
          "url": "https://www.floridatoday.com/story/tech/science/space/spacex/2024/10/22/spacex-launch-rocket-launch-from-cape-canaveral-today-falcon-9-starlink-fairing-booster-meet-record/75782012007/",
          "urlToImage": "https://www.floridatoday.com/gcdn/authoring/authoring-images/2024/10/19/PBRE/75742368007-starlink-819-mission-39.JPG?crop=4469,2515,x0,y480&width=3200&height=1801&format=pjpg&auto=webp",
          "publishedAt": "2024-10-22T23:20:12Z",
          "content": "Cape Canaveral have to wait to see a rocket launch. SpaceX will try again on Wednesday to launch a Falcon 9 rocket one which will tie the record number of launches on the Space Coast set last year. W… [+3542 chars]"
        },
        {
          "source": {
            "id": "espn",
            "name": "ESPN"
          },
          "author": "ESPN",
          "title": "NBA Opening Night live: Celtics-Knicks; Timberwolves-Lakers - ESPN",
          "description": "The 2024-25 NBA season is here! Follow live as the Boston Celtics host the New York Knicks, and the Minnesota Timberwolves at the Los Angeles Lakers.",
          "url": "https://www.espn.com/nba/story/_/id/41927195/nba-2024-season-opening-night-live-updates-celtics-knicks-timberwolves-lakers",
          "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1023%2Fr1404396_1296x729_16%2D9.jpg",
          "publishedAt": "2024-10-22T23:06:26Z",
          "content": "Oct 22, 2024, 08:29 PM ET\r\nThe 2024-25 NBA season begins Tuesday! Two blockbuster games -- one with the NBA champions and the other featuring future Hall of Famer LeBron James -- get things goings be… [+845 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Sports Illustrated"
          },
          "author": "Patrick Andres",
          "title": "Andy Dalton Being Evaluated by Panthers Medical Staff After Car Accident in Charlotte - Sports Illustrated",
          "description": "The Carolina quarterback was not transported by emergency medical personnel.",
          "url": "https://www.si.com/nfl/andy-dalton-panthers-medical-car-accident",
          "urlToImage": "https://images2.minutemediacdn.com/image/upload/c_crop,w_3242,h_1823,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jav5ze62mhjt2rbced.jpg",
          "publishedAt": "2024-10-22T22:58:20Z",
          "content": "Carolina Panthers quarterback Andy Dalton and his family were in a car accident Tuesday in Charlotte, the Panthers announced in a social media post Tuesday afternoon.\r\n\"Neither Dalton nor his family … [+1078 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Eonline.com"
          },
          "author": null,
          "title": "Pro Athlete Allegedly Stopped Sean \"Diddy\" Combs From Sexually Assaulting Party Guest - E! Online - E! NEWS",
          "description": "Sean \"Diddy\" Combs is facing a civil lawsuit from a male party guest, who alleged the rapper sexually assaulted him at a 2022 party before a professional athlete intervened.",
          "url": "https://www.eonline.com/news/1408987/pro-athlete-allegedly-stopped-sean-diddy-combs-from-sexually-assaulting-party-guest",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2024820/cr_1200x1200-240920063729-GettyImages-674353488.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2024-10-22T22:02:00Z",
          "content": "After Combs was arrested based on the sealed indictment, the indictment was unsealed on Sept. 17.\r\nThe 54-year-old was charged with racketeering conspiracy; sex trafficking by force, fraud or coercio… [+1001 chars]"
        },
        {
          "source": {
            "id": "cbs-news",
            "name": "CBS News"
          },
          "author": "Graham Kates",
          "title": "Georgia Supreme Court won't step in to reinstate controversial election rules - CBS News",
          "description": "The rules passed by the Georgia State Election Board included one that would require ballots be hand-counted.",
          "url": "https://www.cbsnews.com/news/georgia-supreme-court-wont-reinstate-controversial-rules-before-election-day/",
          "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/10/22/1999fcae-28ac-40ef-b09c-d53492d63066/thumbnail/1200x630/a6c0ab1af1658624d101d7ded33a71d2/gettyimages-2153452562.jpg?v=b241b87adbbb7f0a227ed35b96d0cefa",
          "publishedAt": "2024-10-22T21:53:00Z",
          "content": "Georgia's Supreme Court rejected a Republican-led effort to implement more than half a dozen controversial new election rules before Election Day.\r\nIn a brief order issued Tuesday, the court declined… [+1819 chars]"
        },
        {
          "source": {
            "id": "the-hill",
            "name": "The Hill"
          },
          "author": "Alejandra O'Connell-Domenech",
          "title": "New stroke guidelines include risk factors specifically for women - The Hill",
          "description": "Stroke guidelines now include risks that are unique to women.   The American Stroke Association, a division of the American Heart Association, released new stroke prevention guidelines this week for the first time in a decade. The focus of the guidelines is t…",
          "url": "https://thehill.com/policy/healthcare/4947663-new-stroke-guidelines-risks-women/",
          "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/04/CA_stethoscope_11172022istock-e1729633744659.jpg?w=1280",
          "publishedAt": "2024-10-22T21:51:00Z",
          "content": "Skip to content\r\nStroke guidelines now include risks that are unique to women.  \r\nThe American Stroke Association, a division of the American Heart Association, released new stroke prevention guideli… [+1955 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Ahjané Forbes",
          "title": "Woman stuck upside-down between boulders for 7 hours finally freed by rescue crew - USA TODAY",
          "description": "A woman was stuck for several hours upside down in Australia after trying to reach for her lost phone.",
          "url": "https://www.usatoday.com/story/news/world/2024/10/22/woman-stuck-between-boulders/75796799007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/22/USAT/75798905007-stuck.jpg?crop=1534,862,x0,y851&width=1534&height=862&format=pjpg&auto=webp",
          "publishedAt": "2024-10-22T21:47:09Z",
          "content": "We have all gotten our phone stuck in between some tough places, but one woman in Australia has quite the story to tell.  \r\nEarlier this month, a woman found herself wedged between two boulders while… [+2001 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "THE ASSOCIATED PRESS",
          "title": "Flying air taxis move closer to US takeoff with issuing of FAA rule - The Associated Press",
          "description": "Federal regulators are giving a strong push to electric-powered air taxis by issuing a final rule for operating the aircraft and how pilots will be trained to fly them. The head of the Federal Aviation Administration, Mike Whitaker, said Tuesday that the rule…",
          "url": "https://apnews.com/article/faa-air-taxis-regulation-electric-aviation-85fd3c8b905a003eff64590afb5da339",
          "urlToImage": "https://dims.apnews.com/dims4/default/db40ca3/2147483647/strip/true/crop/1998x1124+0+104/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F21%2F60%2F30ea6a33f223fb378450ae0f7b6f%2F6cc26c43be10430db40935d325c64438",
          "publishedAt": "2024-10-22T21:43:00Z",
          "content": "Federal regulators gave a strong push to electric-powered air taxis Tuesday by issuing a final rule for operating the aircraft and how pilots will be trained to fly them.\r\nThe head of the Federal Avi… [+1663 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "HuffPost"
          },
          "author": "Marie Holmes",
          "title": "‘Walking Pneumonia’ Is On The Rise. Here’s What To Know. - HuffPost",
          "description": "This infectious respiratory illness is on the rise, especially among children. Here's what parents need to know.",
          "url": "https://www.huffpost.com/entry/parents-kids-walking-pneumonia_l_6717f7c2e4b0f3057ef776ba",
          "urlToImage": "https://img.huffingtonpost.com/asset/6573384b240000540076a1e7.jpeg?cache=F8NEqqPMp8&ops=1200_630",
          "publishedAt": "2024-10-22T21:18:08Z",
          "content": "Mycoplasma can infect a person's lungs, causing pneumonia. \r\nInfections of mycoplasma pneumoniae, also known as walking pneumonia, are on the rise in the United States, particularly among children, a… [+5894 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": null,
          "title": "Fantasy football waiver wire, Week 8 picks: Players to add, top targets include Tua Tagovailoa, Hunter Henry - CBS Sports",
          "description": "SportsLine NFL expert R.J. White reveals his top Week 8 Fantasy football waiver wire claims and free-agency additions",
          "url": "https://www.cbssports.com/fantasy/football/news/fantasy-football-waiver-wire-week-8-picks-players-to-add-top-targets-include-tua-tagovailoa-hunter-henry/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/18/63f41160-2d82-4e40-b64c-f80b10ed660d/thumbnail/1200x675/14584bfb9cbf20fc956354aee5e34150/tua-tagovailoa-dolphins.jpg",
          "publishedAt": "2024-10-22T21:08:06Z",
          "content": "Working the Fantasy football waiver wire effectively is a must during an injury-riddle Fantasy football season, and 2024 has been one of the worst in recent memory. Commanders quarterback Jayden Dani… [+3558 chars]"
        },
        {
          "source": {
            "id": "ars-technica",
            "name": "Ars Technica"
          },
          "author": "Samuel Axon",
          "title": "Anthropic publicly releases AI tool that can take over the user’s mouse cursor - Ars Technica",
          "description": "Anthropic is one of the first to go beyond just screen vision.",
          "url": "https://arstechnica.com/ai/2024/10/anthropic-publicly-releases-ai-tool-that-can-take-over-the-users-mouse-cursor/",
          "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/10/Screenshot-2024-10-22-at-3.44.28 PM.png",
          "publishedAt": "2024-10-22T21:06:48Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Giuliani ordered to turn over NYC apartment to Georgia election workers - BBC.com",
          "description": "He has a week to also hand over watches and sports memorabilia to two election Georgia workers who successfully sued him for defamation.",
          "url": "https://www.bbc.com/news/articles/cly3y501zxvo",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8851/live/fd765b40-90b4-11ef-974b-e3ff711ae650.jpg",
          "publishedAt": "2024-10-22T21:01:38Z",
          "content": "A judge has ordered Rudy Giuliani to turn over his Manhattan apartment and other valuables to two Georgia election workers as part of a defamation lawsuit. \r\nLast year, the two election workers - Rub… [+2103 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "POLITICO.eu"
          },
          "author": "Emilio Casalicchio",
          "title": "Donald Trump files legal complaint against UK Labour Party over help for Kamala Harris - POLITICO Europe",
          "description": "Almost 100 Labour Party aides have traveled across the Atlantic to campaign for the US Democrats.",
          "url": "https://www.politico.eu/article/donald-trump-legal-complaint-uk-labour-party-kamala-harris-us-election/",
          "urlToImage": "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2024/10/22/GettyImages-2180104912-scaled.jpg",
          "publishedAt": "2024-10-22T20:50:44Z",
          "content": "But the Trump campaign questioned those sums in its formal letter to the Federal Election Commission, arguing the LinkedIn post suggested Labour could be stumping up costs for the activists. \r\n“Those… [+1303 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Amelia Lucas",
          "title": "Starbucks shares slide after preliminary results show sales fell again - CNBC",
          "description": "The company's same-store sales slid for its third consecutive quarter, fueled by a 10% tumble in traffic to its North American stores.",
          "url": "https://www.cnbc.com/2024/10/22/starbucks-shares-slide-after-preliminary-results-show-sales-fell-again.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107327153-16988611952022-02-16t193651z_627197629_rc24ls91q0ar_rtrmadp_0_usa-business.jpeg?v=1698961064&w=1920&h=1080",
          "publishedAt": "2024-10-22T20:11:02Z",
          "content": "Starbucks cups are pictured on a counter in Manhattan, New York, on Feb. 16, 2022.\r\nStarbucks on Tuesday posted preliminary quarterly results that showed its sales fell again as the coffee chain trie… [+4128 chars]"
        },
        {
          "source": {
            "id": "axios",
            "name": "Axios"
          },
          "author": "Erin Doherty",
          "title": "Joe Rogan to interview Trump on his podcast - Axios",
          "description": "It comes as Trump is trying to court young male voters.",
          "url": "https://www.axios.com/2024/10/22/trump-joe-rogan-podcast-2024-republicans",
          "urlToImage": "https://images.axios.com/VzisptGtWb_oHUC5PkN71wrEE4g=/0x0:6000x3375/1366x768/2024/10/22/1729619536487.jpg",
          "publishedAt": "2024-10-22T20:03:45Z",
          "content": "Former President Trump plans to tape an interview on Friday with Joe Rogan for his podcast, which has the biggest audience of any podcast in the U.S., according to a person familiar with the plans. \r… [+881 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Space.com"
          },
          "author": "Brett Tingley",
          "title": "See the 'comet of the century' light up the night sky in breathtaking photos - Space.com",
          "description": "Comet A3 Tsuchinshan-ATLAS proved to be photogenic as it lit up the early autumn skies of the Northern Hemisphere this month.",
          "url": "https://www.space.com/comet-c2023-a3-tsuchinshan-atlas-photos",
          "urlToImage": "https://cdn.mos.cms.futurecdn.net/D3s6F6XC7TXAKEBXqVViSU-1200-80.jpg",
          "publishedAt": "2024-10-22T20:00:18Z",
          "content": "Comet C/2023 A3 (Tsuchinshan-ATLAS) has not disappointed photographers.\r\nThe photogenic comet is currently speeding away from Earth but is still visible in the Northern Hemisphere night sky for anoth… [+6746 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "NICHOLAS RICCARDI",
          "title": "More Republicans are voting early, helping break records. Over 17 million ballots cast so far - The Associated Press",
          "description": "With Donald Trump's encouragement, Republicans are joining Democrats at the polls to cast their ballots early this year. The surge of GOP voters has helped break records for early voting in certain swing states such as Georgia and Nevada. Nearly 19 million ea…",
          "url": "https://apnews.com/article/early-vote-records-trump-harris-1c219d0d27d56996388f2e2be5a58fac",
          "urlToImage": "https://dims.apnews.com/dims4/default/6f7bda1/2147483647/strip/true/crop/4500x2531+0+292/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc2%2F76%2Fa61a109982c8b797d177440ed734%2Fc43fdf6e5f134e20bf647ae5944a459e",
          "publishedAt": "2024-10-22T19:41:00Z",
          "content": "With former President Donald Trumps encouragement, Republicans are voting early again, flocking to the polls for in-person voting ahead of Election Day and helping push the national number to nearly … [+5430 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello Iam a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

        async componentDidMount(){
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=75b122ebba6b4032b7e81a7d87b72d89";
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})

    }
    
    
  render() {
    return (
      <div className = "container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
         return  <div className="col-md-4" key ={element.url}>
         <NewsItem title= {element.title?element.title:""} description =  {element.description?element.description:""} imageUrl =  {element.urlToImage} newsUrl ={element.url}/>
       </div>
        })}
        </div>
      </div>
    )
  }
}

export default News
