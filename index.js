function takeANumber(array, name) {
  array.push(name);
  return ("Welcome, " + name + ". You are number " + array.length + " in line.");
}

var number = 0;

function takeANumber2(array) {
  array.push(number + 1);
  number++;
  return ("Welcome you are number " + number);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return ("Currently serving " + name + ".");
  }
}

function currentLine(deliLine) {
  var state = [];
  if (deliLine.length === 0) {
    return ("The line is currently empty.");
  } else {
    for (var i = 0; i < deliLine.length; i++) {
	    state.push(" " + (i + 1) + ". " + (deliLine[i]));
    }
    return ("The line is currently:" + state);
  }
}
