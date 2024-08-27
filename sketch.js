var song115;
var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7; 
var song8;
var song9;
var song10; 
var song11;
var song12;
var song13;
var song14;
var song15;
var song16;
var song17;
var song18;
var song19;
var song20;
var song21;
var song22;
var song23;
var song24;
var song25;
var song26;
var song27;
var song28;
var song29;
var song30;
var song31;
var song32;
var song33;
var song34;
var song35;
var song36;
var song37;
var song38;
var song39;
var song40;
var song41;
var song42;
var song43;
var song44;
var song45;
var song46;
var song47;
var song48;
var song49;
var song50;
var song51;
var song52;
var song53;
var song54;
var song55;
var song56;
var song57;
var song58;
var song59;
var song60;
var song61;
var song62;
var song63;
var song64;
var song65;
var song66;
var songA1;
var songB1;
var songB2;
var songB3;
var songB4;
var songB5;
var songB6;
var songD1;
var songD2;
var songE1;
var songF1;
var songF2;
var songF3;
var songF4;
var songF5;
var songG1;
var songH1;
var songH2;
var songH3;
var songH4;
var songH5;
var songI1;
var songI2;
var songI3;
var songI4;
var songI5;
var songJ1;
var songJ2;
var bg;


function preload() {
  song115 = loadSound("115.wav");
  song1 = loadSound("1.wav");
  song2 = loadSound("2.wav"); 
  song3 = loadSound("3.wav");
  song4 = loadSound("4.wav"); 
  song5 = loadSound("5.wav"); 
  song6 = loadSound("6.wav"); 
  song7 = loadSound("7.wav"); 
  song8 = loadSound("8.wav"); 
  song9 = loadSound("9.wav"); 
  song10 = loadSound("10.wav"); 
  song11 = loadSound("11.wav");
  song12 = loadSound("12.wav");
  song13 = loadSound("13.wav"); 
  song14 = loadSound("14.wav"); 
  song15 = loadSound("15.wav");
  song16 = loadSound("16.wav"); 
  song17 = loadSound("17.wav"); 
  song18 = loadSound("18.wav"); 
  song19 = loadSound("19.wav"); 
  song20 = loadSound("20.wav");
  song21 = loadSound("21.wav"); 
  song22 = loadSound("22.wav"); 
  song23 = loadSound("23.wav"); 
  song24 = loadSound("24.wav"); 
  song25 = loadSound("25.wav"); 
  song26 = loadSound("26.wav"); 
  song27 = loadSound("27.wav"); 
  song28 = loadSound("28.wav"); 
  song29 = loadSound("29.wav"); 
  song30 = loadSound("30.wav"); 
  song31 = loadSound("31.wav"); 
  song32 = loadSound("32.wav"); 
  song33 = loadSound("33.wav"); 
  song34 = loadSound("34.wav"); 
  song35 = loadSound("35.wav"); 
  song36 = loadSound("36.wav"); 
  song37 = loadSound("37.wav"); 
  song38 = loadSound("38.wav"); 
  song39 = loadSound("39.wav"); 
  song40 = loadSound("40.wav"); 
  song41 = loadSound("41.wav");
  song42 = loadSound("42.wav");
  song43 = loadSound("43.wav"); 
  song44 = loadSound("44.wav"); 
  song45 = loadSound("45.wav"); 
  song46 = loadSound("46.wav"); 
  song47 = loadSound("47.wav"); 
  song48 = loadSound("48.wav"); 
  song49 = loadSound("49.wav"); 
  song50 = loadSound("50.wav");
  song51 = loadSound("51.wav");
  song52 = loadSound("52.wav"); 
  song53 = loadSound("53.wav"); 
  song54 = loadSound("54.wav"); 
  song55 = loadSound("55.wav"); 
  song56 = loadSound("56.wav"); 
  song57 = loadSound("57.wav"); 
  song58 = loadSound("58.wav"); 
  song59 = loadSound("59.wav"); 
  song60 = loadSound("60.wav");
  song61 = loadSound("61.wav");
  song62 = loadSound("62.wav");
  song63 = loadSound("63.wav");
  song64 = loadSound("64.wav");
  song65 = loadSound("65.wav");
  song66 = loadSound("66.wav");
  songA1 = loadSound("A1.wav");
  songB1 = loadSound("B1.wav");
  songB2 = loadSound("B2.wav");
  songB3 = loadSound("B3.wav");
  songB4 = loadSound("B4.wav");
  songB5 = loadSound("B5.wav");
  songB6 = loadSound("B6.mp3");
  songC1 = loadSound("C1.mp3");
  songD1 = loadSound("D1.mp3");
  songD2 = loadSound("D2.mp3");
  songE1 = loadSound("E1.mp3");
  songF1 = loadSound("F1.mp3");
  songF2 = loadSound("F2.mp3");
  songF3 = loadSound("F3.mp3");
  songF4 = loadSound("F4.mp3");
  songF5 = loadSound("F5.mp3");
  songG1 = loadSound("G1.mp3");
  songH1 = loadSound("H1.mp3");
  songH2 = loadSound("H2.mp3");
  songH3 = loadSound("H3.mp3");
  songH4 = loadSound("H4.mp3");
  songH5 = loadSound("H5.mp3");
  songI1 = loadSound("I1.mp3");
  songI2 = loadSound("I2.mp3");
  songI3 = loadSound("I3.mp3");
  songI4 = loadSound("I4.mp3");
  songI5 = loadSound("I5.mp3");
  songJ1 = loadSound("J1.mp3");
  songJ2 = loadSound("J2.mp3");
  bg = loadImage ("mmap.jpg");
  
  
  songs = [song115,song1,song2,song3,song4,song5,song6,song7,song8,song9,song10,song11,song12,song13,song14,song15,song16,song17,song18,song19,song20,song21,song22,song23,song24,song25,song26,song27,song28,song29,song30,song31,song32,song33,song34,song35,song36,song37,song38,song39,song40,song41,song42,song43,song44,song45,song46,song47,song48,song49,song50,song51,song52,song53,song54,song55,song56,song57,song58, song59, song60,song61,song62,song63,song64,song65,song66, songA1,songB1,songB2,songB3,songB4,songB5,songB6,songC1,songD1,songD2,songE1,songF1,songF2,songF3,songF4,songF5,songG1,songH1,songH2,songH3,songH4,songH5,songI1,songI2,songI3,songI4,songI5,songJ1,songJ2];
  
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.doubleClicked(stopAllSongs);
  frameRate(10);
}

function translateX(position) {
  ratio = position/1512
  return ratio * windowWidth
}

function stopAllSongs() {
  songs.forEach(function(song) {
    if (song.isPlaying())
        {
          song.stop();
        } 
  })
  
}
function translateY(position) {
  ratio = position/982
  return ratio * windowHeight
}

function draw() {

  background(bg);
  
  //115
  
  if (mouseX < translateX(52) && mouseX > translateX(22) && mouseY < translateY(799) && mouseY > translateY(784)){
    
    
    text("♫", mouseX, mouseY)
    if (!song115.isPlaying()){
      song115.play();
    }
  }

//1
  
  if (mouseX < translateX(34) && mouseX > translateX(16) && mouseY < translateY(899) && mouseY > translateY(882)){
    
    
    text("♫", mouseX, mouseY)
    if (!song1.isPlaying()){
      song1.play();
    }
  }
 
//2

  if (mouseX < translateX(137) && mouseX > translateX(119) && mouseY < translateY(928) && mouseY > translateY(904)){
    text("♫", mouseX, mouseY)
    if (!song2.isPlaying()){
      song2.play();
    }
  }
      

//3
 
  if (mouseX < translateX(238) && mouseX > translateX(227) && mouseY < translateY(775) && mouseY > translateY(762))
    {
    text("♫", mouseX, mouseY)
    if (!song3.isPlaying()){
      song3.play();
    }
  }
      
    
//4
  
  if (mouseX < translateX(36) && mouseX > translateX(22) && mouseY < translateY(472) && mouseY > translateX(449)){
    
    text("♫", mouseX, mouseY)
    if (!song4.isPlaying()){
      song4.play();
    }
  }
  
  
//5

  if (mouseX < translateX(115) && mouseX > translateX(92) && mouseY < translateY(446) && mouseY > translateY(418)){
    text("♫", mouseX, mouseY)
    if (!song5.isPlaying()){
      song5.play();
    }
  }
      
  
//6

  if (mouseX < translateX(106) && mouseX > translateX(86) && mouseY < translateY(571) && mouseY > translateY(548)){
    text("♫", mouseX, mouseY)
    if (!song6.isPlaying()){
      song6.play();
    }
  }
      
    
//7

  if (mouseX < translateX(231) && mouseX > translateX(203) && mouseY < translateY(692) && mouseY > translateY(651)){
    text("♫", mouseX, mouseY)
    if (!song7.isPlaying()){
      song7.play();
    }
  }
      
//8

  if (mouseX < translateX(299) && mouseX > translateX(283) && mouseY < translateY(787) && mouseY > translateY(754)){
    text("♫", mouseX, mouseY)
    if (!song8.isPlaying()){
      song8.play();
    }
  }
  
//9
  
  if (mouseX < translateX(362) && mouseX > translateX(349) && mouseY < translateY(856) && mouseY > translateY(820)){
    text("♫", mouseX, mouseY)
    if (!song9.isPlaying()){
      song9.play();
    }
  }
      
//10
  
  if (mouseX < translateX(426) && mouseX > translateX(398) && mouseY < translateY(677) && mouseY > translateY(650)){
    text("♫", mouseX, mouseY)
    if (!song10.isPlaying()){
      song10.play();
    }
  }      
     
//11
  
  if (mouseX < translateX(492) && mouseX > translateX(473) && mouseY < translateY(647) && mouseY > translateY(625)){
    text("♫", mouseX, mouseY)
    if (!song11.isPlaying()){
      song11.play();
    }
  }
  

//12
  
  if (mouseX < translateX(535) && mouseX > translateX(513) && mouseY < translateY(576) && mouseY > translateY(546)){
    text("♫", mouseX, mouseY)
    if (!song12.isPlaying()){
      song12.play();
    }
  }       

 //13

  if (mouseX < translateX(523) && mouseX > translateX(484) && mouseY < translateY(689) && mouseY > translateY(672)){
    text("♫", mouseX, mouseY)
    if (!song13.isPlaying()){
      song13.play();
    }
  }
      
 
//14
  
  if (mouseX < translateX(553) && mouseX > translateX(530) && mouseY < translateY(780) && mouseY > translateY(744)){
    text("♫", mouseX, mouseY)
    if (!song14.isPlaying()){
      song14.play();
    }
  }
      

      
//15
  
  if (mouseX < translateX(600) && mouseX > translateX(580) && mouseY < translateY(869) && mouseY > translateY(842)){
    text("♫", mouseX, mouseY)
    if (!song15.isPlaying()){
      song15.play();
    }
  }
 
    
//16
  
  if (mouseX < translateX(595) && mouseX > translateX(562) && mouseY < translateY(951) && mouseY > translateY(933)){
    text("♫", mouseX, mouseY)
    if (!song16.isPlaying()){
      song16.play();
    }
  }
  

//17
  
  if (mouseX < translateX(700) && mouseX > translateX(684) && mouseY < translateY(981) && mouseY > translateY(944)){
    text("♫", mouseX, mouseY)
    if (!song17.isPlaying()){
      song17.play();
    }
  }
      

//18

  if (mouseX < translateX(754) && mouseX > translateX(728) && mouseY < translateY(925) && mouseY > translateY(907)){
    text("♫", mouseX, mouseY)
    if (!song18.isPlaying()){
      song18.play();
    }
  }
      

//19

  if (mouseX < translateX(478) && mouseX > translateX(455) && mouseY < translateY(770) && mouseY > translateY(742)){
    text("♫", mouseX, mouseY)
    if (!song19.isPlaying()){
      song19.play();
    }
  }
  
//20

  if (mouseX < translateX(521) && mouseX > translateX(492) && mouseY < translateY(821) && mouseY > translateY(807)){
    text("♫", mouseX, mouseY)
    if (!song20.isPlaying()){
      song20.play();
    }
  }
      
  
//21

  if (mouseX < translateX(569) && mouseX > translateX(549) && mouseY < translateY(865) && mouseY > translateY(855)){
    text("♫", mouseX, mouseY)
    if (!song21.isPlaying()){
      song21.play();
    }
  }
      
  
//22

  if (mouseX < translateX(532) && mouseX > translateX(509) && mouseY < translateY(925) && mouseY > translateY(905)){
    text("♫", mouseX, mouseY)
    if (!song22.isPlaying()){
      song22.play();
    }
  }
      
  
//23

  if (mouseX < translateX(479) && mouseX > translateX(455) && mouseY < translateY(974) && mouseY > translateY(951)){
    text("♫", mouseX, mouseY)
    if (!song23.isPlaying()){
      song23.play();
    }
  }

//24

  if (mouseX < translateX(420) && mouseX > translateX(410) && mouseY < translateY(957) && mouseY > translateY(931)){
    text("♫", mouseX, mouseY)
    if (!song24.isPlaying()){
      song24.play();
    }
  }
      
//25

  if (mouseX < translateX(257) && mouseX > translateX(230) && mouseY < translateY(323) && mouseY > translateY(298)){
    text("♫", mouseX, mouseY)
    if (!song25.isPlaying()){
      song25.play();
    }
  }
      
//26

  if (mouseX < translateX(238) && mouseX > translateX(212) && mouseY < translateY(416) && mouseY > translateY(388)){
    text("♫", mouseX, mouseY)
    if (!song26.isPlaying()){
      song26.play();
    }
  }
      
  
//27

  if (mouseX < translateX(262) && mouseX > translateX(246) && mouseY < translateY(462) && mouseY > translateY(436)){
    text("♫", mouseX, mouseY)
    if (!song27.isPlaying()){
      song27.play();
    }
  }
      
  
//28

  if (mouseX < translateX(326) && mouseX > translateX(311) && mouseY < translateY(442) && mouseY > translateY(408)){
    text("♫", mouseX, mouseY)
    if (!song28.isPlaying()){
      song28.play();
    }
  }
      
//29

  if (mouseX < translateX(63) && mouseX > translateX(48) && mouseY < translateY(133) && mouseY > translateX(75)){
    text("♫", mouseX, mouseY)
    if (!song29.isPlaying()){
      song29.play();
    }
  }
      
  
//30

  if (mouseX < translateX(149) && mouseX > translateX(133) && mouseY < translateY(186) && mouseY > translateY(157)){
    text("♫", mouseX, mouseY)
    if (!song30.isPlaying()){
      song30.play();
    }
  }
      
  
//31

  if (mouseX < translateX(217) && mouseX > translateX(202) && mouseY < translateY(114) && mouseY > translateY(79)){
    text("♫", mouseX, mouseY)
    if (!song31.isPlaying()){
      song31.play();
    }
  }
      
//32

  if (mouseX < translateX(347) && mouseX > translateX(323) && mouseY < translateY(212) && mouseY > translateY(193)){
    text("♫", mouseX, mouseY)
    if (!song32.isPlaying()){
      song32.play();
    }
  }
      
  
//33

  if (mouseX < translateX(384) && mouseX > translateX(372) && mouseY < translateY(97) && mouseY > translateY(61)){
    text("♫", mouseX, mouseY)
    if (!song33.isPlaying()){
      song33.play();
    }
  }
  
//34

  if (mouseX < translateX(518) && mouseX > translateX(496) && mouseY < translateY(33) && mouseY > translateY(21)){
    text("♫", mouseX, mouseY)
    if (!song34.isPlaying()){
      song34.play();
    }
  }

  
//35

  if (mouseX < translateX(637) && mouseX > translateX(625) && mouseY < translateY(91) && mouseY > translateY(59)){
    text("♫", mouseX, mouseY)
    if (!song35.isPlaying()){
      song35.play();
    }
  }

  
//36

  if (mouseX < translateX(791) && mouseX > translateX(777) && mouseY < translateY(90) && mouseY > translateY(66)){
    text("♫", mouseX, mouseY)
    if (!song36.isPlaying()){
      song36.play();
    }
  }
      
//37

  if (mouseX < translateX(588) && mouseX > translateX(562) && mouseY < translateY(242) && mouseY > translateY(199)){
    text("♫", mouseX, mouseY)
    if (!song37.isPlaying()){
      song37.play();
    }
  }
      
  //38

  if (mouseX < translateX(677) && mouseX > translateX(645) && mouseY < translateY(270) && mouseY > translateY(240)){
    text("♫", mouseX, mouseY)
    if (!song38.isPlaying()){
      song38.play();
    }
  }
      
  //39

  if (mouseX < translateX(682) && mouseX > translateX(653) && mouseY < translateY(361) && mouseY > translateX(349)){
    text("♫", mouseX, mouseY)
    if (!song39.isPlaying()){
      song39.play();
    }
  }

  
  //40

  if (mouseX < translateX(671) && mouseX > translateX(649) && mouseY < translateY(558) && mouseY > translateY(526)){
    text("♫", mouseX, mouseY)
    if (!song40.isPlaying()){
      song40.play();
    }
  }
      

  //41

  if (mouseX < translateX(758) && mouseX > translateX(738) && mouseY < translateY(585) && mouseY > translateY(552)){
    text("♫", mouseX, mouseY)
    if (!song41.isPlaying()){
      song41.play();
    }
  }
  
  //42

  if (mouseX < translateX(788) && mouseX > translateX(760) && mouseY < translateY(662) && mouseY > translateY(643)){
    text("♫", mouseX, mouseY)
    if (!song42.isPlaying()){
      song42.play();
    }
  }
      
  //43

  if (mouseX < translateX(860) && mouseX > translateX(841) && mouseY < translateY(733) && mouseY > translateY(699)){
    text("♫", mouseX, mouseY)
    if (!song43.isPlaying()){
      song43.play();
    }
  }

  
  //44

  if (mouseX < translateX(818) && mouseX > translateX(802) && mouseY < translateY(443) && mouseY > translateY(403)){
    text("♫", mouseX, mouseY)
    if (!song44.isPlaying()){
      song44.play();
    }
  }

  
  //45

  if (mouseX < translateX(920) && mouseX > translateX(893) && mouseY < translateY(340) && mouseY > translateY(300)){
    text("♫", mouseX, mouseY)
    if (!song45.isPlaying()){
      song45.play();
    }
  }      
  
  //46

  if (mouseX < translateX(983) && mouseX > translateX(970) && mouseY < translateY(503) && mouseY > translateY(466)){
    text("♫", mouseX, mouseY)
    if (!song46.isPlaying()){
      song46.play();
    }
  }
      
  //47

  if (mouseX < translateX(1070) && mouseX > translateX(1045) && mouseY < translateY(555) && mouseY > translateY(520)){
    text("♫", mouseX, mouseY)
    if (!song47.isPlaying()){
      song47.play();
    }
  }

  //48

  if (mouseX < translateX(1100) && mouseX > translateX(1172) && mouseY < translateY(622) && mouseY > translateY(609)){
    text("♫", mouseX, mouseY)
    if (!song48.isPlaying()){
      song48.play();
    }
  }
      
  
  //49

  if (mouseX < translateX(982) && mouseX > translateX(959) && mouseY < translateY(633) && mouseY > translateY(605)){
    text("♫", mouseX, mouseY)
    if (!song49.isPlaying()){
      song49.play();
    }
  }

  //50

  if (mouseX < translateX(1043) && mouseX > translateX(1015) && mouseY < translateY(719) && mouseY > translateY(680)){
    text("♫", mouseX, mouseY)
    if (!song50.isPlaying()){
      song50.play();
    }
  }
      
  //51

  if (mouseX < translateX(1074) && mouseX > translateX(1039) && mouseY < translateY(840) && mouseY > translateY(809)){
    text("♫", mouseX, mouseY)
    if (!song51.isPlaying()){
      song51.play();
    }
  }
      
  //52

  if (mouseX < translateX(1287) && mouseX > translateX(1275) && mouseY < translateY(961) && mouseY > translateY(932)){
    text("♫", mouseX, mouseY)
    if (!song52.isPlaying()){
      song52.play();
    }
  }
      
  
  //53

  if (mouseX < translateX(1055) && mouseX > translateX(1042) && mouseY < translateY(202) && mouseY > translateY(181)){
    text("♫", mouseX, mouseY)
    if (!song53.isPlaying()){
      song53.play();
    }
  }

   //54

  if (mouseX < translateX(1148) && mouseX > translateX(1137) && mouseY < translateY(55) && mouseY > translateY(24)){
    text("♫", mouseX, mouseY)
    if (!song54.isPlaying()){
      song54.play();
    }
  }
      
   //55

  if (mouseX < translateX(1263) && mouseX > translateX(1240) && mouseY < translateY(84) && mouseY > translateY(54)){
    text("♫", mouseX, mouseY)
    if (!song55.isPlaying()){
      song55.play();
    }
  }
      
   //56

  if (mouseX < translateX(1278) && mouseX > translateX(1334) && mouseY < translateY(202) && mouseY > translateY(170)){
    text("♫", mouseX, mouseY)
    if (!song56.isPlaying()){
      song56.play();
    }
  }
  
   //57

  if (mouseX < translateX(1341) && mouseX > translateX(1320) && mouseY < translateY(261) && mouseY > translateY(248)){
    text("♫", mouseX, mouseY)
    if (!song57.isPlaying()){
      song57.play();
    }
  }

  
   //58

  if (mouseX < translateX(1407) && mouseX > translateX(1394) && mouseY < translateY(236) && mouseY > translateY(191)){
    text("♫", mouseX, mouseY)
    if (!song58.isPlaying()){
      song58.play();
    }
  }

   //59

  if (mouseX < translateX(1470) && mouseX > translateX(1459) && mouseY < translateY(287) && mouseY > translateY(238)){
    text("♫", mouseX, mouseY)
    if (!song59.isPlaying()){
      song59.play();
    }
  }

  
   //60

  if (mouseX < translateX(1483) && mouseX > translateX(1460) && mouseY < translateY(448) && mouseY > translateY(439)){
    text("♫", mouseX, mouseY)
    if (!song60.isPlaying()){
      song60.play();
    }
  }
  
   
   //61

  if (mouseX < translateX(1469) && mouseX > translateX(1459) && mouseY < translateY(644) && mouseY > translateY(618)){
    text("♫", mouseX, mouseY)
    if (!song61.isPlaying()){
      song61.play();
    }
  }
  
   
   //62

  if (mouseX < translateX(1387) && mouseX > translateX(1376) && mouseY < translateY(596) && mouseY > translateY(573)){
    text("♫", mouseX, mouseY)
    if (!song62.isPlaying()){
      song62.play();
    }
  }
  
   
   //63

  if (mouseX < translateX(1362) && mouseX > translateX(1340) && mouseY < translateY(694) && mouseY > translateY(687)){
    text("♫", mouseX, mouseY)
    if (!song63.isPlaying()){
      song63.play();
    }
  }
  
   
   //64

  if (mouseX < translateX(1358) && mouseX > translateX(1330) && mouseY < translateY(794) && mouseY > translateY(782)){
    text("♫", mouseX, mouseY)
    if (!song64.isPlaying()){
      song64.play();
    }
  }
  
   
   //65

  if (mouseX < translateX(1394) && mouseX > translateX(1367) && mouseY < translateY(878) && mouseY > translateY(857)){
    text("♫", mouseX, mouseY)
    if (!song65.isPlaying()){
      song65.play();
    }
  }
  
   
   //66

  if (mouseX < translateX(1378) && mouseX > translateX(1358) && mouseY < translateY(954) && mouseY > translateY(936)){
    text("♫", mouseX, mouseY)
    if (!song66.isPlaying()){
      song66.play();
    }
  }

    //A1

  if (mouseX < translateX(270) && mouseX > translateX(142) && mouseY < translateY(911) && mouseY > translateY(735)){
    text("♫", mouseX, mouseY)
    if (!songA1.isPlaying()){
      songA1.play();
    }
  }

  
    //B1

  if (mouseX < translateX(205) && mouseX > translateX(135) && mouseY < translateY(631) && mouseY > translateX(499)){
    text("♫", mouseX, mouseY)
    if (!songB1.isPlaying()){
      songB1.play();
    }
  }


    //B2

  if (mouseX < translateX(373) && mouseX > translateX(293) && mouseY < translateY(765) && mouseY > translateY(649)){
    text("♫", mouseX, mouseY)
    if (!songB2.isPlaying()){
      songB2.play();
    }
  }
  
    //B3

  if (mouseX < translateX(452) && mouseX > translateX(476) && mouseY < translateY(431) && mouseY > translateY(381)){
    text("♫", mouseX, mouseY)
    if (!songB3.isPlaying()){
      songB3.play();
    }
  }

  
    //B4

  if (mouseX < translateX(633) && mouseX > translateX(558) && mouseY < translateY(628) && mouseY > translateY(501)){
    text("♫", mouseX, mouseY)
    if (!songB4.isPlaying()){
      songB4.play();
    }
  }

    //B5

  if (mouseX < translateX(681) && mouseX > translateX(607) && mouseY < translateY(919) && mouseY > translateY(772)){
    text("♫", mouseX, mouseY)
    if (!songB5.isPlaying()){
      songB5.play();
    }
  }

    //B6

  if (mouseX < translateX(807) && mouseX > translateX(762) && mouseY < translateY(975) && mouseY > translateY(832)){
    text("♫", mouseX, mouseY)
    if (!songB6.isPlaying()){
      songB6.play();
    }
  }
      
      
    //C1

  if (mouseX < translateX(485) && mouseX > translateX(392) && mouseY < translateY(910) && mouseY > translateY(787)){
    text("♫", mouseX, mouseY)
    if (!songC1.isPlaying()){
      songC1.play();
    }
  }

 
   //D1

  if (mouseX < translateX(776) && mouseX > translateX(681) && mouseY < translateY(530) && mouseY > translateY(477)){
    text("♫", mouseX, mouseY)
    if (!songD1.isPlaying()){
      songD1.play();
    }
  }
      
   //D2

  if (mouseX < translateX(875) && mouseX > translateX(809) && mouseY < translateY(674) && mouseY > translateY(548)){
    text("♫", mouseX, mouseY)
    if (!songD2.isPlaying()){
      songD2.play();
    }
  }
      
      
   //E1

  if (mouseX < translateX(314) && mouseX > translateX(241) && mouseY < translateY(411) && mouseY > translateY(326)){
    text("♫", mouseX, mouseY)
    if (!songE1.isPlaying()){
      songE1.play();
    }
  }

   //F1

  if (mouseX < translateX(146) && mouseX > translateX(28) && mouseY < translateY(231) && mouseY > translateY(164)){
    text("♫", mouseX, mouseY)
    if (!songF1.isPlaying()){
      songF1.play();
    }
  }
      
    //F2

  if (mouseX < translateX(264) && mouseX > translateX(197) && mouseY < translateY(249) && mouseY > translateY(136)){
    text("♫", mouseX, mouseY)
    if (!songF2.isPlaying()){
      songF2.play();
    }
  }
      
    //F3

  if (mouseX < translateX(448) && mouseX > translateX(357) && mouseY < translateY(169) && mouseY > translateY(114)){
    text("♫", mouseX, mouseY)
    if (!songF3.isPlaying()){
      songF3.play();
    }
  }
      
  
    //F4

  if (mouseX < translateX(582) && mouseX > translateX(522) && mouseY < translateY(137) && mouseY > translateY(40)){
    text("♫", mouseX, mouseY)
    if (!songF4.isPlaying()){
      songF4.play();
    }
  }
      
    //F5

  if (mouseX < translateX(752) && mouseX > translateX(673) && mouseY < translateY(142) && mouseY > translateY(58)){
    text("♫", mouseX, mouseY)
    if (!songF5.isPlaying()){
      songF5.play();
    }
  }
  
     //G1

  if (mouseX < translateX(642) && mouseX > translateX(531) && mouseY < translateY(399) && mouseY > translateY(270)){
    text("♫", mouseX, mouseY)
    if (!songG1.isPlaying()){
      songG1.play();
    }
  }
  
     //H1

  if (mouseX < translateX(815) && mouseX > translateX(742) && mouseY < translateY(387) && mouseY > translateY(277)){
    text("♫", mouseX, mouseY)
    if (!songH1.isPlaying()){
      songH1.play();
    }
  }
  
     //H2

  if (mouseX < translateX(1065) && mouseX > translateX(966) && mouseY < translateY(443) && mouseY > translateY(315)){
    text("♫", mouseX, mouseY)
    if (!songH2.isPlaying()){
      songH2.play();
    }
  }
  
     //H3

  if (mouseX < translateX(1212) && mouseX > translateX(1128) && mouseY < translateY(586) && mouseY > translateY(491)){
    text("♫", mouseX, mouseY)
    if (!songH3.isPlaying()){
      songH3.play();
    }
  }
  
     //H4

  if (mouseX < translateX(1165) && mouseX > translateX(1106) && mouseY < translateY(832) && mouseY > translateY(704)){
    text("♫", mouseX, mouseY)
    if (!songH4.isPlaying()){
      songH4.play();
    }
  }
  
     //H5

  if (mouseX < translateX(1151) && mouseX > translateX(1038) && mouseY < translateY(966) && mouseY > translateY(863)){
    text("♫", mouseX, mouseY)
    if (!songH5.isPlaying()){
      songH5.play();
    }
  }
  
       //I1

  if (mouseX < translateX(1210) && mouseX > translateX(1084) && mouseY < translateY(167) && mouseY > translateY(91)){
    text("♫", mouseX, mouseY)
    if (!songI1.isPlaying()){
      songI1.play();
    }
  }
  
       //I2

  if (mouseX < translateX(1294) && mouseX > translateX(1244) && mouseY < translateY(300) && mouseY > translateY(225)){
    text("♫", mouseX, mouseY)
    if (!songI2.isPlaying()){
      songI2.play();
    }
  }
  
       //I3

  if (mouseX < translateX(1310) && mouseX > translateX(1236) && mouseY < translateY(451) && mouseY > translateY(367)){
    text("♫", mouseX, mouseY)
    if (!songI3.isPlaying()){
      songI3.play();
    }
  }
  
       //I4

  if (mouseX < translateX(1449) && mouseX > translateX(1382) && mouseY < translateY(456) && mouseY > translateY(386)){
    text("♫", mouseX, mouseY)
    if (!songI4.isPlaying()){
      songI4.play();
    }
  }
  
       //I5

  if (mouseX < translateX(1511) && mouseX > translateX(1436) && mouseY < translateY(367) && mouseY > translateY(313)){
    text("♫", mouseX, mouseY)
    if (!songI5.isPlaying()){
      songI5.play();
    }
  }
  
       //J1

  if (mouseX < translateX(1511) && mouseX > translateX(1401) && mouseY < translateY(778) && mouseY > translateY(657)){
    text("♫", mouseX, mouseY)
    if (!songJ1.isPlaying()){
      songJ1.play();
    }
  }
  
       //J2

  if (mouseX < translateX(1511) && mouseX > translateX(1421) && mouseY < translateY(975) && mouseY > translateY(835)){
    text("♫", mouseX, mouseY)
    if (!songJ2.isPlaying()){
      songJ2.play();
    }
  }
      
       
}