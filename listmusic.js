const allMusic = [
  {
    name: "Nha - ký ức trốn đi",
    Artist: "Nha",
    img: "./image/hinh13.jpg",
    music: "./music/FILE_20220726_140010_NHA - Ký ức trốn đi.m4a",
  },
  {
    name: "Lofi by tama(Dĩ vãng nhạt nhòa)",
    Artist: "Lofi By tama",
    img: "./image/maxresdefault (1).jpg",
    music:
      "./music/FILE_20220726_140141_Lúc đắm đuối anh cho rằng tình ta như ánh trăng rằm - Lofi By Tama ( Dĩ Vãng Nhạt Nhoà ).m4a",
  },
  {
    name: "You are the reason",
    Artist: "Calum scott",
    img: "./image/maxresdefault (2).jpg ",
    music:
      "./music/FILE_20220726_140214_You+Are+The+Reason_Calum+Scott_1553969776.mp3",
  },
  {
    name: "Wolves",
    Artist: "Sundial",
    img: "./image/maxresdefault (3).jpg",
    music: "./music/FILE_20220726_140310_Wolves_Sundial_1554355317.mp3",
  },
  {
    name: "with you",
    Artist: "Tyler Shaw",
    img: "./image/maxresdefault (4).jpg",
    music: "./music/FILE_20220726_140332_With+You_Tyler+Shaw_1556065396.mp3",
  },
  {
    name: "Unbreak my  heart ",
    Artist: "Toni - Braxton",
    img: " ./image/maxresdefault (5).jpg",
    music:
      "./music/FILE_20220726_140358_Unbreak+My+Heart_Toni+Braxton_1553969529.mp3",
  },
  {
    name: "Older",
    Artist: "Sasha sloan",
    img: "./image/maxresdefault (6).jpg",
    music: "./music/FILE_20220726_140654_Older_Sasha+Sloan_1553969905.mp3",
  },
  {
    name: "Like I'm gonna lose you",
    Artist: "Meghan Trainor",
    img: "./image/maxresdefault (7).jpg ",
    music: "./music/Like I_m Gonna Lose You - Meghan Trainor.mp3",
  },
  {
    name: "just give me a reason",
    Artist: "pink - nate ruess",
    img: "./image/maxresdefault (8).jpg ",
    music: "./music/Just Give Me A Reason - Pink_ Nate Ruess.mp3",
  },

  {
    name: "I will always love you",
    Artist: "Whitney houston",
    img: "./image/maxresdefault.jpg",
    music:
      "./music/FILE_20220726_140825_I+Will+Always+Love+You_Whitney+Houston_1553969574.mp3",
  },
  {
    name: "imagine",
    Artist: "john Lennon",
    img: "./image/S21PS_HUGO_LP_Look2_002_rgb.jpg",
    music: "./music/FILE_20220726_140850_Imagine_John+Lennon_1553970067.mp3",
  },
  {
    name: "Dancing with your gost ",
    Artist: "sasha alex",
    img: "./image/himh1.jpg",
    music:
      "./music/FILE_20220726_143859_Sasha-Alex-Sloan-Dancing-With-Your-Ghost-_Lyric-Video_.m4a-_1_.mp3",
  },

  {
    name: "Hẹn ước từ hư vô",
    Artist: "Mỹ Tâm",
    img: "./image/hinh4.jpg",
    music:
      "./music/FILE_20220802_084631_MỸ TÂM - HẸN ƯỚC TỪ HƯ VÔ (LIVE) _ MY SOUL 1981.m4a.mp3",
  },
  {
    name: "Sau này gặp lại nhau khi hoa nở",
    Artist: "Nguyên Hà",
    img: "./image/hinh5.jpg",
    music:
      "./music/FILE_20220802_084631_NGUYÊN HÀ - SAU NÀY HÃY GẶP LẠI NHAU KHI HOA NỞ _ OFFICIAL MUSIC VIDEO.m4a.mp3",
  },
  {
    name: "Tình Đầu",
    Artist: "Tăng Duy Tân",
    img: "./image/hinh6.jpg",
    music:
      "./music/FILE_20220802_084631_TÌNH ĐẦU - Tăng Duy Tân _ Official Music Video.m4a.mp3",
  },
  {
    name: "3017 album 1 2 3 4",
    Artist: "ft.Titie, Nâu, Dương,Erik",
    img: "./image/hinh9.jpg",
    music:
      "./music/FILE_20220802_084631_W_n - 3107 album 1 2 3 4 _ ft. Titie, Nâu, Duongg, Erik.m4a.mp3",
  },
  {
    name: "Ngày Mai Em Sẽ Thành Ký ức",
    Artist: "Bùi Lan Hương",
    img: "./image/hinh12.jpg",
    music:
      "./music/FILE_20220802_084632_NGÀY MAI EM SẼ THÀNH KÝ ỨC _ OFFICIAL MUSIC VIDEO _ BÙI LAN HƯƠNG.webm.mp3",
  },

  {
    name: "Tội Tình - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh7.jpg",
    music:
      "./music/FILE_20220802_084631_Tội Tình - (Lofi Ver.) _ Đạt Long Vinh x Bolero Lofi ~ Anh mang tội si mê nên đường yêu lạc nẻo về...m4a.mp3",
  },
  {
    name: "Vùng lá me bay - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh8.jpg",
    music:
      "/music/FILE_20220802_084631_Vùng Lá Me Bay - (Lofi Ver.) _ Đạt Long Vinh ~ Nhìn lá me bay nhớ kỷ niệm hai chúng mình....m4a.mp3",
  },

  {
    name: "Giã Từ - (lofi ver) ",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh10.jpg",
    music:
      "./music/FILE_20220802_084632_Giã Từ - (Lofi Ver.) _ Đạt Long Vinh ~ Người về lên xe hoa kỷ niệm buồn vào hồn.m4a.mp3",
  },
  {
    name: "Hoa Trinh Nữ - (lofi ver)",
    Artist: "Đạt long Vinh X Bolero",
    img: "./image/hinh11.jpg",
    music:
      "./music/FILE_20220802_084632_Hoa Trinh Nữ - (Lofi Ver.) ~ Tôi Không Phải Là Vua Nên Mộng Ước Thật Bình Thường _ _ Nhạc Lofi 2022.m4a.mp3",
  },
  {
    name: "yêu em dài lâu, mùa xuân đầu... ",
    Artist: "Mai bích trâm-cover",
    img: "./image/hinh2.jpg",
    music:
      "./music/FILE_20220802_084631_[Lyrics] Nhạc Chill _ Mai Bích Trân _ Yêu Em Dài Lâu, Mùa Xuân Đầu Tiên, Anh Cho Em Mùa Xuân,....m4a.mp3",
  },
  {
    name: " Biển tình, mộng chiều xuân...",
    Artist: "Mai bích trâm-cover",
    img: "./image/hinh3.jpg",
    music:
      "./music/FILE_20220802_084631_Biển tình • Mộng chiều xuân • Ai cho em mùa xuân • Mai Bích Trân - cover (lyrics).m4a.mp3",
  },
];
