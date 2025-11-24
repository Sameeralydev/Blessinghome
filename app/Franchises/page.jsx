import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";

const images = [
  {
    title: "alaska",
    src: "alaska.webp",
    address: "Iqbal Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Alaska+Iqbal+town+Campus/@31.5157321,74.2848863,17z/data=!3m1!4b1!4m6!3m5!1s0x391903bb93ece755:0xe80dce718821930a!8m2!3d31.5157276!4d74.2874612!16s%2Fg%2F11rmnbfklt?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=b152f5dc-8bed-4651-bc2e-a5ec210fbe06",
    phone: "+92 300 7749597",
  },
  {
    title: "atlas",
    src: "atlas.webp",
    address: "Kot Abdul Malik, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Atlas+Kot+Abdul+Malik+Campus/@31.6233105,74.2352751,17z/data=!3m1!4b1!4m6!3m5!1s0x39191d8a015e10ff:0x7d4599d41b5bf55a!8m2!3d31.623306!4d74.23785!16s%2Fg%2F11sjfq5fvy?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=e8c8becb-02a9-4dd7-adb5-01969534d0aa",
    phone: "+92 300 0469597",
  },
  {
    title: "eiger",
    src: "eiger.webp",
    address: "Raiwind Road, Lahore",
    url: "https://www.google.com/maps/place/RILLS+Eiger+Campus/@31.4831276,74.169581,11z/data=!3m1!4b1!4m6!3m5!1s0x888fa1ba0c625b3:0xa10c62b7a82fb283!8m2!3d31.4829403!4d74.3343893!16s%2Fg%2F11yd_z2gp3?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=1b3478c7-6921-4008-a253-cdde35730bfa",
    phone: "+92 327 9870504",
  },
  {
    title: "elburs",
    src: "elburs.webp",
    address: "Johar Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+ELBRUS/@31.431956,74.2706731,17z/data=!3m1!4b1!4m6!3m5!1s0x39190100703c6c89:0xe486460df7d77e3d!8m2!3d31.4319514!4d74.273248!16s%2Fg%2F11lm_6sj2s?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=e35d58ca-c278-4173-8088-c378e3888609",
    phone: "+92 300 1709597",
  },
  {
    title: "himalaya",
    src: "himalaya.webp",
    address: "Kamoke, Gujranwala",
    url: "https://www.google.com/maps/place/RILLS+School+Himalaya+Kamoke+Campus/@31.9927417,74.1954897,14z/data=!4m6!3m5!1s0x391929db2d10cadd:0x4afeb4673c4b9bc5!8m2!3d31.9642279!4d74.2251459!16s%2Fg%2F11f64hfb91?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 0409597",
  },
  {
    title: "margalla",
    src: "margalla.webp",
    address: "Kamoke",
    url: "https://www.google.com/maps/place/RILLS+MARGALLA+CAMPUS/@31.9927025,74.2135144,17z/data=!4m6!3m5!1s0x39192bb0edb8930f:0xb23193ab9b1ee9b0!8m2!3d31.992698!4d74.2183853!16s%2Fg%2F11gnsfs_49?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 0729597",
  },
  {
    title: "pamir",
    src: "pamir.webp",
    address: "Kamoke",
    url: "https://www.google.com/maps/place/RILLS+SCHOOL+PAMIR+CAMPUS/@32.0909411,73.6390962,9z/data=!4m6!3m5!1s0x39192186ad44a5bf:0x5a39ec909249181!8m2!3d31.7909693!4d74.255312!16s%2Fg%2F11hz_3xllc?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 339 0069597",
  },
  {
    title: "monarch",
    src: "monarch.webp",
    address: "Nawab Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Monarch+Campus+-+Nawab+Town+Lahore/@31.4572447,74.2437162,17z/data=!3m1!4b1!4m6!3m5!1s0x391901f5029b99a5:0x6208414d49a28dd2!8m2!3d31.4572401!4d74.2462911!16s%2Fg%2F11lyz4rqd5?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=c356926f-4699-40c0-a16f-b9e890f311a2",
    phone: "+92 328 7111189",
  },
  {
    title: "pico",
    src: "pico.webp",
    address: "Citi Housing, Lahore",
    url: "https://www.google.com/maps/place/RILLS+Pico+Campus+-+Citi+Housing/@32.0661488,74.1803084,17z/data=!4m7!3m6!1s0x3918d500750d4f7f:0xf4d30a67bad913d0!8m2!3d32.0661866!4d74.1897086!15sChFyaWxscyBwaWNvIGNhbXB1c5IBBnNjaG9vbKoBOhABMh8QASIbj_hWdle4LlzdE28P1C1f6bvK_iy58E_ZB8kbMhUQAiIRcmlsbHMgcGljbyBjYW1wdXPgAQA!16s%2Fg%2F11vq7s2c76?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=1b0550d9-82f8-40a1-be80-f336a2de5ab2",
    phone: "+92 300 0649535",
  },
  { 
    title: "sianai",
    src: "sianai.webp",
    address: "Al- Rehamn Garden, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Sinai+Campus+Al+Rehman+Garden/@31.5997359,74.2241046,17z/data=!3m1!4b1!4m6!3m5!1s0x39191d44c4772b23:0xab14727b42a6c9e1!8m2!3d31.5997314!4d74.2266795!16s%2Fg%2F11ygg20py1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 339 0009597",
  },
  {
    title: "sierra",
    src: "sierra.webp",
    address: "Johar Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Sierra+Johar+town+Campus/@31.4575806,74.2937979,17z/data=!3m1!4b1!4m6!3m5!1s0x391901ef0101cd7f:0xe56ee2a14843a4d!8m2!3d31.4575761!4d74.2986688!16s%2Fg%2F11lmcd52s2?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=2a12aff7-97de-415a-93c8-02c689af441d",
    phone: "+92 328 1309597",
  },
  {
    title: "uhad",
    src: "uhad.webp",
    address: "Bahria Town, Lahore",
    url: "https://www.google.com/maps/place/RILLS+School+Bahria+Campus/@31.3619907,74.1935466,17z/data=!3m1!4b1!4m6!3m5!1s0x39185582c3ac2745:0x8c57a81b05ad80d8!8m2!3d31.3619861!4d74.1961215!16s%2Fg%2F11lgkt5cf0?entry=tts&g_ep=EgoyMDI1MDYxNS4wIPu8ASoASAFQAw%3D%3D&skid=465ec79e-f0c7-45e5-bde0-7e099fc67e95",
    phone: "+92 300 6899597",
  },
  {
    title: "pearl",
    src: "uhad.webp",
    address: "E City, Gujranwala",
    url: "https://www.google.com/maps/place/RILLS+Super+Campus/@32.1169296,74.1184733,12z/data=!4m10!1m2!2m1!1sRILLS+School+Pearl+PLOT+1+BLOCK+EE+WAF+E+CITY+GUJRANWALA!3m6!1s0x391f292f92d597c1:0x61ce8391b3d5ed09!8m2!3d32.2020986!4d74.1963134!15sCjhSSUxMUyBTY2hvb2wgUGVhcmwgUExPVCAxIEJMT0NLIEVFIFdBRiBFIENJVFkgR1VKUkFOV0FMQVo6IjhyaWxscyBzY2hvb2wgcGVhcmwgcGxvdCAxIGJsb2NrIGVlIHdhZiBlIGNpdHkgZ3VqcmFud2FsYZIBF2VkdWNhdGlvbmFsX2luc3RpdHV0aW9umgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJmTjNWaVYzVlJSUkFC4AEA-gEFCLsBEBQ!16s%2Fg%2F11pvbb4jrc?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 0609535",
  },
  {
    title: "alps",
    src: "uhad.webp",
    address: "Kashmir Road, Gujranwala",
    url: "https://www.google.com/maps/place/Rills+school/@32.1327116,74.1920467,15z/data=!4m10!1m2!2m1!1sRILLS+School+Alps+220-X+BLOCK+PEOPLE+COLONY+KASHMIR+ROAD+GUJRANWALA!3m6!1s0x391f2b2eb5e37da3:0x7674d2f720f499e8!8m2!3d32.1440366!4d74.2091278!15sCkNSSUxMUyBTY2hvb2wgQWxwcyAyMjAtWCBCTE9DSyBQRU9QTEUgQ09MT05ZIEtBU0hNSVIgUk9BRCBHVUpSQU5XQUxBkgEYZ2VuZXJhbF9lZHVjYXRpb25fc2Nob29s4AEA!16s%2Fg%2F11l2kd23_4?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 6559597",
  },
  {
    title: "altai",
    src: "uhad.webp",
    address: "People Colony, Gujranwala",
    url: "https://www.google.com/maps/search/RILLS+School+Altai+MAIN+PEOPLE+COLONY+ROAD+GUJRANWALA/@32.1327471,74.1920467,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 6539597",
  },
  {
    title: "asir",
    src: "uhad.webp",
    address: "People Colony, Gujranwala",
    url: "https://www.google.com/maps/search/RILLS+School+Altai+MAIN+PEOPLE+COLONY+ROAD+GUJRANWALA/@32.1327471,74.1920467,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 339 0129597",
  },
  {
    title: "everest",
    src: "uhad.webp",
    address: "Wapda Town, Gujranwala",
    url:"https://www.google.com/maps/search/RILLS+School+Everest+MAIN+MARKET+WAPDA+TOWN+GUJRANWALA/@32.1328835,74.1199446,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 303 4633723",
  },
  {
    title: "coast",
    src: "uhad.webp",
    address: "Wapda Town, Gujranwala",
    url:"https://www.google.com/maps/search/RILLS+School+Everest+MAIN+MARKET+WAPDA+TOWN+GUJRANWALA/@32.1328835,74.1199446,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 303 4633723",
  },
  {
    title: "olympus",
    src: "uhad.webp",
    address: "D.C Road, Gujranwala",
    url:"https://www.google.com/maps/place/RILLS+OLYMPUS+CAMPUS/@32.1785336,74.1925913,17z/data=!3m1!4b1!4m6!3m5!1s0x391f29b5b96354a7:0x8a4e813c68dcda67!8m2!3d32.1785291!4d74.1951662!16s%2Fg%2F11ft_7g1_r?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 303 4633723",
  },
  {
    title: "cameroon",
    src: "uhad.webp",
    address: "D.C Road, Gujranwala",
    url:"https://www.google.com/maps/place/RILLS+OLYMPUS+CAMPUS/@32.1785336,74.1925913,17z/data=!3m1!4b1!4m6!3m5!1s0x391f29b5b96354a7:0x8a4e813c68dcda67!8m2!3d32.1785291!4d74.1951662!16s%2Fg%2F11ft_7g1_r?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 303 4633723",
  },
  {
    title: "denali",
    src: "uhad.webp",
    address: "D.C Road, Gujranwala",
    url:"https://www.google.com/maps/place/RILLS+OLYMPUS+CAMPUS/@32.1785336,74.1925913,17z/data=!3m1!4b1!4m6!3m5!1s0x391f29b5b96354a7:0x8a4e813c68dcda67!8m2!3d32.1785291!4d74.1951662!16s%2Fg%2F11ft_7g1_r?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 303 4633723",
  },
  {
    title: "alsek",
    src: "uhad.webp",
    address: "Model Town, Gujranwala",
    url:"https://www.google.com/maps/place/RILLS+Alsek+Campus/@32.1768958,74.1717438,17z/data=!4m10!1m2!2m1!1srills+school+Alsek+NEAR+SHEESH+MAHAL+MARRIAGE+HAL+MODEL+TOWN+GURANWALA!3m6!1s0x391f29ea38ed0b5d:0xd25f71cb70f35dd0!8m2!3d32.1768958!4d74.1765074!15sCkhyaWxscyBzY2hvb2wgQWxzZWsgTkVBUiBTSEVFU0ggTUFIQUwgTUFSUklBR0UgSEFMTCBNT0RFTCBUT1dOIEdVSlJBTldBTEGSAQtoaWdoX3NjaG9vbOABAA!16s%2Fg%2F11l2dtp27v?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 0899597",
  },
  {
    title: "aures",
    src: "uhad.webp",
    address: "Model Town, Gujranwala",
    url:"https://www.google.com/maps/place/RILLS+Aur%C3%A9s+campus/@32.1709512,74.177156,17z/data=!4m10!1m2!2m1!1srills+school+Alsek+NEAR+SHEESH+MAHAL+MARRIAGE+HAL+MODEL+TOWN+GURANWALA!3m6!1s0x391f29795a02c7bb:0xc3c055bbee0d8abf!8m2!3d32.1709512!4d74.1819196!15sCkhyaWxscyBzY2hvb2wgQWxzZWsgTkVBUiBTSEVFU0ggTUFIQUwgTUFSUklBR0UgSEFMTCBNT0RFTCBUT1dOIEdVSlJBTldBTEFaSiJIcmlsbHMgc2Nob29sIGFsc2VrIG5lYXIgc2hlZXNoIG1haGFsIG1hcnJpYWdlIGhhbGwgbW9kZWwgdG93biBndWpyYW53YWxhkgEXZWR1Y2F0aW9uYWxfaW5zdGl0dXRpb26aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTlhPRGRxTWw5blJSQULgAQD6AQQIABA5!16s%2Fg%2F11pzfcj713?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 326 0559552",
  },
  {
    title: "ararat",
    src: "uhad.webp",
    address: "Model Town, Gujranwala",
    url:"",
    phone: "+92 300 6509597",
  },
  {
    title: "balkan",
    src: "uhad.webp",
    address: "Nowshera Road, Gujranwala",
    url:"https://www.google.com/maps/search/rills+school+balkan+Nowshera+Road,+Near+PSO+petrol+pump/@32.1446773,74.1132683,13z/data=!3m1!4b1!4m7!2m6!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 309 9624097",
  },
  {
    title: "marwa",
    src: "uhad.webp",
    address: "Shalimar Town, Gujranwala",
    url:"https://www.google.com/maps/search/rills+school+marwa+Main+Boulevard+Shalimar+Town+Gujranwala/@32.1448093,74.1132683,13z/data=!3m1!4b1!4m7!2m6!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 342 1529597",
  },
  {
    title: "noor",
    src: "uhad.webp",
    address: "Khiali, Gujranwala",
    url:"https://www.google.com/maps/search/rills+school+noor+Sheikhupura+Road,+Gujranwala/@32.1449413,74.1132682,13z/data=!3m1!4b1!4m7!2m6!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 342 6129597",
  },
  {
    title: "crystal",
    src: "uhad.webp",
    address: "Hafizabad Road, Gujranwala",
    url:"https://www.google.com/maps/search/rills+school+crystal+Main+Hafizabad+Road,+Gujranwala/@32.1450733,74.1132682,13z/data=!3m1!4b1!4m7!2m6!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 309 9624097",
  },
  {
    title: "Raka Poshi",
    src: "uhad.webp",
    address: "Ali Pur Chatha, Gujranwala",
    url:"",
    phone: "",
  },
  {
    title: "Tatra",
    src: "uhad.webp",
    address: "Tatly Aali, Gujranwala",
    url:"",
    phone: "",
  },
  {
    title: "Elgon",
    src: "uhad.webp",
    address: "Township, Lahore",
    url:"",
    phone: "",
  },
  {
    title: "Fuji",
    src: "uhad.webp",
    address: "Raiwind, Lahore",
    url:"",
    phone: "",
  },
 
  {
    title: "gibraltar",
    src: "uhad.webp",
    address: "Sheikhupura",
    url:"https://www.google.com/maps/search/rills+school+gibralter++3B,+Shami+Road,+Civil+Lines,+Sheikhupura/@31.9128597,73.7909289,10z/data=!3m1!4b1!4m7!2m6!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 332 0969597",
  },
  {
    title: "safa",
    src: "uhad.webp",
    address: "Hafizabad",
    url:"https://www.google.com/maps/place/Rills+School+Hafizabad+-+Safa+Campus/@32.0627918,73.0580521,10z/data=!4m16!1m8!2m7!1srills+school+safa+Hafizabad+Bypass!3m5!2s32.1777176,74.17586969999999!3s0x391f299c66289753:0x50469f6d70e4f725!4m2!1d74.1758697!2d32.1777176!3m6!1s0x391f4d0074648371:0xb88691856a5690e1!8m2!3d32.06292!4d73.6676224!15sCiJyaWxscyBzY2hvb2wgc2FmYSBIYWZpemFiYWQgQnlwYXNzkgERbW9udGVzc29yaV9zY2hvb2zgAQA!16s%2Fg%2F11w204fr1x?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 370 4189597",
  },
  {
    title: "meru",
    src: "uhad.webp",
    address: "Malkwal",
    url:"",
    phone: "+92 341 5291000",
  },
  {
    title: "cerro",
    src: "uhad.webp",
    address: "Miani, Sargodha",
    url:"",
    phone: "+92 370 4189597",
  },
  {
    title: "anvil",
    src: "uhad.webp",
    address: "Marghzar Colony, Gujrat",
    url:"https://www.google.com/maps/place/RILLS+School+Gujrat+Anvil+Campus/@32.5929608,74.0757872,17z/data=!4m14!1m7!3m6!1s0x391f050012243853:0xaf826b5c0bbd2582!2sRILLS+School+Gujrat+Anvil+Campus!8m2!3d32.5929563!4d74.0783621!16s%2Fg%2F11ldnsnk8c!3m5!1s0x391f050012243853:0xaf826b5c0bbd2582!8m2!3d32.5929563!4d74.0783621!16s%2Fg%2F11ldnsnk8c?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D",
    phone: "+92 300 1209597",
  },
  {
    title: "brecon",
    src: "uhad.webp",
    address: "Model Town, Sialkot",
    url:"",
    phone: "+92 330 8110002",
  },
  {
    title: "elbert",
    src: "uhad.webp",
    address: "D Ground, Faisalabad",
    url:"",
    phone: "",
  },
  
  {
    title: "Eneto",
    src: "uhad.webp",
    address: "Daska, Sialkot",
    url:"",
    phone: "",
  },
  
  {
    title: "maple",
    src: "uhad.webp",
    address: "Mandi Bahauddin",
    url:"",
    phone: "",
  },
  
  {
    title: "elgon",
    src: "uhad.webp",
    address: "Islamabad",
    url:"",
    phone: "",
  },
  
  {
    title: "spantic",
    src: "uhad.webp",
    address: "Shahdara, Lahore",
    url:"",
    phone: "",
  },
  {
    title: "aneto",
    src: "uhad.webp",
    address: "Sabzazar, Lahore",
    url:"",
    phone: "",
  },
  
];

const Franchises = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center py-12 bg-gray-50"
      style={{ fontFamily: "Berlin, sans-serif", "--theme-color": "#EDA837" }}
    >
      <div className="w-full px-6 sm:px-12">
        <HeroHeader title="Franchises" description="RILLS Franchises" />

        <div className="mt-8 flex flex-col items-center">
          <p className="mb-6 text-center text-gray-600 text-5xl font-bold">
            Our <span style={{ color: "#EDA837" }}>Franchises</span>
          </p>

          {/* Centered grid with two fixed 450px columns */}
          <div className="w-full flex justify-center">
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(2, 450px)" }}>
              {images.map((img, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#2e1804] border border-gray-200 dark:border-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center hover:bg-[#1d1d1e]"
                  style={{ width: "450px" }}
                >
                  {/* Title with theme color via CSS variable fallback to #EDA837 */}
                  <h3
                    className="text-4xl font-semibold capitalize"
                    style={{ color: "var(--theme-color, #EDA837)" }}
                  >
                    {`${img.title} Campus`}
                  </h3>

                  <p className="mt-2 text-lg text-white dark:text-gray-300">
                    {img.address ?? "Address not available"}
                  </p>

                  {/* Phone number below the address */}
                  {img.phone ? (
                    <p className="mt-1 text-sm text-white/90 dark:text-gray-400">
                      <a href={`tel:${img.phone}`} className="inline-flex items-center gap-2 underline">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.5.74 3.87.74a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.37.26 2.67.74 3.87a1 1 0 01-.21 1.11l-2.41 2.41z" />
                        </svg>
                        {img.phone}
                      </a>
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-white/60 dark:text-gray-500">
                      Phone not available
                    </p>
                  )}

                  <div className="mt-4 flex items-center gap-3">
                    {img.url ? (
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                        style={{
                          backgroundColor: "var(--theme-color, #EDA837)",
                          boxShadow: "0 6px 18px rgba(237,168,55,0.12)",
                        }}
                      >
                        {/* location pin icon */}
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                        </svg>
                        <span>Open in Google Maps</span>
                      </a>
                    ) : (
                      <span className="inline-block px-4 py-2 rounded-full text-sm text-gray-500 bg-gray-100 dark:bg-slate-700">
                        No location link
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Franchises;
