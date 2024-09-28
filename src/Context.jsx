import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const homeSliderData = [
  {
    id: 0,
    name: "İki Deli Bir Araya Gelmemeliydik...",
    description:
      "Zamanla kendi kimliğinden uzaklaşıp Joker kimliğine bürünen Arthur Fleck’in hayatına odaklanılan Joker filminin devam halkası olan Joker: Folie à Deux’da, Joker karakterine bir kez daha Joaquin Phoeni...",
    hour: "1 sa 40 dk",
    image: "/Images/JOKER_Paribu_422x584_01.jpg",
    secondImage: "/Images/JOKER_Paribu_700x296_01.jpg",
    backgroundImage: "/Images/JOKER_Paribu_1920x900.jpg",
  },
  {
    id: 1,
    name: "Optimus Prime ile Megatron'un Dostluk Anıları...",
    description:
      "Film, birbirinin en büyük düşmanı olan Optimus Prime ile Megatron'un yakın arkadaş olduğu orijin hikâyesini anlatıyor...",
    hour: "1 sa 42dk",
    image: "/Images/trtansformers422.jpeg",
    secondImage: "/Images/transformers700_2.jpeg",
    backgroundImage: "/Images/transfor.jpeg",
  },
  {
    id: 2,
    name: "Denizaltı Ekibinin Küresel Macerası!",
    description: "...",
    hour: "1 sa 39 dk",
    image: "/Images/harika_kanatlar_afis.jpg",
    secondImage: "/Images/harika_kanatlar700.jpg",
    backgroundImage: "/Images/harika_kanatlar_900.jpg",
  },
  {
    id: 3,
    name: "BTS'in Golden Çocuğu!",
    description:
      "Film, BTS ile yakaladığı başarıyı solo çalışmalarıyla da sürdüren Jung Kook'un daha önce yayınlanmamış röportajları ile konser performanslarını bir araya getiriyor....",
    hour: "1 sa 12 dk",
    image: "/Images/422x584px_ll.jpg",
    secondImage: "/Images/700x296px_lll.jpg",
    backgroundImage: "/Images/1920x900pxl_.jpg",
  },
  {
    id: 4,
    name: "Dedemin Gözyaşlarını Kim Silecek..?",
    description:
      "Film, lösemiyle mücadele eden torunu Mustafa'yı büyüten Kemal ile torununun hikâyesini anlatıyor....",
    image: "/Images/DG_422x584px.jpg",
    secondImage: "/Images/DG_700x296px.jpg",
    backgroundImage: "/Images/dg1920x900px.jpg",
  },
  {
    id: 5,
    name: "Hükümet Bey!",
    description:
      "Film, yönetmen Mehmet'in hayalini kurduğu korku filmini çekmek için gittiği Urfa'da tanıştığı Hükümet Bey'in hikâyesini anlatıyor....",
    hour: "1 sa 41 dk",
    image: "/Images/hukumet422.jpg",
    secondImage: "/Images/hukumet700.jpg",
    backgroundImage: "/Images/hukumet_bey900.jpg",
  },
];
const companyData = [
  {
    id: 1,
    name: "Güvenlik Güçlerimize Özel İndirimler Paribu Cineverse'te!",
    plot: "Güvenlik Güçlerimize Özel İndirimler Paribu Cineverse'te!",
    date: "30 Eylül 2024",
    image: "https://www.paribucineverse.com/Files/KAMU1720x480.jpg",
  },
  {
    id: 2,
    name: "Paribu Cineverse Büfelerinde Film Arasında %25 İndirim!",
    plot: "Paribu Cineverse Büfelerinde Film Arasında %25 İndirim!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/_ST1720x480px_ist.jpg",
  },
  {
    id: 3,
    name: "Yoksa Sen Hala AcaVIP Üye Değil Misin?",
    plot: "Paribu Cineverse’te AcaVIP Güzel Dönem Başladı!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/team1720x480.jpg",
  },
  {
    id: 4,
    name: "Online Bilet Alımlarına Özel Mısır Menülerinde İndirimler Seni Bekliyor!",
    plot: "Online Bilet Alımlarına Özel Mısır Menülerinde İndirimler Seni Bekliyor!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/SAG841x414_ssss.jpg",
  },
  {
    id: 5,
    name: "Siz Bitti Demeden Mısır Bitmez!",
    plot: "Hesabını Bilen Sinemasever Film Arasında Mısırını Uygun Fiyata Doldurur!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/CF1720x480px_c.jpg",
  },
  {
    id: 6,
    name: "İletişim İznini Ver, CGV Cinema Club Ayrıcalıklarını Keşfet!",
    plot: "İletişim İznini Ver, CGV Cinema Club Ayrıcalıklarını Keşfet!",
    date: "31 Ocak 2025",
    image:
      "https://www.paribucineverse.com/Files/CPUYEL_K-HESAP-KONTROL-1720x480.jpg",
  },
];
const SecondCompanyData = [
  {
    id: 1,
    name: "Güvenlik Güçlerimize Özel İndirimler Paribu Cineverse'te!",
    plot: "Güvenlik Güçlerimize Özel İndirimler Paribu Cineverse'te!",
    date: "30 Eylül 2024",
    image: "https://www.paribucineverse.com/Files/KAMU841x414.jpg",
    largeImage: "https://www.paribucineverse.com/Files/KAMU1720x480.jpg",
    kosullar: [
      "Kampanya 1 Eylül - 30 Eylül tarihleri arasında geçerlidir.",
      "Kampanya sadece 2D ve 3D formatlarda geçerlidir",
      "Kampanyadan sadece Paribu Cineverse gişelerinden mesleki kimlik ibrazı yapılarak yararlanılabilir.",
      "Paribu Cineverse web sitesi, mobil uygulaması ve kiosklarından alınan bilet ve menülerde geçerli değildir.",
      "Mısır menülerinde içecekler lokasyon bazlı değişiklik göstermektedir.",
      "CGV Mars Cinema Group kampanyada değişiklik yapma hakkını saklı tutar.",
    ],
  },
  {
    id: 2,
    name: "Paribu Cineverse Büfelerinde Film Arasında %25 İndirim!",
    plot: "Paribu Cineverse Büfelerinde Film Arasında %25 İndirim!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/841x414px_ist.jpg",
    largeImage: "https://www.paribucineverse.com/Files/_ST1720x480px_ist.jpg",
    kosullar: [
      "Bu hediyelerin kodları kazanan kişilere Instagram direkt mesaj DM (Direct Message) yoluyla iletilecektir.",
      "Katılımcıların 2 arkadaşını etiketleyerek gönderinin altında yorum olarak paylaşmaları gerekmektedir.",
      " Son katılım tarihleri aşağıdaki şekildedir;",
      "Eylül 2024 tarihli çekiliş için 10 Eylül 2024 günü saat 23.59,",
      "Kazanılan kodlar Paribu Cineverse MarkAntalya hariç tüm Paribu Cineverse’lerde kullanılabilecektir.",
      " Yarışmaya 18 yaşından küçükler katılamaz, katılmış olsalar dahi ödülleri teslim edilmez.",
    ],
  },
  {
    id: 3,
    name: "Yoksa Sen Hala AcaVIP Üye Değil Misin?",
    plot: "Paribu Cineverse’te AcaVIP Güzel Dönem Başladı!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/team841x414px_tp.jpg",
    largeImage: "https://www.paribucineverse.com/Files/team1720x480.jpg",
    kosullar: [
      "Kampanya 2 Ağustos - 30 Eylül tarihleri arasında geçerlidir.",
      "Kampanya tüm Paribu Cineverse lokasyonlarında geçerlidir.",
      "Kampanya sadece 2D ve 3D formatlarda geçerlidir.",
      "Kampanyadan sadece Paribu Cineverse gişelerinden sağlık çalışanı kartı ibrazı yapılarak yararlanılabilir.",
      "Paribu Cineverse web sitesi, mobil uygulaması ve kiosklarından alınan bilet ve menülerde geçerli değildir.",
      "Mısır menülerinde içecekler lokasyon bazlı değişiklik göstermektedir.",
    ],
  },
  {
    id: 4,
    name: "Online Bilet Alımlarına Özel Mısır Menülerinde İndirimler Seni Bekliyor!",
    plot: "Online Bilet Alımlarına Özel Mısır Menülerinde İndirimler Seni Bekliyor!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/SAG841x414_ssss.jpg",
    largeImage: "https://www.paribucineverse.com/Files/SAG1720x480px_sw.jpg",
    kosullar: [
      " Kampanya 24 Temmuz - 30 Eylül 2024 tarihleri arasında geçerlidir.",
      "Kampanya sadece İstanbul'daki Paribu Cineverse lokasyonlarında geçerlidir.",
      "Kazanılan ödül başarılı işlemin ertesi günü işlemin yapıldığı İstanbulkart’a talimat olarak yatırılacaktır.",
      "Kullanıcılar kampanyadan bir gün içerisinde maksimum 50 TL kazanabilirler.",
      " Kazanılan ödülün nakit karşılığı talep edilemez.",
      "Yapılan ödeme işleminin gün içinde iptal edilmesi durumunda kampanyaya katılım hakkı sona erer ve kullanıcı ödüllendirilmez.",
    ],
  },
  {
    id: 5,
    name: "Siz Bitti Demeden Mısır Bitmez!",
    plot: "Hesabını Bilen Sinemasever Film Arasında Mısırını Uygun Fiyata Doldurur!",
    date: "31 Aralık 2024",
    image: "https://www.paribucineverse.com/Files/CF841x414px_c.jpg",
    largeImage: "https://www.paribucineverse.com/Files/CF1720x480px_c.jpg",
    kosullar: [
      "KKampanyaya tüm Cinefoto olan Paribu Cineverse lokasyonları dahildir.",
      "Kampanya sadece 2D ve 3D formatlarda geçerlidir",
      "Kampanyadan sadece Paribu Cineverse gişelerinden mesleki kimlik ibrazı yapılarak yararlanılabilir.",
      "Kampanyadan sadece gerçek kişiler faydalanabilir, tüzel kişiler faydalanamaz.",
      "Kampanyaya katılan herkes, kampanya şartlarını okuyup anlayarak peşinen kabul etmiş sayılır.",
      "CGV Mars Cinema Group kampanyada değişiklik yapma hakkını saklı tutar.",
    ],
  },
  {
    id: 6,
    name: "İletişim İznini Ver, CGV Cinema Club Ayrıcalıklarını Keşfet!",
    plot: "İletişim İznini Ver, CGV Cinema Club Ayrıcalıklarını Keşfet!",
    date: "31 Ocak 2025",
    image:
      "https://www.paribucineverse.com/Files/CPUYEL_K-HESAP-KONTROL-841x414.jpg",
    largeImage:
      "https://www.paribucineverse.com/Files/CPUYEL_K-HESAP-KONTROL-1720x480.jpg",
    kosullar: [
      "CGV Cinema Club hesabında biriken CGV Para'larınla gişe ve büfelerimizden alışverişini yap, sinema keyfini ikiye katla!",
      "CGV Para'larını gişe, büfe, web sitesi veya mobil uygulaması üzerinden dilediğince harcayabilirsin!",
      "Kampanyadan sadece Paribu Cineverse gişelerinden mesleki kimlik ibrazı yapılarak yararlanılabilir.",
      "CGV Para'larını hem web sitesi hem de mobil uygulaması üzerinden, CGV Cinema Club girişi yaparak ekranın sağ üst köşesinden hemen kontrol edebilirsin!",
    ],
  },
];

const giftCardData = [
  {
    id: 0,
    price: "200",
    cgvPara: "200",
    size: "Orta",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-1.jpg",
  },
  {
    id: 1,
    price: "250",
    cgvPara: "250",
    size: "Orta",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-2.jpg",
  },
  {
    id: 2,
    price: "300",
    cgvPara: "300",
    size: "BÜYÜK",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-4.jpg",
  },
  {
    id: 3,
    price: "350",
    cgvPara: "350",
    size: "BÜYÜK",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-3.jpg",
  },
  {
    id: 4,
    price: "400",
    cgvPara: "400",
    size: "BÜYÜK ",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-5.jpg",
  },
  {
    id: 5,
    price: "500",
    cgvPara: "550",
    size: "KOVA",
    image:
      "https://www.paribucineverse.com/Assets/modules/page-moviepass/img/moviepass-6.jpg",
  },
];
const cgvPassFag = [
  {
    id: 0,
    question: "CGV MoviePass paketlerini nasıl satın alabilirim?",
    answer:
      "CGV MoviePass paketlerini seçili Paribu Cineverse lokasyonları ve Paribu Cineverse web sitemiz veya mobil uygulamamız üzerinden satın alabilirsin.",
  },
  {
    id: 1,
    question:
      "CGV MoviePass fiziki kartlarını hangi lokasyonlardan alabilirim ?",
    answer:
      "CGV MoviePass fiziki kartlarını aşağıdaki lokasyonlarımızdan alabilirsin.",
  },
  {
    id: 2,
    question:
      "CGV MoviePass barkodunu satın aldıktan sonra ne kadar sürede kullanmamız gerekmektedir ?",
    answer:
      "Satın almış olduğun CGV MoviePass barkodlarını 6 ay içerisinde yüklemen/kullanman gerekmektedir.",
  },
  {
    id: 3,
    question: "CGV MoviePass paketlerini üyelik hesabıma nasıl yükleyebilirim?",
    answer:
      "CGV Para barkodlarını Paribu Cineverse gişelerinde veya Paribu Cineverse web sitesi/mobil uygulaması üzerinden CGV MoviePass Barkod Yükleme sayfasından yükleyebilirsin. Mısır hediyesi ve sürpriz hediye barkodlarını sadece Paribu Cineverse büfelerinden kullanabilirsin.",
  },
  {
    id: 4,
    question:
      "CGV MoviePass’in barkodunu yükledikten sonra ne kadar süre içerisinde kullanabilirim ?",
    answer:
      "Satın almış olduğun CGV MoviePass’in CGV Para barkodunu üyeliğine yükledikten sonra 6 ay içerisinde kullanman gerekmektedir.",
  },
  {
    id: 5,
    question:
      "CGV MoviePass paketlerini kullanmak için CGV Cinema Club üyesi olmam gerekiyor mu?",
    answer:
      "Evet! CGV MoviePass’in avantajlarından faydalanmak için CGV Cinema Club üyesi olman gerekiyor.",
  },
  {
    id: 6,
    question: "CGV MoviePass paketlerinde yükleme limiti var mıdır ?",
    answer:
      "Evet! CGV MoviePass’in günlük yükleme limiti 1200 CGV Para’dır. Eğer daha fazla miktar CGV MoviePass satın aldıysan ertesi gün yükleyebilirsin!",
  },
  {
    id: 7,
    question: "CGV MoviePass paketimi iade edebilir miyim ?",
    answer:
      "Edebilirsin. Satın aldıktan sonra 30 gün içerisinde barkodlar kazınmamış, kullanılmamış ve hesaba yüklenmemişse web sitemiz üzerinden CGV MoviePass İade İşlemleri sayfasından iade sürecini başlatabilirsin.",
  },
];
const data = [
  {
    id: 1,
    name: "Paribu Cineverse Van",
    description:
      "VAN AVM, Ferhat mah. Cumhuriyet Bulvarı Eski Belediye Garajı, No:147 İpekyolu/ Van",
    unvan: "Main St. 40A",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.294738260765!2d-99.168987!3d19.432608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3724fda045%3A0xbcbf61de15a5b882!2sCentro%20Hist%C3%B3rico%2C%20Mexico%20City!5e0!3m2!1sen!2smx!4v1685362467405!5m2!1sen!2smx",
  },
  {
    id: 2,
    name: "Paribu Cineverse Diyarbakır Ceylan",
    description: "PEYAS MAH. URFA YOLU ÜZERİ NO:130 KAYAPINAR DİYARBAKIR ",
    unvan: "2nd Ave. 15B",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.946002261115!2d-73.991078!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2584cd1b97d75%3A0x30c4b651ff2097ff!2sTimes%20Square%2C%20New%20York%2C%20USA!5e0!3m2!1sen!2sus!4v1685362467405!5m2!1sen!2sus",
  },
  {
    id: 3,
    name: "Paribu Cineverse Erzurum MNG",
    description: "LALAPAŞA MAH. SOMUNOĞLU CAD.NO:83 İÇ KAPI NO:181 YAKUTİYE",
    unvan: "Church St. 72",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.521235421348!2d1.1774904!3d48.8624828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6b5a6a3b3a9e1%3A0xdfc9b3a715131ee4!2sVersailles%2C%20France!5e0!3m2!1sen!2sfr!4v1685362467405!5m2!1sen!2sfr",
  },
  {
    id: 4,
    name: "Paribu Cineverse Piazza Samsun",
    description:
      "Çarşamba Cad. No: 52 Eski Otogar Mevkii Sanayi Sitesi Yanı / Samsun",
    unvan: "Lakeview St. 48",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.654571297093!2d-122.4083916!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2a3c8a4f9d%3A0x6ff792b5f1b21221!2sSan%20Francisco%2C%20California%2C%20USA!5e0!3m2!1sen!2sus!4v1685362467405!5m2!1sen!2sus",
  },
  {
    id: 5,
    name: "Paribu Cineverse Forum Gaziantep",
    description:
      "Yaprak Mahallesi, İstasyon Caddesi, Forum Gazıantep Alışveriş Merkezi, Şehitkamil/ Gaziantep",
    unvan: "Seaside Rd. 12",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.1460186398464!2d114.1612614!3d22.2782435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400be3f000001%3A0x4fcf60f6e4a3b4f!2sVictoria%20Harbour%2C%20Hong%20Kong!5e0!3m2!1sen!2shk!4v1685362467405!5m2!1sen!2shk",
  },
  {
    id: 6,
    name: "Paribu Cineverse Yeşilyurt",
    description:
      "YEŞİLYURT AVM ATATÜRK BUL.DENİZEVLERİ MH. NO:154-4 ATAKUM-SAMSUN",
    unvan: "Elm St. 102",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.632715218274!2d106.660283!3d10.762622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6b79a9fd77%3A0x41758c3e5c7e7b9a!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2svn!4v1685362467405!5m2!1sen!2svn",
  },
  {
    id: 7,
    name: "Paribu Cineverse Piazza Kahramanmaraş",
    description: "Şazi Bey Mah. Haydar Aliyev Bulvarı No:3 KAHRAMANMARAŞ",
    unvan: "King St. 56",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835257881029!2d144.955651!3d-37.817302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c7d7f89b%3A0x239da5a5cf758fe4!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sau!4v1685362467405!5m2!1sen!2sau",
  },
  {
    id: 8,
    name: "Paribu Cineverse Tarsu",
    description: "Çepni, Kerebi Gazi 1. Sk. No:7, 19040 Çorum Merkez/ÇORUM",
    unvan: "High St. 90",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14442.251139573955!2d73.8567444!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b87fda29dfbf%3A0x0!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1685362467405!5m2!1sen!2sin",
  },
  {
    id: 9,
    name: "Paribu Cineverse Antares AVM",
    description:
      "Antares AVM, Halil Sezai Erkut Cad. No:121, Kasalar Mevkii, Etlik/ Ankara",
    unvan: "Park St. 123",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125713.57270274294!2d72.571365!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f32f5bf44f%3A0x2d0e731d9ebfe54e!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1685362467405!5m2!1sen!2sin",
  },
  {
    id: 10,
    name: "Paribu Cineverse Cepa",
    description: "CEPA AVM ESKİŞEHİR YOLU 7. KM ODTÜ KARŞISI SÖĞÜTÖZÜ ANKARA",
    unvan: "Ocean Ave. 85",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42175.11516864165!2d77.2077035!3d28.612961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce399dbaaba3f%3A0x36b6e41678d48f26!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1685362467405!5m2!1sen!2sin",
  },
];
const api_key = "ac595eedf5d201e225490c530c3ca47d";
export const GlobalProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [videos, setVideos] = useState([]);

  const [salonlarWievData, setSalonlarWievData] = useState(data);
  const [favorites, setFavorites] = useState([]);
  const [globalPersons, setGlobalPersons] = useState(() => {
    const storedPersons = localStorage.getItem("globalPersons");
    return storedPersons ? JSON.parse(storedPersons) : [];
  });

  const [accauntPerson, setAccauntPerson] = useState(() => {
    const accauntPer = localStorage.getItem("accauntPerson");
    return accauntPer ? JSON.parse(accauntPer) : null;
  });

  const vizyonMovies =
    movieData && Array.isArray(movieData) ? movieData.slice(0, 10) : [];
  const yakindaMovies =
    movieData && Array.isArray(movieData) ? movieData.slice(10, 20) : [];

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
      );
      const data = await response.json();
      setMovieData(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const fetchVideos = async (movieId) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${api_key}&language=en-US`
      );
      const movies = await response.json();
      setVideos(movies.results);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies();
    };
    fetchData();
  }, []);

  // fetch

  const addToFavorites = (item) => {
    setFavorites((prev) => [...prev, item]);
  };
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeFromFavorites = (itemId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== itemId));
  };

  return (
    <GlobalContext.Provider
      value={{
        movieData,
        fetchVideos,
        videos,
        homeSliderData,
        vizyonMovies,
        yakindaMovies,
        SecondCompanyData,
        salonlarWievData,
        setSalonlarWievData,
        companyData,
        giftCardData,
        cgvPassFag,
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        globalPersons,
        setGlobalPersons,
        accauntPerson,
        setAccauntPerson,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
