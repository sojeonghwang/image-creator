type Url = string;

export interface SiteInterface {
  url: Url;
  _blank?: boolean;
  label: string;
  img?: string;
  color: string;
  isOverseas: boolean;
}

export const JOB_SITE_LIST: SiteInterface[] = [
  {
    url: "https://recruit.navercorp.com/rcrt/list.do?subJobCdArr=1010001%2C1010002%2C1010003%2C1010004%2C1010005%2C1010006%2C1010007%2C1010008%2C1010020%2C1020001%2C1030001%2C1030002%2C1040001%2C1050001%2C1050002%2C1060001&sysCompanyCdArr=&empTypeCdArr=&entTypeCdArr=&workAreaCdArr=&sw=&subJobCdData=1010001&subJobCdData=1010002&subJobCdData=1010003&subJobCdData=1010004&subJobCdData=1010005&subJobCdData=1010006&subJobCdData=1010007&subJobCdData=1010008&subJobCdData=1010020&subJobCdData=1020001&subJobCdData=1030001&subJobCdData=1030002&subJobCdData=1040001&subJobCdData=1050001&subJobCdData=1050002&subJobCdData=1060001",
    label: "네이버 테크",
    isOverseas: false,
    color: "#34ae38",
  },
  {
    url: "https://careers.kakao.com/jobs?skillSet=&part=TECHNOLOGY&company=KAKAO&keyword=&employeeType=&page=1",
    label: "카카오 테크",
    isOverseas: false,
    color: "#fee500",
  },
  {
    url: "https://careers.linecorp.com/ko/jobs?ca=Engineering",
    label: "라인 테크",
    isOverseas: false,
    color: "#03c100",
  },
  {
    url: "https://www.coupang.jobs/kr/jobs/?search=%EA%B0%9C%EB%B0%9C&pagesize=20#results",
    label: "쿠팡 테크",
    isOverseas: false,
    color: "#975930",
  },
  {
    url: "https://career.woowahan.com/?jobCodes=&employmentTypeCodes=&serviceSectionCodes=&careerPeriod=&keyword=&category=jobGroupCodes%3ABA005001#recruit-list",
    label: "배민 테크",
    isOverseas: false,
    color: "#08cac4",
  },
  {
    url: "https://about.daangn.com/jobs/?q=%EA%B0%9C%EB%B0%9C#_filter",
    label: "당근 테크(웹)",
    isOverseas: false,
    color: "#f96c0d",
  },
  {
    url: "https://toss.im/career/jobs?category=engineering-product&category=engineering-platform&category=engineering-product-platform&category=qa&category=engineering",
    label: "토스 채용",
    isOverseas: false,
    color: "#004cf7",
  },
  {
    url: "https://careers.yanolja.co/",
    label: "야놀자 채용",
    isOverseas: false,
    color: "#f91975",
  },
  {
    url: "https://www.moloco.com/ko/open-positions",
    label: "몰로코 채용",
    isOverseas: false,
    color: "#2b7aef",
  },
  {
    url: "https://www.dunamu.com/careers/jobs",
    label: "두나무",
    isOverseas: false,
    color: "#0452ca",
  },
  {
    url: "https://sendbird.com/ko/careers",
    label: "센드버드",
    isOverseas: false,
    color: "#7329d5",
  },
  {
    url: "https://www.bucketplace.com/careers/?region=&team=dev",
    label: "오늘의집",
    isOverseas: false,
    color: "#39d3ff",
  },
  {
    url: "https://bithumbcorp.com/ko/recruit/recruit.php",
    label: "빗썸",
    isOverseas: false,
    color: "#f76805",
  },
  {
    url: "https://talent.hyundai.com/apply/applyList.hc?nfGubnC=ac85892205b92e8cecdc87185a3fbf039f04b2a7751ccf0e8a1f547d53b9945a",
    label: "현대자동차 채용",
    isOverseas: false,
    color: "#2f5197",
  },
  {
    url: "https://recruit.cj.net/",
    label: "CJ 채용",
    isOverseas: false,
    color: "#e7141e",
  },
  {
    url: "https://career.nexon.com/user/recruit/member/postList?joinCorp=NX&jobGroupCd=&reSubj=%EA%B0%9C%EB%B0%9C",
    label: "넥슨 채용",
    isOverseas: false,
    color: "#bcd12d",
  },
  {
    url: "https://krafton.com/careers/jobs/",
    label: "크래프톤 채용",
    isOverseas: false,
    color: "#20202c",
  },
  {
    url: "https://career.hyperconnect.com/jobs?team=Engineering",
    label: "하이퍼커넥트 채용",
    isOverseas: false,
    color: "#000000",
  },
  {
    url: "https://www.google.com/about/careers/applications/jobs/results#!t=jo&jid=127025001&",
    label: "구글 채용",
    isOverseas: true,
    color: "#d2313a",
  },
  {
    url: "https://www.metacareers.com/locations/seoul/?p[offices][0]=Seoul%2C%20South%20Korea&offices[0]=Vancouver%2C%20Canada&offices[1]=Remote%2C%20Canada&offices[2]=Ottawa%2C%20Canada&offices[3]=Montreal%2C%20Canada&offices[4]=Toronto%2C%20ON&offices[5]=Huntsville%2C%20AL&offices[6]=Montgomery%2C%20AL&offices[7]=Chandler%2C%20AZ&offices[8]=Mesa%2C%20AZ&offices[9]=Burlingame%2C%20CA&offices[10]=Foster%20City%2C%20CA&offices[11]=Fremont%2C%20CA&offices[12]=Irvine%2C%20CA&offices[13]=Los%20Angeles%2C%20CA&offices[14]=Menlo%20Park%2C%20CA&offices[15]=Mountain%20View%2C%20CA&offices[16]=Newark%2C%20CA&offices[17]=Northridge%2C%20CA&offices[18]=San%20Diego%2C%20CA&offices[19]=San%20Francisco%2C%20CA&offices[20]=Santa%20Clara%2C%20CA&offices[21]=Sausalito%2C%20CA&offices[22]=Sunnyvale%2C%20CA&offices[23]=Denver%2C%20CO&offices[24]=Washington%2C%20DC&offices[25]=Miami%2C%20Florida&offices[26]=Atlanta%2C%20GA&offices[27]=Newton%20County%2C%20GA&offices[28]=Stanton%20Springs%2C%20GA&offices[29]=Kuna%2C%20ID&offices[30]=Aurora%2C%20IL&offices[31]=Chicago%2C%20IL&offices[32]=DeKalb%2C%20IL&offices[33]=Jeffersonville%2C%20IN&offices[34]=Altoona%2C%20IA&offices[35]=Polk%20County%2C%20IA&offices[36]=Boston%2C%20MA&offices[37]=Cambridge%2C%20MA&offices[38]=Detroit%2C%20MI&offices[39]=Rosemount%2C%20MN&offices[40]=Kansas%20City%2C%20MO&offices[41]=Papillion%2C%20NE&offices[42]=Sarpy%20County%2C%20NE&offices[43]=Los%20Lunas%2C%20NM&offices[44]=Valencia%2C%20NM&offices[45]=New%20York%2C%20NY&offices[46]=Durham%2C%20NC&offices[47]=Forest%20City%2C%20NC&offices[48]=New%20Albany%2C%20OH&offices[49]=Crook%20County%2C%20OR&offices[50]=Hillsboro%2C%20OR&offices[51]=Prineville%2C%20OR&offices[52]=Pittsburgh%2C%20PA&offices[53]=Gallatin%2C%20TN&offices[54]=Austin%2C%20TX&offices[55]=Fort%20Worth%2C%20TX&offices[56]=Garland%2C%20TX&offices[57]=Houston%2C%20TX&offices[58]=Temple%2C%20TX&offices[59]=Eagle%20Mountain%2C%20UT&offices[60]=Utah%20County%2C%20UT&offices[61]=Ashburn%2C%20VA&offices[62]=Henrico%2C%20VA&offices[63]=Loudoun%20County%2C%20VA&offices[64]=Reston%2C%20VA&offices[65]=Richmond%2C%20VA&offices[66]=Sandston%2C%20VA&offices[67]=Sterling%2C%20VA&offices[68]=Bellevue%2C%20WA&offices[69]=Redmond%2C%20WA&offices[70]=Seattle%2C%20WA&offices[71]=Vancouver%2C%20WA&offices[72]=Remote%2C%20US&offices[73]=Brussels%2C%20Belgium&offices[74]=Sofia%2C%20Bulgaria&offices[75]=Prague%2C%20Czech%20Republic&offices[76]=Copenhagen%2C%20Denmark&offices[77]=Odense%2C%20Denmark&offices[78]=Remote%2C%20France&offices[79]=Paris%2C%20France&offices[80]=Hamburg%2C%20Germany&offices[81]=Remote%2C%20Germany&offices[82]=Berlin%2C%20Germany&offices[83]=Dublin%2C%20Ireland&offices[84]=Remote%2C%20Ireland&offices[85]=Cork%2C%20Ireland&offices[86]=Clonee%2C%20Ireland&offices[87]=Tel%20Aviv%2C%20Israel&offices[88]=Remote%2C%20Italy&offices[89]=Milan%2C%20Italy&offices[90]=Rome%2C%20Italy&offices[91]=Nigeria%20-%20Lagos&offices[92]=Amsterdam%2C%20Netherlands&offices[93]=Remote%2C%20Netherlands&offices[94]=Oslo%2C%20Norway&offices[95]=Remote%2C%20Poland&offices[96]=Warsaw%2C%20Poland&offices[97]=Greece%2C%20Remote&offices[98]=Johannesburg%2C%20South%20Africa&offices[99]=Remote%2C%20Spain&offices[100]=Madrid%2C%20Spain&offices[101]=Lule%C3%A5%2C%20Sweden&offices[102]=Remote%2C%20Sweden&offices[103]=Stockholm%2C%20Sweden&offices[104]=Geneva%2C%20Switzerland&offices[105]=Zurich%2C%20Switzerland&offices[106]=Cambridge%2C%20UK&offices[107]=Leamington%20Spa%2C%20UK&offices[108]=London%2C%20UK&offices[109]=Remote%2C%20UK&offices[110]=Dubai%2C%20United%20Arab%20Emirates&offices[111]=Sydney%2C%20Australia&offices[112]=Melbourne%2C%20Australia&offices[113]=Shenzhen%2C%20China&offices[114]=Suzhou%2C%20China&offices[115]=Shanghai%2C%20China&offices[116]=Hong%20Kong&offices[117]=New%20Delhi%2C%20India&offices[118]=Gurgaon%2C%20India&offices[119]=Bangalore%2C%20India&offices[120]=Mumbai%2C%20India&offices[121]=Hyderabad%2C%20India&offices[122]=Jakarta%2C%20Indonesia&offices[123]=Tokyo%2C%20Japan&offices[124]=Kuala%20Lumpur%2C%20Malaysia&offices[125]=Auckland%2C%20New%20Zealand&offices[126]=Manila%2C%20Philippines&offices[127]=Singapore&offices[128]=Seoul%2C%20South%20Korea&offices[129]=Taipei%2C%20Taiwan&offices[130]=Buenos%20Aires%2C%20Argentina&offices[131]=Brasilia%2C%20Brazil&offices[132]=S%C3%A3o%20Paulo%2C%20Brazil&offices[133]=Bogot%C3%A1%2C%20Colombia&offices[134]=Mexico%20City%2C%20Mexico&sub_teams[0]=Data%20Center%20Design%2C%20Engineering%2C%20%26%20Construction&sub_teams[1]=Data%20Engineering&sub_teams[2]=Engineering&sub_teams[3]=IT&sub_teams[4]=Network%20Engineering&sub_teams[5]=Partner%20Engineering&sub_teams[6]=Production%20Engineering&sub_teams[7]=Solutions%20Engineering&sub_teams[8]=User%20Experience",
    label: "메타 채용",
    isOverseas: true,
    color: "#027bf0",
  },
  {
    url: "https://www.amazon.jobs/en/search?base_query=engineering&loc_query=&latitude=&longitude=&loc_group_id=&invalid_location=false&country=&city=&region=&county=",
    label: "AWS 채용",
    isOverseas: true,
    color: "#f2940f",
  },
  {
    url: "https://jobs.ebayinc.com/us/en/jobs-in-south-korea",
    label: "이베이 재팬(한국 지사)",
    isOverseas: false,
    color: "#68b142",
  },
];
