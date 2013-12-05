/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_play_btn}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene1");
         EC.Sound.play("button");
         EC.Sound.play("bgmusic");
         
         
         
         
         
         
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 513, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // Load All-in-One (in creationComplete)
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	complete: function() {
         		EC.debug("Ready to go!");
         
         // Load sound manifest (e.g. in creationComplete)
         var assetsPath ="sounds/";
         EC.Sound.setup(
             [
                 {src: assetsPath + "bgmusic.mp3|",id: "bgmusic"},
                  {src: assetsPath + "button.mp3|",id: "button"},
                 {src: assetsPath + "Eatnasilemak.mp3|",id: "Eatnasilemak"},
                 {src: assetsPath + "button2.mp3|",id: "button2"},
                 
             ],
             function(){ EC.info("Sound setup finished", "DEMO"); }
         );
         	 }
         });

      });
      //Edge binding end

      

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_papabearsofa_pg4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene4");
         EC.Sound.play("button2");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mamabearsofa-pg4}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene5");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_babybearsofa_pg4}", "click", function(sym, e) {
         
         // play the timeline from the given position (ms or label)
         sym.play("scene6");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12803, function(sym, e) {
         sym.stop("scene3");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8347, function(sym, e) {
         sym.stop("scene2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mamanasilemak_pg3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("eatmamanasi");
         EC.Sound.play("Eatnasilemak");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_babynasilemak_pg3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("eatbabynasi");
         EC.Sound.play("Eatnasilemak");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_papanasilemak_pg3}", "click", function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("eatpapanasi");
         EC.Sound.play("Eatnasilemak");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10250, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene2");

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9329, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9737, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10127, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("scene3");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'papabear1'
   (function(symbolName) {   
   
   })("papabear1");
   //Edge symbol end:'papabear1'

   //=========================================================
   
   //Edge symbol: 'babybear1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1086, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop");

      });
      //Edge binding end

      

   })("babybear1");
   //Edge symbol end:'babybear1'

   //=========================================================
   
   //Edge symbol: 'mamabearblink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2126, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop3");

      });
      //Edge binding end

   })("mamabearblink");
   //Edge symbol end:'mamabearblink'

   //=========================================================
   
   //Edge symbol: 'papabearblink'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1860, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop2");
         

      });
      //Edge binding end

   })("papabearblink");
   //Edge symbol end:'papabearblink'

   //=========================================================
   
   //Edge symbol: 'cloud-pg2ANIMATION'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 871, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loopclouds");

      });
      //Edge binding end

   })("cloud-pg2ANIMATION");
   //Edge symbol end:'cloud-pg2ANIMATION'

   //=========================================================
   
   //Edge symbol: 'cloudPG2ANIMATION'
   (function(symbolName) {   
   
   })("cloudPG2ANIMATION");
   //Edge symbol end:'cloudPG2ANIMATION'

   //=========================================================
   
   //Edge symbol: 'window_pg3'
   (function(symbolName) {   
   
   })("window_pg3");
   //Edge symbol end:'window_pg3'

   //=========================================================
   
   //Edge symbol: 'chairs_pg3'
   (function(symbolName) {   
   
   })("chairs_pg3");
   //Edge symbol end:'chairs_pg3'

   //=========================================================
   
   //Edge symbol: 'ahling_pg3'
   (function(symbolName) {   
   
   })("ahling_pg3");
   //Edge symbol end:'ahling_pg3'

   //=========================================================
   
   //Edge symbol: 'mamanasilemak_pg3'
   (function(symbolName) {   
   
   })("mamanasilemak_pg3");
   //Edge symbol end:'mamanasilemak_pg3'

   //=========================================================
   
   //Edge symbol: 'babynasilemak_pg3'
   (function(symbolName) {   
   
   })("babynasilemak_pg3");
   //Edge symbol end:'babynasilemak_pg3'

   //=========================================================
   
   //Edge symbol: 'football_pg4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play("loopball");

      });
      //Edge binding end

   })("football_pg4");
   //Edge symbol end:'football_pg4'

   //=========================================================
   
   //Edge symbol: 'papabearsofa_pg4'
   (function(symbolName) {   
   
   })("papabearsofa_pg4");
   //Edge symbol end:'papabearsofa_pg4'

   //=========================================================
   
   //Edge symbol: 'textbox_pg3'
   (function(symbolName) {   
   
   })("textbox_pg3");
   //Edge symbol end:'textbox_pg3'

   //=========================================================
   
   //Edge symbol: 'text_pg1'
   (function(symbolName) {   
   
   })("text_pg1");
   //Edge symbol end:'text_pg1'

   //=========================================================
   
   //Edge symbol: 'papanasilemak_pg3'
   (function(symbolName) {   
   
   })("papanasilemak_pg3");
   //Edge symbol end:'papanasilemak_pg3'

   //=========================================================
   
   //Edge symbol: 'textbox_pg2'
   (function(symbolName) {   
   
   })("textbox_pg2");
   //Edge symbol end:'textbox_pg2'

   //=========================================================
   
   //Edge symbol: 'speechbubble_4'
   (function(symbolName) {   
   
   })("speechbubble_4");
   //Edge symbol end:'speechbubble_4'

   //=========================================================
   
   //Edge symbol: 'ahlingeat_pg3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9153, function(sym, e) {
         sym.play("eatpapanasilemak");

      });
      //Edge binding end

   })("ahlingeat_pg3");
   //Edge symbol end:'ahlingeat_pg3'

   //=========================================================
   
   //Edge symbol: 'ahlingeat2_pg3'
   (function(symbolName) {   
   
   })("ahlingeat2_pg3");
   //Edge symbol end:'ahlingeat2_pg3'

   //=========================================================
   
   //Edge symbol: 'ahlingeat_pg3-2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9417, function(sym, e) {
         sym.play("eatmamanasilemak");

      });
      //Edge binding end

   })("ahlingeat_pg3-2");
   //Edge symbol end:'ahlingeat_pg3-2'

   //=========================================================
   
   //Edge symbol: 'ahlingeat_pg3-3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.play("eatbabynasilemak");

      });
      //Edge binding end

   })("ahlingeat_pg3-3");
   //Edge symbol end:'ahlingeat_pg3-3'

   //=========================================================
   
   //Edge symbol: 'text_pg4'
   (function(symbolName) {   
   
   })("text_pg4");
   //Edge symbol end:'text_pg4'

   //=========================================================
   
   //Edge symbol: 'mamabearblink1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play("loop3");
         

      });
      //Edge binding end

   })("mamabearblink1");
   //Edge symbol end:'mamabearblink1'

})(jQuery, AdobeEdge, "EDGE-2758346");