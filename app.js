const noOfSquares = 144;
var wordData=[];
var obj = {"word1":0,"word2":0,"word3":0,"word4":0,"word5":0,"word6":0,"word7":0,"word8":0,"word9":0,"word10":0};
var word1Count = 0;
var word2Count = 0;
var word3Count = 0;
var word4Count = 0;
var word5Count = 0;
var word6Count = 0;
var word7Count = 0;
var word8Count = 0;
var word9Count = 0;
var word10Count = 0;

function initialSetup() {
	setupCrosswordPieces();
	wordData.push(obj);
}

function setupCrosswordPieces() {
	for(let i=0; i<noOfSquares; i++) {
		if(data[0][i+1].disabled) {
			$("<div/>",{
				"id":"div_"+(i+1),
				"style":"background:#000 !important; height:50px; grid-row-start:"+data[0][i+1].rowPositionStart+"; grid-row-end:"+data[0][i+1].rowPositionEnd+
						"; grid-column-start:"+data[0][i+1].colPositionStart+"; grid-column-end:" +data[0][i+1].colPositionEnd+";"
			})
			.appendTo($("#crossword-container"));
		}
		else {
			$("<div/>",{
				"id":"div_"+(i+1),
				"style":"grid-row-start:"+data[0][i+1].rowPositionStart+"; grid-row-end:"+data[0][i+1].rowPositionEnd+
						"; grid-column-start:"+data[0][i+1].colPositionStart+"; grid-column-end:" +data[0][i+1].colPositionEnd+";"
			}).append($("<div/>",{
				"id":"div_"+(i+1)+"_a",
			}).text(data[0][i+1].wordIndicator>0?data[0][i+1].wordIndicator:"")).append($("<div/>",{
				"id":"div_"+(i+1)+"_b",
			})).append($("<div/>",{
				"id":"div_"+(i+1)+"_c",
			}).append($("<input/>",{
				"type":"text",
				"id":"input_"+(i+1),
				"minlength":1,
				"maxlength":1,
				"required":true
			})))
			.appendTo($("#crossword-container"));
		}
	}
}

function validateIndividualWords(key, target, wordData) {
	if(key!=="Backspace") {
		var jsonKey = parseInt(target.id.split("_")[1]);
		var wordsAssociations;
		var individualWords = data[0][jsonKey].wordAssociation;
		if(data[0][jsonKey].character.includes(key)) {
			$("#"+target.id).parent().parent().removeClass("error");
			$("#"+target.id).val(key);
			$("#"+target.id).attr("disabled", true);
			$("#"+data[0][jsonKey].autoFocus).focus();
			if(individualWords.includes("~")) {
				var wordsAssociations = data[0][jsonKey].wordAssociation.split("~");
				if(wordsAssociations.includes("1")) {
					word1Count++;
					wordData[0].word1=word1Count;
					if(word1Count===words[0].length) {
						$("#word-1-value").addClass("correct");
						$("#word-1-character-span").text("(0)");
					}
					else {
						$("#word-1-character-span").text("("+(words[0].length-word1Count)+")");
					}
				}
				if(wordsAssociations.includes("2")) {
					word2Count++;
					wordData[0].word2=word2Count;
					if(word2Count===words[1].length) {
						$("#word-2-value").addClass("correct");
						$("#word-2-character-span").text("(0)");
					}
					else {
						$("#word-2-character-span").text("("+(words[1].length-word2Count)+")");
					}
				}
				if(wordsAssociations.includes("3")) {
					word3Count++;
					wordData[0].word3=word3Count;
					if(word3Count===words[2].length) {
						$("#word-3-value").addClass("correct");
						$("#word-3-character-span").text("(0)");
					}
					else {
						$("#word-3-character-span").text("("+(words[2].length-word3Count)+")");
					}
				}
				if(wordsAssociations.includes("4")) {
					word4Count++;
					wordData[0].word4=word4Count;
					if(word4Count===words[3].length) {
						$("#word-4-value").addClass("correct");
						$("#word-4-character-span").text("(0)");
					}
					else {
						$("#word-4-character-span").text("("+(words[3].length-word4Count)+")");
					}
				}
				if(wordsAssociations.includes("5")) {
					word5Count++;
					wordData[0].word5=word5Count;
					if(word5Count===words[4].length) {
						$("#word-5-value").addClass("correct");
						$("#word-5-character-span").text("(0)");
					}
					else {
						$("#word-5-character-span").text("("+(words[4].length-word5Count)+")");
					}
				}
				if(wordsAssociations.includes("6")) {
					word6Count++;
					wordData[0].word6=word6Count;
					if(word6Count===words[5].length) {
						$("#word-6-value").addClass("correct");
						$("#word-6-character-span").text("(0)");
					}
					else {
						$("#word-6-character-span").text("("+(words[5].length-word6Count)+")");
					}
				}
				if(wordsAssociations.includes("7")) {
					word7Count++;
					wordData[0].word7=word7Count;
					if(word7Count===words[6].length) {
						$("#word-7-value").addClass("correct");
						$("#word-7-character-span").text("(0)");
					}
					else {
						$("#word-7-character-span").text("("+(words[6].length-word7Count)+")");
					}
				}
				if(wordsAssociations.includes("8")) {
					word8Count++;
					wordData[0].word8=word8Count;
					if(word8Count===words[7].length) {
						$("#word-8-value").addClass("correct");
						$("#word-8-character-span").text("(0)");
					}
					else {
						$("#word-8-character-span").text("("+(words[7].length-word8Count)+")");
					}
				}
				if(wordsAssociations.includes("9")) {
					word9Count++;
					wordData[0].word9=word9Count;
					if(word9Count===words[8].length) {
						$("#word-9-value").addClass("correct");
						$("#word-9-character-span").text("(0)");
					}
					else {
						$("#word-9-character-span").text("("+(words[8].length-word9Count)+")");
					}
				}
				if(wordsAssociations.includes("10")) {
					word10Count++;
					wordData[0].word10=word10Count;
					if(word10Count===words[9].length) {
						$("#word-10-value").addClass("correct");
						$("#word-10-character-span").text("(0)");
					}
					else {
						$("#word-10-character-span").text("("+(words[9].length-word10Count)+")");
					}
				}
			}
			else {
				if(parseInt(data[0][jsonKey].wordAssociation)===1) {
					word1Count++;
					wordData[0].word1=word1Count;
					if(word1Count===words[0].length) {
						$("#word-1-value").addClass("correct");
						$("#word-1-character-span").text("(0)");
					}
				}
				if(parseInt(data[0][jsonKey].wordAssociation)===2) {
					word2Count++;
					wordData[0].word2=word2Count;
					if(word2Count===words[1].length) {
						$("#word-2-value").addClass("correct");
						$("#word-2-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===3) {
					word3Count++;
					wordData[0].word3=word3Count;
					if(word3Count===words[2].length) {
						$("#word-3-value").addClass("correct");
						$("#word-3-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===4) {
					word4Count++;
					wordData[0].word4=word4Count;
					if(word4Count===words[3].length) {
						$("#word-4-value").addClass("correct");
						$("#word-4-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===5) {
					word5Count++;
					wordData[0].word5=word5Count;
					if(word5Count===words[4].length) {
						$("#word-5-value").addClass("correct");
						$("#word-5-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===6) {
					word6Count++;
					wordData[0].word6=word6Count;
					if(word6Count===words[5].length) {
						$("#word-6-value").addClass("correct");
						$("#word-6-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===7) {
					word7Count++;
					wordData[0].word7=word7Count;
					if(word7Count===words[6].length) {
						$("#word-7-value").addClass("correct");
						$("#word-7-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===8) {
					word8Count++;
					wordData[0].word8=word8Count;
					if(word8Count===words[7].length) {
						$("#word-8-value").addClass("correct");
						$("#word-8-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===9) {
					word9Count++;
					wordData[0].word9=word9Count;
					if(word9Count===words[8].length) {
						$("#word-9-value").addClass("correct");
						$("#word-9-character-span").text("(0)");
					}
				}
				else if(parseInt(data[0][jsonKey].wordAssociation)===10) {
					word10Count++;
					wordData[0].word10=word10Count;
					if(word10Count===words[9].length) {
						$("#word-10-value").addClass("correct");
						$("#word-10-character-span").text("(0)");
					}
				}
			}
		} else {
			$("#"+target.id).parent().parent().addClass("error");
		}
	}
	return wordData;
}

function validateFieldValues(key, target) {
	var id = target.id.split("_")[1];
	if(key!=="" && key!=="Backspace") {
		if(parseInt(data[0][id].wordAssociation)===1) {
			wordData = validateIndividualWords(key, target, wordData);
			var word1Index = wordData[0].word1;
			if(wordData[0].word1===words[0].length) {
				$("#word-1-value").addClass("correct");
				$("#word-1-character-span").text("(0)");
			}
			else {
				$("#word-1-value").removeClass("correct");
				$("#word-1-character-span").text("("+(words[0].length-word1Index)+")");
			}
			wordData[0].word1=0;
		}

		if(parseInt(data[0][id].wordAssociation)===2) {
			wordData = validateIndividualWords(key, target, wordData);
			var word2Index = wordData[0].word2;
			if(wordData[0].word2===words[1].length) {
				$("#word-2-value").addClass("correct");
				$("#word-2-character-span").text("(0)");
			}
			else {
				$("#word-2-value").removeClass("correct");
				$("#word-2-character-span").text("("+(words[1].length-word2Index)+")");
			}
			wordData[0].word2=0;
		}

		if(parseInt(data[0][id].wordAssociation)===3) {
			wordData = validateIndividualWords(key, target, wordData);
			var word3Index = wordData[0].word3;
			if(wordData[0].word3===words[2].length) {
				$("#word-3-value").addClass("correct");
				$("#word-3-character-span").text("(0)");
			}
			else {
				$("#word-3-value").removeClass("correct");
				$("#word-3-character-span").text("("+(words[2].length-word3Index)+")");
			}
			wordData[0].word3=0;
		}

		if(parseInt(data[0][id].wordAssociation)===4) {
			wordData = validateIndividualWords(key, target, wordData);
			var word4Index = wordData[0].word4;
			if(wordData[0].word4===words[3].length) {
				$("#word-4-value").addClass("correct");
				$("#word-4-character-span").text("(0)");
			}
			else {
				$("#word-4-value").removeClass("correct");
				$("#word-4-character-span").text("("+(words[3].length-word4Index)+")");
			}
			wordData[0].word4=0;
		}

		if(parseInt(data[0][id].wordAssociation)===5) {
			wordData = validateIndividualWords(key, target, wordData);
			var word5Index = wordData[0].word5;
			if(wordData[0].word5===words[4].length) {
				$("#word-5-value").addClass("correct");
				$("#word-5-character-span").text("(0)");
			}
			else {
				$("#word-5-value").removeClass("correct");
				$("#word-5-character-span").text("("+(words[4].length-word5Index)+")");
			}
			wordData[0].word5=0;
		}

		if(parseInt(data[0][id].wordAssociation)===6) {
			wordData = validateIndividualWords(key, target, wordData);
			var word6Index = wordData[0].word6;
			if(wordData[0].word6===words[5].length) {
				$("#word-6-value").addClass("correct");
				$("#word-6-character-span").text("(0)");
			}
			else {
				$("#word-6-value").removeClass("correct");
				$("#word-6-character-span").text("("+(words[5].length-word6Index)+")");
			}
			wordData[0].word6=0;
		}

		if(parseInt(data[0][id].wordAssociation)===7) {
			wordData = validateIndividualWords(key, target, wordData);
			var word7Index = wordData[0].word7;
			if(wordData[0].word7===words[6].length) {
				$("#word-7-value").addClass("correct");
				$("#word-7-character-span").text("(0)");
			}
			else {
				$("#word-7-value").removeClass("correct");
				$("#word-7-character-span").text("("+(words[6].length-word7Index)+")");
			}
			wordData[0].word7=0;
		}

		if(parseInt(data[0][id].wordAssociation)===8) {
			wordData = validateIndividualWords(key, target, wordData);
			var word8Index = wordData[0].word8;
			if(wordData[0].word8===words[7].length) {
				$("#word-8-value").addClass("correct");
				$("#word-8-character-span").text("(0)");
			}
			else {
				$("#word-8-value").removeClass("correct");
				$("#word-8-character-span").text("("+(words[7].length-word8Index)+")");
			}
			wordData[0].word8=0;
		}

		if(parseInt(data[0][id].wordAssociation)===9) {
			wordData = validateIndividualWords(key, target, wordData);
			var word9Index = wordData[0].word9;
			if(wordData[0].word9===words[8].length) {
				$("#word-9-value").addClass("correct");
				$("#word-9-character-span").text("(0)");
			}
			else {
				$("#word-9-value").removeClass("correct");
				$("#word-9-character-span").text("("+(words[8].length-word9Index)+")");
			}
			wordData[0].word9=0;
		}

		if(parseInt(data[0][id].wordAssociation)===10) {
			wordData = validateIndividualWords(key, target, wordData);
			var word10Index = wordData[0].word10;
			if(wordData[0].word10===words[9].length) {
				$("#word-10-value").addClass("correct");
				$("#word-10-character-span").text("(0)");
			}
			else {
				$("#word-10-value").removeClass("correct");
				$("#word-10-character-span").text("("+(words[9].length-word10Index)+")");
			}
			wordData[0].word10=0;
		}
	}
}

function runtimeCheck() {
	$("input").keypress(function(event){
		validateFieldValues(event.key, event.target);
	});
}

initialSetup();
runtimeCheck();