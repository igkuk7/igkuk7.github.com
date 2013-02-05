/* Combined on: Tue Feb  5 11:36:58 2013 */
"use strict";

/* Packages */
var TLORMEngine = {};
TLORMEngine.Systems = {};
TLORMEngine.Screens = {};
TLORMEngine.Entities = {};
TLORMEngine.Components = {};


/* File: js/tv4.min.js */

(function(p){function h(a,c){if(void 0!=c.$ref&&(c=tv4.getSchema(c.$ref),!c))return null;var b;b=c;var d;b:if(void 0==b.type)d=null;else{d=typeof a;null==a?d="null":Array.isArray(a)&&(d="array");var e=b.type;"object"!=typeof e&&(e=[e]);for(var g=0;g<e.length;g++){var j=e[g];if(j==d||"integer"==j&&"number"==d&&0==a%1){d=null;break b}}d=new f("invalid data type: "+d)}if(d)b=d.prefixWith(null,"type");else{b:if(void 0==b["enum"])b=null;else{for(e=0;e<b["enum"].length;e++)if(k(a,b["enum"][e])){b=null;
break b}b=new f("No enum match for: "+JSON.stringify(a))}b=(d=b)?d.prefixWith(null,"type"):null}if(!b&&(b=c.multipleOf||c.divisibleBy,!(b=(void 0==b?null:"number"==typeof a&&0!=a%b?new f("Value "+a+" is not a multiple of "+b):null)||q(a,c)||null)))if(!(b=("string"!=typeof a?null:void 0!=c.minLength&&a.length<c.minLength?(new f("String is too short ("+a.length+" chars), minimum "+c.minLength)).prefixWith(null,"minLength"):void 0!=c.maxLength&&a.length>c.maxLength?(new f("String is too long ("+a.length+
" chars), maximum "+c.maxLength)).prefixWith(null,"maxLength"):null)||("string"!=typeof a||void 0==c.pattern?null:!RegExp(c.pattern).test(a)?(new f("String does not match pattern")).prefixWith(null,"pattern"):null)||null)){b=c;if(Array.isArray(a)){if(!(d=void 0!=b.minItems&&a.length<b.minItems?(new f("Array is too short ("+a.length+"), minimum "+b.minItems)).prefixWith(null,"minItems"):void 0!=b.maxItems&&a.length>b.maxItems?(new f("Array is too long ("+a.length+" chars), maximum "+b.maxItems)).prefixWith(null,
"maxItems"):null)){b:{if(b.uniqueItems)for(d=0;d<a.length;d++)for(e=d+1;e<a.length;e++)if(k(a[d],a[e])){d=(new f("Array items are not unique (indices "+d+" and "+e+")")).prefixWith(null,"uniqueItems");break b}d=null}d=d||r(a,b)||null}b=d}else b=null;if(!b){b=c;if("object"!=typeof a||null==a||Array.isArray(a))b=null;else{d=Object.keys(a);if(!(d=void 0!=b.minProperties&&d.length<b.minProperties?(new f("Too few properties defined ("+d.length+"), minimum "+b.minProperties)).prefixWith(null,"minProperties"):
void 0!=b.maxProperties&&d.length>b.maxProperties?(new f("Too many properties defined ("+d.length+"), maximum "+b.maxProperties)).prefixWith(null,"maxProperties"):null)){b:{if(void 0!=b.required)for(d=0;d<b.required.length;d++)if(e=b.required[d],void 0===a[e]){d=(new f("Missing required property: "+e)).prefixWith(null,""+d).prefixWith(null,"required");break b}d=null}d=d||s(a,b)||t(a,b)||null}b=d}if(!b){b=c;a:if(void 0==b.allOf)d=null;else{for(e=0;e<b.allOf.length;e++)if(d=h(a,b.allOf[e])){d=d.prefixWith(null,
""+e).prefixWith(null,"allOf");break a}d=void 0}if(!d){a:if(void 0==b.anyOf)d=null;else{d=[];for(e=0;e<b.anyOf.length;e++){g=h(a,b.anyOf[e]);if(null==g){d=null;break a}d.push(g.prefixWith(null,""+e).prefixWith(null,"anyOf"))}d=new f('Data does not match any schemas from "anyOf"',"","/anyOf",d)}if(!d){a:if(void 0==b.oneOf)d=null;else{d=null;e=[];for(g=0;g<b.oneOf.length;g++)if(j=h(a,b.oneOf[g]),null==j)if(null==d)d=g;else{d=new f('Data is valid against more than one schema from "oneOf": indices '+
d+" and "+g,"","/oneOf");break a}else e.push(j.prefixWith(null,""+g).prefixWith(null,"oneOf"));d=null==d?new f('Data does not match any schemas from "oneOf"',"","/oneOf",e):null}d=d||(void 0==b.not?null:null==h(a,b.not)?new f('Data matches schema from "not"',"","/not"):null)||null}}b=d||null}}}return b}function k(a,c){if(a===c)return!0;if("object"==typeof a&&"object"==typeof c){if(Array.isArray(a)!=Array.isArray(c))return!1;if(Array.isArray(a)){if(a.length!=c.length)return!1;for(var b=0;b<a.length;b++)if(!k(a[b],
c[b]))return!1}else{for(b in a)if(void 0===c[b]&&void 0!==a[b])return!1;for(b in c)if(void 0===a[b]&&void 0!==c[b])return!1;for(b in a)if(!k(a[b],c[b]))return!1}return!0}return!1}function q(a,c){if("number"!=typeof a)return null;if(void 0!=c.minimum){if(a<c.minimum)return(new f("Value "+a+" is less than minimum "+c.minimum)).prefixWith(null,"minimum");if(c.exclusiveMinimum&&a==c.minimum)return(new f("Value "+a+" is equal to exclusive minimum "+c.minimum)).prefixWith(null,"exclusiveMinimum")}if(void 0!=
c.maximum){if(a>c.maximum)return(new f("Value "+a+" is greater than maximum "+c.maximum)).prefixWith(null,"maximum");if(c.exclusiveMaximum&&a==c.maximum)return(new f("Value "+a+" is equal to exclusive maximum "+c.maximum)).prefixWith(null,"exclusiveMaximum")}return null}function r(a,c){if(void 0==c.items)return null;var b;if(Array.isArray(c.items))for(var d=0;d<a.length;d++)if(d<c.items.length){if(b=h(a[d],c.items[d]))return b.prefixWith(null,""+d).prefixWith(""+d,"items")}else{if(void 0!=c.additionalItems)if("boolean"==
typeof c.additionalItems){if(!c.additionalItems)return(new f("Additional items not allowed")).prefixWith(""+d,"additionalItems")}else if(b=h(a[d],c.additionalItems))return b.prefixWith(""+d,"additionalItems")}else for(d=0;d<a.length;d++)if(b=h(a[d],c.items))return b.prefixWith(""+d,"items");return null}function s(a,c){var b,d;for(d in a){var e=!1;if(void 0!=c.properties&&void 0!=c.properties[d]&&(e=!0,b=h(a[d],c.properties[d])))return b.prefixWith(d,d).prefixWith(null,"properties");if(void 0!=c.patternProperties)for(var g in c.patternProperties)if(RegExp(g).test(d)&&
(e=!0,b=h(a[d],c.patternProperties[g])))return b.prefixWith(d,g).prefixWith(null,"patternProperties");if(!e&&void 0!=c.additionalProperties)if("boolean"==typeof c.additionalProperties){if(!c.additionalProperties)return(new f("Additional properties not allowed")).prefixWith(d,"additionalProperties")}else if(b=h(a[d],c.additionalProperties))return b.prefixWith(d,"additionalProperties")}return null}function t(a,c){var b;if(void 0!=c.dependencies)for(var d in c.dependencies)if(void 0!==a[d])if(b=c.dependencies[d],
"string"==typeof b){if(void 0===a[b])return(new f("Dependency failed - key must exist: "+b)).prefixWith(null,d).prefixWith(null,"dependencies")}else if(Array.isArray(b))for(var e=0;e<b.length;e++){var g=b[e];if(void 0===a[g])return(new f("Dependency failed - key must exist: "+g)).prefixWith(null,""+e).prefixWith(null,d).prefixWith(null,"dependencies")}else if(b=h(a,b))return b.prefixWith(null,d).prefixWith(null,"dependencies");return null}function n(a){return(a=String(a).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/))?
{href:a[0]||"",protocol:a[1]||"",authority:a[2]||"",host:a[3]||"",hostname:a[4]||"",port:a[5]||"",pathname:a[6]||"",search:a[7]||"",hash:a[8]||""}:null}function m(a,c){c=n(c||"");a=n(a||"");var b;if(!c||!a)b=null;else{b=(c.protocol||a.protocol)+(c.protocol||c.authority?c.authority:a.authority);var d;d=c.protocol||c.authority||"/"===c.pathname.charAt(0)?c.pathname:c.pathname?(a.authority&&!a.pathname?"/":"")+a.pathname.slice(0,a.pathname.lastIndexOf("/")+1)+c.pathname:a.pathname;var e=[];d.replace(/^(\.\.?(\/|$))+/,
"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(a){"/.."===a?e.pop():e.push(a)});d=e.join("").replace(/^\//,"/"===d.charAt(0)?"/":"");b=b+d+(c.protocol||c.authority||c.pathname?c.search:c.search||a.search)+c.hash}return b}function l(a,c){void 0==c?c=a.id:"string"==typeof a.id&&(c=m(c,a.id),a.id=c);if("object"==typeof a)if(Array.isArray(a))for(var b=0;b<a.length;b++)l(a[b],c);else if("string"==typeof a.$ref)a.$ref=m(c,a.$ref);else for(b in a)"enum"!=b&&l(a[b],
c)}function f(a,c,b,d){this.message=a;this.dataPath=c?c:"";this.schemaPath=b?b:"";this.subErrors=d?d:null}f.prototype={prefixWith:function(a,c){null!=a&&(a=a.replace("~","~0").replace("/","~1"),this.dataPath="/"+a+this.dataPath);null!=c&&(c=c.replace("~","~0").replace("/","~1"),this.schemaPath="/"+c+this.schemaPath);if(null!=this.subErrors)for(var b=0;b<this.subErrors.length;b++)this.subErrors[b].prefixWith(a,c);return this}};p.tv4={schemas:{},validate:function(a,c){"string"==typeof c&&(c={$ref:c});
this.missing=[];this.addSchema("",c);var b=h(a,c);delete this.schemas[""];this.error=b;return null==b?!0:!1},addSchema:function(a,c){l(c,a);this.schemas[a]=c},getSchema:function(a){if(void 0!=this.schemas[a])return a=this.schemas[a];var c=a,b="";-1!=a.indexOf("#")&&(b=a.substring(a.indexOf("#")+1),c=a.substring(0,a.indexOf("#")));if(void 0!=this.schemas[c]){a=this.schemas[c];for(var b=decodeURIComponent(b).split("/").slice(1),d=0;d<b.length;d++){var e=b[d].replace("~1","/").replace("~0","~");if(void 0==
a[e]){a=void 0;break}a=a[e]}if(void 0!=a)return a}void 0==this.missing[c]&&(this.missing.push(c),this.missing[c]=c)},missing:[],error:null,normSchema:l,resolveUrl:m}})(this);


/* End of File: js/tv4.min.js */

/* File: js/TLORMEngine/Utils.js */


// basic inheritence
Function.prototype.extends = function(object) {
	this.prototype = new object({});
	this.prototype.constructor = this;
	this.prototype.super = object.prototype;
};

TLORMEngine.Utils = {};

// ajax stuff
TLORMEngine.Utils.xhr = function() {
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();  
	} else {  
		xhr = new ActiveXObject("Microsoft.XmlHttp");  
	}
	return xhr;
};
TLORMEngine.Utils.get_file = function(url) {
	var contents = null;
	var xhr = TLORMEngine.Utils.xhr();

	xhr.open("GET", url, false);  
	xhr.send(null);  

	// synchronous call so will hang until gets response
	// no need for callback
	return xhr.responseText;
};

TLORMEngine.Utils.get_json = function(url) {
	var file_contents = TLORMEngine.Utils.get_file(url);
	var json_contents;
	try {
		json_contents = JSON.parse(file_contents);
	} catch (error) { 
		TLORMEngine.Utils.error(error, true);
	}
	return json_contents;
};

TLORMEngine.Utils.error = function(error, fatal) {
	console.log(error);
	if (fatal) {
		throw error;
	}
};

TLORMEngine.Utils.random_number_in_range = function(min, max) {
	return min+Math.round(Math.random()*(max-min));
};

TLORMEngine.Utils.merge_objects = function(a, b) {
	var o = {};
	for (var k in a) { o[k] = a[k]; }
	for (var k in b) { o[k] = b[k]; }
	return o;
}
TLORMEngine.Utils.array_to_keyed_object = function(array, value) {
	var o = {};
	for (var i=0; i<array.length; ++i) {
		o[array[i]] = value || true;
	}
	return o;
}

/* End of File: js/TLORMEngine/Utils.js */

/* File: js/TLORMEngine/Systems/System.js */


/* nothing in main system */
TLORMEngine.Systems.System = function(args) {
	this.type = args.type || 'System';
};

TLORMEngine.Systems.System.prototype.componentsUsed = function() {
	return {};
};

/* End of File: js/TLORMEngine/Systems/System.js */

/* File: js/TLORMEngine/Systems/Timer.js */

// DEPENDENCY: System.js

TLORMEngine.Systems.Timer = function(args) {
	args.type = 'Timer';
	TLORMEngine.Systems.System.call(this, args);
}
// inherit from normal system
TLORMEngine.Systems.Timer.extends(TLORMEngine.Systems.System);

TLORMEngine.Systems.Timer.prototype.componentsUsed = function() {
	var components = this.super.componentsUsed.call(this);
	components.Timer = true;
	return components;
};

TLORMEngine.Systems.Timer.prototype.update = function(screen, delta) {
	var entities = screen.getEntitiesByTypes(["Timer"]);
	for (var i = 0; i < entities.length; ++i) {
		var timer = entities[i].getComponentByType("Timer");
		timer.time_so_far += delta;
	}
};

/* End of File: js/TLORMEngine/Systems/Timer.js */

/* File: js/TLORMEngine/Systems/Render2D.js */

// DEPENDENCY: System.js

/* system to render components */
TLORMEngine.Systems.Render2D = function(args) {
	args.type = 'Render2D';
	TLORMEngine.Systems.System.call(this, args);
}
// inherit from normal system
TLORMEngine.Systems.Render2D.extends(TLORMEngine.Systems.System);

TLORMEngine.Systems.Render2D.prototype.componentsUsed = function() {
	var components = this.super.componentsUsed.call(this);
	components.Render2D = true;
	components.Position = true;
	components.RenderData = true;
	components.Data = true;
	components.Particles = true;

	return components;
};

TLORMEngine.Systems.Render2D.prototype.render = function(screen, context) {
	// order each loop by z
	var entities = screen.getEntitiesByTypes(["Render2D", "Position"]);
	entities.sort( function(a, b) { return a.getComponentByType("Render2D").z - b.getComponentByType("Render2D").z });
	for (var i = 0; i < entities.length; ++i) {
		this.renderEntity(entities[i], context);
	}
	
	var entities = screen.getEntitiesByTypes(["RenderData", "Data"]);
	for (var i = 0; i < entities.length; ++i) {
		this.renderEntityData(entities[i], context);
	}
	
	var entities = screen.getEntitiesByTypes(["Render2D", "Position", "Particles"]);
	entities.sort( function(a, b) { return a.getComponentByType("Render2D").z - b.getComponentByType("Render2D").z });
	for (var i = 0; i < entities.length; ++i) {
		this.renderParticles(entities[i], context);
	}
};

TLORMEngine.Systems.Render2D.prototype.renderEntity = function(entity, context) {
	var render = entity.getComponentByType("Render2D");
	var position = entity.getComponentByType("Position");

	if (render.fill_colour) {
		context.fillStyle = render.fill_colour;
		if (!render.as_line) {
			context.fillRect(position.x, position.y, position.w, position.h);
		}
	}
	if (render.stroke_colour) {
		context.stokeStyle = render.stroke_colour;
		if (render.as_line) {
			context.beginPath();
			context.moveTo(position.x, position.y);
			context.lineTo(position.x+position.w, position.y+position.h);
			context.stroke();
		} else {
			context.strokeRect(position.x, position.y, position.w, position.h);
		}
	}
	if (render.show_name) {
		context.font = "normal 12px Verdana";
		context.textBaseline = "bottom";
		context.fillStyle = "#000";
		context.fillText(entity.name, position.x, position.y);
	}
};


TLORMEngine.Systems.Render2D.prototype.renderEntityData = function(entity, context) {
	var render = entity.getComponentByType("RenderData");
	var data = entity.getComponentByType("Data");

	context.font = "normal 12px Verdana";
	context.textBaseline = "bottom";
	context.fillStyle = render.colour;
	var y = render.y;
	for (var key in data.data) {
		context.fillText(key+": "+data.data[key], render.x, y);
		y += 12;
	}
	if (render.show_name) {
	}
};

TLORMEngine.Systems.Render2D.prototype.renderParticles = function(entity, context) {
	var render = entity.getComponentByType("Render2D");
	var particles = entity.getComponentByType("Particles");
	var position = entity.getComponentByType("Position");

	if (render.fill_colour) {
		context.fillStyle = render.fill_colour;
	}
	if (render.stroke_colour) {
		context.stokeStyle = render.stroke_colour;
	}
	if (render.show_name) {
		context.font = "normal 12px Verdana";
		context.textBaseline = "bottom";
		context.fillStyle = "#000";
		context.fillText(entity.name, position.x, position.y);
	}
	
	for (var i=0; i<particles.particles.length; ++i) {
		var particle = particles.particles[i];
		if (render.fill_colour) {
			context.fillRect(position.mx+particle.x, position.my+particle.y, particle.size, particle.size);
		}
		if (render.stroke_colour) {
			context.fillRect(position.mx+particle.x, position.my+particle.y, particle.size, particle.size);
		}
	}
};

/* End of File: js/TLORMEngine/Systems/Render2D.js */

/* File: js/TLORMEngine/Systems/Particle.js */

// DEPENDENCY: System.js

TLORMEngine.Systems.Particle = function(args) {
	args.type = 'Particle';
	TLORMEngine.Systems.System.call(this, args);
	this.delta_modifier = 50;
}

// inherit from normal system
TLORMEngine.Systems.Particle.extends(TLORMEngine.Systems.System);

TLORMEngine.Systems.Particle.prototype.componentsUsed = function() {
	var components = this.super.componentsUsed.call(this);
	components.Particles = true;

	return components;
};

TLORMEngine.Systems.Particle.prototype.update = function(screen, delta) {
	var entities = screen.getEntitiesByTypes(["Particles"]);
	for (var i = 0; i < entities.length; ++i) {
		var particles = entities[i].getComponentByType("Particles");
		particles.decayAll();
		particles.moveAll(delta*this.delta_modifier, delta*this.delta_modifier);
	}
};

/* End of File: js/TLORMEngine/Systems/Particle.js */

/* File: js/TLORMEngine/Systems/Movement.js */

// DEPENDENCY: System.js

TLORMEngine.Systems.Movement = function(args) {
	args.type = 'Movement';
	TLORMEngine.Systems.System.call(this, args);
	this.delta_modifier = 50;
}
// inherit from normal system
TLORMEngine.Systems.Movement.extends(TLORMEngine.Systems.System);

TLORMEngine.Systems.Movement.prototype.componentsUsed = function() {
	var components = this.super.componentsUsed.call(this);
	components.Position = true;
	components.Velocity = true;
	components.Rotation = true;
	components.Translation = true;
	components.Follow = true;
	components.Collision = true;

	return components;
};

TLORMEngine.Systems.Movement.prototype.update = function(screen, delta) {
	var entities = screen.getEntitiesByTypes(["Position", "Velocity"]);
	for (var i = 0; i < entities.length; ++i) {
		this.moveEntity(screen, entities[i], delta);
	}

	var entities = screen.getEntitiesByTypes(["Position", "Rotation"]);
	for (var i = 0; i < entities.length; ++i) {
		this.rotateEntity(screen, entities[i], delta);
	}
	
	var entities = screen.getEntitiesByTypes(["Position", "Translation"]);
	for (var i = 0; i < entities.length; ++i) {
		this.translateEntity(screen, entities[i], delta);
	}
	
	var entities = screen.getEntitiesByTypes(["Position", "Follow"]);
	for (var i = 0; i < entities.length; ++i) {
		this.followEntity(screen, entities[i], delta);
	}

	// sort entities by x so we can quickly break out of collission checks
	var entities = screen.getEntitiesByTypes(["Position", "Collision"]);
	entities = entities.sort(function(a,b) {
		var position_a = a.getComponentByType("Position");
		var position_b = b.getComponentByType("Position");
		return position_a.x - position_b.x;
	});
	for (var i = 0; i < entities.length; ++i) {
		var velocities = entities[i].getComponentByType("Velocity");
		var translations = entities[i].getComponentByType("Translation");
		if ((velocities && velocities.length > 0) || (translations && translations.length > 0)) {
			this.checkForCollisions(screen, entities[i], entities);
		}
	}
};

TLORMEngine.Systems.Movement.prototype.moveEntity = function(screen, entity, delta) {
	var position = entity.getComponentByType("Position");
	var velocities = entity.getComponentByType("Velocity");
	for (var i = 0; i < velocities.length; ++i) {
		position.moveBy(velocities[i].dx*delta*this.delta_modifier, velocities[i].dy*delta*this.delta_modifier, velocities[i].dz*delta*this.delta_modifier);
		if (!velocities[i].constant) {
			screen.removeEntityComponent(entity, velocities[i]);
		}
	}
};

TLORMEngine.Systems.Movement.prototype.rotateEntity = function(screen, entity, delta) {
	var position = entity.getComponentByType("Position");
	var rotations = entity.getComponentByType("Rotation");
	for (var i = 0; i < rotations.length; ++i) {
		position.rotateBy(rotations[i].dx*delta*this.delta_modifier, rotations[i].dy*delta*this.delta_modifier, rotations[i].dz*delta*this.delta_modifier);
		if (!rotations[i].constant) {
			screen.removeEntityComponent(entity, rotations[i]);
		}
	}
};

TLORMEngine.Systems.Movement.prototype.translateEntity = function(screen, entity, delta) {
	var position = entity.getComponentByType("Position");
	var translations = entity.getComponentByType("Translation");
	for (var i = 0; i < translations.length; ++i) {
		if (translations[i].move_middle) {
			position.moveTo(
				(translations[i].x ? translations[i].x - position.hw : null),
				(translations[i].y ? translations[i].y - position.hh : null)
			);
		} else {
			position.moveTo(translations[i].x, translations[i].y);
		}
		screen.removeEntityComponent(entity, translations[i]);
	}
};

TLORMEngine.Systems.Movement.prototype.followEntity = function(screen, entity, delta) {
	var position = entity.getComponentByType("Position");
	var follow = entity.getComponentByType("Follow");
	var follow_entity = screen.getEntityByName(follow.entity);
	if (follow_entity) {
		var follow_position = follow_entity.getComponentByType("Position");
		if (follow_position) {
			var dx = 0;
			var dy = 0;
			var dz = 0;
			if (follow.dx > 0) {
				var position_x        = position.x;
				var follow_position_x = follow_position.x;
				if (follow.move_middle) {
					position_x        += position.hw;
					follow_position_x += follow_position.hw;
				}
				var speed_x = Math.min(follow.dx, Math.abs(follow_position_x - position_x));
				if (follow_position_x < position_x) {
					dx = -speed_x;
				} else if (follow_position_x > position_x) {
					dx = speed_x;
				}
			}
			if (follow.dy > 0) {
				var position_y        = position.y;
				var follow_position_y = follow_position.y;
				if (follow.move_middle) {
					position_y        += position.hh;
					follow_position_y += follow_position.hh;
				}
				var speed_y = Math.min(follow.dy, Math.abs(follow_position_y - position_y));
				if (follow_position_y < position_y) {
					dy = -speed_y;
				} else if (follow_position_y > position_y) {
					dy = speed_y;
				}
			}
			if (follow.dz > 0) {
				var position_z        = position.z;
				var follow_position_z = follow_position.z;
				if (follow.move_middle) {
					position_z        += position.hd;
					follow_position_z += follow_position.hd;
				}
				var speed_z = Math.min(follow.z, Math.abs(follow_position_z - position_z));
				if (follow_position_z < position_z) {
					dz = -speed_z;
				} else if (follow_position.z > position_z) {
					dz = speed_z;
				}
			}
			position.moveBy(dx*delta*this.delta_modifier, dy*delta*this.delta_modifier, dz*delta*this.delta_modifier);
		}
	}
};

TLORMEngine.Systems.Movement.prototype.checkForCollisions = function(screen, entity, entities) {
	var position = entity.getComponentByType("Position");
	var collisions = entity.getComponentByType("Collision");
	for (var c = 0; c < collisions.length; c++) {
		var collision = collisions[c];
		for (var i = 0; i < entities.length; ++i) {
			if (entities[i] !== entity) {
				var check_position = entities[i].getComponentByType("Position");
				if (check_position.x > position.x+position.w) {
					break;
				}
				if (check_position.x+check_position.w < position.x) {
					continue;
				}
				this.checkCollision(screen, entity, entities[i], collision);
			}
		}
	}
};

TLORMEngine.Systems.Movement.prototype.checkCollision = function(screen, entity, check_entity, collision) {
	var position = entity.getComponentByType("Position");
	var check_position = check_entity.getComponentByType("Position");
	var check_collisions = check_entity.getComponentByType("Collision");
	for (var c = 0; c < check_collisions.length; c++) {
		var check_collision = check_collisions[c];
		if (collision.collides(check_collision) && position.collides(check_position)) {
			this.collisionResolution(screen, entity, check_entity, collision, check_collision);
		}
	}
};

TLORMEngine.Systems.Movement.prototype.collisionResolution = function(screen, entity, hit_entity, collision, hit_collision) {
	var position = entity.getComponentByType("Position");
	var hit_position = hit_entity.getComponentByType("Position");
	if (collision.resolution == "bounce" || collision.resolution == "destroy_hit_and_bounce") {
		var velocity = entity.getComponentByType("Velocity")[0];
		if (velocity) {
			if (velocity.constant) {
				switch (position.collisionDirection(hit_position)) {
					case "top":
					case "bottom":
						velocity.dy *= -1;
						break;
					case "left":
					case "right":
						velocity.dx *= -1;
						break;
					default:
						break;
				}
			}
		}
	}
	if (collision.resolution == "push") {
		var direction = position.direction();
		var stop = false;
		while (!stop && position.collides(hit_position)) {
			switch (direction) {
				case "top":
					position.moveBy(0, -1);
					break;
				case "bottom":
					position.moveBy(0, 1);
					break;
				case "left":
					position.moveBy(-1, 0);
					break;
				case "right":
					position.moveBy(1, 0);
					break;
				default:
					stop = true
					break;
			}
		}
		
		// remove any velocities or translations
		entity.removeComponentByType("Velocity");
		entity.removeComponentByType("Translation");
	}
	if (collision.resolution == "stop") {
		entity.removeComponentByType("Velocity");
	}
	if (collision.resolution == "destroy_hit" || collision.resolution == "destroy_hit_and_bounce") {
		screen.removeEntity(hit_entity);
	}
	if (collision.resolution == "destroy") {
		screen.removeEntity(entity);
	}
	if (collision.resolution == "destroy_both") {
		screen.removeEntity(hit_entity);
		screen.removeEntity(entity);
	}
	if (collision.resolution == "edit_component") {
		var edit_entity = ( collision.entity ? screen.getEntityByName(collision.entity) : entity );
		var edit_component = edit_entity.getComponentByType(collision.component);
		var components_to_edit = [];
		if (collision.position) {
			if (collision.position == "all") {
				components_to_edit = edit_component;
			} else {
				components_to_edit = [edit_component[position]];
			}
		} else {
			components_to_edit = [edit_component];
		}
		for (var i=0; i<components_to_edit.length; ++i) {
			var component_to_edit = components_to_edit[i];
			component_to_edit[collision.function].apply(component_to_edit, collision.function_args);
		}
	}

	if (collision.oncollide) {
		collision.oncollide(entity, hit_entity);
	}
	if (hit_collision.oncollide) {
		hit_collision.oncollide(entity, hit_entity);
	}
}

/* End of File: js/TLORMEngine/Systems/Movement.js */

/* File: js/TLORMEngine/Systems/Input.js */

// DEPENDENCY: System.js
TLORMEngine.Systems.Input = function(args) {
	args.type = 'Input';
	TLORMEngine.Systems.System.call(this, args);

	this.keys_down = {};
	this.mouse_move = null;
	this.touch_move = null;
}
// inherit from normal system
TLORMEngine.Systems.Input.extends(TLORMEngine.Systems.System);

TLORMEngine.Systems.Input.prototype.componentsUsed = function() {
	var components = this.super.componentsUsed.call(this);
	components.KeyInput = true;
	components.MouseInput = true;
	components.TouchInput = true;

	return components;
};

TLORMEngine.Systems.Input.prototype.init = function(screen, reset) { /* register control callbacks for player */
	var system = this;
	screen.registerEvent("keydown", function(event) {
		system.keyDownHandler(event);
	});
	screen.registerEvent("keyup", function(event) {
		system.keyUpHandler(event);
	});
	screen.registerEvent("mousemove", function(event) {
		system.mouseMoveHandler(event);
	});
	screen.registerEvent("touchmove", function(event) {
		system.touchMoveHandler(event);
	});
	screen.registerEvent("blur", function(event) {
		system.blurHandler(event);
	});
};

TLORMEngine.Systems.Input.prototype.keyDownHandler = function(event) {
	this.keys_down[event.keyCode] = true;
};
TLORMEngine.Systems.Input.prototype.keyUpHandler = function(event) {
	this.keys_down[event.keyCode] = false;
};
TLORMEngine.Systems.Input.prototype.mouseMoveHandler = function(event) {
	this.mouse_move = event;
};
TLORMEngine.Systems.Input.prototype.touchMoveHandler = function(event) {
	this.touch_move = event.touches[0];
	this.touch_move.offsetX = this.touch_move.clientX - this.touch_move.target.offsetLeft;
	this.touch_move.offsetY = this.touch_move.clientY - this.touch_move.target.offsetTop;
};
TLORMEngine.Systems.Input.prototype.blurHandler = function(event) {
	// clear all event on blur/unfocus
	this.mouse_move = null;
	this.touch_move = null;
	for(var key_code in this.keys_down) {
		this.keys_down[key_code] = false;
	}
};

TLORMEngine.Systems.Input.prototype.update = function(screen) {
	var entities = screen.getEntitiesByTypes(["KeyInput"]);
	for(var i = 0; i < entities.length; ++i) {
		this.handleKeyInput(screen, entities[i]);
	}

	var entities = screen.getEntitiesByTypes(["MouseInput"]);
	for(var i = 0; i < entities.length; ++i) {
		this.handleMouseInput(screen, entities[i]);
	}

	var entities = screen.getEntitiesByTypes(["TouchInput"]);
	for(var i = 0; i < entities.length; ++i) {
		this.handleTouchInput(screen, entities[i]);
	}
};

TLORMEngine.Systems.Input.prototype.handleKeyInput = function(screen, entity) {
	var input = entity.getComponentByType("KeyInput");
	for(var key_code in this.keys_down) {
		if(this.keys_down[key_code] && input.map[key_code]) {
			screen.addEntityComponent(
			entity, new TLORMEngine.Components[input.map[key_code].name](input.map[key_code].args));
		}
	}
};

TLORMEngine.Systems.Input.prototype.handleMouseInput = function(screen, entity) {
	var input = entity.getComponentByType("MouseInput");
	if(input.move && this.mouse_move != null) {
		// ignore movement off screen
		if (   this.mouse_move.offsetX < 0 || screen.width < this.mouse_move.offsetX
			|| this.mouse_move.offsetY < 0 || screen.height < this.mouse_move.offsetY
		) {
			this.mouse_move = null;
			return;
		}

		var args = input.move.args || {};
		if(input.move.mouseXParam) {
			args[input.move.mouseXParam] = this.mouse_move.offsetX;
		}
		if(input.move.mouseYParam) {
			args[input.move.mouseYParam] = this.mouse_move.offsetY;
		}
		screen.addEntityComponent(
			entity,
			new TLORMEngine.Components[input.move.name](args)
		);
		this.mouse_move = null;
	}
};

TLORMEngine.Systems.Input.prototype.handleTouchInput = function(screen, entity) {
	var input = entity.getComponentByType("TouchInput");
	if(input.drag && this.touch_move != null) {

		// ignore movement off screen
		if (   this.touch_move.offsetX < 0 || screen.width < this.touch_move.offsetX
			|| this.touch_move.offsetY < 0 || screen.height < this.touch_move.offsetY
		) {
			this.touch_move = null;
			return;
		}

		var args = input.drag.args || {};
		if(input.drag.mouseXParam) {
			args[input.drag.mouseXParam] = this.touch_move.offsetX;
		}
		if(input.drag.mouseYParam) {
			args[input.drag.mouseYParam] = this.touch_move.offsetY;
		}
		screen.addEntityComponent(
			entity,
			new TLORMEngine.Components[input.drag.name](args)
		);
		this.touch_move = null;
	}
};

/* End of File: js/TLORMEngine/Systems/Input.js */

/* File: js/TLORMEngine/SystemManager.js */

TLORMEngine.SystemManager = function() {
	this.next_id = 1;
	this.systems = [];
	this.systems_by_id = {};

	// load all systems
	for (var system_type in TLORMEngine.Systems) {
		if (system_type == "System") {
			continue;
		}
		this.addSystem(new TLORMEngine.Systems[system_type]({}));
	}

	// keep track of which systems are active
	this.active_systems = {};
};

TLORMEngine.SystemManager.prototype.addSystem = function(system) {
	system.id = this.next_id++;
	this.systems.push(system);
	this.systems_by_id[system.id] = system;
};

TLORMEngine.SystemManager.prototype.initAllSystems = function(screen, reset) {
	for (var i = 0; i < this.systems.length; ++i) {
		if (this.systems[i].init) {
			this.systems[i].init(screen, reset);
		}
	}
};

TLORMEngine.SystemManager.prototype.updateActiveSystems = function(components) {
	var active_systems = {};
	for (var i = 0; i < this.systems.length; ++i) {
		var system_components = this.systems[i].componentsUsed();
		for (var j=0; j<components.length; ++j) {
			if (system_components[components[j]]) {
				active_systems[this.systems[i].type] = true;
				break;
			}
		}
	}
	
	this.active_systems = active_systems;
};

TLORMEngine.SystemManager.prototype.updateAllSystems = function(screen, delta) {
	this.updateActiveSystems(screen.getActiveComponents());
	for (var i = 0; i < this.systems.length; ++i) {
		if (this.active_systems[this.systems[i].type] && this.systems[i].update) {
			this.systems[i].update(screen, delta);
		}
	}
};

TLORMEngine.SystemManager.prototype.renderAllSystems = function(screen, context) {
	for (var i = 0; i < this.systems.length; ++i) {
		if (this.active_systems[this.systems[i].type] && this.systems[i].render) {
			this.systems[i].render(screen, context);
		}
	}
};



/* End of File: js/TLORMEngine/SystemManager.js */

/* File: js/TLORMEngine/Screens/Screen.js */

TLORMEngine.Screens.Screen = function(args) {
	this.id = null;
	this.name = args.name;
	this.setArgs(args);
	
	// setup event handling
	this.events = {};

	// param for changing screens
	this.clearChange();

	// sort out GUI
	this.buildGUIElements();	
};

// TODO: fix these "any" fragments
TLORMEngine.Screens.Screen.prototype.args_schema = function () {
	return {
		switch_screen: { type: "object", title: "Configure Switching Screens", default: {} },
		class: { type: "string", title: "CSS Class", default: "" },
		show_text: { type: "array", title: "Show Text on Screen", default: [] },
		show_images: { type: "array", title: "Show Images on Screen", default: [] },
		show_name: { type: "boolean", title: "Show the Screen Name on Screen?", default: true },
		show_back: { type: "boolean", title: "Show back button to previous screen?", default: true }
	};
}
TLORMEngine.Screens.Screen.prototype.setArgs = function(args) {
	var args_schema = this.args_schema();
	for ( var key in args_schema ) {
		if (args[key] != undefined) {
			// TODO: some kind of validation here
			this[key] = args[key];
		} else if (args_schema[key].default != undefined) {
			this[key] = args_schema[key].default;
		}
	}
};

TLORMEngine.Screens.Screen.prototype.buildGUIElements = function() {
	this.container_el = document.createElement("div");
	if (this.class) {
		this.container_el.className = this.class;
	}
	this.name_el = document.createElement("h1");
	this.name_el.className = "name";
	this.name_el.appendChild(document.createTextNode(this.name));
	this.back_el = document.createElement("a");
	this.back_el.href = "#"
	this.back_el.className = "back";
	this.back_el.appendChild(document.createTextNode("Back"));

	var menu_screen = this;
	this.back_el.addEventListener("click", function(event) {
		menu_screen.back();
		return false;
	});

	if (this.show_text.length > 0) {
		for (var i=0; i<this.show_text.length; ++i) {
			var span = document.createElement("span");
			if (this.show_text[i].class) {
				span.className = this.show_text[i].class;
			}
			span.appendChild(document.createTextNode(this.show_text[i].text));
			this.container_el.appendChild(span);
		}
	}

	if (this.show_images.length > 0) {
		for (var i=0; i<this.show_images.length; ++i) {
			var span = document.createElement("span");
			if (this.show_images[i].class) {
				span.className = this.show_text[i].class;
			}
			var img = new Image()
			img.src = this.show_images[i].src;
			span.appendChild(img);
			this.container_el.appendChild(span);
		}
	}
};

TLORMEngine.Screens.Screen.prototype.needsChange = function() {
	return this.change.goto;
};

TLORMEngine.Screens.Screen.prototype.needsReset = function() {
	return this.change.reset;
};

TLORMEngine.Screens.Screen.prototype.clearChange = function() {
	this.change = { goto: "", reset: false };
};

TLORMEngine.Screens.Screen.prototype.setChange = function(goto, reset) {
	this.change = { goto: goto, reset: reset || false };
};

TLORMEngine.Screens.Screen.prototype.init = function(game, reset) {
	this.initSwitchScreens();
	document.body.appendChild(this.container_el);
	if (this.show_back) {
		this.container_el.insertBefore(this.back_el, this.container_el.firstChild);
	}
	if (this.show_name) {
		this.container_el.insertBefore(this.name_el, this.container_el.firstChild);
	}
};

TLORMEngine.Screens.Screen.prototype.initSwitchScreens = function() {
	
	// setup event to change screens
	var screen = this;
	for (var i=0; i<this.switch_screen.length; ++i) {
		for (var j=0; j<this.switch_screen[i].conditions.length; ++j) {
			if (this.switch_screen[i].conditions[j].key_code) {
				var condition = this.switch_screen[i].conditions[j];
				this.registerEvent("keyup", function(event) {
					if (condition.key_code == event.keyCode) {
						condition.key_code_pressed = true;
					}
				});
			}
		}
	}
};

TLORMEngine.Screens.Screen.prototype.back = function() {
	this.change = { goto: "TLORM_BACK", reset: false };
};

TLORMEngine.Screens.Screen.prototype.update = function(game, delta) {
	var switch_screen = this.switchScreens();
	if (switch_screen) {
		this.setChange(switch_screen.goto, switch_screen.reset);
	}
};

TLORMEngine.Screens.Screen.prototype.switchScreens = function() {
	for (var i=0; i<this.switch_screen.length; ++i) {
		if (this.conditionsPassed(this.switch_screen[i].conditions)) {
			return this.switch_screen[i];
		}
	}

	return null;
};

TLORMEngine.Screens.Screen.prototype.conditionsPassed = function(conditions) {
	var goto = "";

	var expected = conditions.length;
	var results = 0;
	for (var i=0; i<conditions.length; ++i) {
		if (this.conditionPassed(conditions[i])) {
			++results;
		}
	}

	return results == expected;
};

TLORMEngine.Screens.Screen.prototype.conditionPassed = function(condition) {
	if (condition.entity) {
		var entity = this.getEntityByName(condition.entity);
		if (entity) {
			var component = entity.getComponentByType(condition.component);
			if (component) {
				var value = component[condition.function].apply(component, condition.args);
				return this.checkConditionValue(condition.check, condition.value, value);
			}
		}
	} else if (condition.components) {
		var entities = this.getEntitiesByTypes(condition.components, condition.not_components || []);
		return this.checkConditionValue(condition.check, condition.value, entities.length);
	} else if (condition.key_code) {
		if (condition.key_code_pressed) {
			condition.key_code_pressed = false;
			return true;
		} else {
			return false;
		}
	}

	return false;
};

TLORMEngine.Screens.Screen.prototype.checkConditionValue = function(check, desired, actual) {
	if (check == "<") {
		return actual < desired;
	} else if (check == ">") {
		return actual > desired;
	} else if (check == "<=") {
		return actual <= desired;
	} else if (check == ">=") {
		return actual >= desired;
	} else if (check == "=") {
		return actual == desired;
	}
};

TLORMEngine.Screens.Screen.prototype.render = function(game, context) {
};

TLORMEngine.Screens.Screen.prototype.cleanUp = function() {
	document.body.removeChild(this.container_el);

	this.clearAllRegisteredEvents();
};

TLORMEngine.Screens.Screen.prototype.registerEvent = function(type, callback) {
	document.addEventListener(type, callback);
	if (!this.events[type]) { this.events[type] = []; }
	this.events[type].push(callback);
};

TLORMEngine.Screens.Screen.prototype.clearAllRegisteredEvents = function() {
	for (var type in this.events) {
		for (var i=0; i<this.events[type].length; ++i) {
			document.removeEventListener(type, this.events[type][i]);
		}
	}
};

TLORMEngine.Screens.Screen.prototype.setEntityManager = function(entity_manager) {
	this.entity_manager = entity_manager;
};

TLORMEngine.Screens.Screen.prototype.setSize = function(w, h) {
	this.width = w;
	this.height = h;
};

TLORMEngine.Screens.Screen.prototype.getEntities = function() {
	return this.entity_manager.getEntities(this);
};

TLORMEngine.Screens.Screen.prototype.getEntityByName = function(name) {
	return this.entity_manager.getEntityByName(this, name);
};

TLORMEngine.Screens.Screen.prototype.getEntitiesByType = function(type) {
	return this.entity_manager.getEntitiesByType(this, type)
};

TLORMEngine.Screens.Screen.prototype.getEntitiesByTypes = function(types, no_types) {
	return this.entity_manager.getEntitiesByTypes(this, types, no_types)
};

TLORMEngine.Screens.Screen.prototype.getEntitiesByPosition = function(x, y) {
	return this.entity_manager.getEntitiesByPosition(this, x, y)
};

TLORMEngine.Screens.Screen.prototype.getActiveComponents = function() {
	return this.entity_manager.getActiveComponents(this)
};

TLORMEngine.Screens.Screen.prototype.addEntity = function(entity) {
	this.entity_manager.addEntity(entity);
};
TLORMEngine.Screens.Screen.prototype.removeEntity = function(entity) {
	this.entity_manager.removeEntity(entity);
};
TLORMEngine.Screens.Screen.prototype.addEntityComponent = function(entity, component) {
	this.entity_manager.addEntityComponent(entity, component);
};
TLORMEngine.Screens.Screen.prototype.removeEntityComponent = function(entity, component) {
	this.entity_manager.removeEntityComponent(entity, component);
};
TLORMEngine.Screens.Screen.prototype.removeEntityComponentByType = function(entity, type) {
	this.entity_manager.removeEntityComponentByType(entity, type);
};

TLORMEngine.Screens.Screen.prototype.getContainer = function() {
	return this.container_el;
}

/* End of File: js/TLORMEngine/Screens/Screen.js */

/* File: js/TLORMEngine/Screens/OptionsScreen.js */

// DEPENDENCY: Screen.js

TLORMEngine.Screens.OptionsScreen = function(args) {
	TLORMEngine.Screens.Screen.call(this, args);

	this.options_changed = {};
}

// inherit from normal screen
TLORMEngine.Screens.OptionsScreen.extends(TLORMEngine.Screens.Screen);

TLORMEngine.Screens.OptionsScreen.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		options: { type: "object", title: "Settings" },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

// build GUI on init so we can access game and its options
TLORMEngine.Screens.OptionsScreen.prototype.init = function(game, reset) {
	TLORMEngine.Screens.Screen.prototype.init.call(this, game, reset);
	this.initSwitchScreens();

	// setup gui elements
	if (!this.gui_added) {
		this.container_el.appendChild(this.buildOptionsList(game));
		this.gui_added = true;
	}
};


TLORMEngine.Screens.OptionsScreen.prototype.buildOptionsList = function(game) {
	var list = document.createElement("ul");
	for (var option in this.options) {
		var list_item = this.buildOptionsListItem(game, option);
		list.appendChild(list_item);
	}

	return list;
};

TLORMEngine.Screens.OptionsScreen.prototype.buildOptionsListItem = function(game, option) {
	var list_item = document.createElement("li");

	var name = this.options[option].setting;
	var label = document.createElement("label");
	label.for = name;
	label.appendChild(document.createTextNode(option));
	list_item.appendChild(label);

	if (this.options[option].default) {
		game.setOption(name, this.options[option].default);
	}

	var input_item;
	if (this.options[option].flag) {
		input_item = document.createElement("input");
		input_item.type = "checkbox";
		input_item.checked = game.getOption(name);
	} else if (this.options[option].options) {
		input_item = document.createElement("select");
		for (var i=0; i<this.options[option].options.length; ++i) {
			var input_option = document.createElement("option");
			input_option.value = this.options[option].options[i];
			input_option.appendChild(document.createTextNode(input_option.value));
			input_option.selected = (game.getOption(name) == this.options[option].options[i] ? true : false);
			input_item.appendChild(input_option);
		}
	} else {
		input_item = document.createElement("input");
		input_item.type = "text";
		input_item.value = game.getOption(name);
	}

	input_item.name = name;
	input_item.id = name;
	list_item.appendChild(input_item);

	var menu_screen = this;
	list_item.addEventListener("change", function(event) {
		menu_screen.optionChanged(option);
		return false;
	});
	
	return list_item;
};

TLORMEngine.Screens.OptionsScreen.prototype.optionChanged = function(option) {
	var value;
	var input_item = document.getElementById(this.options[option].setting);
	if (this.options[option].flag) {
		value = input_item.checked;
	} else if (this.options[option].options) {
		value = input_item.options[input_item.selectedIndex].value;
	} else {
		values = input_item.value;
	}

	this.options_changed[option] = value; 
};

TLORMEngine.Screens.OptionsScreen.prototype.update = function(game, delta) {
	TLORMEngine.Screens.Screen.prototype.update.call(this, game, delta);

	var options_changed = this.options_changed;
	this.options_changed = {};
	for (var option in options_changed) {
		game.setOption(option, options_changed[option]);
	}
};

/* End of File: js/TLORMEngine/Screens/OptionsScreen.js */

/* File: js/TLORMEngine/Screens/MenuScreen.js */

// DEPENDENCY: Screen.js

TLORMEngine.Screens.MenuScreen = function(args) {
	TLORMEngine.Screens.Screen.call(this, args);

	// setup gui elements
	this.container_el.appendChild(this.buildMenuList());
}

// inherit from normal screen
TLORMEngine.Screens.MenuScreen.extends(TLORMEngine.Screens.Screen);

TLORMEngine.Screens.MenuScreen.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		options: { type: "object", title: "Settings" },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};


TLORMEngine.Screens.MenuScreen.prototype.buildMenuList = function() {
	var list = document.createElement("ul");
	for (var option in this.options) {
		var list_item = this.buildMenuListItem(option);
		list.appendChild(list_item);
	}

	return list;
};

TLORMEngine.Screens.MenuScreen.prototype.buildMenuListItem = function(option) {
	var list_item = document.createElement("li");
	var link = document.createElement("a");
	link.href = "#";
	list_item.appendChild(link);
	link.appendChild(document.createTextNode(option));

	var menu_screen = this;
	link.addEventListener("click", function(event) {
		menu_screen.optionSelected(option);
		return false;
	});
	
	return list_item;
};

TLORMEngine.Screens.MenuScreen.prototype.optionSelected = function(option) {
	if (this.options[option]) {
		if (this.options[option].goto) {
			this.setChange(this.options[option].goto, this.options[option].reset);
		}
	}
};

/* End of File: js/TLORMEngine/Screens/MenuScreen.js */

/* File: js/TLORMEngine/Screens/GameScreen.js */

// DEPENDENCY: Screen.js

TLORMEngine.Screens.GameScreen = function(args) {
	TLORMEngine.Screens.Screen.call(this, args);
	this.show_name = false;
	this.show_back = false;
	
	// setup managers for the game
	this.system_manager = new TLORMEngine.SystemManager();

	// setup canvas for display, i.e. scaled
	this.canvas = document.createElement("canvas");
	if (this.webgl) {
		this.gl = this.canvas.getContext("webgl") || this.canvas.getContext("experimental-webgl");
	} else {
		this.context = this.canvas.getContext("2d");

		// update context to avoid blurry scaling
		this.context.imageSmoothingEnabled = false;
		this.context.webkitImageSmoothingEnabled = false;
		this.context.mozImageSmoothingEnabled = false;
	}

	// position canvases in center
	this.canvas.style.position = "absolute";
}

// inherit from normal screen
TLORMEngine.Screens.GameScreen.extends(TLORMEngine.Screens.Screen);


TLORMEngine.Screens.GameScreen.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		//webgl: { type: "boolean", default: false, title: "Use WebGL (not currently working)" },
		//scale_canvas: { type: "boolean", default: false, title: "Use WebGL (when using WebGL)" },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Screens.GameScreen.prototype.init = function(game, reset) {
	TLORMEngine.Screens.Screen.prototype.init.call(this, game, reset);

	this.system_manager.initAllSystems(this, reset);

	// position canvases in center
	if (this.webgl) {
		// for simple performance boost draw smaller canvas and use CSS to scale it
		if (this.scale_canvas) {
			this.canvas.width  = this.width/2;
			this.canvas.height = this.height/2;
			this.canvas.style.webkitTransform = "scale3d(2.0, 2.0, 1.0)";
		} else {
			this.canvas.width  = this.width;
			this.canvas.height = this.height;
		}
	} else {
		this.canvas.width  = this.width;
		this.canvas.height = this.height;
	}
	this.canvas.style.top  = Math.round((window.innerHeight - this.canvas.height) / 2) + "px";
	this.canvas.style.left = Math.round((window.innerWidth - this.canvas.width) / 2) + "px";
	document.body.appendChild(this.canvas);
};

TLORMEngine.Screens.GameScreen.prototype.cleanUp = function() {
	TLORMEngine.Screens.Screen.prototype.cleanUp.call(this);

	document.body.removeChild(this.canvas);
};


TLORMEngine.Screens.GameScreen.prototype.update = function(game, delta) {
	TLORMEngine.Screens.Screen.prototype.update.call(this, game, delta);
	this.system_manager.updateAllSystems(this, delta);
};

TLORMEngine.Screens.GameScreen.prototype.render = function(game) {
	if (this.webgl) {
		this.gl.viewport(0, 0, this.canvas.width, this.canvas.height); 
		this.gl.clearColor(0, 0, 0, 1);
		this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
	} else {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
	
	this.system_manager.renderAllSystems(this, ( this.webgl ? this.gl : this.context ));
};

TLORMEngine.Screens.GameScreen.prototype.registerEvent = function(type, callback) {
	if (type.indexOf('key') == -1) {
		this.canvas.addEventListener(type, callback);
	} else {
		document.addEventListener(type, callback);
	}
	if (!this.events[type]) { this.events[type] = []; }
	this.events[type].push(callback);
};

TLORMEngine.Screens.Screen.prototype.clearAllRegisteredEvents = function() {
	for (var type in this.events) {
		for (var i=0; i<this.events[type].length; ++i) {
			if (type.indexOf('key') == -1) {
				this.canvas.removeEventListener(type, this.events[type][i]);
			} else {
				document.removeEventListener(type, this.events[type][i]);
			}
		}
	}
};

/* End of File: js/TLORMEngine/Screens/GameScreen.js */

/* File: js/TLORMEngine/ScreenManager.js */

TLORMEngine.ScreenManager = function(args) {
	this.next_id = 1;
	this.screens = [];
	this.screens_by_id = {};
	this.screens_by_name = {};
	this.current_screen = null;
	this.width = args.width;
	this.height = args.height;
	this.entity_manager = args.entity_manager;
	this.screens_visited = [];
};


TLORMEngine.ScreenManager.prototype.addScreen = function(screen) {
	if (screen.id) {
		return;
	}
	screen.id = this.next_id++;
	this.screens.push(screen);
	this.screens_by_id[screen.id] = screen;
	this.screens_by_name[screen.name] = screen;

	screen.setSize(this.width, this.height)
	screen.setEntityManager(this.entity_manager)
};

TLORMEngine.ScreenManager.prototype.setCurrentScreen = function(screen) {
	this.addScreen(screen);
	this.current_screen = screen;
	this.screens_visited.push(this.current_screen.name);
};

TLORMEngine.ScreenManager.prototype.getGameScreen = function() {
	for (var i=0; i<this.screens.length; ++i) {
		if (this.screens[i] instanceof TLORMEngine.Screens.GameScreen) {
			return this.screens[i];
		}
	};
};

TLORMEngine.ScreenManager.prototype.init = function(game) {
	this.current_screen.init(game);
};

TLORMEngine.ScreenManager.prototype.update = function(game, delta) {
	var change = this.current_screen.needsChange();
	if (change) {
		var old_screen = this.current_screen;
		var reset = old_screen.needsReset();
		old_screen.clearChange();
		old_screen.cleanUp();

		// TODO: remove this horrible text check
		if (change == "TLORM_BACK") {
			this.screens_visited.pop();
			change = this.screens_visited.pop();
		}

		this.setCurrentScreen(this.screens_by_name[change]);
		this.current_screen.init(game, reset);
	}
	this.current_screen.update(game, delta);
};

TLORMEngine.ScreenManager.prototype.render = function(game, context) {
	this.current_screen.render(game, context);
};

/* End of File: js/TLORMEngine/ScreenManager.js */

/* File: js/TLORMEngine/ResourceManager.js */

TLORMEngine.ResourceManager = function() {
	this.images = {};
	this.to_load = 0;
	this.num_items = 0;
	this.no_cache = true;

	// create an internal canvas for reading image pixel data
	this.canvas = document.createElement("canvas");
	this.context = this.canvas.getContext("2d");
};

TLORMEngine.ResourceManager.prototype.loadImage = function(src, cb) {
	if (this.images[src]) {
		return this.images[src].img;
	}

	var image = new Image();
	this.to_load += 1;
	this.num_items += 1;
	var resource_manager = this;
	image.onload = function() {
		if (cb) {
			cb.call(resource_manager);
		}
		resource_manager.to_load -= 1;
		resource_manager.images[src].loaded = true;
	};
	if (this.no_cache) {
		image.src = src + "?" + new Date().getTime();
	} else {
		image.src = src;
	}

	this.images[src] = {
		img : image,
		loaded : false
	};
	return image;
};

TLORMEngine.ResourceManager.prototype.getImageData = function(src) {
	// check if its been loaded before and return it
	if (this.images[src].image_data) {
		return D;
	}

	// setup canvas and put the image on
	this.canvas.width = this.images[src].img.width;
	this.canvas.height = this.images[src].img.height;
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.context.drawImage(this.images[src].img, 0, 0);

	// now read its imaghe data
	this.images[src].image_data = new TLORMEngine.Graphics.ImageData({
		width : this.canvas.width,
		height : this.canvas.width,
		image_data : this.context.getImageData(0, 0, this.canvas.width, this.canvas.height),
	});
	return this.images[src].image_data;
};

TLORMEngine.ResourceManager.prototype.getImage = function(src) {
	if (this.images[src] && this.images[src].loaded) {
		return this.images[src].img;
	}
	return null;
};

TLORMEngine.ResourceManager.prototype.loadSpriteSheet = function(src, tile_width, tile_height, num_colours) {
	// load as image, but add custom loaded callback
	return this.loadImage(src, function() {
		this.images[src].sprite_sheet = new TLORMEngine.Graphics.SpriteSheet({
			image : this.images[src].img,
			tile_width : tile_width,
			tile_height : tile_height,
			num_colours : num_colours,
			image_data : this.getImageData(src),
			context : this.context,
		});
	});
};

TLORMEngine.ResourceManager.prototype.getSpriteSheet = function(src) {
	if (this.images[src] && this.images[src].loaded) {
		return this.images[src].sprite_sheet;
	}
	return null;
};

TLORMEngine.ResourceManager.prototype.allLoaded = function(game) {
	return this.to_load === 0;
};



/* End of File: js/TLORMEngine/ResourceManager.js */

/* File: js/TLORMEngine/GameConfig.js */


TLORMEngine.GameConfig = {};

TLORMEngine.GameConfig.validate = function(game_config) {
	var result = tv4.validate(game_config, TLORMEngine.GameConfig.schema());
	TLORMEngine.Utils.error(tv4.missing);
	if (!result) {
		TLORMEngine.Utils.error(tv4.error, true);
		return false;
	}

	return result;
};

TLORMEngine.GameConfig.schemaBuilt = false;
TLORMEngine.GameConfig.schema = function() {
	var schema = this.base_schema();

	if (TLORMEngine.GameConfig.schemaBuilt) {
		return schema;
	}
	TLORMEngine.GameConfig.schemaBuilt = true;

	// lookup all systems
	for (var system_type in TLORMEngine.Systems) {
		if (system_type == "System") {
			continue;
		}
		schema.properties.systems.items.enum.push(system_type);
	}

	// lookup all screens
	for (var screen_type in TLORMEngine.Screens) {
		schema.properties.screens.items.type.push({
			type: "object",
			properties: {
				type: {
					title: "Screen Type",
					enum: [ screen_type ],
					required: true
				},
				name: {
					title: "Screen Name (should be unique)",
					type: "string",
					required: true
				},
				current_screen: {
					title: "Starting Screen?",
					description: "Flag to indicate which screen to start on",
					type: "boolean"
				},
				args: {
					title: "Screen Arguments",
					description: "Arguments to pass on to the Screen",
					type: "object",
					properties: TLORMEngine.Screens[screen_type].prototype.args_schema()
				}
			}
		});
	}

	// lookup all components
	for (var component_type in TLORMEngine.Components) {
		if (component_type == "Component") {
			continue;
		}
		schema.properties.entities.items.properties.components.items.type.push({
			type: "object",
			properties: {
				type: {
					title: "Component Type",
					enum: [ component_type ],
					required: true
				},
				args: {
					title: "Component Arguments",
					description: "Arguments to pass on to the Component",
					type: "object",
					properties: TLORMEngine.Components[component_type].prototype.args_schema()
				}
			}
		});
	}


	return schema;
};

TLORMEngine.GameConfig.base_schema = function() {
	return {
		"$schema": "http://json-schema.org/draft-04/schema#",
		title: "TLORM Game Config",
		description: "Configuration of a Game to be generated by TLORM Engine",
		type: "object",
		properties: {
			name: {
				title: "Name of Game",
				type: "string",
				required: true
			},
			width: {
				title: "Width of Game (in pixels)",
				type: "integer",
				required: true
			},
			height: {
				title: "Height of Game (in pixels)",
				type: "integer",
				required: true
			},
			systems: {
				title: "Systems to use in the Game",
				type: "array",
				items: {
					title: "System Type",
					enum: []
				}
			},
			screens: {
				title: "Screens to show in the Game",
				type: "array",
				required: true,
				minItems: 1,
				items: { type: [] }
			},
			entities: {
				title: "Entities to use in the Game",
				type: "array",
				required: true,
				minItems: 1,
				items: {
					type: "object",
					properties: {
						name: {
							title: "Entity Name (should be unique)",
							type: "string",
							required: true,
						},
						components: {
							title: "Components within this Entity",
							type: "array",
							required: true,
							minItems: 1,
							items: { type: [] }
						}
					}
				}
			}
		}
	};
};

/* End of File: js/TLORMEngine/GameConfig.js */

/* File: js/TLORMEngine/Game.js */

TLORMEngine.Game = function(args) {

	// setup incoming args
	this.name = args.name || "Default Game";
	this.screen_ratio = args.screen_ratio || (9 / 16);
	this.width = args.width || 300;
	this.height = args.height || (this.width * this.screen_ratio);
	if (args.full_screen && args.full_screen.toString() == "true") {
		this.full_screen = true;
		this.width = window.innerWidth;
		this.height = window.innerHeight;
	} else {
		this.full_screen = false;
	}

	// setup requestAnimationFrame
	this.running = false;
	this.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	// setup HTML and make it redo HTML on resize
	this.setupHTML();
	//var game = this;
	//window.onresize = function() { this.screen_manager.current_screen.init(); };

	// setup managers
	this.entity_manager   = new TLORMEngine.EntityManager();
	this.resource_manager = new TLORMEngine.ResourceManager();
	this.screen_manager   = new TLORMEngine.ScreenManager({
		width: this.width,
		height: this.height,
		entity_manager: this.entity_manager,
	});

	// check for event handlers
	this.onstart = args.onstart;
	this.onupdate = args.onupdate;
	
	// seed random numbers
	var seed = this.getParam('seed');
	Math.seedrandom(seed);

	// place to store options
	this.options = {};

	// setup viewport for mobiles so user can't drag the page or zoom
	var viewport = document.createElement("meta");
	viewport.name = "viewport";
	viewport.content = "initial-scale=1, maximum-scale=1, user-scalable=no";
	document.getElementsByTagName("head")[0].appendChild(viewport);

	// this stops drag scrolling
	document.ontouchmove = function(event) { event.preventDefault(); }
};

TLORMEngine.Game.prototype.setOption = function(option, value) {
	this.options[option] = value;
};

TLORMEngine.Game.prototype.getOption = function(option) {
	return this.options[option];
};

TLORMEngine.Game.prototype.setupHTML = function() {

	// set page title
	this.setTitle(this.name);

	// empty page
	document.body.innerHTML = "";
};

TLORMEngine.Game.prototype.setTitle = function(title) {
	document.title = title;
};

TLORMEngine.Game.prototype.start = function() {
	if (!this.resource_manager.allLoaded()) {
		var game = this;
		setTimeout(function() { game.start(); }, 50);
		return;
	}

	this.init();

	if (this.onstart) {
		this.onstart();
	}

	this.running = true;
	this.render_count = 0;
	this.last_update_time = new Date().getTime();
	this.last_second_time = new Date().getTime();
	this.loop();
};

TLORMEngine.Game.prototype.stop = function() {
	this.running = false;
};

TLORMEngine.Game.prototype.getParam = function(incoming_param) {
	if (!this.params) {
		this.params = {};
		if (location.search) {
			var params = location.search.substring(1).split('&');
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split('=');
				this.params[param[0]] = param[1];
			}
		}
	}
	return this.params[incoming_param];
};

TLORMEngine.Game.prototype.init = function() {
	this.screen_manager.init(this);
	this.entity_manager.initAllEntities(true);
};

TLORMEngine.Game.prototype.loop = function() {
	if (this.running) {

		// update with time since last update
		var delta = new Date().getTime() - this.last_update_time;
		this.update(delta/1000.0);
		this.last_update_time += delta;

		// render
		this.render();
		this.render_count += 1;

		// every second update ups/fps and reset counters
		delta = new Date().getTime() - this.last_second_time;
		if (delta >= 1000) {
			this.setTitle(this.render_count + " fps   |   " + this.name);
			this.update_count = 0;
			this.render_count = 0;
			this.last_second_time += delta;
		}

		// make it loo
		var game = this;
		if (this.requestAnimationFrame) {
			// loop requestAnimationFrame, must be called on window
			// see: http://stackoverflow.com/a/9678166/41468
			this.requestAnimationFrame.call(window, function() { game.loop(); });
		} else {
			// no request frame animation, just use set timeout with update time */
			setTimeout(function() { game.loop(); }, this.update_time);
		}
	}
};

TLORMEngine.Game.prototype.update = function(delta) {
	this.screen_manager.update(this, delta);
	this.entity_manager.update(this);
	if (this.onupdate) {
		this.onupdate();
	}
};

TLORMEngine.Game.prototype.render = function() {
	this.screen_manager.render(this);
};

// function takes in json_file name, loads it,
// and parses uit to make a game which
TLORMEngine.GameFromJSON = function(json_file) {
	var game_settings = TLORMEngine.Utils.get_json(json_file);
	if (game_settings == null) {
		TLORMEngine.Utils.error("Did not game setting from JSON file '"+json_file+"''", true);
	}

	return this.GameFromJSONObject(game_settings);
}

// function takes in json object, loads it,
// and parses uit to make a game which
TLORMEngine.GameFromJSONObject = function(game_settings) {
	// validate it
	//TLORMEngine.GameConfig.validate(game_settings);
	
	// setup game
	var game_args = game_settings.args || {};
	game_args.name = game_settings.name;
	game_args.width = game_settings.width;
	game_args.height = game_settings.height;
	var game = new TLORMEngine.Game(game_args);
	
	// setup screens
	var screens = game_settings.screens || [];
	for (var i=0; i<screens.length; ++i) {
		var args = screens[i].args || {};
		args.name = screens[i].name;
		if (!TLORMEngine.Screens[screens[i].type]) {
			TLORMEngine.Utils.error("Unknown Screen Type '"+screens[i].type+"'");
		}
		if (screens[i].current_screen) {
			game.screen_manager.setCurrentScreen(new TLORMEngine.Screens[screens[i].type](args));
		} else {
			game.screen_manager.addScreen(new TLORMEngine.Screens[screens[i].type](args));
		}
	}
	
	// setup entities
	var entities = game_settings.entities || [];
	for (var i=0; i<entities.length; ++i) {
		var entity_components = entities[i].components || [];
		var components = [];
		for (var j=0; j<entity_components.length; ++j) {
			components.push(new TLORMEngine.Components[entity_components[j].type](entity_components[j].args));
		}
		var entity = new TLORMEngine.Entities.Entity({ name: entities[i].name, components: components, screens: entities[i].screens });
		game.entity_manager.addEntity(entity);
	}
	
	return game;
};


/* End of File: js/TLORMEngine/Game.js */

/* File: js/TLORMEngine/EntityManager.js */

TLORMEngine.EntityManager = function() {
	this.next_id = 1;
	this.all_screens = 'TLORM_ALL_SCREENS';
	this.entities_by_screen = {};
	this.entities_by_type = {};
	this.entities_by_name = {};
	this.entities_by_id = {};
	this.entities_to_remove = [];
	this.entities_to_add = [];
	this.entity_components_to_remove = [];
	this.entity_components_to_add = [];
};

TLORMEngine.EntityManager.prototype.addEntity = function(entity) {
	this.entities_to_add.push(entity);
	return entity;
};

TLORMEngine.EntityManager.prototype._addEntity = function(entity) {
	entity.id = this.next_id++;

	var screens = entity.screens;
	if (!screens || screens.length == 0) {
		screens = [ { name: this.all_screens } ];
	}
	for (var i=0; i<screens.length; ++i) {
		var screen = screens[i];

		if (!this.entities_by_screen[screen.name]) {
			this.entities_by_screen[screen.name] = [];
		}
		this.entities_by_screen[screen.name].push(entity);

		if (!this.entities_by_type[screen.name]) {
			this.entities_by_type[screen.name] = {};
		}
		for (var i = 0; i < entity.components.length; ++i) {
			if (!this.entities_by_type[screen.name][entity.components[i].type]) {
				this.entities_by_type[screen.name][entity.components[i].type] = [];
			}
			this.entities_by_type[screen.name][entity.components[i].type].push(entity);
		}

	}

	this.entities_by_id[entity.id] = entity;
	this.entities_by_name[entity.name] = entity;

	entity.initAllComponents(true);
	return entity;
};

TLORMEngine.EntityManager.prototype.removeEntity = function(entity) {
	this.entities_to_remove.push(entity);
};
TLORMEngine.EntityManager.prototype._removeEntity = function(entity) {
	var screens = entity.screens;
	if (!screens || screens.length == 0) {
		screens = [ { name: this.all_screens } ];
	}
	for (var i=0; i<screens.length; ++i) {
		var screen = screens[i];

		if (this.entities_by_screen[screen.name]) {
			for (var i = 0; i < this.entities_by_screen[screen.name].length; ++i) {
				if (this.entities_by_screen[screen.name][i] === entity) {
					this.entities_by_screen[screen.name].splice(i, 1);
					break;
				}
			}
		}

		if (this.entities_by_type[screen.name]) {
			for (var i = 0; i < entity.components.length; ++i) {
				var component = entity.components[i];
				if (this.entities_by_type[screen.name][component.type]) {
					for (var j = 0; j < this.entities_by_type[screen.name][component.type].length; ++j) {
						if (this.entities_by_type[screen.name][component.type][j] === entity) {
							this.entities_by_type[screen.name][component.type].splice(j, 1);
							break;
						}
					}
				}
			}
		}
	}

	if (this.entities_by_id[entity.id]) {
		delete this.entities_by_id[entity.id];
	}

	if (this.entities_by_name[entity.name]) {
		delete this.entities_by_name[entity.name];
	}
};

TLORMEngine.EntityManager.prototype.getEntities = function(screen) {
	return this.entities_by_screen[screen.name].concat(this.entities_by_screen[this.all_screens]);
};

TLORMEngine.EntityManager.prototype.getEntityByName = function(screen, name) {
	return this.entities_by_name[name];
};

TLORMEngine.EntityManager.prototype.getEntitiesByType = function(screen, type) {
	var entities = [];
	if (this.entities_by_type[screen.name] && this.entities_by_type[screen.name][type]) {
		entities = this.entities_by_type[screen.name][type];
	}
	if (this.entities_by_type[this.all_screens] && this.entities_by_type[this.all_screens][type]) {
		entities = entities.concat(this.entities_by_type[this.all_screens][type]);
	}

	return entities;
};

TLORMEngine.EntityManager.prototype.getEntitiesByTypes = function(screen, types, no_types) {
	if (no_types === undefined) {
		no_types = [];
	}

	// get all entites for each type
	var entity_ids = {};
	for (var i = 0; i < types.length; ++i) {
		var entity_types = this.getEntitiesByType(screen, types[i]);
		for (var e = 0; e < entity_types.length; ++e) {
			var entity = entity_types[e];
			if (entity_ids[entity.id]) {
				entity_ids[entity.id]++;
			} else {
				entity_ids[entity.id] = 1;
			}
		}
	}

	var entities = [];
	for (var id in entity_ids) {
		var has_no_type = false;
		for (var i = 0; i < no_types.length; ++i) {
			if (this.entities_by_id[id].getComponentByType(no_types[i])) {
				has_no_type = true;
				break;
			}
		}
		if (!has_no_type && entity_ids[id] >= types.length) {
			entities.push(this.entities_by_id[id]);
		}
	}

	return entities;
};

TLORMEngine.EntityManager.prototype.getEntitiesByPosition = function(screen, x, y) {
	var entities = [];
	var screen_entities = this.getEntities(screen);
	for (var i = 0; i < screen_entities.length; i++) {
		if (screen_entities[i].x === x && screen_entities[i].y === y) {
			entities.push(screen_entities[i]);
		}
	}

	return entities;
};

TLORMEngine.EntityManager.prototype.getActiveComponents = function(screen) {
	var components_found = {};
	var components = []
	if (this.entities_by_type[screen.name]) {
		for (var component in this.entities_by_type[screen.name]) {
			if (!components_found[component]) {
				components_found[component] = true;
				components.push(component);
			}
		}
	}
	if (this.entities_by_type[this.all_screens]) {
		for (var component in this.entities_by_type[this.all_screens]) {
			if (!components_found[component]) {
				components_found[component] = true;
				components.push(component);
			}
		}
	}

	return components;
};

TLORMEngine.EntityManager.prototype.addEntityComponent = function(entity, component) {
	this.entity_components_to_add.push({
		entity : entity,
		component : component
	});
};

TLORMEngine.EntityManager.prototype._addEntityComponent = function(entity, component) {
	if (this.entities_by_id[entity.id]) {
		entity.addComponent(component);

		var screens = entity.screens;
		if (!screens || screens.length == 0) {
			screens = [ { name: this.all_screens } ];
		}
		for (var i=0; i<screens.length; ++i) {
			var screen = screens[i];

			if (!this.entities_by_type[screen.name][component.type]) {
				this.entities_by_type[screen.name][component.type] = [];
			}
			var found = false;
			for (var i = 0; i < this.entities_by_type[screen.name][component.type].length; ++i) {
				if (this.entities_by_type[screen.name][component.type][i] === entity) {
					found = true;
					break;
				}
			}
			if (!found) {
				this.entities_by_type[screen.name][component.type].push(entity);
			}
		}
	}
};

TLORMEngine.EntityManager.prototype.removeEntityComponent = function(entity, component) {
	this.entity_components_to_remove.push({
		entity : entity,
		component : component
	});
};

TLORMEngine.EntityManager.prototype.removeEntityComponentByType = function(entity, type) {
	var component = entity.getComponentByType(type);
	if (component) {
		this.entity_components_to_remove.push({
			entity : entity,
			component : component
		});
	}
};

TLORMEngine.EntityManager.prototype._removeEntityComponent = function(entity, component) {
	if (this.entities_by_id[entity.id]) {
		entity.removeComponent(component);

		// only remove is all components removed
		if (!component.multiple || entity.getComponentByType(component.type).length == 0) {
			var screens = entity.screens;
			if (!screens || screens.length == 0) {
				screens = [ { name: this.all_screens } ];
			}
			for (var i=0; i<screens.length; ++i) {
				var screen = screens[i];
				for (var i = 0; i < this.entities_by_type[screen.name][component.type].length; ++i) {
					if (this.entities_by_type[screen.name][component.type][i] === entity) {
						this.entities_by_type[screen.name][component.type].splice(i, 1);
						break;
					}
				}
			}
		}
	}
};

TLORMEngine.EntityManager.prototype.initAllEntities = function(reset) {
	for (var id in this.entities_by_id) {
		this.entities_by_id[id].initAllComponents(reset);
	}
};

TLORMEngine.EntityManager.prototype.update = function(game) {
	for (var i = 0; i < this.entity_components_to_remove.length; ++i) {
		this._removeEntityComponent(this.entity_components_to_remove[i].entity, this.entity_components_to_remove[i].component);
	}
	this.entity_components_to_remove = [];

	var entities_to_remove = [];
	for (var i = 0; i < this.entities_to_remove.length; ++i) {
		if (this.entities_to_remove[i].destroyed(game)) {
			this._removeEntity(this.entities_to_remove[i]);
		} else {
			entities_to_remove.push(this.entities_to_remove[i]);
		}
	}
	this.entities_to_remove = entities_to_remove;

	for (var i = 0; i < this.entity_components_to_add.length; ++i) {
		this._addEntityComponent(this.entity_components_to_add[i].entity, this.entity_components_to_add[i].component);
	}
	this.entity_components_to_add = [];

	for ( i = 0; i < this.entities_to_add.length; ++i) {
		this._addEntity(this.entities_to_add[i]);
	}
	this.entities_to_add = [];
};



/* End of File: js/TLORMEngine/EntityManager.js */

/* File: js/TLORMEngine/Entities/Entity.js */

TLORMEngine.Entities.Entity = function(args) {
	this.id = null;
	this.name = args.name;
	this.screens = args.screens || [];

	this.already_destroyed = false;

	this.components = [];
	this.components_by_type = {};
	var incoming_components = args.components || [];
	for (var i = 0; i < incoming_components.length; ++i) {
		this.addComponent(incoming_components[i]);
	}
};

TLORMEngine.Entities.Entity.prototype.addComponent = function(component) {
	if (component.multiple) {
		this.components.push(component);
		if (!this.components_by_type[component.type]) {
			this.components_by_type[component.type] = [];
		}
		this.components_by_type[component.type].push(component);
	} else {
		if (this.components_by_type[component.type]) {
			this.removeComponent(this.components_by_type[component.type]);
		}
		this.components.push(component);
		this.components_by_type[component.type] = component;
	}
};

TLORMEngine.Entities.Entity.prototype.removeComponent = function(component) {
	for (var i = 0; i < this.components.length; ++i) {
		if (this.components[i] === component) {
			this.components.splice(i, 1);
		}
	}
	if (component.multiple) {
		for (var i = 0; i < this.components_by_type[component.type].length; ++i) {
			if (this.components_by_type[component.type][i] === component) {
				this.components_by_type[component.type].splice(i, 1);
			}
		}
	} else {
		delete this.components_by_type[component.type];
	}
};

TLORMEngine.Entities.Entity.prototype.removeComponentByType = function(type) {
	if (this.components_by_type[type]) {
		if (this.components_by_type[type] instanceof Array) {
			for (var i = 0; i < this.components_by_type[type].length; ++i) {
				this.removeComponent(this.components_by_type[type][i]);
			}
		} else {
			this.removeComponent(this.components_by_type[component.type]);
		}
	}
};

TLORMEngine.Entities.Entity.prototype.getComponentByType = function(type) {
	if (this.components_by_type[type]) {
		return this.components_by_type[type];
	}

	return null;
};

TLORMEngine.Entities.Entity.prototype.initAllComponents = function(reset) {
	for (var i = 0; i < this.components.length; ++i) {
		if (this.components[i].init) {
			this.components[i].init(reset);
		}
	}
};

TLORMEngine.Entities.Entity.prototype.destroy = function(screen) {
	for (var i = 0; i < this.components.length; ++i) {
		this.components[i].entityDestroyed(screen, this);
	}
};

TLORMEngine.Entities.Entity.prototype.destroyed = function(screen) {
	if (!this.already_destroyed) {
		this.destroy(screen);
		this.already_destroyed = true;
	}

	for (var i = 0; i < this.components.length; ++i) {
		if (!this.components[i].entityIsDestroyed() ){
			return false;
		}
	}
	return true;
};

/* End of File: js/TLORMEngine/Entities/Entity.js */

/* File: js/TLORMEngine/Components/Component.js */


/* just type in main component */
TLORMEngine.Components.Component = function(args) {
	this.type = args.type || 'Component';
	this.multiple = args.multiple || false;

	this.setArgs(args);
};

TLORMEngine.Components.Component.prototype.args_schema = function () {
	return {
	};
}
TLORMEngine.Components.Component.prototype.setArgs = function(args) {
	var args_schema = this.args_schema();
	for ( var key in args_schema ) {
		if (args[key] != undefined) {
			// TODO: some kind of validation here
			this[key] = args[key];
		} else if (args_schema[key].default != undefined) {
			this[key] = args_schema[key].default;
		}
	}
};

TLORMEngine.Components.Component.prototype.init = function(reset) {
};

TLORMEngine.Components.Component.prototype.entityDestroyed = function(game, entity) {
};

TLORMEngine.Components.Component.prototype.entityIsDestroyed = function(game) {
	return true;
};

/* End of File: js/TLORMEngine/Components/Component.js */

/* File: js/TLORMEngine/Components/Data.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Data = function(args) {
	args.type = 'Data';
	TLORMEngine.Components.Component.call(this, args);
	
	// TODO: make this not dynamic so args schema parsing works
	this.data = {};
	for (var key in args) {
		if (key != 'type') {
			this.data[key] = args[key];
		}
	}
};

// inherit from normal component
TLORMEngine.Components.Data.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Data.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		// TODO: make this work
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Data.prototype.getData = function(key) {
	return this.data[key];
};

TLORMEngine.Components.Data.prototype.addToData = function(key, value) {
	this.data[key] += value;
};



/* End of File: js/TLORMEngine/Components/Data.js */

/* File: js/TLORMEngine/Components/Follow.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Follow = function(args) {
	args.type = 'Follow';
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.Follow.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Follow.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		entity: { type: "string" },
		dx: { type: "number", default: 0 },
		dy: { type: "number", default: 0 },
		dz: { type: "number", default: 0 },
		move_middle: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/Follow.js */

/* File: js/TLORMEngine/Components/KeyInput.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.KeyInput = function(args) {
	args.type = 'KeyInput';
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.KeyInput.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.KeyInput.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		map: { type: "object", default: {} },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};


/* End of File: js/TLORMEngine/Components/KeyInput.js */

/* File: js/TLORMEngine/Components/MouseInput.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.MouseInput = function(args) {
	args.type = 'MouseInput';
	TLORMEngine.Components.Component.call(this, args);
	
	this.move = args.move || null;
};

// inherit from normal component
TLORMEngine.Components.MouseInput.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.MouseInput.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		move: { type: "object", default: null },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/MouseInput.js */

/* File: js/TLORMEngine/Components/Particles.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Particles = function(args) {
	args.type = 'Particles';
	TLORMEngine.Components.Component.call(this, args);

	this.particles = [];
};

// inherit from normal component
TLORMEngine.Components.Particles.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Particles.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		count: { type: "number", default: 10 },
		min_life: { type: "number", default: 5 },
		max_life: { type: "number", default: 10 },
		max_speed: { type: "number", default: 2 },
		min_size: { type: "number", default: 1 },
		max_size: { type: "number", default: 5 },
		decay: { type: "number", default: 1 },
		infinite: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Particles.prototype.init = function(reset) {
	if (reset) {
		for (var i=0; i<this.count; ++i) {
			this.particles.push(this.createParticle());
		}
	}
};

TLORMEngine.Components.Particles.prototype.createParticle = function() {
	return {
		x: 0, y: 0,
		life: this.min_life+(Math.random()*(this.max_life-this.min_life)),
		speed_x: -this.max_speed+(Math.random()*this.max_speed*2),
		speed_y: -this.max_speed+(Math.random()*this.max_speed*2),
		size: this.min_size+(Math.random()*(this.max_size-this.min_size)),
	};
};

TLORMEngine.Components.Particles.prototype.decayAll = function() {
	var particles = [];
	for (var i=0; i<this.particles.length; ++i) {
		var particle = this.particles[i];
		particle.life -= this.decay;
		if (particle.life > 0) {
			particles.push(particle);
		}
	}

	if (this.infinite) {
		for (var i=particles.length; i<this.count; ++i) {
			particles.push(this.createParticle());
		}
	}

	this.particles = particles;
};

TLORMEngine.Components.Particles.prototype.moveAll = function(dx, dy) {
	var particles = [];
	for (var i=0; i<this.particles.length; ++i) {
		var particle = this.particles[i];
		particle.x += particle.speed_x*dx;
		particle.y += particle.speed_y*dy;
	}
};


/* End of File: js/TLORMEngine/Components/Particles.js */

/* File: js/TLORMEngine/Components/Position.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Position = function(args) {
	args.type = 'Position';
	TLORMEngine.Components.Component.call(this, args);

	this.hw = this.w / 2;
	this.hh = this.h / 2;
	this.hd = this.d / 2;
	this.mx = this.x+this.hw;
	this.my = this.y+this.hh;
	this.mz = this.z+this.d/2;
	this.move_direction = "";
};

// inherit from normal component
TLORMEngine.Components.Position.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Position.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		x: { type: "number" },
		y: { type: "number" },
		z: { type: "number" },
		w: { type: "number", default: 0 },
		h: { type: "number", default: 0 },
		d: { type: "number", default: 0 },
		angle_x: { type: "number", default: 0 },
		angle_y: { type: "number", default: 0 },
		angle_z: { type: "number", default: 0 },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Position.prototype.getX = function() {
	return this.x;
};
TLORMEngine.Components.Position.prototype.getY = function() {
	return this.y;
};

TLORMEngine.Components.Position.prototype.is3D = function() {
	if (this.z !== null && this.z != undefined) {
		return true;
	} else {
		return false;
	}
};

TLORMEngine.Components.Position.prototype.rotateBy = function(dx, dy, dz) {
	if (dx !== null) {
		this.angle_x += dx;
		this.angle_x %= 2*Math.PI;
	}
	if (dy !== null) {
		this.angle_y += dy;
		this.angle_y %= 2*Math.PI;
	}
	if (dz !== null) {
		this.angle_z += dz;
		this.angle_z %= 2*Math.PI;
	}
};

TLORMEngine.Components.Position.prototype.moveBy = function(dx, dy, dz) {
	if (dx !== null && dx !== undefined) {
		this.x += dx;
		this.mx = this.x+this.hw;
		this.move_direction = (dx < 0 ? "left" : "right");
	}
	if (dy !== null && dy !== undefined) {
		this.y += dy;
		this.my = this.y+this.hh;
		this.move_direction = (dy < 0 ? "up" : "down");
	}
	if (dz !== null && dz !== undefined) {
		this.z += dz;
		this.mz = this.z+this.d/2;
	}
};

TLORMEngine.Components.Position.prototype.moveTo = function(x, y, z) {
	if (x !== null) {
		this.move_direction = (x < this.x ? "left" : "right");
		this.x = x;
		this.mx = this.x+this.hw;
	}
	if (y !== null) {
		this.move_direction = (y < this.y ? "up" : "down");
		this.y = y;
		this.my = this.y+this.hh;
	}
	if (z !== null) {
		this.z = z;
		this.mz = this.z+this.d/2;
	}
};

TLORMEngine.Components.Position.prototype.collides = function(position) {
	if (this.x + this.w < position.x || this.y + this.h < position.y || this.x > position.x + position.w || this.y > position.y + position.h) {
		return false;
	}

	return true;
};

TLORMEngine.Components.Position.prototype.direction = function() {
	return this.move_direction;
};

TLORMEngine.Components.Position.prototype.collisionDirection = function(position) {
	var bottom = this.y + this.h;
	var tiles_bottom = position.y + position.h;
	var right = this.x + this.w;
	var tiles_right = position.x + position.w;
	var b_collision = tiles_bottom - this.y;
	var t_collision = bottom - position.y;
	var l_collision = right - position.x;
	var r_collision = tiles_right - this.x;

	if (t_collision < b_collision && t_collision < l_collision && t_collision < r_collision) {
		return "top";
	}
	if (b_collision < t_collision && b_collision < l_collision && b_collision < r_collision) {
		return "bottom";
	}
	if (l_collision < r_collision && l_collision < t_collision && l_collision < b_collision) {
		return "left";
	}
	if (r_collision < l_collision && r_collision < t_collision && r_collision < b_collision) {
		return "right";
	}
};

/* End of File: js/TLORMEngine/Components/Position.js */

/* File: js/TLORMEngine/Components/Render2D.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Render2D = function(args) {
	args.type = 'Render2D';
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.Render2D.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Render2D.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		fill_colour: { type: "string" },
		stroke_colour: { type: "string" },
		show_name: { type: "boolean" },
		z: { type: "number", default: 5 },
		as_line: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/Render2D.js */

/* File: js/TLORMEngine/Components/RenderData.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.RenderData = function(args) {
	args.type = 'RenderData';
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.RenderData.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.RenderData.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		colour: { type: "string", default: "#000000" },
		x: { type: "number", default: null },
		y: { type: "number", default: null },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/RenderData.js */

/* File: js/TLORMEngine/Components/Rotation.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Rotation = function(args) {
	args.type = 'Rotation';
	args.multiple = true;
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.Rotation.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Rotation.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		dx: { type: "number", default: 0 },
		dy: { type: "number", default: 0 },
		dz: { type: "number", default: 0 },
		constant: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/Rotation.js */

/* File: js/TLORMEngine/Components/Timer.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Timer = function(args) {
	args.type = 'Timer';
	TLORMEngine.Components.Component.call(this, args);

	this.time_so_far = 0;
};

// inherit from normal component
TLORMEngine.Components.Timer.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Timer.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		time: { type: "number" },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Timer.prototype.init = function(reset) {
	if (reset) {
		this.time_so_far = 0;
	}
};

TLORMEngine.Components.Timer.prototype.addTime = function(delta) {
	this.time_so_far = delta;
};

TLORMEngine.Components.Timer.prototype.done = function(delta) {
	return this.time_so_far >= this.time;
};

/* End of File: js/TLORMEngine/Components/Timer.js */

/* File: js/TLORMEngine/Components/TouchInput.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.TouchInput = function(args) {
	args.type = 'TouchInput';
	TLORMEngine.Components.Component.call(this, args);
	
	this.drag = args.drag || null;
};

// inherit from normal component
TLORMEngine.Components.TouchInput.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.TouchInput.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		drag: { type: "object", default: null },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/TouchInput.js */

/* File: js/TLORMEngine/Components/Translation.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Translation = function(args) {
	args.type = 'Translation';
	args.multiple = true;
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.Translation.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Translation.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		x: { type: "number", default: null },
		y: { type: "number", default: null },
		move_middle: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

/* End of File: js/TLORMEngine/Components/Translation.js */

/* File: js/TLORMEngine/Components/Velocity.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Velocity = function(args) {
	args.type = 'Velocity';
	args.multiple = true;
	TLORMEngine.Components.Component.call(this, args);
};

// inherit from normal component
TLORMEngine.Components.Velocity.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Velocity.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		dx: { type: "number", default: 0 },
		dy: { type: "number", default: 0 },
		dz: { type: "number", default: 0 },
		constant: { type: "boolean", default: false },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Velocity.prototype.increase = function(dx, dy, dz) {
	if (dx) {
		if (this.dx > 0) {
			this.dx += dx;
		} else if (this.dx < 0) {
			this.dx -= dx;
		}
	}
	if (dy) {
		if (this.dy > 0) {
			this.dy += dy;
		} else if (this.dy < 0) {
			this.dy -= dy;
		}
	}
	if (dz) {
		if (this.dz > 0) {
			this.dz += dz;
		} else if (this.dz < 0) {
			this.dz -= dz;
		}
	}
};

TLORMEngine.Components.Velocity.prototype.set = function(dx, dy, dz) {
	if (dx) {
		this.dx = dx;
	}
	if (dy) {
		this.dy = dy;
	}
	if (dz) {
		this.dz = dz;
	}
};

TLORMEngine.Components.Velocity.prototype.setRandom = function(min_x, max_x, min_y, max_y, min_z, max_z) {
	if (min_x && max_x) {
		this.dx = TLORMEngine.Utils.random_number_in_range(min_x, max_x);
	}
	if (min_y && max_y) {
		this.dy = TLORMEngine.Utils.random_number_in_range(min_y, max_y);
	}
	if (min_z && max_z) {
		this.dz = TLORMEngine.Utils.random_number_in_range(min_z, max_z);
	}
};

/* End of File: js/TLORMEngine/Components/Velocity.js */

/* File: js/TLORMEngine/Components/Collision.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.Collision = function(args) {
	args.type = "Collision";
	args.multiple = true;
	TLORMEngine.Components.Component.call(this, args);
	
	// TODO: remove this when args validation is done
	if (this.resolution) {
		var found = false;
		for (var i=0; i<this.resolutions.length; ++i) {
			if (this.resolutions[i] == args.resolution) {
				found = true;
				break;
			}
		}
		if (!found) {
			TLORMEngine.Utils.error("Not a valid collision resolution '"+args.resolution+"'");
		}
	}
};

// inherit from normal component
TLORMEngine.Components.Collision.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.Collision.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		group: { type: "string", default: "no_group" },
		groups: { type: "array", default: "no_groups" },
		oncollide: { type: "object", default: null },
		resolution: { type: "string", default: "" },
		entity: { type: "string", default: "" },
		component: { type: "string" },
		position: { type: "string", default: "" },
		function: { type: "string" },
		function_args: { type: "array", default: [] },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.Collision.prototype.resolutions = [
	"stop", "bounce", "push", "destroy", "destroy_hit", "destroy_both", "destroy_hit_and_bounce", "edit_component"
];

TLORMEngine.Components.Collision.prototype.collides = function(collission) {
	if (this.groups.toString() == "no_groups") {
		return true;
	}
	for (var i=0; i<this.groups.length; ++i) {
		if (this.groups[i] == collission.group) {
			return true;
		}
	}
	return false;
};



/* End of File: js/TLORMEngine/Components/Collision.js */

/* File: js/TLORMEngine/Components/AddComponentsOnEntityDestroyed.js */

// DEPENDENCY: Component.js

TLORMEngine.Components.AddComponentsOnEntityDestroyed = function(args) {
	args.type = 'AddComponentsOnEntityDestroyed';
	TLORMEngine.Components.Component.call(this, args);

	this.entity = null;
};

// inherit from normal component
TLORMEngine.Components.AddComponentsOnEntityDestroyed.extends(TLORMEngine.Components.Component);

TLORMEngine.Components.AddComponentsOnEntityDestroyed.prototype.args_schema = function () {
	var super_args = this.super.args_schema.call(this);
	var args =  {
		components: { type: "object" },
	};
	return TLORMEngine.Utils.merge_objects(super_args, args);
};

TLORMEngine.Components.AddComponentsOnEntityDestroyed.prototype.entityDestroyed = function(game, entity) {
	// add the required components
	for (var i=0; i<this.components.length; ++i) {
		var component = this.components[i];
		game.entity_manager.addEntityComponent(new TLORMEngine.Components[component.type](component.args));
	}
};

TLORMEngine.Components.AddComponentsOnEntityDestroyed.prototype.entityIsDestroyed = function(game) {
	return false;
};

/* End of File: js/TLORMEngine/Components/AddComponentsOnEntityDestroyed.js */

/* File: js/seedrandom.js */

// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
// 
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
 * All code is in an anonymous closure to keep the global namespace clean.
 *
 * @param {number=} overflow 
 * @param {number=} startdenom
 */
(function (pool, math, width, chunks, significance, overflow, startdenom) {


//
// seedrandom()
// This is the seedrandom function described above.
//
math['seedrandom'] = function seedrandom(seed, use_entropy) {
  var key = [];
  var arc4;

  // Flatten the seed string or build one from local entropy if needed.
  seed = mixkey(flatten(
    use_entropy ? [seed, pool] :
    arguments.length ? seed :
    [new Date().getTime(), pool, window], 3), key);

  // Use the seed to initialize an ARC4 generator.
  arc4 = new ARC4(key);

  // Mix the randomness into accumulated entropy.
  mixkey(arc4.S, pool);

  // Override Math.random

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.

  math['random'] = function random() {  // Closure to return a random double:
    var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
    var d = startdenom;                 //   and denominator d = 2 ^ 48.
    var x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  // Return the seed that was used
  return seed;
};

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
/** @constructor */
function ARC4(key) {
  var t, u, me = this, keylen = key.length;
  var i = 0, j = me.i = me.j = me.m = 0;
  me.S = [];
  me.c = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) { me.S[i] = i++; }
  for (i = 0; i < width; i++) {
    t = me.S[i];
    j = lowbits(j + t + key[i % keylen]);
    u = me.S[j];
    me.S[i] = u;
    me.S[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  me.g = function getnext(count) {
    var s = me.S;
    var i = lowbits(me.i + 1); var t = s[i];
    var j = lowbits(me.j + t); var u = s[j];
    s[i] = u;
    s[j] = t;
    var r = s[lowbits(t + u)];
    while (--count) {
      i = lowbits(i + 1); t = s[i];
      j = lowbits(j + t); u = s[j];
      s[i] = u;
      s[j] = t;
      r = r * width + s[lowbits(t + u)];
    }
    me.i = i;
    me.j = j;
    return r;
  };
  // For robust unpredictability discard an initial batch of values.
  // See http://www.rsa.com/rsalabs/node.asp?id=2009
  me.g(width);
}

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
/** @param {Object=} result 
  * @param {string=} prop
  * @param {string=} typ */
function flatten(obj, depth, result, prop, typ) {
  result = [];
  typ = typeof(obj);
  if (depth && typ == 'object') {
    for (prop in obj) {
      if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
        try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
      }
    }
  }
  return (result.length ? result : obj + (typ != 'string' ? '\0' : ''));
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
/** @param {number=} smear 
  * @param {number=} j */
function mixkey(seed, key, smear, j) {
  seed += '';                         // Ensure the seed is a string
  smear = 0;
  for (j = 0; j < seed.length; j++) {
    key[lowbits(j)] =
      lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
  }
  seed = '';
  for (j in key) { seed += String.fromCharCode(key[j]); }
  return seed;
}

//
// lowbits()
// A quick "n mod width" for width a power of 2.
//
function lowbits(n) { return n & (width - 1); }

//
// The following constants are related to IEEE 754 limits.
//
startdenom = math.pow(width, chunks);
significance = math.pow(2, significance);
overflow = significance * 2;

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

// End anonymous scope, and pass initial values.
})(
  [],   // pool: entropy pool starts empty
  Math, // math: package containing random, pow, and seedrandom
  256,  // width: each RC4 output is 0 <= x < 256
  6,    // chunks: at least six RC4 outputs for each double
  52    // significance: there are 52 significant digits in a double
);


/* End of File: js/seedrandom.js */

/* File: js/json2.js */

/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


/* End of File: js/json2.js */

