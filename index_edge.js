/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg_pg52',
            type:'image',
            rect:['-950px','-573px','2924px','1738px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page5/bg-og5.jpg",'0px','0px'],
            transform:[[],[],[],['0.35','0.35']]
         },
         {
            id:'papabearsofa_pg5',
            type:'image',
            rect:['170px','-46px','653px','812px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page4/papabearsofa-pg4.svg",'0px','0px'],
            transform:[[],[],[],['0.62','0.62']]
         },
         {
            id:'ahling-pg5',
            type:'image',
            rect:['352px','83px','249px','439px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page5/ahling-pg5.svg",'0px','0px']
         },
         {
            id:'speechbubble',
            type:'image',
            rect:['118px','83px','298px','277px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page5/speechbubble.svg",'0px','0px']
         },
         {
            id:'pg5_text',
            type:'text',
            rect:['171px','186px','191px','72px','auto','auto'],
            text:"This sofa is<br> too hard",
            align:"center",
            font:['Arial, Helvetica, sans-serif',35,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'bg_pg4',
            type:'image',
            rect:['-974px','-538px','2971px','1673px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page4/bgpg3.jpg",'0px','0px'],
            transform:[[],[],[],['0.36','0.36']]
         },
         {
            id:'text_pg4',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'papabearsofa_pg4',
            type:'rect',
            rect:['92','185','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'mamabearsofa-pg4',
            type:'image',
            rect:['178px','-5px','748px','807px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page4/mamabearsofa-pg4.svg",'0px','0px'],
            transform:[[],[],[],['0.5','0.5']]
         },
         {
            id:'babybearsofa_pg4',
            type:'image',
            rect:['561px','140px','571px','589px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page4/babybearsofa-pg4.svg",'0px','0px'],
            transform:[[],[],[],['0.52','0.52']]
         },
         {
            id:'football_pg4',
            type:'rect',
            rect:['726','483','auto','auto','auto','auto']
         },
         {
            id:'ahling_pg4',
            type:'image',
            rect:['-285px','-82px','864px','1114px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ahling-pg12.svg",'0px','0px'],
            transform:[[],[],[],['0.34','0.34']]
         },
         {
            id:'bgpg3-2',
            type:'image',
            rect:['0px','-2px','1024px','602px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bgpg3.jpeg",'0px','0px']
         },
         {
            id:'window_pg3',
            type:'rect',
            rect:['58','92','auto','auto','auto','auto']
         },
         {
            id:'chairs_pg3',
            type:'rect',
            rect:['251','80','auto','auto','auto','auto']
         },
         {
            id:'ahling_pg3',
            type:'rect',
            rect:['296','139','auto','auto','auto','auto']
         },
         {
            id:'ahlingpg3-eatnasilemak',
            type:'image',
            rect:['327px','73px','405px','505px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/ahlingpg3-eatnasilemak.svg",'0px','0px']
         },
         {
            id:'ahlingpg3-babybear2',
            type:'image',
            rect:['294px','92px','440px','473px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/ahlingpg3-babybear.svg",'0px','0px']
         },
         {
            id:'ahling-pg3papabear',
            type:'image',
            rect:['311px','55px','470px','505px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/ahling-pg3papabear.svg",'0px','0px']
         },
         {
            id:'ahlingpg3-mamanasilemak2',
            type:'image',
            rect:['-27px','-209px','1154px','1024px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/ahlingpg3-mamanasilemak.svg",'0px','0px'],
            transform:[[],[],[],['0.46','0.46']]
         },
         {
            id:'speechbubble-papa',
            type:'image',
            rect:['70px','34px','413px','358px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"page5/speechbubble.svg",'0px','0px']
         },
         {
            id:'Text_baby',
            type:'text',
            rect:['182px','151px','168px','114px','auto','auto'],
            text:"Ah! This nasi lemak is just right",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text_mama',
            type:'text',
            rect:['160px','179px','233px','139px','auto','auto'],
            text:"This nasi lemak is too soft!",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text_papa',
            type:'text',
            rect:['161px','183px','220px','120px','auto','auto'],
            text:"This nasi lemak is too hard",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'table',
            type:'image',
            rect:['-1654px','13px','4320px','960px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"table.svg",'0px','0px'],
            transform:[[],[],[],['0.24','0.24']]
         },
         {
            id:'papanasilemak_pg3',
            type:'image',
            rect:['6px','380px','468px','256px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/papabearnasilemak-pg3.svg",'0px','0px'],
            transform:[[],[],[],['0.56','0.56']]
         },
         {
            id:'mamanasilemak_pg3',
            type:'image',
            rect:['474px','475px','150px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"page3/mamabearnasilemak-pg3.svg",'0px','0px'],
            transform:[[],[],[],['1.5','1.5']]
         },
         {
            id:'babynasilemak_pg3',
            type:'image',
            rect:['577px','377px','512px','277px','auto','auto'],
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"page3/babybearnasilemak-pg3.svg",'0px','0px'],
            transform:[[],[],[],['0.43','0.43']]
         },
         {
            id:'textbox_pg3',
            type:'rect',
            rect:['0','3','auto','auto','auto','auto']
         },
         {
            id:'bg_pg2',
            type:'image',
            rect:['-360px','-216px','1771px','1038px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background1.svg",'0px','0px'],
            transform:[[],[],[],['0.6','0.6']]
         },
         {
            id:'cloudPG2ANIMATION',
            type:'rect',
            rect:['5','7','auto','auto','auto','auto']
         },
         {
            id:'textbox_pg2',
            type:'rect',
            rect:['0','-2','auto','auto','auto','auto']
         },
         {
            id:'ahling_pg2',
            type:'image',
            rect:['-255px','-79px','864px','1114px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ahling-pg1.svg",'0px','0px'],
            transform:[[],[],[],['0.32','0.32']]
         },
         {
            id:'coverpagebg',
            type:'image',
            rect:['0px','-26px','1024px','626px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"vintage_1_insight_designs.jpg",'0px','0px']
         },
         {
            id:'floor',
            type:'image',
            rect:['0px','480px','1024px','120px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"floor.jpg",'0px','0px']
         },
         {
            id:'mamabearblink',
            type:'rect',
            rect:['332','117','auto','auto','auto','auto']
         },
         {
            id:'babybearblink',
            type:'rect',
            rect:['526','200','auto','auto','auto','auto']
         },
         {
            id:'papabearblink',
            type:'rect',
            rect:['31','43','auto','auto','auto','auto']
         },
         {
            id:'play_btn',
            type:'image',
            rect:['1059px','480px','326px','120px','auto','auto'],
            cursor:['pointer'],
            fill:["rgba(0,0,0,0)",im+"play_btn.png",'0px','0px']
         },
         {
            id:'storybookfont2',
            type:'image',
            rect:['517px','23px','615px','200px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"storybookfont.svg",'0px','0px']
         },
         {
            id:'ahlingsleep_pg1',
            type:'image',
            rect:['265px','299px','395px','377px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"ahlingsleep_pg1.png",'0px','0px']
         }],
         symbolInstances: [
         {
            id:'textbox_pg2',
            symbolName:'textbox_pg2'
         },
         {
            id:'text_pg4',
            symbolName:'text_pg4'
         },
         {
            id:'football_pg4',
            symbolName:'football_pg4'
         },
         {
            id:'window_pg3',
            symbolName:'window_pg3'
         },
         {
            id:'textbox_pg3',
            symbolName:'textbox_pg3'
         },
         {
            id:'babybearblink',
            symbolName:'babybear1'
         },
         {
            id:'mamabearblink',
            symbolName:'mamabearblink1'
         },
         {
            id:'papabearblink',
            symbolName:'papabearblink'
         },
         {
            id:'cloudPG2ANIMATION',
            symbolName:'cloudPG2ANIMATION'
         },
         {
            id:'papabearsofa_pg4',
            symbolName:'papabearsofa_pg4'
         },
         {
            id:'ahling_pg3',
            symbolName:'ahling_pg3'
         },
         {
            id:'chairs_pg3',
            symbolName:'chairs_pg3'
         }
         ]
      },
   states: {
      "Base State": {
         "${_babynasilemak_pg3}": [
            ["style", "top", '380px'],
            ["transform", "scaleY", '0.43'],
            ["transform", "scaleX", '0.43'],
            ["style", "opacity", '0'],
            ["style", "left", '586px']
         ],
         "${_bg_pg4}": [
            ["style", "top", '-538px'],
            ["transform", "scaleY", '0.36'],
            ["transform", "scaleX", '0.36'],
            ["style", "opacity", '0'],
            ["style", "left", '-974px']
         ],
         "${_table}": [
            ["style", "top", '13px'],
            ["transform", "scaleY", '0.24'],
            ["style", "height", '960px'],
            ["transform", "scaleX", '0.24'],
            ["style", "opacity", '0'],
            ["style", "left", '-1654px'],
            ["style", "width", '4320px']
         ],
         "${_ahlingsleep_pg1}": [
            ["style", "top", '299px'],
            ["style", "opacity", '1'],
            ["style", "left", '265px']
         ],
         "${_mamanasilemak_pg3}": [
            ["style", "top", '478px'],
            ["transform", "scaleY", '1.5'],
            ["transform", "scaleX", '1.5'],
            ["style", "opacity", '0'],
            ["style", "left", '483px']
         ],
         "${_pg5_text}": [
            ["style", "top", '213px'],
            ["style", "text-align", 'center'],
            ["style", "height", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '175px'],
            ["style", "font-size", '35px']
         ],
         "${_bg_pg2}": [
            ["style", "top", '-216px'],
            ["transform", "scaleY", '0.6'],
            ["style", "height", '1038px'],
            ["transform", "scaleX", '0.6'],
            ["style", "opacity", '0'],
            ["style", "left", '-360px'],
            ["style", "width", '1771px']
         ],
         "${_ahlingpg3-babybear2}": [
            ["style", "top", '124px'],
            ["style", "height", '432px'],
            ["style", "opacity", '0'],
            ["style", "left", '342px'],
            ["style", "width", '384px']
         ],
         "${_ahling_pg3}": [
            ["style", "top", '138px'],
            ["style", "opacity", '1'],
            ["style", "left", '314px']
         ],
         "${_papabearsofa_pg5}": [
            ["style", "top", '-46px'],
            ["transform", "scaleY", '0.62'],
            ["style", "height", '812px'],
            ["transform", "scaleX", '0.62'],
            ["style", "opacity", '0'],
            ["style", "left", '170px'],
            ["style", "width", '653px']
         ],
         "${_cloudPG2ANIMATION}": [
            ["style", "top", '7px'],
            ["style", "opacity", '1']
         ],
         "${_Text_baby}": [
            ["style", "top", '151px'],
            ["style", "height", '114px'],
            ["style", "opacity", '0'],
            ["style", "left", '188px'],
            ["style", "width", '168px']
         ],
         "${_papanasilemak_pg3}": [
            ["style", "top", '380px'],
            ["transform", "scaleY", '0.56'],
            ["style", "height", '256px'],
            ["transform", "scaleX", '0.56'],
            ["style", "opacity", '0'],
            ["style", "left", '6px'],
            ["style", "width", '468px']
         ],
         "${_coverpagebg}": [
            ["style", "top", '-26px'],
            ["style", "height", '626px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_Text_papaCopy}": [
            ["style", "top", '183px'],
            ["style", "width", '220px'],
            ["style", "height", '120px'],
            ["style", "opacity", '0'],
            ["style", "left", '161px'],
            ["style", "font-size", '30px']
         ],
         "${_textbox_pg3}": [
            ["style", "top", '3px'],
            ["style", "opacity", '0']
         ],
         "${_play_btn}": [
            ["style", "top", '453px'],
            ["style", "height", '120px'],
            ["transform", "scaleY", '0.72'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '1'],
            ["style", "left", '1059px'],
            ["style", "width", '326px']
         ],
         "${_textbox_pg2}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0']
         ],
         "${_mamabearsofa-pg4}": [
            ["style", "top", '-631px'],
            ["transform", "scaleY", '0.5'],
            ["transform", "scaleX", '0.5'],
            ["style", "opacity", '0'],
            ["style", "left", '140px']
         ],
         "${_bgpg3-2}": [
            ["style", "top", '-2px'],
            ["style", "height", '602px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_ahlingpg3-mamanasilemak2}": [
            ["style", "top", '-171px'],
            ["transform", "scaleY", '0.43'],
            ["style", "height", '1036px'],
            ["transform", "scaleX", '0.43'],
            ["style", "opacity", '0'],
            ["style", "left", '-37px'],
            ["style", "width", '1167px']
         ],
         "${_text_pg4}": [
            ["style", "opacity", '0']
         ],
         "${_ahling_pg4}": [
            ["style", "top", '-82px'],
            ["transform", "scaleY", '0.34'],
            ["transform", "scaleX", '0.34'],
            ["style", "opacity", '0'],
            ["style", "left", '-285px']
         ],
         "${_floor}": [
            ["style", "top", '480px'],
            ["style", "height", '120px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '1024px']
         ],
         "${_window_pg3}": [
            ["style", "top", '43px'],
            ["style", "opacity", '0'],
            ["style", "left", '83px']
         ],
         "${_babybearsofa_pg4}": [
            ["style", "top", '-486px'],
            ["transform", "scaleY", '0.52'],
            ["transform", "scaleX", '0.52'],
            ["style", "opacity", '0'],
            ["style", "left", '523px']
         ],
         "${_storybookfont2}": [
            ["style", "top", '-195px'],
            ["style", "height", '200px'],
            ["style", "opacity", '1'],
            ["style", "left", '525px'],
            ["style", "width", '615px']
         ],
         "${_mamabearblink}": [
            ["style", "top", '117px'],
            ["style", "opacity", '1']
         ],
         "${_papabearsofa_pg4}": [
            ["style", "top", '-427px'],
            ["transform", "scaleY", '1.05'],
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '0'],
            ["style", "left", '22px'],
            ["style", "cursor", 'pointer']
         ],
         "${_speechbubble-papa}": [
            ["style", "top", '73px'],
            ["style", "height", '306px'],
            ["style", "opacity", '0'],
            ["style", "left", '113px'],
            ["style", "width", '354px']
         ],
         "${_chairs_pg3}": [
            ["style", "top", '80px'],
            ["style", "opacity", '0'],
            ["style", "left", '285px']
         ],
         "${_ahlingpg3-eatnasilemak}": [
            ["style", "top", '87px'],
            ["style", "height", '505px'],
            ["style", "opacity", '0'],
            ["style", "left", '327px'],
            ["style", "width", '405px']
         ],
         "${_babybearblink}": [
            ["style", "top", '200px'],
            ["style", "opacity", '1']
         ],
         "${_football_pg4}": [
            ["style", "top", '483px'],
            ["style", "opacity", '0']
         ],
         "${_ahling-pg5}": [
            ["style", "top", '83px'],
            ["style", "height", '439px'],
            ["style", "opacity", '0'],
            ["style", "left", '352px'],
            ["style", "width", '249px']
         ],
         "${_bg_pg52}": [
            ["style", "top", '-573px'],
            ["transform", "scaleY", '0.35'],
            ["style", "height", '1738px'],
            ["transform", "scaleX", '0.35'],
            ["style", "opacity", '0'],
            ["style", "left", '-950px'],
            ["style", "width", '2924px']
         ],
         "${_speechbubble}": [
            ["style", "top", '110px'],
            ["transform", "scaleY", '1.01'],
            ["style", "height", '309px'],
            ["transform", "scaleX", '1.01'],
            ["style", "opacity", '1'],
            ["style", "left", '115px'],
            ["style", "width", '333px']
         ],
         "${_Text_papa}": [
            ["style", "top", '183px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '30px'],
            ["style", "height", '120px'],
            ["style", "opacity", '0'],
            ["style", "left", '161px'],
            ["style", "width", '220px']
         ],
         "${_Text_mama}": [
            ["style", "top", '179px'],
            ["style", "opacity", '0'],
            ["style", "left", '160px'],
            ["style", "width", '233px']
         ],
         "${_ahling_pg2}": [
            ["style", "top", '-79px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "scaleX", '0.32'],
            ["style", "opacity", '0'],
            ["style", "left", '-255px'],
            ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_ahling-pg3papabear}": [
            ["style", "top", '83px'],
            ["style", "height", '522px'],
            ["style", "opacity", '0'],
            ["style", "left", '339px'],
            ["style", "width", '395px']
         ],
         "${_papabearblink}": [
            ["style", "top", '43px'],
            ["style", "opacity", '1']
         ],
         "${_Text_pg4}": [
            ["style", "text-align", '']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17500,
         autoPlay: true,
         labels: {
            "scene1": 684,
            "scene2": 8347,
            "eatpapanasi": 8750,
            "eatmamanasi": 9417,
            "eatbabynasi": 9957,
            "scene3": 12803,
            "scene4": 16728
         },
         timeline: [
            { id: "eid1031", tween: [ "style", "${_papanasilemak_pg3}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 847 },
            { id: "eid1200", tween: [ "style", "${_papanasilemak_pg3}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 250 },
            { id: "eid1201", tween: [ "style", "${_papanasilemak_pg3}", "opacity", '0', { fromValue: '0'}], position: 9000, duration: 0 },
            { id: "eid834", tween: [ "style", "${_papabearsofa_pg5}", "opacity", '0', { fromValue: '0'}], position: 4500, duration: 0 },
            { id: "eid835", tween: [ "style", "${_papabearsofa_pg5}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 3000 },
            { id: "eid693", tween: [ "style", "${_window_pg3}", "opacity", '1', { fromValue: '0'}], position: 6606, duration: 1741 },
            { id: "eid1312", tween: [ "style", "${_window_pg3}", "opacity", '1', { fromValue: '1'}], position: 8347, duration: 0 },
            { id: "eid1356", tween: [ "style", "${_window_pg3}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid545", tween: [ "style", "${_babybearblink}", "top", '623px', { fromValue: '200px'}], position: 2000, duration: 141 },
            { id: "eid553", tween: [ "style", "${_storybookfont2}", "left", '525px', { fromValue: '525px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid1197", tween: [ "style", "${_papanasilemak_pg3}", "left", '324px', { fromValue: '6px'}], position: 8750, duration: 250 },
            { id: "eid1191", tween: [ "style", "${_Text_papa}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
            { id: "eid1214", tween: [ "style", "${_Text_papa}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 417 },
            { id: "eid884", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '1', { fromValue: '0.000000'}], position: 7500, duration: 847, easing: "easeInQuad" },
            { id: "eid891", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '1', { fromValue: '1'}], position: 8347, duration: 0, easing: "easeInQuad" },
            { id: "eid1202", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '1', { fromValue: '1'}], position: 8750, duration: 0, easing: "easeInQuad" },
            { id: "eid1204", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '1', { fromValue: '1'}], position: 9417, duration: 0, easing: "easeInQuad" },
            { id: "eid1206", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '0', { fromValue: '1'}], position: 9957, duration: 170, easing: "easeInQuad" },
            { id: "eid1189", tween: [ "style", "${_speechbubble-papa}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
            { id: "eid1212", tween: [ "style", "${_speechbubble-papa}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 417 },
            { id: "eid1232", tween: [ "style", "${_speechbubble-papa}", "opacity", '1', { fromValue: '0.000000'}], position: 9417, duration: 333 },
            { id: "eid1249", tween: [ "style", "${_speechbubble-papa}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 207 },
            { id: "eid1250", tween: [ "style", "${_speechbubble-papa}", "opacity", '1', { fromValue: '0.000000'}], position: 9957, duration: 293 },
            { id: "eid1282", tween: [ "style", "${_speechbubble-papa}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid840", tween: [ "style", "${_pg5_text}", "opacity", '0', { fromValue: '0.000000'}], position: 2620, duration: 12880 },
            { id: "eid849", tween: [ "style", "${_pg5_text}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 2000 },
            { id: "eid1421", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "left", '328px', { fromValue: '327px'}], position: 12250, duration: 553 },
            { id: "eid242", tween: [ "style", "${_floor}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2000, easing: "easeOutBounce" },
            { id: "eid799", tween: [ "style", "${_chairs_pg3}", "top", '-569px', { fromValue: '80px'}], position: 10750, duration: 417 },
            { id: "eid754", tween: [ "style", "${_bg_pg4}", "opacity", '1', { fromValue: '0.000000'}], position: 10385, duration: 2418 },
            { id: "eid805", tween: [ "style", "${_bg_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid1422", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "top", '683px', { fromValue: '87px'}], position: 12250, duration: 553 },
            { id: "eid1355", tween: [ "style", "${_mamabearblink}", "top", '-617px', { fromValue: '117px'}], position: 1990, duration: 104 },
            { id: "eid480", tween: [ "style", "${_bg_pg2}", "top", '-882px', { fromValue: '-216px'}], position: 7964, duration: 250, easing: "easeInQuad" },
            { id: "eid771", tween: [ "transform", "${_papabearsofa_pg4}", "scaleY", '1.05', { fromValue: '1.05'}], position: 9417, duration: 0 },
            { id: "eid770", tween: [ "transform", "${_papabearsofa_pg4}", "scaleX", '1.05', { fromValue: '1.05'}], position: 9417, duration: 0 },
            { id: "eid1394", tween: [ "style", "${_speechbubble-papa}", "top", '-468px', { fromValue: '73px'}], position: 10750, duration: 124 },
            { id: "eid970", tween: [ "style", "${_textbox_pg2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3228 },
            { id: "eid971", tween: [ "style", "${_textbox_pg2}", "opacity", '1', { fromValue: '1'}], position: 3228, duration: 0 },
            { id: "eid1284", tween: [ "style", "${_textbox_pg2}", "opacity", '0', { fromValue: '1'}], position: 5584, duration: 2380 },
            { id: "eid1175", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '1', { fromValue: '0.000000'}], position: 8347, duration: 403 },
            { id: "eid1182", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '0', { fromValue: '1'}], position: 8750, duration: 250 },
            { id: "eid1183", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 417 },
            { id: "eid1253", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '0', { fromValue: '1'}], position: 9417, duration: 333 },
            { id: "eid1254", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '1', { fromValue: '0.000000'}], position: 9750, duration: 207 },
            { id: "eid1281", tween: [ "style", "${_ahlingpg3-eatnasilemak}", "opacity", '0', { fromValue: '1'}], position: 9957, duration: 293 },
            { id: "eid1402", tween: [ "style", "${_ahlingpg3-babybear2}", "left", '339px', { fromValue: '342px'}], position: 10750, duration: 95 },
            { id: "eid1352", tween: [ "style", "${_ahlingsleep_pg1}", "top", '691px', { fromValue: '299px'}], position: 2000, duration: 76 },
            { id: "eid707", tween: [ "style", "${_play_btn}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid240", tween: [ "style", "${_play_btn}", "opacity", '0', { fromValue: '1'}], position: 403, duration: 1597, easing: "easeOutBounce" },
            { id: "eid665", tween: [ "style", "${_cloudPG2ANIMATION}", "opacity", '0', { fromValue: '1'}], position: 2862, duration: 5505 },
            { id: "eid1236", tween: [ "style", "${_Text_mama}", "opacity", '1', { fromValue: '0.000000'}], position: 9417, duration: 320 },
            { id: "eid1251", tween: [ "style", "${_Text_mama}", "opacity", '0', { fromValue: '1'}], position: 9737, duration: 220 },
            { id: "eid13", tween: [ "style", "${_play_btn}", "left", '679px', { fromValue: '1059px'}], position: 0, duration: 300 },
            { id: "eid1314", tween: [ "style", "${_play_btn}", "left", '675px', { fromValue: '679px'}], position: 300, duration: 103, easing: "easeOutBounce" },
            { id: "eid697", tween: [ "style", "${_play_btn}", "left", '1291px', { fromValue: '675px'}], position: 403, duration: 1597 },
            { id: "eid1054", tween: [ "style", "${_play_btn}", "left", '1289px', { fromValue: '1291px'}], position: 2000, duration: 3000 },
            { id: "eid1057", tween: [ "style", "${_play_btn}", "left", '1289px', { fromValue: '1289px'}], position: 8750, duration: 0 },
            { id: "eid1270", tween: [ "style", "${_babynasilemak_pg3}", "left", '309px', { fromValue: '586px'}], position: 9957, duration: 170, easing: "easeInQuad" },
            { id: "eid1419", tween: [ "style", "${_babynasilemak_pg3}", "left", '311px', { fromValue: '309px'}], position: 10127, duration: 123 },
            { id: "eid751", tween: [ "style", "${_bgpg3-2}", "top", '721px', { fromValue: '-2px'}], position: 10750, duration: 403 },
            { id: "eid1351", tween: [ "style", "${_ahlingsleep_pg1}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1357", tween: [ "style", "${_ahlingsleep_pg1}", "opacity", '0', { fromValue: '1'}], position: 634, duration: 1366 },
            { id: "eid1404", tween: [ "style", "${_ahlingpg3-babybear2}", "top", '132px', { fromValue: '124px'}], position: 9737, duration: 1013 },
            { id: "eid1403", tween: [ "style", "${_ahlingpg3-babybear2}", "top", '-531px', { fromValue: '132px'}], position: 10750, duration: 95 },
            { id: "eid798", tween: [ "style", "${_chairs_pg3}", "left", '283px', { fromValue: '285px'}], position: 10750, duration: 417 },
            { id: "eid817", tween: [ "style", "${_football_pg4}", "top", '681px', { fromValue: '483px'}], position: 15978, duration: 1228 },
            { id: "eid550", tween: [ "style", "${_storybookfont2}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 184, easing: "easeInBounce" },
            { id: "eid1409", tween: [ "style", "${_ahlingpg3-mamanasilemak2}", "top", '-794px', { fromValue: '-171px'}], position: 9957, duration: 93 },
            { id: "eid689", tween: [ "style", "${_table}", "opacity", '0', { fromValue: '0.000000'}], position: 2875, duration: 3500 },
            { id: "eid690", tween: [ "style", "${_table}", "opacity", '1', { fromValue: '0'}], position: 6375, duration: 1964 },
            { id: "eid737", tween: [ "style", "${_table}", "opacity", '1', { fromValue: '1'}], position: 10082, duration: 0 },
            { id: "eid1279", tween: [ "style", "${_table}", "opacity", '0', { fromValue: '1'}], position: 10252, duration: 498 },
            { id: "eid1354", tween: [ "style", "${_mamabearblink}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1490 },
            { id: "eid942", tween: [ "style", "${_papabearsofa_pg4}", "top", '203px', { fromValue: '-427px'}], position: 8500, duration: 250 },
            { id: "eid1243", tween: [ "style", "${_mamanasilemak_pg3}", "top", '249px', { fromValue: '478px'}], position: 9417, duration: 333 },
            { id: "eid1418", tween: [ "style", "${_mamanasilemak_pg3}", "top", '-195px', { fromValue: '249px'}], position: 9750, duration: 500 },
            { id: "eid245", tween: [ "style", "${_babybearblink}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1500, easing: "easeOutBounce" },
            { id: "eid918", tween: [ "style", "${_textbox_pg3}", "top", '-210px', { fromValue: '3px'}], position: 8750, duration: 403 },
            { id: "eid540", tween: [ "transform", "${_ahling_pg2}", "scaleY", '0.23', { fromValue: '0.32'}], position: 4778, duration: 806 },
            { id: "eid558", tween: [ "style", "${_storybookfont2}", "top", '24px', { fromValue: '-195px'}], position: 0, duration: 135, easing: "easeInBounce" },
            { id: "eid582", tween: [ "style", "${_storybookfont2}", "top", '6px', { fromValue: '24px'}], position: 135, duration: 165, easing: "easeInBounce" },
            { id: "eid583", tween: [ "style", "${_storybookfont2}", "top", '28px', { fromValue: '6px'}], position: 300, duration: 200, easing: "easeInBounce" },
            { id: "eid584", tween: [ "style", "${_storybookfont2}", "top", '-244px', { fromValue: '28px'}], position: 500, duration: 384, easing: "easeInBounce" },
            { id: "eid585", tween: [ "style", "${_storybookfont2}", "top", '28px', { fromValue: '-244px'}], position: 884, duration: 250, easing: "easeInBounce" },
            { id: "eid658", tween: [ "style", "${_storybookfont2}", "top", '-262px', { fromValue: '28px'}], position: 1134, duration: 1728, easing: "easeInBounce" },
            { id: "eid873", tween: [ "style", "${_storybookfont2}", "top", '-286px', { fromValue: '-262px'}], position: 2862, duration: 5255, easing: "easeInBounce" },
            { id: "eid807", tween: [ "style", "${_babybearsofa_pg4}", "left", '1084px', { fromValue: '523px'}], position: 15978, duration: 772 },
            { id: "eid1299", tween: [ "style", "${_Text_baby}", "left", '187px', { fromValue: '188px'}], position: 10750, duration: 417 },
            { id: "eid769", tween: [ "style", "${_football_pg4}", "opacity", '1', { fromValue: '0.000000'}], position: 11610, duration: 1193 },
            { id: "eid826", tween: [ "style", "${_football_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid1310", tween: [ "style", "${_window_pg3}", "top", '-372px', { fromValue: '43px'}], position: 10750, duration: 417 },
            { id: "eid943", tween: [ "style", "${_babybearsofa_pg4}", "top", '144px', { fromValue: '-486px'}], position: 8500, duration: 250 },
            { id: "eid781", tween: [ "style", "${_babybearsofa_pg4}", "top", '144px', { fromValue: '144px'}], position: 9329, duration: 0 },
            { id: "eid1245", tween: [ "transform", "${_mamanasilemak_pg3}", "scaleY", '1.04', { fromValue: '1.5'}], position: 9417, duration: 333 },
            { id: "eid791", tween: [ "style", "${_papabearsofa_pg4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid792", tween: [ "style", "${_papabearsofa_pg4}", "opacity", '1', { fromValue: '0'}], position: 9206, duration: 3597 },
            { id: "eid825", tween: [ "style", "${_papabearsofa_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid1407", tween: [ "style", "${_ahlingpg3-mamanasilemak2}", "left", '-37px', { fromValue: '-37px'}], position: 9000, duration: 0 },
            { id: "eid1410", tween: [ "style", "${_ahlingpg3-mamanasilemak2}", "left", '-39px', { fromValue: '-37px'}], position: 9957, duration: 93 },
            { id: "eid1294", tween: [ "style", "${_Text_mama}", "top", '-232px', { fromValue: '179px'}], position: 9957, duration: 417 },
            { id: "eid811", tween: [ "style", "${_bg_pg4}", "top", '-1220px', { fromValue: '-538px'}], position: 15978, duration: 396 },
            { id: "eid1261", tween: [ "style", "${_Text_baby}", "opacity", '1', { fromValue: '0.000000'}], position: 9957, duration: 293 },
            { id: "eid1283", tween: [ "style", "${_Text_baby}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid1317", tween: [ "style", "${_text_pg4}", "opacity", '1', { fromValue: '0'}], position: 10277, duration: 2526 },
            { id: "eid1318", tween: [ "style", "${_text_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid1239", tween: [ "style", "${_mamanasilemak_pg3}", "left", '483px', { fromValue: '483px'}], position: 9417, duration: 0 },
            { id: "eid546", tween: [ "style", "${_papabearblink}", "top", '-633px', { fromValue: '43px'}], position: 2000, duration: 141 },
            { id: "eid1199", tween: [ "transform", "${_papanasilemak_pg3}", "scaleY", '0.35', { fromValue: '0.56'}], position: 8750, duration: 250 },
            { id: "eid539", tween: [ "transform", "${_ahling_pg2}", "scaleX", '0.23', { fromValue: '0.32'}], position: 4778, duration: 806 },
            { id: "eid1271", tween: [ "style", "${_babynasilemak_pg3}", "top", '122px', { fromValue: '380px'}], position: 9957, duration: 170, easing: "easeInQuad" },
            { id: "eid1420", tween: [ "style", "${_babynasilemak_pg3}", "top", '-248px', { fromValue: '122px'}], position: 10127, duration: 123 },
            { id: "eid511", tween: [ "style", "${_ahling_pg2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid541", tween: [ "style", "${_ahling_pg2}", "opacity", '1', { fromValue: '0'}], position: 4116, duration: 662 },
            { id: "eid512", tween: [ "style", "${_ahling_pg2}", "opacity", '1', { fromValue: '1'}], position: 4778, duration: 0 },
            { id: "eid1290", tween: [ "style", "${_ahling_pg2}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 2250 },
            { id: "eid1244", tween: [ "transform", "${_mamanasilemak_pg3}", "scaleX", '1.04', { fromValue: '1.5'}], position: 9417, duration: 333 },
            { id: "eid778", tween: [ "style", "${_mamabearsofa-pg4}", "left", '140px', { fromValue: '140px'}], position: 9329, duration: 0 },
            { id: "eid814", tween: [ "style", "${_mamabearsofa-pg4}", "left", '138px', { fromValue: '140px'}], position: 15978, duration: 772 },
            { id: "eid1301", tween: [ "style", "${_Text_baby}", "top", '-254px', { fromValue: '151px'}], position: 10750, duration: 417 },
            { id: "eid706", tween: [ "style", "${_floor}", "top", '702px', { fromValue: '480px'}], position: 2000, duration: 141, easing: "easeOutBounce" },
            { id: "eid504", tween: [ "style", "${_coverpagebg}", "top", '-662px', { fromValue: '-26px'}], position: 2000, duration: 141, easing: "easeInQuad" },
            { id: "eid862", tween: [ "style", "${_speechbubble}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 13250 },
            { id: "eid864", tween: [ "style", "${_speechbubble}", "opacity", '1', { fromValue: '0'}], position: 15500, duration: 2000 },
            { id: "eid695", tween: [ "style", "${_chairs_pg3}", "opacity", '1', { fromValue: '0'}], position: 7964, duration: 170 },
            { id: "eid736", tween: [ "style", "${_chairs_pg3}", "opacity", '1', { fromValue: '1'}], position: 8134, duration: 0 },
            { id: "eid1276", tween: [ "style", "${_chairs_pg3}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid838", tween: [ "style", "${_ahling-pg5}", "opacity", '1', { fromValue: '0.000000'}], position: 14500, duration: 3000 },
            { id: "eid818", tween: [ "style", "${_ahling_pg4}", "top", '292px', { fromValue: '-82px'}], position: 15500, duration: 1228 },
            { id: "eid1272", tween: [ "transform", "${_babynasilemak_pg3}", "scaleX", '0.24', { fromValue: '0.43'}], position: 9957, duration: 170, easing: "easeInQuad" },
            { id: "eid1198", tween: [ "transform", "${_papanasilemak_pg3}", "scaleX", '0.35', { fromValue: '0.56'}], position: 8750, duration: 250 },
            { id: "eid1196", tween: [ "style", "${_papanasilemak_pg3}", "top", '158px', { fromValue: '380px'}], position: 8750, duration: 250 },
            { id: "eid1308", tween: [ "style", "${_papanasilemak_pg3}", "top", '-320px', { fromValue: '158px'}], position: 9000, duration: 417 },
            { id: "eid1186", tween: [ "style", "${_ahling-pg3papabear}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
            { id: "eid1211", tween: [ "style", "${_ahling-pg3papabear}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 417 },
            { id: "eid841", tween: [ "style", "${_ahling_pg4}", "opacity", '0', { fromValue: '0'}], position: 2395, duration: 0 },
            { id: "eid842", tween: [ "style", "${_ahling_pg4}", "opacity", '1', { fromValue: '0'}], position: 11610, duration: 1193 },
            { id: "eid820", tween: [ "style", "${_ahling_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 2697 },
            { id: "eid1303", tween: [ "style", "${_table}", "top", '289px', { fromValue: '289px'}], position: 10750, duration: 0 },
            { id: "eid675", tween: [ "style", "${_ahling_pg3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 11 },
            { id: "eid676", tween: [ "style", "${_ahling_pg3}", "opacity", '0', { fromValue: '0'}], position: 11, duration: 0 },
            { id: "eid679", tween: [ "style", "${_ahling_pg3}", "opacity", '1', { fromValue: '0'}], position: 6606, duration: 1741 },
            { id: "eid741", tween: [ "style", "${_ahling_pg3}", "opacity", '0', { fromValue: '1'}], position: 8347, duration: 403 },
            { id: "eid478", tween: [ "style", "${_bg_pg2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1886, easing: "easeInQuad" },
            { id: "eid479", tween: [ "style", "${_bg_pg2}", "opacity", '0', { fromValue: '1'}], position: 1886, duration: 5614, easing: "easeInQuad" },
            { id: "eid1273", tween: [ "transform", "${_babynasilemak_pg3}", "scaleY", '0.24', { fromValue: '0.43'}], position: 9957, duration: 170, easing: "easeInQuad" },
            { id: "eid912", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 847 },
            { id: "eid913", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '1', { fromValue: '1'}], position: 8347, duration: 0 },
            { id: "eid1179", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '1', { fromValue: '1'}], position: 8750, duration: 0 },
            { id: "eid1247", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '0', { fromValue: '1'}], position: 9417, duration: 333 },
            { id: "eid1248", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '0', { fromValue: '0'}], position: 9750, duration: 0 },
            { id: "eid1181", tween: [ "style", "${_mamanasilemak_pg3}", "opacity", '0', { fromValue: '0'}], position: 10719, duration: 0 },
            { id: "eid1423", tween: [ "style", "${_ahling_pg3}", "top", '-617px', { fromValue: '138px'}], position: 8750, duration: 286 },
            { id: "eid667", tween: [ "style", "${_cloudPG2ANIMATION}", "top", '-184px', { fromValue: '7px'}], position: 7964, duration: 403 },
            { id: "eid782", tween: [ "style", "${_papabearsofa_pg4}", "left", '22px', { fromValue: '22px'}], position: 9417, duration: 0 },
            { id: "eid812", tween: [ "style", "${_papabearsofa_pg4}", "left", '-506px', { fromValue: '22px'}], position: 15978, duration: 772 },
            { id: "eid465", tween: [ "style", "${_coverpagebg}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 2000, easing: "easeInBounce" },
            { id: "eid560", tween: [ "style", "${_coverpagebg}", "opacity", '0', { fromValue: '0'}], position: 5250, duration: 0, easing: "easeOutBounce" },
            { id: "eid972", tween: [ "style", "${_textbox_pg2}", "top", '-232px', { fromValue: '0px'}], position: 7964, duration: 500 },
            { id: "eid831", tween: [ "style", "${_bg_pg52}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid836", tween: [ "style", "${_bg_pg52}", "opacity", '1', { fromValue: '0'}], position: 14500, duration: 3000 },
            { id: "eid1259", tween: [ "style", "${_ahlingpg3-babybear2}", "opacity", '1', { fromValue: '0.000000'}], position: 9957, duration: 293 },
            { id: "eid1280", tween: [ "style", "${_ahlingpg3-babybear2}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid1217", tween: [ "style", "${_ahlingpg3-mamanasilemak2}", "opacity", '1', { fromValue: '0.000000'}], position: 9417, duration: 333 },
            { id: "eid1252", tween: [ "style", "${_ahlingpg3-mamanasilemak2}", "opacity", '0', { fromValue: '1'}], position: 9750, duration: 207 },
            { id: "eid662", tween: [ "style", "${_bgpg3-2}", "opacity", '1', { fromValue: '0'}], position: 6606, duration: 1733 },
            { id: "eid1278", tween: [ "style", "${_bgpg3-2}", "opacity", '0', { fromValue: '1'}], position: 10250, duration: 500 },
            { id: "eid870", tween: [ "style", "${_textbox_pg3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid957", tween: [ "style", "${_textbox_pg3}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 1597 },
            { id: "eid871", tween: [ "style", "${_textbox_pg3}", "opacity", '0', { fromValue: '1'}], position: 8347, duration: 403 },
            { id: "eid533", tween: [ "style", "${_ahling_pg2}", "left", '144px', { fromValue: '-255px'}], position: 4778, duration: 806 },
            { id: "eid534", tween: [ "style", "${_ahling_pg2}", "top", '-157px', { fromValue: '-79px'}], position: 4778, duration: 806 },
            { id: "eid548", tween: [ "style", "${_ahling_pg2}", "top", '-767px', { fromValue: '-157px'}], position: 8117, duration: 250, easing: "easeInQuad" },
            { id: "eid241", tween: [ "style", "${_papabearblink}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 1500 },
            { id: "eid797", tween: [ "style", "${_babybearsofa_pg4}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 4053 },
            { id: "eid808", tween: [ "style", "${_babybearsofa_pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid944", tween: [ "style", "${_mamabearsofa-pg4}", "top", '-1px', { fromValue: '-631px'}], position: 8500, duration: 250 },
            { id: "eid1424", tween: [ "style", "${_mamabearsofa-pg4}", "top", '-2px', { fromValue: '-1px'}], position: 9329, duration: 3474, easing: "easeInQuad" },
            { id: "eid794", tween: [ "style", "${_mamabearsofa-pg4}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 4053 },
            { id: "eid806", tween: [ "style", "${_mamabearsofa-pg4}", "opacity", '0', { fromValue: '1'}], position: 12803, duration: 3175 },
            { id: "eid1379", tween: [ "style", "${_ahling-pg3papabear}", "top", '-568px', { fromValue: '83px'}], position: 9417, duration: 124 },
            { id: "eid1293", tween: [ "style", "${_Text_papa}", "top", '-210px', { fromValue: '183px'}], position: 9417, duration: 417 },
            { id: "eid1316", tween: [ "style", "${_Text_pg4}", "text-align", '', { fromValue: '0'}], position: 10277, duration: 0 }         ]
      }
   }
},
"papabear1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'bear',
      rect: ['57px','81px','291px','417px','auto','auto'],
      transform: [[0,0],[],[],['1.39','1.39']],
      fill: ['rgba(0,0,0,0)','images/bear.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bear}": [
            ["style", "top", '81px'],
            ["style", "height", '417px'],
            ["transform", "scaleY", '1.39'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '1.39'],
            ["style", "opacity", '1'],
            ["style", "left", '57px'],
            ["style", "width", '291px']
         ],
         "${symbolSelector}": [
            ["style", "height", '580px'],
            ["style", "width", '404px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "style", "${_bear}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"babybear1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['1.07','1.07']],
      id: 'bear3',
      type: 'image',
      rect: ['-6px','8px','304px','432px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bear3.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.33','0.33']],
      id: 'babybear-close2',
      type: 'image',
      rect: ['-241px','-377px','764px','1224px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/babybear-close.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_babybear-close2}": [
            ["style", "top", '-388px'],
            ["transform", "scaleY", '0.31'],
            ["transform", "scaleX", '0.31'],
            ["style", "opacity", '0'],
            ["style", "left", '-236px']
         ],
         "${_bear3}": [
            ["style", "top", '8px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '432px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '-6px'],
            ["style", "width", '304px']
         ],
         "${symbolSelector}": [
            ["style", "height", '432px'],
            ["style", "width", '298px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1086,
         autoPlay: true,
         labels: {
            "loop": 0
         },
         timeline: [
            { id: "eid598", tween: [ "style", "${_babybear-close2}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid649", tween: [ "style", "${_babybear-close2}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 0, easing: "easeOutBounce" },
            { id: "eid650", tween: [ "style", "${_babybear-close2}", "opacity", '0', { fromValue: '1'}], position: 1086, duration: 0, easing: "easeOutBounce" },
            { id: "eid140", tween: [ "style", "${_bear3}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid647", tween: [ "style", "${_bear3}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 0, easing: "easeOutBounce" },
            { id: "eid648", tween: [ "style", "${_bear3}", "opacity", '1', { fromValue: '0'}], position: 1086, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"mamabearblink": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.35','0.35']],
      id: 'mamabear-closeeye2',
      type: 'image',
      rect: ['-216px','-602px','764px','1650px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mamabear-closeeye.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mamabear-closeeye2}": [
            ["style", "top", '-567px'],
            ["transform", "scaleY", '0.35'],
            ["style", "height", '1598px'],
            ["transform", "scaleX", '0.35'],
            ["style", "opacity", '0'],
            ["style", "left", '-208px'],
            ["style", "width", '740px']
         ],
         "${symbolSelector}": [
            ["style", "height", '517px'],
            ["style", "width", '322px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2126,
         autoPlay: true,
         labels: {
            "loop3": 0
         },
         timeline: [
            { id: "eid569", tween: [ "style", "${_mamabear-closeeye2}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid570", tween: [ "style", "${_mamabear-closeeye2}", "opacity", '1', { fromValue: '0'}], position: 1088, duration: 0, easing: "easeOutBounce" },
            { id: "eid594", tween: [ "style", "${_mamabear-closeeye2}", "opacity", '0', { fromValue: '1'}], position: 2126, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"papabearblink": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'papabearpage1',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      transform: [[0,0],[],[],['0.79','0.79']],
      id: 'papabearcloseeye2',
      type: 'image',
      rect: ['-2px','-31px','393px','690px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/papabearcloseeye.svg','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'papabearpage1',
      symbolName: 'papabear1'
   }   ]
   },
   states: {
      "Base State": {
         "${_papabearpage1}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_papabearcloseeye2}": [
            ["style", "top", '-31px'],
            ["transform", "scaleY", '0.85'],
            ["style", "height", '666px'],
            ["transform", "scaleX", '0.85'],
            ["style", "opacity", '0'],
            ["style", "left", '8px'],
            ["style", "width", '380px']
         ],
         "${symbolSelector}": [
            ["style", "height", '580px'],
            ["style", "width", '405px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1860,
         autoPlay: true,
         labels: {
            "loop2": 0
         },
         timeline: [
            { id: "eid193", tween: [ "style", "${_papabearpage1}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutBounce" },
            { id: "eid588", tween: [ "style", "${_papabearpage1}", "opacity", '1', { fromValue: '1'}], position: 750, duration: 0, easing: "easeOutBounce" },
            { id: "eid592", tween: [ "style", "${_papabearpage1}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 0, easing: "easeOutBounce" },
            { id: "eid590", tween: [ "style", "${_papabearpage1}", "opacity", '0', { fromValue: '0'}], position: 1860, duration: 0, easing: "easeOutBounce" },
            { id: "eid1336", tween: [ "style", "${_papabearcloseeye2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1337", tween: [ "style", "${_papabearcloseeye2}", "opacity", '0', { fromValue: '0'}], position: 750, duration: 0 },
            { id: "eid591", tween: [ "style", "${_papabearcloseeye2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0, easing: "easeOutBounce" },
            { id: "eid589", tween: [ "style", "${_papabearcloseeye2}", "opacity", '1', { fromValue: '1'}], position: 1860, duration: 0, easing: "easeOutBounce" }         ]
      }
   }
},
"cloud-pg2ANIMATION": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'clouds-pg2',
      type: 'image',
      rect: ['0px','0px','327px','170px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Design/Degree/Sem%204/Experiential/storybook%20images-edge/clouds-pg1.png','0px','0px']
   },
   {
      id: 'clouds-pg2Copy',
      type: 'image',
      rect: ['890px','6px','327px','170px','auto','auto'],
      fill: ['rgba(0,0,0,0)','Design/Degree/Sem%204/Experiential/storybook%20images-edge/clouds-pg1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_clouds-pg2Copy}": [
            ["style", "top", '6px'],
            ["style", "height", '170px'],
            ["style", "opacity", '0'],
            ["style", "left", '890px'],
            ["style", "width", '327px']
         ],
         "${_clouds-pg2}": [
            ["style", "top", '0px'],
            ["style", "height", '170px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '327px']
         ],
         "${symbolSelector}": [
            ["style", "height", '170px'],
            ["style", "width", '327px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 871,
         autoPlay: true,
         labels: {
            "loopclouds": 0
         },
         timeline: [
            { id: "eid309", tween: [ "style", "${_clouds-pg2Copy}", "left", '682px', { fromValue: '890px'}], position: 621, duration: 250 },
            { id: "eid311", tween: [ "style", "${_clouds-pg2}", "left", '255px', { fromValue: '0px'}], position: 621, duration: 250 },
            { id: "eid317", tween: [ "style", "${_clouds-pg2Copy}", "opacity", '0.01', { fromValue: '0'}], position: 0, duration: 604 },
            { id: "eid319", tween: [ "style", "${_clouds-pg2Copy}", "opacity", '1', { fromValue: '0.01'}], position: 604, duration: 17 },
            { id: "eid318", tween: [ "style", "${_clouds-pg2}", "opacity", '0.01', { fromValue: '0'}], position: 0, duration: 604 },
            { id: "eid320", tween: [ "style", "${_clouds-pg2}", "opacity", '1', { fromValue: '0.01'}], position: 604, duration: 17 }         ]
      }
   }
},
"cloudPG2ANIMATION": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'clouds-pg12',
      type: 'image',
      rect: ['0px','0px','327px','170px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/clouds-pg1.png','0px','0px']
   },
   {
      id: 'clouds-pg12Copy',
      type: 'image',
      rect: ['692px','0px','327px','170px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/clouds-pg1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_clouds-pg12Copy}": [
            ["style", "top", '0px'],
            ["style", "height", '170px'],
            ["style", "opacity", '0'],
            ["style", "left", '692px'],
            ["style", "width", '327px']
         ],
         "${_clouds-pg12}": [
            ["style", "top", '0px'],
            ["style", "height", '170px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '327px']
         ],
         "${symbolSelector}": [
            ["style", "height", '170px'],
            ["style", "width", '327px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: true,
         timeline: [
            { id: "eid503", tween: [ "style", "${_clouds-pg12}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 5000 },
            { id: "eid502", tween: [ "style", "${_clouds-pg12Copy}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 5000 }         ]
      }
   }
},
"window_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.33','0.33']],
      id: 'windowpg32',
      type: 'image',
      rect: ['-272px','-294px','814px','878px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/windowpg3.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.33','0.33']],
      id: 'windowpg32Copy',
      type: 'image',
      rect: ['330px','-294px','814px','878px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/windowpg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_windowpg32Copy}": [
            ["transform", "scaleX", '0.33'],
            ["transform", "scaleY", '0.33'],
            ["style", "left", '330px'],
            ["style", "top", '-294px']
         ],
         "${_windowpg32}": [
            ["style", "top", '-294px'],
            ["transform", "scaleX", '0.33'],
            ["style", "left", '-272px'],
            ["transform", "scaleY", '0.33']
         ],
         "${symbolSelector}": [
            ["style", "height", '290px'],
            ["style", "width", '269px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"chairs_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.43','0.43']],
      id: 'chair-pg3-1',
      type: 'image',
      rect: ['-660px','-304px','1212px','1022px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/chair-pg3.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.42','0.42']],
      id: 'chair-pg3-2',
      type: 'image',
      rect: ['-298px','-229px','1107px','934px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/chair-pg3.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.36','0.36']],
      id: 'chair-pg3-3',
      type: 'image',
      rect: ['-10px','-210px','1123px','947px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/chair-pg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_chair-pg3-1}": [
            ["style", "top", '-304px'],
            ["transform", "scaleX", '0.43'],
            ["style", "left", '-660px'],
            ["transform", "scaleY", '0.43']
         ],
         "${_chair-pg3-2}": [
            ["style", "top", '-229px'],
            ["transform", "scaleY", '0.42'],
            ["transform", "scaleX", '0.42'],
            ["style", "height", '934px'],
            ["style", "left", '-298px'],
            ["style", "width", '1107px']
         ],
         "${_chair-pg3-3}": [
            ["style", "top", '-210px'],
            ["transform", "scaleY", '0.36'],
            ["transform", "scaleX", '0.36'],
            ["style", "height", '947px'],
            ["style", "left", '-10px'],
            ["style", "width", '1123px']
         ],
         "${symbolSelector}": [
            ["style", "height", '439px'],
            ["style", "width", '521px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ahling_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'ahlingopenmouth',
      rect: ['-436px','-519px','1300px','1445px','auto','auto'],
      transform: [[0,0],[],[],['0.33','0.33']],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-mamabear.svg','0px','0px']
   },
   {
      type: 'image',
      id: 'ahling_pg3',
      rect: ['-435px','-435px','1300px','1297px','auto','auto'],
      transform: [[0,0],[],[],['0.33','0.33']],
      fill: ['rgba(0,0,0,0)','images/page3/ahling-pg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ahling_pg3}": [
            ["style", "top", '-435px'],
            ["transform", "scaleY", '0.33'],
            ["style", "height", '1297px'],
            ["transform", "scaleX", '0.33'],
            ["style", "opacity", '1'],
            ["style", "left", '-435px'],
            ["style", "width", '1300px']
         ],
         "${_ahlingopenmouth}": [
            ["style", "top", '-519px'],
            ["transform", "scaleY", '0.33'],
            ["style", "height", '1445px'],
            ["transform", "scaleX", '0.33'],
            ["style", "left", '-436px'],
            ["style", "width", '1300px']
         ],
         "${symbolSelector}": [
            ["style", "height", '451px'],
            ["style", "width", '384px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         timeline: [
            { id: "eid860", tween: [ "style", "${_ahling_pg3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 5000 }         ]
      }
   }
},
"mamanasilemak_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.2','0.2']],
      id: 'mamanasilemak_pg3',
      type: 'image',
      rect: ['-494px','-278px','1236px','696px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/mamabearnasilemak-pg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mamanasilemak_pg3}": [
            ["style", "top", '-278px'],
            ["transform", "scaleY", '0.2'],
            ["transform", "scaleX", '0.2'],
            ["style", "opacity", '1'],
            ["style", "left", '-494px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '247px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"babynasilemak_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'babynasilemak_pg3',
      rect: ['0px','0px','222px','120px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/page3/babybearnasilemak-pg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_babynasilemak_pg3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '120px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '222px']
         ],
         "${symbolSelector}": [
            ["style", "height", '120px'],
            ["style", "width", '222px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8347,
         autoPlay: true,
         timeline: [
            { id: "eid703", tween: [ "style", "${_babynasilemak_pg3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 8347 }         ]
      }
   }
},
"football_pg4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-77px','-78px','266px','271px','auto','auto'],
      id: 'football-pg4',
      transform: [[0,0],[],[],['0.42','0.42']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/page4/football-pg4.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_football-pg4}": [
            ["style", "top", '-78px'],
            ["transform", "scaleY", '0.42'],
            ["transform", "rotateZ", '0deg'],
            ["transform", "scaleX", '0.42'],
            ["style", "height", '271px'],
            ["style", "left", '-77px'],
            ["style", "width", '266px']
         ],
         "${symbolSelector}": [
            ["style", "height", '114px'],
            ["style", "width", '112px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         labels: {
            "loopball": 0
         },
         timeline: [
            { id: "eid757", tween: [ "transform", "${_football-pg4}", "rotateZ", '-44deg', { fromValue: '0deg'}], position: 0, duration: 1000 },
            { id: "eid758", tween: [ "transform", "${_football-pg4}", "rotateZ", '-122deg', { fromValue: '-44deg'}], position: 1000, duration: 1000 },
            { id: "eid761", tween: [ "style", "${_football-pg4}", "left", '-288px', { fromValue: '-77px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"papabearsofa_pg4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'papabearsofa-pg4',
      rect: ['-203px','-253px','727px','904px','auto','auto'],
      transform: [[0,0],[],[],['0.44','0.44']],
      fill: ['rgba(0,0,0,0)','images/page4/papabearsofa-pg4.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_papabearsofa-pg4}": [
            ["style", "top", '-253px'],
            ["transform", "scaleY", '0.44'],
            ["transform", "scaleX", '0.44'],
            ["style", "opacity", '0'],
            ["style", "left", '-203px']
         ],
         "${symbolSelector}": [
            ["style", "height", '398px'],
            ["style", "width", '320px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9329,
         autoPlay: true,
         timeline: [
            { id: "eid764", tween: [ "style", "${_papabearsofa-pg4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid766", tween: [ "style", "${_papabearsofa-pg4}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 579 }         ]
      }
   }
},
"textbox_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'textbox_pg3',
      type: 'group',
      rect: ['0px','0px','1024','139','auto','auto'],
      c: [
      {
         rect: ['0px','0px','1024px','139px','auto','auto'],
         opacity: 0.38,
         id: 'RectangleCopy',
         stroke: [0,'rgba(0,0,0,1)','none'],
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      }]
   },
   {
      font: ['Arial, Helvetica, sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'text_pg3',
      text: 'Ah Ling saw 3 plates of nasi lemak on the table.<br>Help Ah Ling pick one nasi lemak.',
      align: 'left',
      rect: ['20px','13px','950px','114px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textbox_pg3}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.7920629978179932'],
            ["style", "left", '0px']
         ],
         "${_text_pg3}": [
            ["style", "top", '13px'],
            ["style", "text-align", 'left'],
            ["style", "left", '20px']
         ],
         "${_RectangleCopy}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0.3799999952316284'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"text_pg1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pg1_text',
      type: 'group',
      rect: ['0px','0px','1024','139','auto','auto'],
      c: [
      {
         rect: ['0px','0px','1024px','139px','auto','auto'],
         stroke: [0,'rgba(0,0,0,1)','none'],
         id: 'Rectangle',
         opacity: 0.38,
         type: 'rect',
         fill: ['rgba(255,255,255,1.00)']
      },
      {
         font: ['Arial, Helvetica, sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
         type: 'text',
         id: 'Text2',
         text: 'One day when Ah Ling was taking a walk.<br>She got lost in the forest.<br>She found a house.',
         align: 'left',
         rect: ['23px','16px','950px','114px','auto','auto']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pg1_text}": [
            ["style", "top", '0px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.38'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["style", "top", '16px'],
            ["style", "text-align", 'left'],
            ["style", "left", '23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8347,
         autoPlay: true,
         timeline: [
            { id: "eid848", tween: [ "style", "${_pg1_text}", "top", '-226px', { fromValue: '0px'}], position: 7500, duration: 847 },
            { id: "eid845", tween: [ "style", "${_pg1_text}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 61 },
            { id: "eid846", tween: [ "style", "${_pg1_text}", "opacity", '1', { fromValue: '0.000000'}], position: 61, duration: 5020 },
            { id: "eid847", tween: [ "style", "${_pg1_text}", "opacity", '0', { fromValue: '1'}], position: 5081, duration: 2419 }         ]
      }
   }
},
"papanasilemak_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['-24px','-13px','302px','165px','auto','auto'],
      transform: [[0,0],[],[],['0.84','0.84']],
      id: 'papanasilemak_pg3',
      opacity: 1,
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/page3/papabearnasilemak-pg3.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_papanasilemak_pg3}": [
            ["style", "top", '-13px'],
            ["transform", "scaleX", '0.84'],
            ["transform", "scaleY", '0.84'],
            ["style", "left", '-24px'],
            ["style", "height", '165px'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '302px']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '254px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"textbox_pg2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','1024px','158px','auto','auto'],
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'textbox_pg2',
      opacity: 0.5,
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)']
   },
   {
      rect: ['14px','14px','998px','158px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',35,'rgba(0,0,0,1)','normal','none','normal'],
      align: 'left',
      id: 'Text',
      text: 'One fine day, Ah ling was taking a walk.<br>She got lost and found a house in the forest.',
      opacity: 1,
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_textbox_pg2}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.5'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text}": [
            ["style", "opacity", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '158px'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"speechbubble_4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'speechbubble_4',
      type: 'image',
      rect: ['0px','0px','465px','404px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page5/speechbubble.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_speechbubble_4}": [
            ["style", "top", '0px'],
            ["style", "height", '404px'],
            ["style", "left", '0px'],
            ["style", "width", '465px']
         ],
         "${symbolSelector}": [
            ["style", "height", '404px'],
            ["style", "width", '465px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ahlingeat_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ahlingpg3-eatnasilemak',
      type: 'image',
      rect: ['0px','0px','384px','477px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-eatnasilemak.svg','0px','0px']
   },
   {
      rect: ['-455px','-555px','1337px','1553px','auto','auto'],
      id: 'ahling_papabear3',
      transform: [[0,0],[],[],['0.32','0.32']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/page3/ahling-pg3papabear.svg','0px','0px']
   },
   {
      id: 'papabearnasilemak-pg3',
      type: 'image',
      rect: ['-239px','346px','239px','131px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/papabearnasilemak-pg3.svg','0px','0px']
   },
   {
      id: 'speechbubble2_4',
      type: 'rect',
      rect: ['34','34','auto','auto','auto','auto']
   },
   {
      rect: ['-170px','125px','230px','128px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'Text3',
      text: 'This nasi lemak is too hard<br>',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'speechbubble2_4',
      symbolName: 'speechbubble_4'
   }   ]
   },
   states: {
      "Base State": {
         "${_ahling_papabear3}": [
            ["style", "top", '-555px'],
            ["transform", "scaleY", '0.32'],
            ["transform", "scaleX", '0.32'],
            ["style", "height", '1553px'],
            ["style", "opacity", '0'],
            ["style", "left", '-455px'],
            ["style", "width", '1337px']
         ],
         "${_speechbubble2_4}": [
            ["style", "top", '-44px'],
            ["style", "opacity", '0'],
            ["style", "left", '-288px']
         ],
         "${_papabearnasilemak-pg3}": [
            ["style", "top", '346px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '131px'],
            ["transform", "scaleX", '1.05'],
            ["style", "opacity", '1'],
            ["style", "left", '-239px'],
            ["style", "width", '239px']
         ],
         "${symbolSelector}": [
            ["style", "height", '477px'],
            ["style", "width", '384px']
         ],
         "${_Text3}": [
            ["style", "top", '125px'],
            ["style", "text-align", 'center'],
            ["style", "height", '128px'],
            ["style", "width", '230px'],
            ["style", "left", '-170px'],
            ["style", "font-size", '30px']
         ],
         "${_ahlingpg3-eatnasilemak}": [
            ["style", "top", '0px'],
            ["style", "height", '477px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '384px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9153,
         autoPlay: true,
         labels: {
            "eatpapanasilemak": 0
         },
         timeline: [
         ]
      }
   }
},
"ahlingeat2_pg3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.64','0.64']],
      id: 'ahlingpg3-eatnasilemak5',
      type: 'image',
      rect: ['-116px','-144px','644px','801px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-eatnasilemak.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ahlingpg3-eatnasilemak5}": [
            ["style", "top", '-144px'],
            ["transform", "scaleY", '0.64'],
            ["style", "left", '-116px'],
            ["transform", "scaleX", '0.64']
         ],
         "${symbolSelector}": [
            ["style", "height", '513px'],
            ["style", "width", '412px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ahlingeat_pg3-2": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ahlingpg3-eatnasilemak6',
      type: 'image',
      rect: ['0px','0px','394px','489px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-eatnasilemak.svg','0px','0px']
   },
   {
      id: 'ahlingpg3-mamanasilemak3',
      type: 'image',
      rect: ['-35px','0px','504px','447px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-mamanasilemak.svg','0px','0px']
   },
   {
      id: 'mamabearnasilemak-pg3',
      type: 'image',
      rect: ['130px','367px','232px','116px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/mamabearnasilemak-pg3.svg','0px','0px']
   },
   {
      id: 'speechbubble4-2',
      type: 'image',
      rect: ['-220px','-17px','392px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page5/speechbubble.svg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text3',
      text: 'This nasi lemak is too soft',
      align: 'center',
      rect: ['-135px','117px','221px','134px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_speechbubble4-2}": [
            ["style", "top", '-17px'],
            ["transform", "scaleY", '1.03'],
            ["transform", "scaleX", '1.03'],
            ["style", "opacity", '0'],
            ["style", "left", '-220px']
         ],
         "${symbolSelector}": [
            ["style", "height", '489px'],
            ["style", "width", '394px']
         ],
         "${_Text3}": [
            ["style", "top", '117px'],
            ["style", "opacity", '0'],
            ["style", "left", '-135px'],
            ["style", "width", '221px']
         ],
         "${_ahlingpg3-eatnasilemak6}": [
            ["style", "top", '0px'],
            ["style", "height", '489px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '394px']
         ],
         "${_ahlingpg3-mamanasilemak3}": [
            ["style", "top", '0px'],
            ["style", "height", '447px'],
            ["style", "opacity", '0'],
            ["style", "left", '-35px'],
            ["style", "width", '504px']
         ],
         "${_mamabearnasilemak-pg3}": [
            ["style", "top", '367px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '116px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '130px'],
            ["style", "width", '232px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 9417,
         autoPlay: true,
         labels: {
            "eatmamanasilemak": 0
         },
         timeline: [
            { id: "eid1078", tween: [ "style", "${_mamabearnasilemak-pg3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 3000 },
            { id: "eid1100", tween: [ "transform", "${_speechbubble4-2}", "scaleY", '1.21', { fromValue: '1.03'}], position: 0, duration: 3250 },
            { id: "eid1086", tween: [ "transform", "${_mamabearnasilemak-pg3}", "scaleX", '0.72', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid1094", tween: [ "style", "${_speechbubble4-2}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3000 },
            { id: "eid1096", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 3000 },
            { id: "eid1074", tween: [ "style", "${_ahlingpg3-eatnasilemak6}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1075", tween: [ "style", "${_ahlingpg3-eatnasilemak6}", "opacity", '1', { fromValue: '1'}], position: 3000, duration: 0 },
            { id: "eid1090", tween: [ "style", "${_mamabearnasilemak-pg3}", "top", '137px', { fromValue: '367px'}], position: 0, duration: 1500 },
            { id: "eid1087", tween: [ "transform", "${_mamabearnasilemak-pg3}", "scaleY", '0.72', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid1099", tween: [ "transform", "${_speechbubble4-2}", "scaleX", '1.21', { fromValue: '1.03'}], position: 0, duration: 3250 },
            { id: "eid1088", tween: [ "style", "${_mamabearnasilemak-pg3}", "left", '130px', { fromValue: '130px'}], position: 0, duration: 0 },
            { id: "eid1072", tween: [ "style", "${_ahlingpg3-mamanasilemak3}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid1076", tween: [ "style", "${_ahlingpg3-mamanasilemak3}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 0 }         ]
      }
   }
},
"ahlingeat_pg3-3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'ahlingpg3-eatnasilemak7',
      type: 'image',
      rect: ['0px','0px','394px','490px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-eatnasilemak.svg','0px','0px']
   },
   {
      id: 'ahlingpg3-babybear3',
      type: 'image',
      rect: ['-35px','14px','429px','461px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/ahlingpg3-babybear.svg','0px','0px']
   },
   {
      id: 'babybearnasilemak-pg3',
      type: 'image',
      rect: ['423px','392px','198px','107px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page3/babybearnasilemak-pg3.svg','0px','0px']
   },
   {
      id: 'speechbubble5',
      type: 'image',
      rect: ['-230px','0px','392px','340px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/page5/speechbubble.svg','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',30,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text4',
      text: 'Ah! This is nasi lemak is just right',
      align: 'center',
      rect: ['-130px','108px','192px','160px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ahlingpg3-babybear3}": [
            ["style", "top", '14px'],
            ["transform", "scaleY", '0.98'],
            ["style", "height", '461px'],
            ["transform", "scaleX", '0.98'],
            ["style", "opacity", '0'],
            ["style", "left", '-35px'],
            ["style", "width", '429px']
         ],
         "${_ahlingpg3-eatnasilemak7}": [
            ["style", "top", '0px'],
            ["style", "height", '490px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '394px']
         ],
         "${symbolSelector}": [
            ["style", "height", '490px'],
            ["style", "width", '394px']
         ],
         "${_babybearnasilemak-pg3}": [
            ["style", "top", '392px'],
            ["transform", "scaleY", '1'],
            ["style", "height", '107px'],
            ["transform", "scaleX", '1'],
            ["style", "opacity", '1'],
            ["style", "left", '423px'],
            ["style", "width", '198px']
         ],
         "${_speechbubble5}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0'],
            ["style", "left", '-230px']
         ],
         "${_Text4}": [
            ["style", "top", '108px'],
            ["style", "font-size", '30px'],
            ["style", "opacity", '0'],
            ["style", "left", '-130px'],
            ["style", "width", '192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         labels: {
            "eatbabynasilemak": 0
         },
         timeline: [
            { id: "eid1148", tween: [ "transform", "${_ahlingpg3-babybear3}", "scaleX", '0.98', { fromValue: '0.98'}], position: 3000, duration: 0 },
            { id: "eid1143", tween: [ "style", "${_babybearnasilemak-pg3}", "left", '135px', { fromValue: '423px'}], position: 0, duration: 1500 },
            { id: "eid1149", tween: [ "transform", "${_ahlingpg3-babybear3}", "scaleY", '0.98', { fromValue: '0.98'}], position: 3000, duration: 0 },
            { id: "eid1134", tween: [ "style", "${_ahlingpg3-eatnasilemak7}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1136", tween: [ "style", "${_ahlingpg3-eatnasilemak7}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 0 },
            { id: "eid1144", tween: [ "style", "${_babybearnasilemak-pg3}", "top", '158px', { fromValue: '392px'}], position: 0, duration: 1500 },
            { id: "eid1155", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3000 },
            { id: "eid1133", tween: [ "style", "${_ahlingpg3-babybear3}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 0, duration: 0 },
            { id: "eid1135", tween: [ "style", "${_ahlingpg3-babybear3}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 0 },
            { id: "eid1145", tween: [ "transform", "${_babybearnasilemak-pg3}", "scaleX", '0.73', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid1147", tween: [ "style", "${_babybearnasilemak-pg3}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid1146", tween: [ "transform", "${_babybearnasilemak-pg3}", "scaleY", '0.73', { fromValue: '1'}], position: 0, duration: 1500 },
            { id: "eid1152", tween: [ "style", "${_speechbubble5}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 3000 }         ]
      }
   }
},
"text_pg4": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','1028px','139px','auto','auto'],
      opacity: 0.48,
      id: 'text_pg4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'text',
      rect: ['22px','12px','746px','114px','auto','auto'],
      id: 'Text_pg4',
      text: 'Ah ling is tired from eating.<br>She wants to sit down.<br>Help her pick a chair.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',35,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text_pg4}": [
            ["style", "top", '0px'],
            ["style", "opacity", '0.48'],
            ["style", "left", '0px'],
            ["style", "width", '1028px']
         ],
         "${_Text_pg4}": [
            ["style", "text-align", 'left']
         ],
         "${symbolSelector}": [
            ["style", "height", '139px'],
            ["style", "width", '1028px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"mamabearblink1": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['1.69','1.69']],
      id: 'mamabear_blink',
      type: 'image',
      rect: ['55px','106px','159px','309px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mamabear2.svg','0px','0px']
   },
   {
      transform: [[0,0],[],[],['1.69','1.69']],
      id: 'mamabear-closeeye',
      type: 'image',
      rect: ['40px','114px','177px','303px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/mamabear-closeeye.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_mamabear-closeeye}": [
            ["style", "top", '114px'],
            ["transform", "scaleY", '1.69'],
            ["transform", "scaleX", '1.69'],
            ["style", "opacity", '0'],
            ["style", "left", '40px']
         ],
         "${_mamabear_blink}": [
            ["style", "top", '106px'],
            ["transform", "scaleY", '1.69'],
            ["transform", "scaleX", '1.69'],
            ["style", "opacity", '1'],
            ["style", "left", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '522px'],
            ["style", "width", '269px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {
            "loop3": 0
         },
         timeline: [
            { id: "eid1339", tween: [ "style", "${_mamabear_blink}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
            { id: "eid1341", tween: [ "style", "${_mamabear_blink}", "opacity", '0', { fromValue: '1'}], position: 603, duration: 0 },
            { id: "eid1342", tween: [ "style", "${_mamabear_blink}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 0 },
            { id: "eid1345", tween: [ "style", "${_mamabear-closeeye}", "opacity", '0.000000', { fromValue: '0.000000'}], position: 0, duration: 0 },
            { id: "eid1348", tween: [ "style", "${_mamabear-closeeye}", "opacity", '1', { fromValue: '0.000000'}], position: 603, duration: 0 },
            { id: "eid1349", tween: [ "style", "${_mamabear-closeeye}", "opacity", '0', { fromValue: '1'}], position: 1500, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2758346");
