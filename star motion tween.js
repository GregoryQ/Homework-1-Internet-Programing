(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_26 = function() {
	this.initialize(img.CachedBmp_26);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5861,3222);


(lib.CachedBmp_25 = function() {
	this.initialize(img.CachedBmp_25);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3392,1017);


(lib.CachedBmp_24 = function() {
	this.initialize(img.CachedBmp_24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6455,3853);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Planetcopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ei3IC3KUhL4hL4AAAhrSUAAAhrRBL4hL4UBL3hL3BrRAAAUBrSAAABL4BL3UBL3BL4AAABrRUAAABrShL3BL4UhL4BL3hrSAAAUhrRAAAhL3hL3g");
	mask.setTransform(0.025,0.025);

	// Layer_3
	this.instance = new lib.CachedBmp_26();
	this.instance.setTransform(-1217.9,-1524.45,0.3647,0.3647);

	this.instance_1 = new lib.CachedBmp_25();
	this.instance_1.setTransform(-716.5,-1666.8,0.3647,0.3647);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#64C965").s().p("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");
	this.shape.setTransform(-194.45,-1056.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0052DA").s().p("Ei3IC3KUhL4hL4AAAhrSUAAAhrRBL4hL4UBL3hL3BrRAAAUBrSAAABL4BL3UBL3BL4AAABrRUAAABrShL3BL4UhL4BL3hrSAAAUhrRAAAhL3hL3g");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1657.6,-1657.6,3315.3,3315.3);


(lib.Planet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0052DA").s().p("Ei3IC3KUhL4hL4AAAhrSUAAAhrRBL4hL4UBL3hL3BrRAAAUBrSAAABL4BL3UBL3BL4AAABrRUAAABrShL3BL4UhL4BL3hrSAAAUhrRAAAhL3hL3g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1657.6,-1657.6,3315.3,3315.3);


(lib.mcstar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AotGaIwIjrIO8nEIk5vzINnJZILOsIIhVQfIQHDqIu7HEIE5PzItnpZIrOMIg");
	this.shape.setTransform(158.95,146.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcstar, new cjs.Rectangle(0,0,317.9,292.8), null);


(lib.OuterEarth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLdA7rMAAAhwfMDH8AAAMAAABwfg");
	mask.setTransform(796.7359,381.9171);

	// Layer_1
	this.instance = new lib.Planetcopy("synched",0);
	this.instance.setTransform(1141.55,1285.4,0.5436,0.5436,2.4905,0,0,0.1,0);

	this.instance_1 = new lib.Planet("synched",0);
	this.instance_1.setTransform(1141.55,1285.4,0.5692,0.5692,0,0,0,0.2,0.2);
	this.instance_1.alpha = 0.1719;

	this.instance_2 = new lib.Planet("synched",0);
	this.instance_2.setTransform(1141.55,1285.4,0.6177,0.6177,0,0,0,0.3,0.3);
	this.instance_2.alpha = 0.1914;

	this.instance_3 = new lib.Planet("synched",0);
	this.instance_3.setTransform(1141.6,1285.45,0.6885,0.6885,0,0,0,0.4,0.5);
	this.instance_3.alpha = 0.1211;

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(313.7,0,0.1982,0.1982);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(313.8,43.9,1279.7,720);


// stage content:
(lib.starmotiontween = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mcstar();
	this.instance.setTransform(14.35,64.3,0.3145,0.1708,0,0,0,130.3,147.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:158.9,regY:146.4,scaleX:0.3515,scaleY:0.2204,x:-5.05,y:146.2},0).wait(1).to({scaleX:0.3884,scaleY:0.27,x:-18.15,y:231.85},0).wait(1).to({scaleX:0.4253,scaleY:0.3196,x:2.35,y:316.9},0).wait(1).to({scaleX:0.4622,scaleY:0.3691,x:48,y:390.75},0).wait(1).to({scaleX:0.4992,scaleY:0.4187,x:112.15,y:450.9},0).wait(1).to({scaleX:0.5361,scaleY:0.4683,x:188.1,y:495.25},0).wait(1).to({scaleX:0.573,scaleY:0.5179,x:269.65,y:529.15},0).wait(1).to({scaleX:0.6099,scaleY:0.5675,x:354.05,y:555.3},0).wait(1).to({scaleX:0.6468,scaleY:0.6171,x:441.1,y:570.9},0).wait(1).to({scaleX:0.6838,scaleY:0.6667,x:528.6,y:583.05},0).wait(1).to({scaleX:0.7207,scaleY:0.7163,x:616.65,y:590.35},0).wait(1).to({scaleX:0.7576,scaleY:0.7659,x:705.15,y:591.1},0).wait(1).to({scaleX:0.7945,scaleY:0.8155,x:793.5,y:589.1},0).wait(1).to({scaleX:0.8315,scaleY:0.8651,x:881.8,y:584.65},0).wait(1).to({scaleX:0.8684,scaleY:0.9147,x:969.8,y:575.75},0).wait(1).to({scaleX:0.9053,scaleY:0.9643,x:1056,y:556.25},0).wait(1).to({scaleX:0.9422,scaleY:1.0139,x:1140,y:529},0).wait(1).to({scaleX:0.9791,scaleY:1.0635,x:1222.15,y:496.55},0).wait(1).to({scaleX:1.0161,scaleY:1.113,x:1302.8,y:460.25},0).wait(1).to({scaleX:1.053,scaleY:1.1626,x:1381.85,y:420.95},0).wait(1).to({scaleX:1.0899,scaleY:1.2122,x:1459.7,y:379.05},0).wait(1).to({scaleX:1.1268,scaleY:1.2618,x:1536,y:334.75},0).wait(1).to({scaleX:1.1638,scaleY:1.3114,x:1609.85,y:286.4},0).wait(1));

	// Outer_Earth
	this.instance_1 = new lib.OuterEarth("synched",0);
	this.instance_1.setTransform(1164.55,2577.85,1.4283,2.5222,0,0,0,1141.2,1213.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(816.7,26.9,993.8,1415.8);
// library properties:
lib.properties = {
	id: 'D47052C228F86344A04B9ABFEB006297',
	width: 1793,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_26.png", id:"CachedBmp_26"},
		{src:"images/CachedBmp_25.png", id:"CachedBmp_25"},
		{src:"images/CachedBmp_24.png", id:"CachedBmp_24"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D47052C228F86344A04B9ABFEB006297'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;