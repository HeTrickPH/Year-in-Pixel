// JavaScript Document
	window.onload = function(){
		var pixels = "";
		for(var d=1; d<=31; d++){
			pixels += "<tr><td>" + d + "</td>";
			for(var m=1; m<=12; m++){
				pixels += "<td class='pixel' id='" + m + "0" + d + "' onClick='select(" + m + "0" + d + ")'></td>";
			}
			pixels += "</tr>";
		}
		document.getElementById("pixel_calender_dates").innerHTML = pixels;
	};
	
	$(document).ready(function(){
    	$('.pixel').popover({ 
			html : true,
    		content: function() {
				return $('#colorPicker').html();
    		}
		});
    });
	
	var selected;
	function select(placeWillBeColoering) {
		 selected = placeWillBeColoering;
	}
	
	function PixelChange(color) {
		document.getElementById(selected).style.background = color;
	}